export type GalleryImage = { src: string; alt: string };

export type GalleryGroup = {
  id: string;
  label: string;
  images: GalleryImage[];
};

function groupImages(
  folder: string,
  start: number,
  end: number,
  monthYear: string,
): GalleryImage[] {
  const images: GalleryImage[] = [];
  for (let i = start; i <= end; i++) {
    images.push({
      src: `/images/${folder}/impact-1000-training-${i}.jpg`,
      alt: `IMPACT 1000 High-Income Skills Training photo, ${monthYear}`,
    });
  }
  return images;
}

function groupNewImages(
  folder: string,
  prefix: string,
  start: number,
  end: number,
  monthYear: string,
  ext: string = "jpeg",
): GalleryImage[] {
  const images: GalleryImage[] = [];
  for (let i = start; i <= end; i++) {
    images.push({
      src: `/images/${folder}/${prefix}-${i}.${ext}`,
      alt: `${monthYear} photo`,
    });
  }
  return images;
}

export const galleryGroups: GalleryGroup[] = [
  {
    id: "cds-outreach",
    label: "CDS Outreach, Obio-Akpor, Rivers State",
    images: groupNewImages(
      "cds-outreach-obio-akpor-august-2026",
      "cds-outreach-obio-akpor-rivers-state",
      1,
      11,
      "CDS Outreach, Obio-Akpor, Rivers State",
    ),
  },
  {
    id: "certificate-lagos",
    label: "Certificate Award Batch 1, Lagos",
    images: groupNewImages(
      "certificate-award-batch-1-lagos-august-2026",
      "impact-1000-certificate-award-batch-1-lagos",
      1,
      23,
      "Certificate Award Batch 1, Lagos",
    ),
  },
  {
    id: "certificate-rivers",
    label: "Certificate Award Batch 1, Rivers State",
    images: groupNewImages(
      "certificate-award-batch-1-rivers-august-2026",
      "impact-1000-certificate-award-batch-1-rivers-state",
      1,
      29,
      "Certificate Award Batch 1, Rivers State",
    ),
  },
  {
    id: "ist-cohort",
    label: "1st Cohort Training, Rivers State",
    images: groupNewImages(
      "training-ist-cohort-rivers-august-2026",
      "impact-1000-training-ist-cohort-rivers-state",
      1,
      20,
      "1st Cohort Training, Rivers State",
    ),
  },
  {
    id: "april-2026",
    label: "April 2026",
    images: groupImages("april-2026", 44, 59, "April 2026"),
  },
  {
    id: "november-2025",
    label: "November 2025",
    images: groupImages("november-2025", 30, 43, "November 2025"),
  },
  {
    id: "october-2025",
    label: "October 2025",
    images: groupImages("october-2025", 1, 11, "October 2025"),
  },
  {
    id: "september-2025",
    label: "September 2025",
    images: groupImages("september-2025", 12, 29, "September 2025"),
  },
  {
    id: "april-2025",
    label: "April 2025",
    images: groupImages("april-2025", 60, 69, "April 2025"),
  },
];