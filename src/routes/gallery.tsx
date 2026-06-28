import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import {
  CATEGORIES,
  galleryImages,
  getCategoryLabel,
  type GalleryCategoryId,
} from "@/data/gallery-images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — FARGEF" },
      { name: "description", content: "Photos from FARGEF outreaches, talent hunts, tertiary awards and community events." },
      { property: "og:title", content: "FARGEF Gallery" },
      { property: "og:description", content: "Moments from the field." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<GalleryCategoryId | "all">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(() => {
    const filtered =
      active === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active);
    return [...filtered]
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((img) => ({
        src: img.src,
        alt: img.alt,
        cat: img.caption ?? getCategoryLabel(img.category),
      }));
  }, [active]);

  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Gallery</span>
          <h1 className="mt-3 text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">Moments from the field.</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {[{ id: "all", label: "All" }, ...CATEGORIES].map((c) => (
              <button key={c.id} onClick={() => setActive(c.id as GalleryCategoryId | "all")}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${active === c.id ? "border-transparent bg-gradient-brand text-white" : "border-border bg-card text-foreground hover:bg-accent"}`}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
            {items.map((it, i) => (
              <button key={i} onClick={() => setLightbox(it.src)}
                className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-elevated">
                <img src={it.src} alt={it.alt} className="h-auto w-full object-cover" loading="lazy" />
                <div className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.cat}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur">
          <button aria-label="Close" className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"><X className="h-5 w-5" /></button>
          <img src={lightbox} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain" />
        </div>
      )}
    </>
  );
}
