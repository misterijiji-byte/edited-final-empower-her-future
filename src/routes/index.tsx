import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, HeartPulse, Sparkles, Users, ShieldCheck, Eye, Compass, Quote } from "lucide-react";
import { IMG } from "@/lib/images";
import { Counter } from "@/components/counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FARGEF — Every Girl is Phenomenal" },
      { name: "description", content: "Empowering girls through education, healthcare, talent and leadership. Join FARGEF — Every Girl is Phenomenal." },
      { property: "og:title", content: "FARGEF — Every Girl is Phenomenal" },
      { property: "og:description", content: "Empowering Girls. Transforming Communities. Building Futures." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.wmhd3} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--royal-deep)]/85 via-[color:var(--royal)]/70 to-[color:var(--royal-deep)]/95" />
        </div>
        <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pt-28 pb-20 text-white sm:px-6 lg:px-8">
          <span className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Every Girl is Phenomenal
          </span>
          <h1 className="animate-fade-up mt-6 max-w-4xl text-balance text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]" style={{ animationDelay: "100ms" }}>
            Empowering Every Girl to <span className="text-gradient-brand bg-gradient-to-r from-sky-200 to-white bg-clip-text text-transparent">Dream, Lead</span> and Thrive.
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl" style={{ animationDelay: "200ms" }}>
            Our philosophy is simple: we are a family, and we dream to see every girl succeed in life —
            through education, skills, health, confidence and economic power.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-gradient-flame px-6 py-3.5 text-sm font-semibold text-white shadow-elevated hover:scale-[1.02] transition">
              Support a Girl <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              See Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {[
              { v: <Counter to={10000} suffix="+" />, l: "Student Lives Reached" },
              { v: <Counter to={1700} suffix="+" />, l: "Medical Beneficiaries" },
              { v: <Counter to={6} />, l: "Empowerment Programs" },
              { v: <><Counter to={7} prefix="₦" suffix="M+" /></>, l: "Support Delivered" },
            ].map((s, i) => (
              <div key={i} className="glass-dark rounded-3xl border border-white/15 p-5 sm:p-6">
                <div className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{s.v}</div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FARGEF */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--flame)]">Why FARGEF</span>
              <h2 className="mt-3 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Every Girl is <span className="text-gradient-brand">Phenomenal</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Fathur Rahman Girl Child Empowerment Foundation (FARGEF) is more than an NGO.
                We are a movement rooted in community, powered by action, and measured by real impact in
                the lives of girls and their communities.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ["We Work Where It Matters Most.", "We serve girls in hard-to-reach communities. We deliver education, health outreaches and safe spaces so no girl is left behind."],
                  ["We Deliver Measurable Impact, Not Just Promises.", "Our work is visible and verifiable across the 12-month calendar, every year."],
                  ["We Build Girls For Life, Not Just For Photos.", "We equip girls with tools they will use for life — and we are accountable to our community and partners."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="text-lg font-bold">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-elevated">
                <img src={IMG.wmhd7} alt="FARGEF community outreach group photo" className="h-[560px] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-gradient-brand p-6 text-white shadow-elevated sm:block w-64">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80">Trusted by</div>
                <div className="mt-1 text-xl font-bold leading-snug">Traditional leaders, parents, and the girls we serve.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-accent/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--flame)]">Featured Impact</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Four pillars. One unstoppable movement.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: GraduationCap, t: "Education", d: "Empowering girls through learning and leadership." },
              { Icon: HeartPulse, t: "Healthcare", d: "Delivering free medical care to underserved communities." },
              { Icon: Sparkles, t: "Talent Development", d: "Discovering and rewarding exceptional girls." },
              { Icon: Users, t: "Leadership Skills", d: "Preparing girls for tomorrow's careers." },
            ].map(({ Icon, t, d }) => (
              <article key={t} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg text-muted-foreground">
            A holistic change by uniting local voices and proven methods — building resilient households and
            inclusive communities that reduce inequalities and foster sustainable communities.
          </p>
        </div>
      </section>

      {/* MISSION/VISION strip */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            { Icon: Compass, t: "Our Mission", d: "To empower the girl child through education, healthcare support, talent development, and targeted interventions that bridge social, cultural and economic gaps." },
            { Icon: Eye, t: "Our Vision", d: "A society where every girl, regardless of background, enjoys equal opportunities, access to quality education, good health, and the freedom to fulfill her highest potential." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-[2rem] bg-gradient-brand p-10 text-white shadow-elevated">
              <Icon className="h-8 w-8 text-white/90" />
              <h3 className="mt-4 text-3xl font-extrabold">{t}</h3>
              <p className="mt-3 text-white/85 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-accent/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">Voices from the community.</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Real lives. Real change.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { q: "Before the outreach I had no idea I was battling high blood pressure. FARGEF helped me get treatment and medication free of charge.", n: "Okogba Azamu", w: "Agboda community" },
              { q: "The talent hunt changed my life. I now have the confidence and support to pursue my dreams.", n: "Hassana Musa Obagu", w: "Kana Nasarawa community" },
              { q: "My daughter won the academic award and it boosted her morale. God bless this foundation.", n: "Mr Sule Ogah", w: "Odu community" },
            ].map((t, i) => (
              <figure key={i} className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                <div className="absolute -top-4 left-6 grid h-10 w-10 place-items-center rounded-full bg-gradient-flame text-white">{i+1}</div>
                <Quote className="h-7 w-7 text-[color:var(--sky)]" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-sm text-muted-foreground">From {t.w}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-center text-white shadow-elevated sm:p-16">
            <h2 className="text-balance text-4xl font-extrabold sm:text-5xl">Be the reason a girl believes.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">Every contribution helps empower girls through education, healthcare and leadership.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--royal)] shadow-elevated hover:scale-[1.02]">Donate Now <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
