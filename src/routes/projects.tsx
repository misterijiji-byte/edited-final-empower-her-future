import { createFileRoute } from "@tanstack/react-router";
import { Activity, Award, GraduationCap, Sparkles, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — FARGEF" },
      { name: "description", content: "Grassroots medical outreaches, Grassroots Talent Hunt, Tertiary Student Awards and STEM initiative." },
      { property: "og:title", content: "FARGEF Projects" },
      { property: "og:description", content: "Real programs. Real results. Across health, education, talent and leadership." },
    ],
  }),
  component: ProjectsPage,
});

function Section({ id, badge, title, children, Icon }: { id: string; badge: string; title: string; children: React.ReactNode; Icon: any }) {
  return (
    <section id={id} className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white"><Icon className="h-6 w-6" /></div>
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--flame)]">{badge}</span>
            <h2 className="mt-1 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
          </div>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({ title, date, drugs, items, beneficiaries }: { title: string; date?: string; drugs?: string; items: string[]; beneficiaries?: string }) {
  return (
    <article className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-elevated">
      <h3 className="text-xl font-extrabold">{title}</h3>
      {date && <p className="mt-1 text-sm text-muted-foreground">{date}</p>}
      {drugs && <p className="mt-3 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-[color:var(--royal)]">Drugs value: {drugs}</p>}
      <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        {items.map((it) => (<li key={it} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--flame)]" />{it}</li>))}
      </ul>
      {beneficiaries && <p className="mt-4 text-sm font-semibold text-[color:var(--royal)]">{beneficiaries}</p>}
    </article>
  );
}

function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Projects</span>
          <h1 className="mt-3 max-w-4xl text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">Real programs. Real results.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">From rural medical outreaches to talent hunts and tertiary awards — every program is designed for measurable, lasting impact.</p>
        </div>
      </section>

      <Section id="medical" badge="Grassroots Medical Outreaches" title="Free, life-saving healthcare brought to communities." Icon={Stethoscope}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Odumu Epowu Community Medical Outreach" date="2024" drugs="₦1,300,000" beneficiaries="380 beneficiaries — including children & pregnant women" items={["Malaria screening & treatment","Typhoid screening & treatment","Hepatitis B and C screening","Syphilis screening","Hypertension screening","Diabetes screening"]} />
          <Card title="Agboda Community Medical Outreach" date="11 November 2026" drugs="₦1,550,000" beneficiaries="512 beneficiaries (children, adults, seniors, pregnant women)" items={["320 screened for Diabetes & Hypertension","280 adults & seniors screened for Hepatitis B & C","215 (incl. children) screened for Malaria","48 pregnant women received iron + folic acid + B-complex (1-month supply)","Treatments: ACT, Zinc, Antibiotics, Antifungals, Antitussives, Analgesics"]} />
          <Card title="ODU Community Medical Outreach" date="23 December 2025" drugs="₦800,000" beneficiaries="250 beneficiaries — including children & pregnant women" items={["Malaria screening & treatment","Typhoid screening & treatment","Hepatitis B and C screening","Syphilis screening","Hypertension screening","Diabetes screening"]} />
          <Card title="Menstrual Hygiene Day Seminar" date="30 May 2026 · Mararaba Udege Dev. Area" items={["313 total beneficiaries","313 sanitary pads distributed","313 hand towels distributed"]} />
        </div>
      </Section>

      <Section id="gth" badge="Grassroots Talent Hunt (GTH)" title="Discovering brilliance, one girl at a time." Icon={Sparkles}>
        <ol className="relative ml-3 space-y-10 border-l-2 border-[color:var(--sky)] pl-8">
          {[
            { y: "2024 · Maiden Edition", w: ["Held at ECWA Peace College, Shagari Road, Nasarawa (14–21 Sept 2024)","Grand Finale at Nasarawa State University (NSUK), Keffi LGA — 11 Oct 2024","6 female talents discovered","Winner awarded ₦100,000 each","Runner-ups ₦20,000 each","Mentorship support to other participants"] },
            { y: "2025 · Second Edition", w: ["Held at ECWA Peace College, Shagari Road, Nasarawa (20–27 Sept 2025)","Grand Finale at New Keffi Hotel, Keffi LGA — 11 Oct 2025","6 winners emerged","Winners awarded ₦200,000 each","Runner-ups ₦40,000 each","Souvenirs, T-shirts, caps distributed"] },
            { y: "February 12–13, 2025 · Education Sensitization & Career Guidance", w: ["15 Senior Secondary Schools covered","10,000+ beneficiaries","3,000 exercise books distributed","500 mathematical sets","100 packs of pens"] },
          ].map((s) => (
            <li key={s.y}>
              <span className="absolute -left-[11px] grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-[10px] text-white">●</span>
              <h3 className="text-xl font-extrabold">{s.y}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {s.w.map((x) => <li key={x} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--flame)]" />{x}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="awards" badge="Tertiary Institutions Girl Child Student of the Year Award" title="Honoring brilliance, every year." Icon={Award}>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: "2024 Edition — Agwada Community", d: "31 December 2024", rows: [["Best in Creativity & Innovation","₦150,000"],["Outstanding Student","₦120,000"],["Social Media Influencer","₦70,000"],["Most Resilient Student","₦50,000"]] },
            { t: "2025 Edition", d: "31 December 2025", rows: [["Best in Creativity & Innovation","₦350,000"],["Outstanding Student","₦170,000"],["Social Media Influencer","₦100,000"],["Most Resilient Student","₦50,000"]] },
          ].map((g) => (
            <div key={g.t} className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="bg-gradient-brand p-6 text-white">
                <h3 className="text-xl font-extrabold">{g.t}</h3>
                <p className="text-sm text-white/80">{g.d}</p>
              </div>
              <ul className="divide-y divide-border">
                {g.rows.map(([c, p]) => (
                  <li key={c} className="flex items-center justify-between gap-4 px-6 py-4">
                    <span className="text-sm font-medium">{c}</span>
                    <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold text-[color:var(--royal)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { n: 1, q: "Before the outreach I had no idea I was battling high blood pressure. FARGEF helped me get treatment and medication free of charge.", a: "Okogba Azamu — Agboda community" },
            { n: 2, q: "The talent hunt changed my life. I now have the confidence and support to pursue my dreams.", a: "Hassana Musa Obagu — Kana Nasarawa community" },
            { n: 3, q: "My daughter won the academic award and it boosted her morale. God bless this foundation.", a: "Mr Sule Ogah — Odu community" },
          ].map((v) => (
            <div key={v.n} className="relative rounded-3xl border border-border bg-card p-6">
              <div className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-2xl bg-gradient-flame text-sm font-bold text-white">{v.n}</div>
              <p className="text-sm italic leading-relaxed">“{v.q}”</p>
              <div className="mt-4 text-sm font-semibold text-[color:var(--royal)]">{v.a}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="stem" badge="Coming Soon · STEM Initiative" title="Building the Next Generation of Female Innovators." Icon={Activity}>
        <div className="grid items-center gap-8 rounded-[2rem] bg-gradient-brand p-10 text-white md:grid-cols-2 md:p-14">
          <div>
            <h3 className="text-3xl font-extrabold">A future where girls invent, code and lead.</h3>
            <p className="mt-4 text-white/85">FARGEF is preparing a STEM pathway — practical labs, mentorship and scholarships — that turn curiosity into careers.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Code","Robotics","Health Tech","Math","Design","Data"].map((x, i) => (
              <div key={x} className="rounded-2xl bg-white/10 p-5 text-center text-sm font-semibold ring-1 ring-white/20 animate-float" style={{ animationDelay: `${i*200}ms` }}>{x}</div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
