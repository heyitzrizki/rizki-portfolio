export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© 2026 Rizki Anwar Syaifullah</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/heyitzrizki"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rizkianw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:anwars.rizki@gmail.com"
            className="hover:text-black transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}