import { useState } from "react";
import { ArrowRight, ArrowUpRight, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { supabase } from "@/integrations/supabase/client";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "kottapallibharath097@gmail.com",
    href: "mailto:kottapallibharath097@gmail.com",
  },
  { icon: Phone, label: "Phone number", value: "+91 79937 96846", href: "tel:+917993796846" },
  {
    icon: MapPin,
    label: "Location",
    value: "Viraatnagar Colony, Taallagadda, Hyderabad – 500006, India",
    href: "https://maps.google.com/?q=Viraatnagar+Colony+Hyderabad",
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }
    setForm({ name: "", email: "", message: "" });
    setStatus("sent");
  };

  return (
    <section id="contact" className="glow-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="Contact" accent="Me" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              required
              maxLength={120}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              required
              type="email"
              maxLength={200}
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <textarea
              required
              rows={6}
              maxLength={5000}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about the opportunity..."
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="cta-surface inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  Sending your owl <Loader2 className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  Send message <ArrowRight className="size-4" />
                </>
              )}
            </button>
            {status === "sent" && (
              <p className="text-sm text-primary" role="status">
                Your owl has been sent — I&apos;ll reply to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive" role="alert">
                The owl got lost. Please try again, or email me directly.
              </p>
            )}
          </form>

          <div className="space-y-4">
            {details.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="card-surface spell-card grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5"
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
              href="https://linkedin.com/in/kottapallibharath7993796846"
              target="_blank"
              rel="noreferrer"
              className="card-surface spell-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5"
            >
              <span className="min-w-0">
                <span className="block text-sm font-semibold">LinkedIn</span>
                <span className="block truncate text-sm text-muted-foreground">
                  kottapallibharath7993796846
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
