import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { projects } from "@/data/projects";
import { PageTransition } from "@/components/portfolio/PageTransition";

const title = "Projects — Kottapalli Bharath, Mechanical Design Engineer";
const description =
  "Mechanical design and simulation projects by Kottapalli Bharath: ISRO-ISTRAC power combiner, brake disc FEA, multi-stage rocket design, injection mold design and more.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="mx-auto max-w-6xl px-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Back to the castle
            </Link>

            <div className="mt-8">
              <SectionHeading light="The Book of" accent="Projects" />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Every enchantment documented — design intent, the tools of the craft and the results
              each project produced.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-surface spell-card group relative block p-7"
                >
                  <ArrowUpRight className="absolute top-6 right-6 size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  <p className="font-display text-3xl font-bold text-primary">{p.no}</p>
                  <p className="mt-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {p.house} · {p.period}
                  </p>
                  <h2 className="mt-2 pr-8 text-lg font-semibold">{p.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t} className="pill px-3 py-1 text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
