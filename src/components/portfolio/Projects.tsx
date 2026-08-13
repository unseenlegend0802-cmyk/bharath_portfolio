import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    no: "01",
    title: "Fake Job Posting Detection System",
    body: "An intelligent fraud detection system that identifies fake job advertisements using NLP, machine learning and large language models.",
    tags: ["NLP", "Machine Learning", "LLMs", "Python"],
  },
  {
    no: "02",
    title: "Recruitment Data Pipeline",
    body: "Collected and processed job posting data from online recruitment platforms and Kaggle datasets, cleaning and structuring it for modelling.",
    tags: ["Pandas", "NumPy", "Data Cleaning"],
  },
  {
    no: "03",
    title: "Fraud Signal Feature Engineering",
    body: "Engineered features from salary patterns, company information, keywords and textual attributes to sharpen detection accuracy.",
    tags: ["Feature Engineering", "Statistics", "Power BI"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light="View My" accent="Work" />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground">
          Academic projects where I applied data science end to end — from raw data to insight.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.no} className="card-surface group relative p-7">
              <ArrowUpRight className="absolute top-6 right-6 size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <p className="font-display text-3xl font-bold text-primary">{p.no}</p>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
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
