import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import projects from "../../../data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "../../../components/ImageLightbox";

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
    <main className="min-h-screen bg-[#F8FBFF] text-[#061A40]">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <Link
          href="/projects"
          className="text-sm text-[#5B6B82] hover:text-[#0353A4] transition"
        >
          ← Back to Projects
        </Link>

        <header className="mt-8 mb-12 border-b border-[#D6E4F2] pb-10">
          <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-4">
            {project.category || "Project"}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#061A40]">
            {project.title}
          </h1>

          <p className="text-lg text-[#334155] leading-8 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs border border-[#B9D6F2] rounded-full px-3 py-1 text-[#061A40] bg-white"
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
              className="px-5 py-3 bg-[#061A40] text-white rounded-xl hover:bg-[#003559] transition"
            >
              View Repository
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-[#B9D6F2] text-[#061A40] rounded-xl hover:bg-[#EAF4FF] transition"
              >
                Open Live Demo
              </a>
            )}
          </div>
        </header>

        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <aside className="hidden md:block">
            <div className="sticky top-8 text-sm text-[#5B6B82] space-y-3">
              <p className="font-semibold text-[#061A40] mb-4">Case Study</p>
              <a href="#overview" className="block hover:text-[#0353A4] transition">
                Overview
              </a>
              <a href="#problem" className="block hover:text-[#0353A4] transition">
                Problem
              </a>
              <a href="#system-design" className="block hover:text-[#0353A4] transition">
                System Design
              </a>
              <a href="#data-method" className="block hover:text-[#0353A4] transition">
                Data / Method
              </a>
              <a href="#model-pipeline" className="block hover:text-[#0353A4] transition">
                Model / Pipeline
              </a>
              <a href="#output" className="block hover:text-[#0353A4] transition">
                Output
              </a>
              <a href="#limitations" className="block hover:text-[#0353A4] transition">
                Limitations
              </a>
            </div>
          </aside>

          <div className="space-y-10">
            <ProjectSection id="overview" title="Overview" content={project.overview} />
            <ProjectSection id="problem" title="Problem" content={project.problem} />
            <ProjectSection id="system-design" title="System Design" content={project.systemDesign} />
            <ProjectSection id="data-method" title="Data / Method" content={project.dataMethod} />
            <ProjectSection id="model-pipeline" title="Model / Pipeline" content={project.modelPipeline} />
            <ProjectSection id="output" title="Output" content={project.output} />
            <ProjectSection id="limitations" title="Limitations" content={project.limitations} />

            {project.images?.architecture && (
              <section className="pt-4">
                <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-3">
                  Architecture
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-[#061A40]">
                  System Architecture
                </h2>
                <ImageLightbox
                  src={project.images.architecture}
                  alt={`${project.title} architecture`}
                  className="w-full rounded-2xl border border-[#D6E4F2] cursor-zoom-in"
                />
              </section>
            )}

            {project.images?.dashboard && (
              <section className="pt-4">
                <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-3">
                  Output
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-[#061A40]">
                  System Output
                </h2>
                <ImageLightbox
                  src={project.images.dashboard}
                  alt={`${project.title} dashboard`}
                  className="w-full rounded-2xl border border-[#D6E4F2] cursor-zoom-in"
                />
              </section>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectSection({ id, title, content }) {
  if (!content) return null;

  return (
    <section id={id} className="border-b border-[#D6E4F2] pb-8 scroll-mt-24">
      <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-3">
        {title}
      </p>

      <p className="text-[#334155] leading-8">{content}</p>
    </section>
  );
}