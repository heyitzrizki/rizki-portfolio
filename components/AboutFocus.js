import Link from "next/link";

export default function AboutFocus() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            About
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Building useful systems, not just models
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            I’m a Business Analytics graduate student at Ajou University in
            South Korea and a Global Korea Scholarship awardee. My portfolio
            focuses on applied data science, machine learning, and AI-powered
            decision-support systems.
          </p>

          <Link
            href="/about"
            className="inline-block px-5 py-3 border rounded-xl"
          >
            More About Me
          </Link>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            What I Work On
          </p>

          <ul className="space-y-4 text-gray-700 leading-8">
            <li>• Credit risk scoring, probability calibration, and explainable AI</li>
            <li>• Financial time-series modeling and regime-aware early warning systems</li>
            <li>• Local-first RAG systems for document intelligence and private AI workflows</li>
            <li>• Business intelligence dashboards using Python, SQL, Power BI, and Looker Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}