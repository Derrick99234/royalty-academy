"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Minimal typings for the parts of the YouTube IFrame Player API we use.
type YTPlayer = {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  destroy(): void;
};

type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      host?: string;
      videoId: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (e: { target: YTPlayer }) => void;
        onStateChange?: (e: { data: number; target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
  PlayerState: { ENDED: number; PLAYING: number; PAUSED: number };
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YTNamespace> | null = null;

function loadYouTubeApi(): Promise<YTNamespace> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT as YTNamespace);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.head.appendChild(script);
  });
  return apiPromise;
}

type Status = "idle" | "loading" | "playing" | "paused";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState({ current: 0, duration: 0 });

  const reset = useCallback(() => {
    playerRef.current?.destroy();
    playerRef.current = null;
    setStatus("idle");
    setTime({ current: 0, duration: 0 });
  }, []);

  useEffect(() => () => playerRef.current?.destroy(), []);

  // Track playback progress while playing.
  useEffect(() => {
    if (status !== "playing") return;
    const tick = () => {
      const p = playerRef.current;
      if (p) setTime({ current: p.getCurrentTime(), duration: p.getDuration() });
    };
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [status]);

  const start = async () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      return;
    }
    setStatus("loading");
    const YT = await loadYouTubeApi();
    if (!mountRef.current) return;
    // The API replaces this node with the iframe, so give it a fresh child.
    const target = document.createElement("div");
    mountRef.current.replaceChildren(target);
    playerRef.current = new YT.Player(target, {
      host: "https://www.youtube-nocookie.com",
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        playsinline: 1,
        cc_load_policy: 0,
      },
      events: {
        onReady: (e) => {
          e.target.playVideo();
          setMuted(e.target.isMuted());
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.PLAYING) setStatus("playing");
          else if (e.data === YT.PlayerState.PAUSED) setStatus("paused");
          else if (e.data === YT.PlayerState.ENDED) reset();
        },
      },
    });
  };

  const togglePlay = () => {
    if (status === "playing") playerRef.current?.pauseVideo();
    else start();
  };

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (p.isMuted()) p.unMute();
    else p.mute();
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const p = playerRef.current;
    if (!p || !time.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    p.seekTo(ratio * time.duration, true);
    setTime((t) => ({ ...t, current: ratio * t.duration }));
  };

  const showCover = status === "idle" || status === "loading" || status === "paused";
  const progress = time.duration ? (time.current / time.duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="group relative aspect-video w-full overflow-hidden bg-black select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* YouTube iframe mounts here; it never receives pointer events. It is
          taller than the frame so YouTube's title bar (top) and logo
          (bottom) render in letterbox space that is cropped out of view. */}
      <div
        ref={mountRef}
        className="absolute inset-x-0 -top-16 h-[calc(100%+8rem)] pointer-events-none [&>iframe]:w-full [&>iframe]:h-full"
        aria-hidden="true"
      />

      {/* Click shield: covers the whole player so nothing links out to YouTube. */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={status === "playing" ? `Pause ${title}` : `Play ${title}`}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      {/* Cover: shown before playback and while paused, hiding YouTube's own overlays. */}
      {showCover && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110">
              {status === "loading" ? (
                <span className="w-7 h-7 border-4 border-on-primary/40 border-t-on-primary rounded-full animate-spin" />
              ) : (
                <span
                  className="material-symbols-outlined text-4xl md:text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              )}
            </span>
          </div>
        </div>
      )}

      {/* Custom control bar, available once the player exists. */}
      {status !== "idle" && status !== "loading" && (
        <div
          className={`absolute inset-x-0 bottom-0 z-30 bg-linear-to-t from-black/80 to-transparent px-4 pt-8 pb-3 transition-opacity duration-300 ${
            status === "playing" ? "opacity-0 group-hover:opacity-100 focus-within:opacity-100" : "opacity-100"
          }`}
        >
          <div
            className="h-1.5 w-full rounded-full bg-white/30 cursor-pointer mb-3"
            onClick={seek}
            role="presentation"
          >
            <div
              className="h-full rounded-full bg-tertiary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center gap-3 text-white">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={status === "playing" ? "Pause" : "Play"}
              className="material-symbols-outlined text-3xl hover:text-tertiary transition-colors"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {status === "playing" ? "pause" : "play_arrow"}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="material-symbols-outlined text-2xl hover:text-tertiary transition-colors"
            >
              {muted ? "volume_off" : "volume_up"}
            </button>
            <span className="text-xs font-label tabular-nums">
              {formatTime(time.current)} / {formatTime(time.duration)}
            </span>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Toggle fullscreen"
              className="material-symbols-outlined text-2xl ml-auto hover:text-tertiary transition-colors"
            >
              fullscreen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
