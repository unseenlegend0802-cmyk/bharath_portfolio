import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Kottapalli Bharath — Mechanical Design Engineer";
const description =
  "Portfolio of Kottapalli Bharath, Mechanical Engineering student skilled in SolidWorks, CATIA, CREO, ANSYS, FEA and CFD. ISRO-ISTRAC intern. View projects and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kottapalli Bharath. Built with care.
        </p>
      </footer>
    </div>
  );
}
