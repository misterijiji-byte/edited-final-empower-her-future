import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FARGEF" },
      { name: "description", content: "Get in touch with FARGEF. Address, phone, email and social links." },
      { property: "og:title", content: "Contact FARGEF" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-gradient-brand pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Contact</span>
          <h1 className="mt-3 max-w-4xl text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">Let's build the future together.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold">Reach us</h2>
            <ul className="mt-6 space-y-5 text-base">
              <li className="flex gap-3"><MapPin className="h-5 w-5 mt-1 shrink-0 text-[color:var(--flame)]" />
                <span>Plot 165 Shagari Village Layout, Behind Shafa Petroleum Station, Dei Dei Junction, Abuja</span>
              </li>
              <li className="flex gap-3"><Phone className="h-5 w-5 mt-1 shrink-0 text-[color:var(--flame)]" />
                <a className="hover:underline" href="tel:+2347031838244">0703 183 8244</a>
              </li>
              <li className="flex gap-3"><Mail className="h-5 w-5 mt-1 shrink-0 text-[color:var(--flame)]" />
                <a className="hover:underline" href="mailto:fargeftagip@gmail.com">fargeftagip@gmail.com</a>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { href: "https://www.facebook.com/share/18vUFjr4tf/", Icon: Facebook, label: "Facebook" },
                  { href: "#", Icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/ramatu-abubakar-bb8176333", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://youtube.com/@rahamaabubakar6437", Icon: Youtube, label: "YouTube" },
                  { href: "https://www.tiktok.com/@tagip4", Icon: Mail, label: "TikTok" },
                ].map(({ href, Icon, label }) => (
                  <a key={label} target="_blank" rel="noreferrer" href={href} aria-label={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-semibold hover:bg-accent">
                    <Icon className="h-4 w-4 text-[color:var(--royal)]" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            {sent ? (
              <div className="grid place-items-center py-20 text-center">
                <div className="text-2xl font-extrabold">Thank you! 💙</div>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">Your message has been received. We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold">Send us a message</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium">Name
                    <input required name="name" className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--sky)]" />
                  </label>
                  <label className="text-sm font-medium">Email
                    <input required type="email" name="email" className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--sky)]" />
                  </label>
                </div>
                <label className="mt-4 block text-sm font-medium">Subject
                  <input name="subject" className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--sky)]" />
                </label>
                <label className="mt-4 block text-sm font-medium">Message
                  <textarea required name="message" rows={6} className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--sky)]" />
                </label>
                <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elevated hover:scale-[1.01] transition">Send Message</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
