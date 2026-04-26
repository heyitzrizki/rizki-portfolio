import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        Data Science • AI Systems • Financial Intelligence
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
        Rizki Anwar Syaifullah
      </h1>

      <p className="text-xl text-gray-700 max-w-3xl mb-8 leading-8">
        I am a Business Analytics graduate student at Ajou University and a Global
        Korea Scholarship awardee, building applied AI and data science systems for
        finance, risk modeling, and intelligent decision-support. My work connects
        machine learning, analytics, and business strategy into practical,
        interpretable, and deployable solutions.
      </p>

      <div className="flex flex-wrap gap-4 mb-10">
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
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
        <div className="border rounded-2xl p-5">
          <p className="text-sm text-gray-500 mb-2">Focus</p>
          <p className="font-semibold">Applied AI & Financial Intelligence</p>
        </div>

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-gray-500 mb-2">Strength</p>
          <p className="font-semibold">Analytics, Modeling, & Product Thinking</p>
        </div>

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-gray-500 mb-2">Current Interest</p>
          <p className="font-semibold">Credit Risk, Time Series, RAG Systems</p>
        </div>
      </div>
    </section>
  );
}