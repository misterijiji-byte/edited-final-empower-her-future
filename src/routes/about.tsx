import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { Compass, Eye, Heart, Sparkles, Users, Shield, Lightbulb, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FARGEF" },
      { name: "description", content: "Learn about FARGEF's mission, vision, values, founder and trustees driving girl child empowerment." },
      { property: "og:title", content: "About FARGEF" },
      { property: "og:description", content: "A movement rooted in community, powered by action, measured by real impact." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Heart, t: "Empowerment" },
  { Icon: Users, t: "Compassion" },
  { Icon: Shield, t: "Integrity" },
  { Icon: Sparkles, t: "Inclusion" },
  { Icon: Award, t: "Excellence" },
  { Icon: Lightbulb, t: "Innovation" },
];

function Leader({ img, name, title, children }: { img: string; name: string; title: string; children?: React.ReactNode }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img src={img} alt={name} className="h-full w-full object-cover object-top" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="mt-1 text-sm uppercase tracking-wider text-[color:var(--flame)]">{title}</p>
        {children && <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>}
      </div>
    </article>
  );
}

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">About FARGEF</span>
          <h1 className="mt-3 max-w-4xl text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            A family for every girl. A future for every community.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            FARGEF exists to break barriers that keep girls from learning, leading and thriving — across hard-to-reach communities in Nigeria.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold">Our Story</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-2">
            <p>
              FARGEF began as a promise — that no girl in our communities should be left behind. From rural settlements to tertiary classrooms, we go where the need is greatest, partnering with traditional leaders, parents, schools and health systems.
            </p>
            <p>
              Today, we run six empowerment programs across education, healthcare, talent and leadership, reaching thousands of students and hundreds of families every year — visibly, verifiably and accountably.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            { Icon: Compass, t: "Mission", d: "To empower the girl child through education, healthcare support, talent development, and targeted interventions that bridge social, cultural and economic gaps." },
            { Icon: Eye, t: "Vision", d: "A society where every girl, regardless of background, enjoys equal opportunities, access to quality education, good health, and the freedom to fulfill her highest potential." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-[2rem] border border-border bg-card p-10">
              <Icon className="h-8 w-8 text-[color:var(--royal)]" />
              <h3 className="mt-4 text-3xl font-extrabold">{t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Core Values</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, t }) => (
              <div key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white"><Icon className="h-6 w-6" /></div>
                <div className="text-lg font-bold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--flame)]">Leadership</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Founder & Trustees</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Leader img={IMG.founder} name="Haj. Ramatu Abubakar" title="Founder & CEO · RCHEW, RN, RM, RPHN & BNSc">
              Born September 19, 1984 in Nasarawa State, she trained at the College of Health Technology, Keffi, and earned a BNSc at Ahmadu Bello University, Zaria. She has served at Shukura Hospital, Udege Development Area and (since 2013) the Federal Medical Centre, Keffi — combining a healthcare career with passionate advocacy for the girl child.
            </Leader>
            <Leader img={IMG.trustee1} name="Haj. Habibat Oyibo Abubakar" title="Trustee Secretary · HND, PGD, MSc Public Administration">
              An urban planner and public administrator helping FARGEF run with structure, transparency and long-term vision.
            </Leader>
            <Leader img={IMG.trustee2} name="Haj. Hauwa Yahaya Ari" title="Trustee Assistant Secretary · RCHEW, BSc Public Health">
              A public-health practitioner ensuring every outreach reaches the communities that need it most.
            </Leader>
          </div>

          <div className="mt-12 rounded-[2rem] bg-card border border-border p-8 md:p-12">
            <h3 className="text-2xl font-extrabold">Founder's Story</h3>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>Haj. Ramatu Abubakar began her educational journey at L.G.E.A. Primary School Tammah (1991–1996) and Government College Nasarawa (1996–2002). She earned a Junior Community Health Extension Worker certificate in 2005 and a Diploma in Community Health Extension (2009–2012) at the College of Health Technology, Keffi, before earning her BNSc at Ahmadu Bello University, Zaria — with RN, RM and RPHN credentials.</p>
              <p>Her career began at Shukura Hospital, Keffi (2005–2006), continued with Udege Development Area (2006–2013), and today she serves at the Federal Medical Centre, Keffi (since 2013), contributing significantly to public health services.</p>
              <p>Beyond healthcare, she is the Convener and CEO of the Fathur Rahman Girl Child Empowerment Initiative, including the <strong>Afo/Ajiri Girl Child Initiative Platform</strong>, and founder of Rahama Film Productions, where she preserves the Afo Ajiri language and culture through creative media.</p>
              <p>She is married to DSP Isa Osu Koki and they are blessed with three children. She lives by the words of Maya Angelou: <em>“I am a woman phenomenally. Phenomenal woman, that's me.”</em></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
*** End Patch