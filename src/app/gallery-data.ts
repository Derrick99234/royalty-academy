export type GalleryImage = { src: string; alt: string };

export type GalleryGroup = {
  id: string;
  label: string;
  images: GalleryImage[];
};

function groupImages(
  start: number,
  end: number,
  monthYear: string,
): GalleryImage[] {
  const images: GalleryImage[] = [];
  for (let i = start; i <= end; i++) {
    images.push({
      src: `/images/impact-1000-training-${i}.jpg`,
      alt: `IMPACT 1000 High-Income Skills Training photo, ${monthYear}`,
    });
  }
  return images;
}

export const galleryGroups: GalleryGroup[] = [
  {
    id: "april-2026",
    label: "April 2026",
    images: groupImages(44, 59, "April 2026"),
  },
  {
    id: "november-2025",
    label: "November 2025",
    images: groupImages(30, 43, "November 2025"),
  },
  {
    id: "october-2025",
    label: "October 2025",
    images: groupImages(1, 11, "October 2025"),
  },
  {
    id: "september-2025",
    label: "September 2025",
    images: groupImages(12, 29, "September 2025"),
  },
  {
    id: "april-2025",
    label: "April 2025",
    images: groupImages(60, 69, "April 2025"),
  },
];
