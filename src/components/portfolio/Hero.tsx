import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

export function Hero() {
  return (
    <section id="home" className="glow-surface relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-0 transition-opacity duration-1000 sm:opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary) 25%, transparent) 0%, transparent 60%), url(${heroVisual})`,
          backgroundSize: "cover, 45% auto",
          backgroundPosition: "center, 50% 45%",
          backgroundRepeat: "no-repeat",
          filter: "blur(56px) saturate(180%)",
          maskImage: "radial-gradient(circle, transparent 35%, black 75%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 35%, black 75%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 items-start gap-4 md:items-center md:gap-8 lg:gap-12">
          <div>
            <p className="pill inline-flex px-4 py-1.5 text-xs font-medium tracking-wide">
              Hi! I&apos;m Bharath — based in Hyderabad, India
            </p>
            <h1 className="mt-4 text-[1.65rem] leading-[1.1] font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Mechanical <br />
              &amp; <span className="text-primary">Design Engineer</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:mt-6 sm:text-base">
              Mechanical Engineering undergraduate with hands-on experience in CAD/CAE, FEA, CFD and
              thermal systems — including an internship at ISRO-ISTRAC.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <a
                href="#contact"
                className="cta-surface inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Hire me <ArrowDown className="size-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View my work
              </a>
              <a
                href="/Kottapalli_Bharath_Resume.pdf"
                download="Kottapalli_Bharath_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Resume <Download className="size-4" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 sm:mt-8">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/kottapallibharath7993796846",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "mailto:kottapallibharath097@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
            <div className="card-surface aspect-square w-full max-w-[160px] overflow-hidden rounded-full p-2 sm:max-w-[280px] md:max-w-[360px] lg:max-w-[440px] xl:max-w-[520px]">
              <img
                src={heroVisual}
                alt="Mechanical design and simulation visual representing Kottapalli Bharath's work"
                width={520}
                height={520}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="card-surface w-fit px-3 py-2 text-center sm:px-4 sm:py-3">
              <p className="font-display text-base font-bold text-primary sm:text-xl md:text-2xl">
                8.88
              </p>
              <p className="text-[10px] leading-tight text-muted-foreground sm:text-xs">
                CGPA · B.E. Mechanical Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
