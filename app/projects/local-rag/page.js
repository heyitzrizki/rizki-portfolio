import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import projects from "../../../data/projects";

export default function LocalRAGPage() {
  const project = projects.find((p) => p.slug === "local-rag");

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            AI System • RAG
          </p>

          <h1 className="text-4xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-gray-700 leading-8 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-3 bg-black text-white rounded-xl"
            >
              View Repository
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-3 border rounded-xl"
              >
                Open Demo
              </a>
            )}
          </div>
        </div>

        {/* ARCHITECTURE */}
        {project.images.architecture && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

            <img
              src={project.images.architecture}
              alt="Architecture"
              className="w-full rounded-2xl border"
            />
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 leading-7">
            This system demonstrates a local-first retrieval-augmented generation
            pipeline designed to run without external APIs, focusing on privacy,
            control, and cost efficiency.
          </p>
        </section>
      </section>

      <Footer />
    </main>
  );
}