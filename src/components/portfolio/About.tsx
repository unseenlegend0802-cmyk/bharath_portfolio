import { SectionHeading } from "./SectionHeading";
import { Brain, Languages, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Career objective",
    body: "Seeking an entry-level internship where I can apply programming and analytical skills and grow in a dynamic environment.",
  },
  {
    icon: Brain,
    title: "Focus areas",
    body: "Data analysis, machine learning, data visualization and emerging AI technologies.",
  },
  {
    icon: Users,
    title: "Activities",
    body: "Documentation Writer at the IEI Student Chapter, VBIT · GDG on Campus Solution Challenge 2025 participant.",
  },
  {
    icon: Languages,
    title: "Languages",
    body: "Telugu (native, fluent) and English (fluent).",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="About" accent="Me" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          Motivated Information Technology undergraduate with a strong interest in data analysis and
          emerging technologies, driven to contribute to organizational success.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {highlights.map((h) => (
            <article key={h.title} className="card-surface p-6">
              <h.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
