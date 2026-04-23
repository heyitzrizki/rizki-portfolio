import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Rizki Portfolio
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}