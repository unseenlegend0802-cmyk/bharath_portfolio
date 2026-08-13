import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const education = [
  {
    school: "Hindustan Institute of Technology and Science (HITS)",
    place: "Chennai, TN",
    period: "Expected April 2026",
    degree: "B.E., Mechanical Engineering",
    gpa: "8.88 / 10.0",
    course: "Thermodynamics, Strength of Materials, CAD/CAE, Heat and Mass Transfer, FEM.",
  },
  {
    school: "Central Institute of Plastics Engineering & Technology (CIPET)",
    place: "Secunderabad, TS",
    period: "Aug 2021 – Jan 2023",
    degree: "Post Diploma in Plastic Mold Design using CAD/CAM",
    gpa: "9.14 / 10.0",
    course: "Plastic Materials, Mold Design, Product Design, Rapid Prototyping, CNC Machining.",
  },
  {
    school: "Government Polytechnic College, Masabtank",
    place: "Hyderabad, TS",
    period: "Jun 2018 – Apr 2021",
    degree: "Diploma in Automobile Engineering",
    gpa: "9.2 / 10.0",
    course:
      "Thermal Engineering, Automobile Electrical Systems, CAD, Basics of Automobile Engineering.",
  },
];

const certifications = [
  "Academic Excellence Award 2025–26 (also 2023–24 & 2024–25)",
  "ISRO-ISTRAC Internship Certificate — 2025",
  "Rocket Design Internship Certificate — 2024",
  "PALS Tinkathon 2024–25 — Project workshop at IIT Madras",
  "ICT Design Week 2025 — Sri Sairam Engineering College, Chennai",
  "1st Prize — Designography, MechArena, Osmania University — 2023",
  "AutoCAD 2D & 3D Training (CISTOCADD)",
  "Matriculation with distinction — Newgen School of Excellence (8.8 / 10)",
];

const publications = [
  "“Studies on Radial Ventilated Disc Brake Materials — Effect of Metal Matrix Composite Materials using FEA in Automotive Brake Disc”, Advances in Additive Manufacturing Technologies, Taylor & Francis, 2024.",
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="Education" accent="& Certifications" />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {education.map((e) => (
            <article key={e.school} className="card-surface p-6">
              <GraduationCap className="size-6 text-primary" />
              <p className="mt-4 text-xs tracking-widest text-muted-foreground uppercase">
                {e.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{e.degree}</h3>
              <p className="mt-1 text-sm text-primary">{e.school}</p>
              <p className="text-xs text-muted-foreground">{e.place}</p>
              <p className="mt-3 text-sm font-medium">GPA: {e.gpa}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.course}</p>
            </article>
          ))}
        </div>

        <div className="card-surface mt-6 p-6">
          <div className="flex min-w-0 items-center gap-3">
            <Award className="size-6 shrink-0 text-primary" />
            <h3 className="truncate text-lg font-semibold">Certifications &amp; Achievements</h3>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-muted-foreground">
                • {c}
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm tracking-widest text-muted-foreground uppercase">
            Publications
          </h4>
          <ul className="mt-2 grid gap-2">
            {publications.map((p) => (
              <li key={p} className="text-sm text-muted-foreground">
                • {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
