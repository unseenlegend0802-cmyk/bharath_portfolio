import { useEffect, useState } from "react";
import { Menu, Wand2, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/30 bg-background/85 shadow-glow backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
        <a
          href="#home"
          onClick={scrollTo("#home")}
          className="flex items-center gap-2 truncate font-display text-lg font-semibold tracking-[0.12em] uppercase"
        >
          <Wand2 className="size-4 shrink-0 text-primary flicker" />
          Bharath<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-7 font-display text-xs tracking-[0.18em] text-muted-foreground uppercase md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={scrollTo(l.href)}
                className={`spell-link ${active === l.href ? "is-active text-primary" : "hover:text-primary"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={scrollTo("#contact")}
            className="cta-surface hidden rounded-full px-5 py-2.5 text-xs font-semibold md:inline-flex"
          >
            Owl me
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-full border border-primary/40 p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-primary/25 bg-background/95 px-5 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 font-display text-sm tracking-[0.16em] uppercase">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={scrollTo(l.href)}
                  className={`block transition-colors ${
                    active === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
