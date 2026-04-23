import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200">
      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

      <p className="text-gray-600 mb-5 leading-7">{project.description}</p>

      <p className="text-sm text-gray-700 mb-5">
        <span className="font-semibold">Tech:</span> {project.stack.join(", ")}
      </p>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-block px-4 py-2 bg-black text-white rounded-xl"
      >
        View Project
      </Link>
    </div>
  );
}