/* =============================================================================
 * FARGEF — Gallery images
 * -----------------------------------------------------------------------------
 * To add a new image:
 *   1) Import it at the top:   import myPic from "@/assets/my-pic.jpg";
 *   2) Add a line to ITEMS:    { src: myPic, cat: "Medical Outreach" },
 * To remove, delete the line. To reorder, move the line up or down.
 * To add a new category tab, add its label to CATS and use that label on
 * any image's `cat`.
 * ===========================================================================*/

// 1. Image imports — one line per image file in src/assets/.
import wmhd1 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_1.jpg";
import wmhd2 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_2.jpg";
import wmhd3 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_3.jpg";
import wmhd4 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_4.jpg";
import wmhd5 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_5.jpg";
import wmhd7 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_7.jpg";

// 2. Category tabs shown above the gallery grid.
export const CATS = [
  "All",
  "World Menstrual Hygiene Day 2026",
  "Tertiary Institution Award",
  "TAGIP Foot Soldiers",
  "Symposium · College of Health Science & Tech, Keffi",
  "Meet with Stakeholders & Community Elders",
  "Medical Outreach — Odumu Apawu Community",
  "Medical Health Outreach 2025",
  "Medical Health Outreach — ODU Community 2025",
  "Grassroots Talent Hunt Competition 2025",
  "Education Sensitization & Career Guidance (Feb 2025)",
  "Community Diagnosis — Agboda Community",
  "Afo/Ajiri Tertiary Students Award Competition 2025",
] as const;

export type GalleryCategory = (typeof CATS)[number];

export type GalleryItem = {
  src: string;
  cat: Exclude<GalleryCategory, "All">;
  alt?: string;
};

// 3. Gallery images — add / remove / reorder freely. Each line is one photo.
export const ITEMS: GalleryItem[] = [
  { src: wmhd1, cat: "World Menstrual Hygiene Day 2026" },
  { src: wmhd2, cat: "World Menstrual Hygiene Day 2026" },
  { src: wmhd3, cat: "World Menstrual Hygiene Day 2026" },
  { src: wmhd4, cat: "World Menstrual Hygiene Day 2026" },
  { src: wmhd5, cat: "World Menstrual Hygiene Day 2026" },
  { src: wmhd7, cat: "World Menstrual Hygiene Day 2026" },

  { src: wmhd3, cat: "Tertiary Institution Award" },
  { src: wmhd7, cat: "Tertiary Institution Award" },

  { src: wmhd5, cat: "TAGIP Foot Soldiers" },
  { src: wmhd2, cat: "TAGIP Foot Soldiers" },

  { src: wmhd1, cat: "Symposium · College of Health Science & Tech, Keffi" },
  { src: wmhd4, cat: "Symposium · College of Health Science & Tech, Keffi" },

  { src: wmhd4, cat: "Meet with Stakeholders & Community Elders" },
  { src: wmhd3, cat: "Meet with Stakeholders & Community Elders" },

  { src: wmhd2, cat: "Medical Outreach — Odumu Apawu Community" },
  { src: wmhd5, cat: "Medical Outreach — Odumu Apawu Community" },

  { src: wmhd7, cat: "Medical Health Outreach 2025" },
  { src: wmhd1, cat: "Medical Health Outreach 2025" },

  { src: wmhd3, cat: "Medical Health Outreach — ODU Community 2025" },
  { src: wmhd5, cat: "Medical Health Outreach — ODU Community 2025" },

  { src: wmhd2, cat: "Grassroots Talent Hunt Competition 2025" },
  { src: wmhd7, cat: "Grassroots Talent Hunt Competition 2025" },

  { src: wmhd4, cat: "Education Sensitization & Career Guidance (Feb 2025)" },
  { src: wmhd1, cat: "Education Sensitization & Career Guidance (Feb 2025)" },

  { src: wmhd5, cat: "Community Diagnosis — Agboda Community" },
  { src: wmhd3, cat: "Community Diagnosis — Agboda Community" },

  { src: wmhd7, cat: "Afo/Ajiri Tertiary Students Award Competition 2025" },
  { src: wmhd2, cat: "Afo/Ajiri Tertiary Students Award Competition 2025" },
];