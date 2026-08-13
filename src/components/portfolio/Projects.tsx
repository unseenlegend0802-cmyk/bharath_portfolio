import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    no: "01",
    title: "Hot Corrosion of 304HCu Stainless Steel",
    body: "Tested 304HCu coated with Na2SO4–75%NaCl at 750°C; weld metal corroded 2× faster than parent with 48.25% higher oxidation due to chromium layer depletion.",
    tags: ["Materials", "Corrosion", "Research"],
  },
  {
    no: "02",
    title: "12-Way Radial Power Combiner (ISRO-ISTRAC)",
    body: "Engineered an X-band radial power combiner with an advanced heat-sink, improving deep-space data transmission by 2% and cutting procurement cost by 95%.",
    tags: ["ANSYS", "Thermal Analysis", "Design"],
  },
  {
    no: "03",
    title: "Portable Sustainable Charging Station",
    body: "Designed a portable station harnessing wind and solar energy — up to 65 W from wind and 60 W from solar — for charging accessories in remote areas.",
    tags: ["Product Design", "Renewables", "Prototyping"],
  },
  {
    no: "04",
    title: "Thermo-Mechanical Study of Brake Discs",
    body: "Analyzed a ventilated brake disc across four materials; Al6061-T6 showed 138% higher heat dissipation than cast iron, C/SiC 92% and Ti-6Al-4V 70%.",
    tags: ["FEA", "Thermal", "Automotive"],
  },
  {
    no: "05",
    title: "Multi-Stage Rocket Design",
    body: "Designed and simulated single- and multi-stage rockets in SolidWorks and OpenRocket, reaching 2,278 m apogee at 361 m/s with reloadable solid motors.",
    tags: ["SolidWorks", "OpenRocket", "Aerospace"],
  },
  {
    no: "06",
    title: "Two-Plate Plastic Injection Mold",
    body: "Prototyped a two-plate injection mold in CREO with EMX flow simulation, improving design accuracy and reducing material waste by 20%.",
    tags: ["CREO", "Mold Design", "Simulation"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="View My" accent="Work" />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground">
          Academic and industry projects across design, simulation and thermal analysis.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.no} className="card-surface group relative p-7">
              <ArrowUpRight className="absolute top-6 right-6 size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <p className="font-display text-3xl font-bold text-primary">{p.no}</p>
              <h3 className="mt-4 pr-8 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="pill px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
