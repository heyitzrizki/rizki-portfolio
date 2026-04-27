import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#D6E4F2] bg-[#F8FBFF]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl text-[#061A40] hover:text-[#0353A4] transition"
        >
          Rizki Anwar
        </Link>

        <div className="flex gap-6 text-sm text-[#061A40]">
          <Link href="/" className="hover:text-[#0353A4] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#0353A4] transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-[#0353A4] transition">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}