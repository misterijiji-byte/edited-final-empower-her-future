import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, GraduationCap, HeartPulse, Sparkles, Hand } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — FARGEF" },
      { name: "description", content: "Partner with FARGEF. Every contribution helps empower girls through education, healthcare and leadership." },
      { property: "og:title", content: "Support a Girl — Donate to FARGEF" },
      { property: "og:description", content: "Your gift sends a girl to school, to a clinic, to a future." },
    ],
  }),
  component: DonatePage,
});

function CopyButton({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1500); }}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 hover:bg-white/25"
    >
      {done ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
    </button>
  );
}

const ACCOUNTS = [
  { name: "Fathur Rahman Girl Child", number: "1228333716", bank: "Zenith Bank" },
  { name: "Fathur Rahman Girl Child Empowerment Foundation — Tagip Tertiary Students Awards", number: "5176634760", bank: "Moniepoint MFB" },
];

function DonatePage() {
  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Donate</span>
          <h1 className="mt-3 max-w-4xl text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">Partner with us to reach more girls.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Every contribution helps empower girls through education, healthcare and leadership opportunities.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: GraduationCap, t: "Sponsor Education", d: "Books, fees and learning materials for one girl, one term." },
              { Icon: HeartPulse, t: "Fund a Health Outreach", d: "Free screening and medicine for a community of 300+." },
              { Icon: Sparkles, t: "Reward Talent", d: "Cash prize, mentorship and visibility for a GTH winner." },
              { Icon: Hand, t: "Volunteer", d: "Bring your time, skills or network to the field." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border bg-card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {ACCOUNTS.map((a, i) => (
              <div key={i} className="overflow-hidden rounded-[2rem] bg-gradient-brand p-8 text-white shadow-elevated">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Account {i + 1}</div>
                <h3 className="mt-3 text-2xl font-extrabold leading-snug">{a.name}</h3>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-white/70">Account Number</div>
                      <div className="truncate text-xl font-bold tracking-wider">{a.number}</div>
                    </div>
                    <CopyButton value={a.number} />
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-white/70">Bank</div>
                      <div className="truncate text-lg font-semibold">{a.bank}</div>
                    </div>
                    <CopyButton value={a.bank} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
*** End Patch