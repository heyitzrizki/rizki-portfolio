import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import projects from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 max-w-2xl mb-10">
          A selection of AI, finance, and data science projects focused on
          practical problem-solving and real-world system design.
        </p>

        <h2 className="text-xl font-semibold mb-4">Main Projects</h2>
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