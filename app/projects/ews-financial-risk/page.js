import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function EWSPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Project Detail
        </p>

        <h1 className="text-4xl font-bold mb-6">
          Early Warning System for Financial Risk
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700 leading-7">
              A regime-aware financial early warning system integrating
              connectedness analysis, regime detection, and machine learning
              to predict financial stress conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Core Idea</h2>
            <p className="text-gray-700 leading-7">
              The system captures dynamic relationships between financial
              variables and uses regime-switching models combined with
              predictive modeling to identify early signs of instability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <p className="text-gray-700 leading-7">
              Python, TVP-VAR, Hidden Markov Models, Deep Learning,
              time-series analysis.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}