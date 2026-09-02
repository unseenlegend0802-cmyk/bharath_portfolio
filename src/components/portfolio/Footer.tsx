import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Wand2 } from "lucide-react";

const sections = [
  { label: "About", to: "/", hash: "about" },
  { label: "Skills", to: "/", hash: "skills" },
  { label: "Projects", to: "/projects", hash: "" },
  { label: "Education", to: "/", hash: "education" },
  { label: "Contact", to: "/", hash: "contact" },
] as const;

export function Footer() {
  return (
    <footer className="glow-surface relative mt-10 overflow-hidden border-t border-primary/25">
      <div aria-hidden="true" className="rune-divider py-4 text-center text-xs">
        ✦ ⚯ ✦ ⚯ ✦
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-semibold tracking-[0.12em] uppercase">
            <Wand2 className="size-4 shrink-0 text-primary flicker" />
            Bharath<span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground italic">
            “It does not do to dwell on drawings and forget to build.” — Mechanical design, with a
            little magic.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.22em] text-primary uppercase">
            The Great Hall
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {sections.map((s) => (
              <li key={s.label}>
                <Link to={s.to} hash={s.hash} className="spell-link hover:text-primary">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.22em] text-primary uppercase">
            Send an owl
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:kottapallibharath097@gmail.com"
                className="flex min-w-0 items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                <span className="truncate">kottapallibharath097@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+917993796846" className="flex items-center gap-2 hover:text-primary">
                <Phone className="size-4 shrink-0 text-primary" />
                +91 79937 96846
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/kottapallibharath7993796846"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="size-4 shrink-0 text-primary" />
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              Hyderabad, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kottapalli Bharath · Mischief managed.
        </p>
      </div>
    </footer>
  );
}
