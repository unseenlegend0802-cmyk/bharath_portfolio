import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ScrollText, Sparkles } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { getProject, projects } from "@/data/projects";
import { PageTransition } from "@/components/portfolio/PageTransition";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} — Kottapalli Bharath`;
    const description = loaderData.project.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: loaderData.project.title,
            description,
            author: { "@type": "Person", name: "Kottapalli Bharath" },
            keywords: loaderData.project.tech.join(", "),
          }),
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <PageTransition>
      <div>
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-5">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase hover:text-primary"
            >
              <ArrowLeft className="size-4" /> All projects
            </Link>

            <p className="pill mt-8 inline-flex items-center gap-2 px-4 py-1.5 text-xs">
              <Sparkles className="size-3.5" /> {project.house} · {project.period}
            </p>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-primary flicker">{project.no}</span> {project.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">{project.role}</p>
            <p aria-hidden="true" className="rune-divider mt-6 text-xs">
              ✦ ⚯ ✦
            </p>

            <div className="card-surface spell-card mt-8 p-7">
              <h2 className="font-display text-lg font-semibold">The tale</h2>
              {project.overview.map((para) => (
                <p key={para} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>

            <div className="card-surface spell-card mt-6 p-7">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                <ScrollText className="size-5 shrink-0 text-primary" /> Results &amp; highlights
              </h2>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground">
                    ✦ {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface spell-card mt-6 p-7">
              <h2 className="font-display text-lg font-semibold">Tools of the craft</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="pill px-3 py-1.5 text-xs">
                    {t}
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <>
                  <h3 className="mt-6 text-sm tracking-widest text-muted-foreground uppercase">
                    Links
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {project.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          {l.label} <ArrowUpRight className="size-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <h2 className="mt-14 text-center font-display text-xs tracking-[0.22em] text-muted-foreground uppercase">
              More from the book
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-surface spell-card block p-5"
                >
                  <p className="font-display text-xl font-bold text-primary">{p.no}</p>
                  <p className="mt-2 text-sm font-semibold">{p.title}</p>
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
