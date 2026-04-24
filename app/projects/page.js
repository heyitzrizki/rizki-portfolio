import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import projects from "../../../data/projects";

export default function PredictingDeliverySubtotalsPage() {
  const project = projects.find((p) => p.slug === "predicting-delivery-subtotals");

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            AI System • Delivery Cost Prediction
          </p>

          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

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
                Open Live Demo
              </a>
            )}

            {project.images.architecture && (
              <a
                href="#architecture"
                className="inline-block px-5 py-3 border rounded-xl"
              >
                See Architecture
              </a>
            )}
          </div>
        </div>

        {/* KEY CAPABILITIES */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
                  <ul className="space-y-3 text-gray-700 leading-7">
                    <li>• Predict the delivery price based on various factors</li>
                    <li>• Integrate real-time operational signals</li>
                    <li>• Support manual input for prediction adjustments</li>
                  </ul>
                </section>
        
                {/* ARCHITECTURE */}
                <section id="architecture">
                  <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        
                  <img
                    src={project.images.architecture}
                    alt="Architecture"
                    className="w-full rounded-2xl border"
                  />
                </section>
        
                {/* DASHBOARD */}
                {project.images.dashboard && (
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">System Output</h2>
        
                    <img
                      src={project.images.dashboard}
                      alt="Dashboard"
                      className="w-full rounded-2xl border"
                    />
                  </section>
                )}
        
                {/* EVALUATION */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Model Evaluation</h2>
                  <p className="text-gray-700 leading-7">
                    Evaluated using ROC-AUC, PR-AUC, Brier Score, and Expected Calibration Error,
                    with emphasis on calibrated probabilities and business usability.
                  </p>
                </section>
        
                {/* DESIGN */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Design Philosophy</h2>
                  <ul className="space-y-3 text-gray-700 leading-7">
                    <li>• Layered architecture: data, model, UI</li>
                    <li>• Production-oriented system design</li>
                    <li>• Interpretability over black-box performance</li>
                    <li>• Decision-support focus</li>
                  </ul>
                </section>
              </section>
        
              <Footer />
            </main>
          );
        }