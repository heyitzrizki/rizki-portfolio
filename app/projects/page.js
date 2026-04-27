import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected data science, machine learning, and AI system projects by Rizki Anwar Syaifullah, covering credit risk, RAG systems, and operational analytics.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#061A40]">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-3">
          Projects
        </p>

        <h1 className="text-4xl font-bold mb-4 text-[#061A40]">
          All Projects
        </h1>

        <p className="text-[#334155] leading-8 max-w-3xl mb-8">
          A collection of applied data science, machine learning, and AI system
          projects focused on financial intelligence, risk modeling, document
          intelligence, and decision-support.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}