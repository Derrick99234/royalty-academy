import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/royalty-academy-logo.jpeg";
import { galleryGroups } from "../gallery-data";

export const metadata = {
  title: "Gallery | Royalty Academy",
  description:
    "Browse the IMPACT 1000 High-Income Skills Training gallery, grouped by date.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface shadow-sm border-b border-tertiary/20">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Royalty Academy" className="h-12 w-auto" priority />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-on-surface-variant font-label font-semibold text-sm hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>
      </header>

      <main className="pt-24">
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
              Moments
            </span>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mt-2">
              Gallery
            </h1>
            <div className="gold-accent-line mt-4" />
            <p className="text-on-surface-variant max-w-2xl mt-6">
              Highlights from the IMPACT 1000 High-Income Skills Training
              cohorts, grouped by the date each session took place.
            </p>
          </div>
        </section>

        {galleryGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="py-16 bg-surface border-b border-surface-variant scroll-mt-24"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface">
                    {group.label}
                  </h2>
                  <span className="text-on-surface-variant text-sm font-medium mt-1 block">
                    {group.images.length}{" "}
                    {group.images.length === 1 ? "photo" : "photos"}
                  </span>
                </div>
              </div>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                {group.images.map((image) => (
                  <div
                    key={image.src}
                    className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={480}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
