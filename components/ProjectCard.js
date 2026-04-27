import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 flex flex-col">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

        <p className="text-gray-600 leading-7">{project.description}</p>
      </div>

      <div className="space-y-4 text-sm text-gray-700 mb-6">
        {project.problem && (
          <div>
            <p className="font-semibold text-black mb-1">Problem</p>
            <p className="leading-6">{project.problem}</p>
          </div>
        )}

        {project.approach && (
          <div>
            <p className="font-semibold text-black mb-1">Approach</p>
            <p className="leading-6">{project.approach}</p>
          </div>
        )}

        {project.output && (
          <div>
            <p className="font-semibold text-black mb-1">Output</p>
            <p className="leading-6">{project.output}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs border rounded-full px-3 py-1 text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-block px-4 py-2 bg-black text-white rounded-xl"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}