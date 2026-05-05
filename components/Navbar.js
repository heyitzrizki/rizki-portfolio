import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#D6E4F2] bg-[#F8FBFF]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl text-[#061A40] hover:text-[#0353A4] transition"
        >
          Rizki Anwar
        </Link>

        <div className="flex flex-wrap justify-end gap-4 md:gap-6 text-sm text-[#061A40]">
          <Link href="/" className="hover:text-[#0353A4] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#0353A4] transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-[#0353A4] transition">
            Projects
          </Link>

          <a
            href="https://github.com/heyitzrizki"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0353A4] transition"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0353A4] transition"
          >
            Resume
          </a>

          <a
            href="mailto:anwars.rizki@gmail.com"
            className="hover:text-[#0353A4] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}