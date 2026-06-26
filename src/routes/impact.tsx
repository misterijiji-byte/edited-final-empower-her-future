import { createFileRoute } from "@tanstack/react-router";
import { Counter } from "@/components/counter";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — FARGEF" },
      { name: "description", content: "10,000+ girls empowered, 1,700+ medical beneficiaries, ₦7M+ delivered. See FARGEF's measurable impact." },
      { property: "og:title", content: "FARGEF Impact" },
      { property: "og:description", content: "Transformations that outlive the program." },
    ],
  }),
  component: ImpactPage,
});

const METRICS = [
  { v: <Counter to={10000} suffix="+" />, l: "Girls Empowered" },
  { v: <Counter to={1700} suffix="+" />, l: "Medical Beneficiaries" },
  { v: <Counter to={25} suffix="+" />, l: "Scholarships Awarded" },
  { v: <Counter to={12} />, l: "Talent Winners" },
  { v: <Counter to={17} />, l: "Communities Reached" },
  { v: <Counter to={7} prefix="₦" suffix="M+" />, l: "Funds Invested" },
];

const STORIES = [
  { before: "Battling undiagnosed high blood pressure with no access to care.", after: "Treated, medicated and monitored — free of charge through Agboda outreach.", who: "Okowuna Kwuku — Odumu Epowu community" },
  { before: "A talented voice with no platform, no mentor, no confidence.", after: "GTH winner, mentored, awarded and stepping into her dream.", who: "Aisha Yakubu Ebigye — Akum community" },
  { before: "A brilliant student whose family struggled to fund her studies.", after: "Recognised, awarded ₦150,000, and inspired to lead her peers.", who: "Rahinat Idris Kana" },
];

function ImpactPage() {
  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Impact</span>
          <h1 className="mt-3 max-w-4xl text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">Measurable. Visible. Verifiable.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Across the 12-month calendar, every year. Here is what your support has built.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {METRICS.map((m, i) => (
              <div key={i} className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="text-4xl font-extrabold tracking-tight text-[color:var(--royal)] sm:text-5xl md:text-6xl">{m.v}</div>
                <div className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--flame)]">Before & After</span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">Transformations that outlive the program.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {STORIES.map((s) => (
              <article key={s.who} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <div className="grid grid-cols-2 divide-x divide-border">
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Before</div>
                    <p className="mt-2 text-sm leading-relaxed">{s.before}</p>
                  </div>
                  <div className="bg-gradient-brand p-6 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-white/80">After</div>
                    <p className="mt-2 text-sm leading-relaxed">{s.after}</p>
                  </div>
                </div>
                <div className="border-t border-border bg-card px-6 py-4 text-sm font-semibold text-[color:var(--royal)]">{s.who}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
