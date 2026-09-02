import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/projects";

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
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="card-surface spell-card group relative block p-7"
            >
              <ArrowUpRight className="absolute top-6 right-6 size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <p className="font-display text-3xl font-bold text-primary">{p.no}</p>
              <h3 className="mt-4 pr-8 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.slice(0, 3).map((t) => (
                  <li key={t} className="pill px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="cta-surface inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Open the book of projects <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
