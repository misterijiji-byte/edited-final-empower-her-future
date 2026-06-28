import { IMG } from "@/lib/images";

/**
 * Gallery image registry.
 *
 * To add a new image: append a new object to the `galleryImages` array below.
 * To remove one: delete its object. To edit: change its fields in place.
 * The Gallery page and its category filter tabs read from this array
 * automatically — no other code changes required.
 *
 * Categories are derived from the `CATEGORIES` map below. To add a new
 * category tab, add an entry here and reference its `id` in image objects.
 */

export type GalleryCategoryId =
  | "wmhd"
  | "tertiary"
  | "tagip"
  | "symposium"
  | "elders"
  | "odumu"
  | "med2025"
  | "odu2025"
  | "gth2025"
  | "edu"
  | "agboda"
  | "afoajiri";

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
}

export interface GalleryImage {
  /** Image URL (use IMG.* helpers or any string URL) */
  src: string;
  /** Accessible alt text describing the image */
  alt: string;
  /** Category id — must match a `CATEGORIES` entry */
  category: GalleryCategoryId;
  /** Optional caption shown under the image (defaults to category label) */
  caption?: string;
  /** Optional ordering hint (lower = earlier). Defaults to array order. */
  order?: number;
}

export const CATEGORIES: GalleryCategory[] = [
  { id: "wmhd", label: "World Menstrual Hygiene Day 2026" },
  { id: "tertiary", label: "Tertiary Institution Award" },
  { id: "tagip", label: "TAGIP Foot Soldiers" },
  { id: "symposium", label: "Symposium · College of Health Science & Tech, Keffi" },
  { id: "elders", label: "Meet with Stakeholders & Community Elders" },
  { id: "odumu", label: "Medical Outreach — Odumu Apawu Community" },
  { id: "med2025", label: "Medical Health Outreach 2025" },
  { id: "odu2025", label: "Medical Health Outreach — ODU Community 2025" },
  { id: "gth2025", label: "Grassroots Talent Hunt Competition 2025" },
  { id: "edu", label: "Education Sensitization & Career Guidance (Feb 2025)" },
  { id: "agboda", label: "Community Diagnosis — Agboda Community" },
  { id: "afoajiri", label: "Afo/Ajiri Tertiary Students Award Competition 2025" },
];

export const galleryImages: GalleryImage[] = [
  // World Menstrual Hygiene Day 2026
  { src: IMG.wmhd1, alt: "World Menstrual Hygiene Day 2026 — outreach moment 1", category: "wmhd" },
  { src: IMG.wmhd2, alt: "World Menstrual Hygiene Day 2026 — outreach moment 2", category: "wmhd" },
  { src: IMG.wmhd3, alt: "World Menstrual Hygiene Day 2026 — outreach moment 3", category: "wmhd" },
  { src: IMG.wmhd4, alt: "World Menstrual Hygiene Day 2026 — outreach moment 4", category: "wmhd" },
  { src: IMG.wmhd5, alt: "World Menstrual Hygiene Day 2026 — outreach moment 5", category: "wmhd" },
  { src: IMG.wmhd7, alt: "World Menstrual Hygiene Day 2026 — outreach moment 6", category: "wmhd" },

  // Tertiary Institution Award
  { src: IMG.wmhd3, alt: "Tertiary Institution Award ceremony", category: "tertiary" },
  { src: IMG.wmhd7, alt: "Tertiary Institution Award recipients", category: "tertiary" },

  // TAGIP Foot Soldiers
  { src: IMG.wmhd5, alt: "TAGIP Foot Soldiers in the field", category: "tagip" },
  { src: IMG.wmhd2, alt: "TAGIP Foot Soldiers team", category: "tagip" },

  // Symposium · College of Health Science & Tech, Keffi
  { src: IMG.wmhd1, alt: "Symposium at College of Health Science & Tech, Keffi", category: "symposium" },
  { src: IMG.wmhd4, alt: "Symposium attendees and speakers", category: "symposium" },

  // Meet with Stakeholders & Community Elders
  { src: IMG.wmhd4, alt: "Meeting with community stakeholders", category: "elders" },
  { src: IMG.wmhd3, alt: "Engagement with community elders", category: "elders" },

  // Medical Outreach — Odumu Apawu Community
  { src: IMG.wmhd2, alt: "Medical outreach at Odumu Apawu Community", category: "odumu" },
  { src: IMG.wmhd5, alt: "Patients attended at Odumu Apawu outreach", category: "odumu" },

  // Medical Health Outreach 2025
  { src: IMG.wmhd7, alt: "Medical Health Outreach 2025 — services", category: "med2025" },
  { src: IMG.wmhd1, alt: "Medical Health Outreach 2025 — beneficiaries", category: "med2025" },

  // Medical Health Outreach — ODU Community 2025
  { src: IMG.wmhd3, alt: "Medical Health Outreach at ODU Community 2025", category: "odu2025" },
  { src: IMG.wmhd5, alt: "Community members at ODU 2025 outreach", category: "odu2025" },

  // Grassroots Talent Hunt Competition 2025
  { src: IMG.wmhd2, alt: "Grassroots Talent Hunt Competition 2025 — performance", category: "gth2025" },
  { src: IMG.wmhd7, alt: "Grassroots Talent Hunt Competition 2025 — winners", category: "gth2025" },

  // Education Sensitization & Career Guidance (Feb 2025)
  { src: IMG.wmhd4, alt: "Education Sensitization & Career Guidance — Feb 2025", category: "edu" },
  { src: IMG.wmhd1, alt: "Students at career guidance session", category: "edu" },

  // Community Diagnosis — Agboda Community
  { src: IMG.wmhd5, alt: "Community Diagnosis exercise at Agboda", category: "agboda" },
  { src: IMG.wmhd3, alt: "Agboda Community engagement", category: "agboda" },

  // Afo/Ajiri Tertiary Students Award Competition 2025
  { src: IMG.wmhd7, alt: "Afo/Ajiri Tertiary Students Award Competition 2025", category: "afoajiri" },
  { src: IMG.wmhd2, alt: "Afo/Ajiri awardees", category: "afoajiri" },
];

/** Lookup helper: category label by id */
export function getCategoryLabel(id: GalleryCategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}