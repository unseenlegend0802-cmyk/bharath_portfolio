import { SectionHeading } from "./SectionHeading";
import { Brain, Languages, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Career objective",
    body: "Aspiring Mechanical Design Engineer seeking to contribute to innovative aerospace and mechanical organizations.",
  },
  {
    icon: Brain,
    title: "Focus areas",
    body: "CAD/CAE, finite element analysis, CFD, thermal systems, rocket design and product development.",
  },
  {
    icon: Users,
    title: "Experience",
    body: "Project Trainee at ISRO-ISTRAC, Rocket Design Intern at Feynman Aerospace and CAD Engineer Trainee at Altimech Engineering Solutions.",
  },
  {
    icon: Languages,
    title: "Languages",
    body: "Telugu (native, fluent), English (fluent), Hindi (professional) and Tamil (beginner).",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="About" accent="Me" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          Mechanical Engineering undergraduate with hands-on experience in CAD/CAE, FEA and thermal
          systems analysis, focused on mechanical systems design and simulation.
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
