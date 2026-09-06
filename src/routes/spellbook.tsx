import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { PageTransition } from "@/components/portfolio/PageTransition";
import { spells } from "@/data/spells";

const title = "Spellbook — Enchantments of this Portfolio";
const description =
  "A Hogwarts-style spellbook: Lumos, Nox, Expelliarmus, Wingardium Leviosa and more, with what each incantation does on this site.";

export const Route = createFileRoute("/spellbook")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/spellbook" }],
  }),
  component: SpellbookPage,
});

function SpellbookPage() {
  return (
    <PageTransition>
      <div>
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="mx-auto max-w-5xl px-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Back to the castle
            </Link>

            <div className="mt-8">
              <SectionHeading light="The" accent="Spellbook" />
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                Hold the wand still anywhere on the site and a spell menu unfurls — each incantation
                below can be cast on the page.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {spells.map((spell) => (
                <article key={spell.id} className="card-surface spell-card p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-xl tracking-[0.08em] text-primary">
                      {spell.name}
                    </h2>
                    <span className="pill px-3 py-1 text-[10px] tracking-[0.18em] uppercase">
                      {spell.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground italic">
                    {spell.pronunciation} · {spell.incantationEffect}
                  </p>
                  <p className="mt-4 text-sm text-foreground/90">{spell.description}</p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-primary/90">
                    <Sparkles className="mt-0.5 size-4 shrink-0" />
                    {spell.onThisPage}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
