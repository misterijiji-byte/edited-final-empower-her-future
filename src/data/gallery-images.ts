/* =============================================================================
 * FARGEF — Gallery image registry
 * -----------------------------------------------------------------------------
 * HOW TO ADD A NEW IMAGE (3 simple steps):
 *
 *   1) Drop the image file into `src/assets/` (e.g. `src/assets/my-photo.jpg`)
 *      and run once in the terminal:
 *          lovable-assets create --file src/assets/my-photo.jpg \
 *            > src/assets/my-photo.jpg.asset.json
 *      (Or reuse one of the imports already listed below.)
 *
 *   2) Import it at the top of this file, next to the other imports:
 *          import myPhoto from "@/assets/my-photo.jpg.asset.json";
 *
 *   3) Add a new line to the `galleryImages` array below:
 *          { src: myPhoto.url, alt: "Short description", category: "wmhd" },
 *
 * That's it — the Gallery page picks it up automatically. To remove an image,
 * just delete its line. To reorder, move the line up or down.
 *
 * To add a brand-new category tab, add an entry to `CATEGORIES` AND its id
 * to the `GalleryCategoryId` union, then use that id on your images.
 * ===========================================================================*/

// ---------------------------------------------------------------------------
// 1. Image imports — one line per image file.
// ---------------------------------------------------------------------------
import wmhd1 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_1.jpg.asset.json";
import wmhd2 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_2.jpg.asset.json";
import wmhd3 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_3.jpg.asset.json";
import wmhd4 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_4.jpg.asset.json";
import wmhd5 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_5.jpg.asset.json";
import wmhd7 from "@/assets/WORLD_MENSTRUAL_HYGIENE_DAY_2026_7.jpg.asset.json";

// ---------------------------------------------------------------------------
// 2. Types — describe the shape of a category and an image.
// ---------------------------------------------------------------------------
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
  /** Image URL — usually `<importName>.url`, but any string URL works. */
  src: string;
  /** Short description of the image (used for accessibility + lightbox). */
  alt: string;
  /** Which category tab this image belongs under. Must match a CATEGORIES id. */
  category: GalleryCategoryId;
  /** Optional caption shown under the thumbnail (defaults to category label). */
  caption?: string;
  /** Optional ordering hint (lower = earlier). Defaults to array order. */
  order?: number;
}

// ---------------------------------------------------------------------------
// 3. Categories — these become the filter tabs above the gallery grid.
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 4. Gallery images — add / remove / reorder lines freely.
//    Each line is one photo. Copy a line and tweak it to add a new image.
// ---------------------------------------------------------------------------
export const galleryImages: GalleryImage[] = [
  // ── World Menstrual Hygiene Day 2026 ────────────────────────────────────
  { src: wmhd1.url, alt: "World Menstrual Hygiene Day 2026 — outreach moment 1", category: "wmhd" },
  { src: wmhd2.url, alt: "World Menstrual Hygiene Day 2026 — outreach moment 2", category: "wmhd" },
  { src: wmhd3.url, alt: "World Menstrual Hygiene Day 2026 — outreach moment 3", category: "wmhd" },
  { src: wmhd4.url, alt: "World Menstrual Hygiene Day 2026 — outreach moment 4", category: "wmhd" },
  { src: wmhd5.url, alt: "World Menstrual Hygiene Day 2026 — outreach moment 5", category: "wmhd" },
  { src: wmhd7.url, alt: "World Menstrual Hygiene Day 2026 — outreach moment 6", category: "wmhd" },

  // ── Tertiary Institution Award ──────────────────────────────────────────
  { src: wmhd3.url, alt: "Tertiary Institution Award ceremony",   category: "tertiary" },
  { src: wmhd7.url, alt: "Tertiary Institution Award recipients", category: "tertiary" },

  // ── TAGIP Foot Soldiers ─────────────────────────────────────────────────
  { src: wmhd5.url, alt: "TAGIP Foot Soldiers in the field", category: "tagip" },
  { src: wmhd2.url, alt: "TAGIP Foot Soldiers team",         category: "tagip" },

  // ── Symposium · College of Health Science & Tech, Keffi ─────────────────
  { src: wmhd1.url, alt: "Symposium at College of Health Science & Tech, Keffi", category: "symposium" },
  { src: wmhd4.url, alt: "Symposium attendees and speakers",                     category: "symposium" },

  // ── Meet with Stakeholders & Community Elders ───────────────────────────
  { src: wmhd4.url, alt: "Meeting with community stakeholders", category: "elders" },
  { src: wmhd3.url, alt: "Engagement with community elders",    category: "elders" },

  // ── Medical Outreach — Odumu Apawu Community ────────────────────────────
  { src: wmhd2.url, alt: "Medical outreach at Odumu Apawu Community",   category: "odumu" },
  { src: wmhd5.url, alt: "Patients attended at Odumu Apawu outreach",   category: "odumu" },

  // ── Medical Health Outreach 2025 ────────────────────────────────────────
  { src: wmhd7.url, alt: "Medical Health Outreach 2025 — services",      category: "med2025" },
  { src: wmhd1.url, alt: "Medical Health Outreach 2025 — beneficiaries", category: "med2025" },

  // ── Medical Health Outreach — ODU Community 2025 ────────────────────────
  { src: wmhd3.url, alt: "Medical Health Outreach at ODU Community 2025", category: "odu2025" },
  { src: wmhd5.url, alt: "Community members at ODU 2025 outreach",        category: "odu2025" },

  // ── Grassroots Talent Hunt Competition 2025 ─────────────────────────────
  { src: wmhd2.url, alt: "Grassroots Talent Hunt Competition 2025 — performance", category: "gth2025" },
  { src: wmhd7.url, alt: "Grassroots Talent Hunt Competition 2025 — winners",     category: "gth2025" },

  // ── Education Sensitization & Career Guidance (Feb 2025) ────────────────
  { src: wmhd4.url, alt: "Education Sensitization & Career Guidance — Feb 2025", category: "edu" },
  { src: wmhd1.url, alt: "Students at career guidance session",                  category: "edu" },

  // ── Community Diagnosis — Agboda Community ──────────────────────────────
  { src: wmhd5.url, alt: "Community Diagnosis exercise at Agboda", category: "agboda" },
  { src: wmhd3.url, alt: "Agboda Community engagement",            category: "agboda" },

  // ── Afo/Ajiri Tertiary Students Award Competition 2025 ──────────────────
  { src: wmhd7.url, alt: "Afo/Ajiri Tertiary Students Award Competition 2025", category: "afoajiri" },
  { src: wmhd2.url, alt: "Afo/Ajiri awardees",                                 category: "afoajiri" },
];

/** Lookup helper: get the human label for a category id. */
export function getCategoryLabel(id: GalleryCategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}