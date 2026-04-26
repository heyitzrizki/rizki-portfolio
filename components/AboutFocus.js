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

          <div className="space-y-5 text-gray-700 leading-8">
            <p>
              I’m Rizki Anwar, a Business Analytics graduate student at Ajou
              University in South Korea and a Global Korea Scholarship awardee.
              I’m interested in building data science and AI systems that are
              not only technically sound, but also useful for real business
              decisions.
            </p>

            <p>
              My focus is on applied data science and AI systems for finance,
              risk modeling, and decision-support. I like projects where machine
              learning is not just used to get a good score, but to help people
              understand problems and make better decisions.
            </p>

            <p>
              I started from a management background, so I tend to look at data
              from both technical and business angles. I’ve worked on projects
              involving credit risk, financial early warning systems, Gen Z
              financial behavior, keyword market intelligence, and business
              dashboards.
            </p>

            <p>
              Recently, I’ve been building portfolio projects around credit
              intelligence, local-first RAG, time-series modeling, and
              deployable AI dashboards. I’m especially interested in systems that
              combine modeling, explainability, and practical user experience.
            </p>

            <p>
              I’m also continuously sharpening my technical foundation through
              certifications and hands-on learning, including IBM AI Developer,
              Microsoft Azure Data Fundamentals, DataCamp AI Engineer for Data
              Scientists Associate, and Data Science Bootcamp.
            </p>

            <p>
              You can find my projects on GitHub and my professional background
              on LinkedIn. I’m always interested in learning from people working
              on AI, finance, data products, and real-world machine learning
              systems.
            </p>
          </div>
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