import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutFocus from "../components/AboutFocus";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import projects from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <AboutFocus />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}