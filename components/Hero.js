import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#0353A4] mb-4">
            Business Analytics • Financial Intelligence • Data-Driven Strategy
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl text-[#061A40]">
            Rizki Anwar
          </h1>

          <p className="text-xl text-[#334155] max-w-3xl mb-8 leading-8">
            I build data-driven decision-support systems that connect business
            performance, financial analysis, forecasting, and machine learning.
            My work focuses on turning complex data into practical insights for
            strategy, planning, risk management, and profitability improvement.
          </p>

          <div className="flex flex-wrap gap-4">
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
              href="mailto:anwars.rizki@gmail.com"
              className="px-5 py-3 border border-[#B9D6F2] text-[#061A40] rounded-xl hover:bg-[#EAF4FF] transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs">
            <div className="absolute -inset-4 bg-[#EAF4FF] rounded-[2rem] -z-10" />

            <img
              src="/profile/rizki-profile.JPG"
              alt="Rizki Anwar"
              className="w-full rounded-[2rem] border border-[#D6E4F2] shadow-lg object-cover aspect-[4/5] bg-white"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Focus</p>
          <p className="font-semibold text-[#061A40] leading-6">
            Business Analytics & Financial Intelligence
          </p>
        </div>

        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Strength</p>
          <p className="font-semibold text-[#061A40] leading-6">
            Analytics, Modeling & Strategic Thinking
          </p>
        </div>

        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Current Interest</p>
          <p className="font-semibold text-[#061A40] leading-6">
            Risk Management, Business Planning & AI Decision Systems
          </p>
        </div>

        <div className="border border-[#D6E4F2] rounded-2xl p-5 bg-white">
          <p className="text-sm text-[#5B6B82] mb-2">Current Focus</p>
          <p className="font-semibold text-[#061A40] leading-6">
            Business Analytics, AI Systems & Financial Risk Modeling
          </p>
        </div>
      </div>
    </section>
  );
}