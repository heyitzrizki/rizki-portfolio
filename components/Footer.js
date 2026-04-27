export default function Footer() {
  return (
    <footer className="border-t border-[#D6E4F2] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-[#5B6B82] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© 2026 Rizki Anwar Syaifullah</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/heyitzrizki"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0353A4] transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rizkianw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0353A4] transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:anwars.rizki@gmail.com"
            className="hover:text-[#0353A4] transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}