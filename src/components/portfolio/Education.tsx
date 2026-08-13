import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const education = [
  {
    school: "Vignana Bharathi Institute of Technology (VBIT)",
    place: "Hyderabad, TS",
    period: "Expected April 2027",
    degree: "B.Tech, Data Science",
    gpa: "8.03 / 10.0",
    course:
      "Python Programming, SQL, Machine Learning, Data Analytics, Data Visualization, Statistics, Pandas, NumPy, AI Fundamentals.",
  },
  {
    school: "Government Polytechnic College, Masabtank",
    place: "Hyderabad, TS",
    period: "Jun 2021 – Apr 2024",
    degree: "Diploma in Electrical and Electronics Engineering",
    gpa: "9.43 / 10.0",
    course:
      "Electrical Machines, Power Systems, Power Electronics, Digital Electronics, Control Systems, Industrial Automation, PLC Fundamentals.",
  },
  {
    school: "Gurukula Social Welfare",
    place: "Alampur, Gadwal dist, TS",
    period: "Jun 2015 – Mar 2021",
    degree: "Matriculation – graduated with distinction",
    gpa: "10.0 / 10.0",
    course: "Foundation in science and mathematics.",
  },
];

const certifications = [
  "Getting Started with Artificial Intelligence — IBM SkillsBuild",
  "Programming Essentials in Python — Cisco Networking Academy",
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
        </div>
      </div>
    </section>
  );
}
