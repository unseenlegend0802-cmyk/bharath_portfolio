import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "revathi9690@gmail.com",
    href: "mailto:revathi9690@gmail.com",
  },
  { icon: Phone, label: "Phone number", value: "+91 93909 62104", href: "tel:+919390962104" },
  {
    icon: MapPin,
    label: "Location",
    value: "Wanaparthy, Telangana – 509206, India",
    href: "https://maps.google.com/?q=Wanaparthy,Telangana",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="glow-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="Contact" accent="Me" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <input
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <textarea
              required
              rows={6}
              placeholder="Tell me about the opportunity..."
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="cta-surface inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              {sent ? "Thanks — I'll be in touch!" : "Send message"}{" "}
              <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="space-y-4">
            {details.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="card-surface grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5"
              >
                <d.icon className="size-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{d.label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{d.value}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
              </a>
            ))}
            <a
              href="https://linkedin.com/in/revally-revathi-075909337"
              target="_blank"
              rel="noreferrer"
              className="card-surface grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5"
            >
              <span className="min-w-0">
                <span className="block text-sm font-semibold">LinkedIn</span>
                <span className="block truncate text-sm text-muted-foreground">
                  revally-revathi-075909337
                </span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
