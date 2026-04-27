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
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Projects
        </p>

        <h1 className="text-4xl font-bold mb-4">All Projects</h1>

        <p className="text-gray-700 leading-8 max-w-3xl mb-8">
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