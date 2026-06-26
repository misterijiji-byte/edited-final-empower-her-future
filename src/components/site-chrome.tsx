import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Heart, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { IMG } from "@/lib/images";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News & Updates" },
  { to: "/contact", label: "Contact" },
] as const;

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("fargef-theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const nd = !d;
      document.documentElement.classList.toggle("dark", nd);
      localStorage.setItem("fargef-theme", nd ? "dark" : "light");
      return nd;
    });
  };
  return { dark, toggle };
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 shrink-0">
          <img src={IMG.logo} alt="FARGEF logo" className="h-10 w-10 rounded-full object-contain shrink-0" />
          <div className="hidden min-w-0 sm:block">
            <div className="text-sm font-extrabold leading-tight tracking-tight">FARGEF</div>
            <div className="truncate text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Every Girl is Phenomenal
            </div>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-accent text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-foreground transition hover:bg-accent"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/donate"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-flame px-4 py-2 text-sm font-semibold text-white shadow-elevated transition hover:scale-[1.02] sm:inline-flex"
          >
            <Heart className="h-4 w-4" /> Support a Girl
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile / nav popout — solid royal blue */}
      {open && (
        <div
          data-fargef-menu
          className="fixed inset-0 z-[60] flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-16 items-center justify-between px-5 border-b border-white/15">
            <div className="flex items-center gap-2.5">
              <img src={IMG.logo} alt="" className="h-9 w-9 rounded-full" />
              <div className="text-white">
                <div className="text-sm font-extrabold">FARGEF</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/80">Every Girl is Phenomenal</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-8 overflow-y-auto">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-2xl font-bold text-white transition hover:bg-white/10 animate-fade-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-flame px-6 py-4 text-base font-semibold text-white shadow-elevated"
            >
              <Heart className="h-5 w-5" /> Support a Girl
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-gradient-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={IMG.logo} alt="FARGEF" className="h-12 w-12 rounded-full bg-white p-0.5" />
            <div>
              <div className="text-lg font-extrabold">FARGEF</div>
              <div className="text-xs uppercase tracking-[0.16em] text-white/80">Every Girl is Phenomenal</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/80">
            Fathur Rahman Girl Child Empowerment Foundation — empowering girls through education,
            healthcare, talent and leadership.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/projects", "Projects"],
              ["/impact", "Impact"],
              ["/donate", "Donate"],
              ["/contact", "Contact"],
              ["/news", "News & Updates"],
              ["/gallery", "Gallery"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/85 hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Plot 165 Shagari Village Layout, Behind Shafa Petroleum Station, Dei Dei Junction, Abuja</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> 0703 183 8244</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> fargeftagip@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Newsletter</h4>
          <p className="mt-4 text-sm text-white/80">Get stories from the field, straight to your inbox.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("Thanks for subscribing!"); }}
            className="mt-4 flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white"
            />
            <button className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[color:var(--royal)]">Join</button>
          </form>
          <div className="mt-5 flex gap-2">
            {[
              { href: "https://www.facebook.com/share/18vUFjr4tf/", Icon: Facebook, label: "Facebook" },
              { href: "#", Icon: Instagram, label: "Instagram" },
              { href: "https://www.linkedin.com/in/ramatu-abubakar-bb8176333", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://youtube.com/@rahamaabubakar6437", Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} FARGEF — Fathur Rahman Girl Child Empowerment Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}