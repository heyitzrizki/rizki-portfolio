import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
      <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-4">
        Data Science • AI Systems • Financial Intelligence
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl text-[#061A40]">
        Rizki Anwar Syaifullah
      </h1>

      <p className="text-xl text-[#334155] max-w-3xl mb-8 leading-8">
        I build applied AI and data science systems for finance, risk modeling,
        and intelligent decision-support. My work connects machine learning,
        analytics, and business strategy into practical, interpretable, and
        deployable solutions.
      </p>

      <div className="flex flex-wrap gap-4 mb-10">
        <Link
          href="/projects"
          className="px-5 py-3 bg-[#061A40] text-white rounded-xl hover:bg-[#003559] transition"
        >
          View Projects
        </Link>

        <a
          href="https://github.com/heyitzrizki"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 border border-[#B9D6F2] text-[#061A40] rounded-xl hover:bg-[#EAF4FF] transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rizkianw"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 border border-[#B9D6F2] text-[#061A40] rounded-xl hover:bg-[#EAF4FF] transition"
        >
          LinkedIn
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Focus</p>
          <p className="font-semibold text-[#061A40]">
            Applied AI & Financial Intelligence
          </p>
        </div>

        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Strength</p>
          <p className="font-semibold text-[#061A40]">
            Analytics, Modeling & Product Thinking
          </p>
        </div>

        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Current Interest</p>
          <p className="font-semibold text-[#061A40]">
            Credit Risk, Time Series, RAG Systems
          </p>
        </div>
      </div>
    </section>
  );
}