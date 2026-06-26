import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { ArrowRight, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — FARGEF" },
      { name: "description", content: "Stories, milestones and updates from FARGEF's field work." },
      { property: "og:title", content: "FARGEF News & Updates" },
      { property: "og:description", content: "Stories from the field." },
    ],
  }),
  component: NewsPage,
});

const ARTICLES = [
  { img: IMG.wmhd7, date: "Nov 2026", tag: "Medical", title: "FARGEF Conducts Major Medical Outreach in Agboda Community", excerpt: "₦1,550,000 in drugs and 512 beneficiaries — including children and pregnant women." },
  { img: IMG.wmhd3, date: "Oct 2025", tag: "Talent", title: "Six Talented Girls Rewarded at Grassroots Talent Hunt 2025", excerpt: "Winners awarded ₦200,000 each at the grand finale held at New Keffi Hotel." },
  { img: IMG.wmhd5, date: "Coming Soon", tag: "STEM", title: "FARGEF Expands Its Empowerment Projects to STEM", excerpt: "A new pathway in code, robotics, health-tech and data — for the next generation of female innovators." },
];

function NewsPage() {
  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">News & Updates</span>
          <h1 className="mt-3 text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">Stories from the field.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <article key={i} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={a.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[color:var(--royal)]">{a.tag}</span>
                    <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{a.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                  <Link to="/projects" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--royal)]">Read more <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">Tertiary Girl Child Award Night</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">A celebration of excellence among female students in tertiary institutions across Afo/Ajiri communities, every year.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { t: "Maiden Edition · 2024", w: "Held at Nasarawa State University (NSUK) — 11 October 2024", items: ["6 female talents discovered","Winners awarded ₦100,000 each","Runner-ups ₦20,000 rewarded","Mentorship support to other participants"] },
                { t: "Second Edition · 2025", w: "Held at New Keffi Hotel — 11 October 2025", items: ["6 winners emerged","Winners awarded ₦200,000 each","Runner-ups ₦40,000 each","Souvenirs, T-shirts, caps distributed"] },
              ].map((e) => (
                <div key={e.t} className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="bg-gradient-brand p-6 text-white">
                    <h3 className="text-xl font-extrabold">{e.t}</h3>
                    <p className="mt-1 text-sm text-white/80">{e.w}</p>
                  </div>
                  <ul className="space-y-2 p-6 text-sm text-muted-foreground">
                    {e.items.map((it) => <li key={it} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--flame)]" />{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
*** End Patch