import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "About Rizki Anwar Syaifullah, a Business Analytics graduate student focused on applied AI, financial machine learning, risk modeling, and data science systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          About
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Hi, I’m Rizki.
        </h1>

        <div className="space-y-6 text-lg leading-8 text-gray-800">
          <p>
            I’m Rizki Anwar Syaifullah, a Business Analytics graduate student at
            Ajou University in South Korea and a Global Korea Scholarship
            awardee. I’m interested in building data science and AI systems that
            are not only technically sound, but also useful for real business
            decisions.
          </p>

          <p>
            My focus is on applied machine learning, financial intelligence, and
            decision-support systems. I like projects where models are not only
            built to achieve good scores, but also designed to help people
            understand problems, evaluate risk, and make better decisions.
          </p>

          <p>
            I started from a management background, so I tend to approach data
            from both technical and business perspectives. Over time, I became
            more interested in how analytics, machine learning, and AI can be
            used to explain behavior, detect risk, identify opportunities, and
            support strategic decisions.
          </p>

          <p>
            Recently, I’ve been working on portfolio projects around credit risk
            scoring, financial early warning systems, local-first RAG, time
            series modeling, and business intelligence dashboards. I’m especially
            interested in systems that combine modeling, explainability, and
            practical user experience.
          </p>

          <p>
            I have also worked on projects involving digital marketing analytics,
            keyword market intelligence, Gen Z financial behavior, CRM, banking,
            and market research. These experiences helped me see data not just
            as rows and columns, but as signals that can tell a business story.
          </p>

          <p>
            I’m continuously strengthening my technical foundation through
            hands-on projects and certifications in AI engineering, cloud data
            fundamentals, deep learning, and data science. Some of my recent
            credentials include IBM AI Developer, Microsoft Azure Data
            Fundamentals, AI Engineer for Data Scientists Associate, and Data
            Science Bootcamp.
          </p>

          <p>
            Outside of projects, I like learning about finance, AI products,
            Korean business culture, and how real-world machine learning systems
            are designed, deployed, and used by people.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href="/projects"
            className="px-5 py-3 bg-black text-white rounded-xl"
          >
            View Projects
          </Link>

          <a
            href="https://github.com/heyitzrizki"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border rounded-xl"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rizkianw"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border rounded-xl"
          >
            LinkedIn
          </a>

          <a
            href="mailto:anwars.rizki@gmail.com"
            className="px-5 py-3 border rounded-xl"
          >
            Email
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}