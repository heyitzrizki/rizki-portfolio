import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="group border border-[#D6E4F2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 flex flex-col bg-white">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold mb-3 text-[#061A40] group-hover:text-[#0353A4] transition">
          {project.title}
        </h3>

        <p className="text-[#334155] leading-7">{project.description}</p>
      </div>

      <div className="space-y-3 text-sm text-[#334155] mb-6">
        {project.problem && (
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0353A4] mb-1">
              Problem
            </p>
            <p className="leading-6">{project.problem}</p>
          </div>
        )}

        {project.approach && (
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0353A4] mb-1">
              Approach
            </p>
            <p className="leading-6">{project.approach}</p>
          </div>
        )}

        {project.output && (
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0353A4] mb-1">
              Output
            </p>
            <p className="leading-6">{project.output}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs border border-[#B9D6F2] rounded-full px-3 py-1 text-[#061A40] bg-[#F8FBFF]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-block px-4 py-2 bg-[#061A40] text-white rounded-xl hover:bg-[#003559] transition"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}