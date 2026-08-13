import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BarChart3, Code2, Database, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    body: "Core languages I use to build and automate.",
    tags: ["Java", "Python", "HTML", "CSS", "Git & GitHub"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    body: "Querying, cleaning and shaping data for analysis.",
    tags: ["SQL", "Pandas", "NumPy", "Microsoft Excel", "Statistics"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    body: "Turning datasets into dashboards and stories.",
    tags: ["Power BI", "Data Analytics", "Data Visualization"],
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    body: "Applying models to real-world problems.",
    tags: ["Machine Learning", "NLP", "LLMs", "AI Fundamentals"],
  },
];

const soft = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Quick Learning",
];

export function Skills() {
  const [open, setOpen] = useState(0);

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading light="My" accent="Skills" />

        <div className="mt-10 divide-y divide-border border-y border-border">
          {groups.map((g, i) => {
            const isOpen = open === i;
            return (
              <div key={g.title} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 text-left"
                >
                  <g.icon className="size-6 shrink-0 text-primary" />
                  <span className="truncate font-display text-lg font-semibold sm:text-xl">
                    {g.title}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 pl-10">
                    <p className="text-sm text-muted-foreground">{g.body}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.tags.map((t) => (
                        <li key={t} className="pill px-3 py-1.5 text-xs">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <h3 className="mt-12 text-center text-sm tracking-widest text-muted-foreground uppercase">
          Soft skills
        </h3>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {soft.map((s) => (
            <li key={s} className="pill px-3 py-1.5 text-xs">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
