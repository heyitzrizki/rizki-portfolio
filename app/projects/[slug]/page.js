import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import projects from "../../../data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Rizki Anwar Syaifullah`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:text-black transition"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            {project.category || "Project"}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-gray-700 leading-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs border rounded-full px-3 py-1 text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-black text-white rounded-xl"
            >
              View Repository
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border rounded-xl"
              >
                Open Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="space-y-12">
          <ProjectSection title="Overview" content={project.overview} />
          <ProjectSection title="Problem" content={project.problem} />
          <ProjectSection title="System Design" content={project.systemDesign} />
          <ProjectSection title="Data / Method" content={project.dataMethod} />
          <ProjectSection title="Model / Pipeline" content={project.modelPipeline} />
          <ProjectSection title="Output" content={project.output} />
          <ProjectSection title="Limitations" content={project.limitations} />

          {project.images?.architecture && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
              <img
                src={project.images.architecture}
                alt={`${project.title} architecture`}
                className="w-full rounded-2xl border"
              />
            </section>
          )}

          {project.images?.dashboard && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">System Output</h2>
              <img
                src={project.images.dashboard}
                alt={`${project.title} dashboard`}
                className="w-full rounded-2xl border"
              />
            </section>
          )}

          <section>
            <h2 className="text-2xl font-semibold mb-4">GitHub / Demo</h2>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-black text-white rounded-xl"
              >
                View Repository
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 border rounded-xl"
                >
                  Open Live Demo
                </a>
              )}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectSection({ title, content }) {
  if (!content) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 leading-8">{content}</p>
    </section>
  );
}