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
          <p className="text-gray-700 leading-8">
            My portfolio focuses on applied machine learning in finance and
            decision-support systems. I am especially interested in transforming
            technical research into systems that are interpretable, practical,
            and relevant to real-world business problems.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            What I Work On
          </p>
          <ul className="space-y-4 text-gray-700 leading-8">
            <li>• Credit risk scoring and probability calibration</li>
            <li>• Regime-aware financial early warning systems</li>
            <li>• Local-first RAG systems with privacy-focused inference</li>
            <li>• AI portfolios that connect modeling, UX, and deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}