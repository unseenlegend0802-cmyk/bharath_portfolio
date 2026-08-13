import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Boxes, Flame, Ruler, Wind } from "lucide-react";

const groups = [
  {
    icon: Boxes,
    title: "Design & CAD",
    body: "3D modelling, detailing and drafting tools I use daily.",
    tags: ["SolidWorks", "CATIA V5", "CREO Parametric", "AutoCAD", "GD&T"],
  },
  {
    icon: Wind,
    title: "Simulation & Analysis",
    body: "Validating designs with numerical simulation.",
    tags: ["ANSYS Workbench", "ANSYS Fluent", "FEM", "CFD", "OpenRocket"],
  },
  {
    icon: Flame,
    title: "Engineering Expertise",
    body: "Applied mechanical and thermal engineering.",
    tags: ["Thermal Analysis", "CAD/CAE", "Rocket Design", "Product Design", "Rapid Prototyping"],
  },
  {
    icon: Ruler,
    title: "Manufacturing & Tools",
    body: "From mold design to machining and documentation.",
    tags: ["Mold Design", "CNC Machining", "Technical Documentation", "MS Office 365"],
  },
];

const soft = [
  "Problem Solving",
  "Analytical Thinking",
  "Attention to Detail",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
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
