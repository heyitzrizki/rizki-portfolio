import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Credentials
        </p>

        <h2 className="text-3xl font-bold mb-4 text-[#061A40]">Credentials & Certifications</h2>

        <p className="text-[#334155] leading-8 max-w-3xl">
          Selected credentials that support my work in AI engineering, data
          science, cloud data fundamentals, and analytics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="border rounded-2xl p-5 flex gap-4 items-center bg-white hover:shadow-md hover:-translate-y-0.5 transition duration-200"
          >
            <div className="w-16 h-16 rounded-xl border bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-xs font-semibold text-gray-500 text-center px-2 leading-4">
                  {cert.issuer}
                </span>
              )}
            </div>

            <div>
              <h3 className="font-semibold leading-6">{cert.name}</h3>

              <p className="text-sm text-gray-600 mt-1">
                {cert.issuer} · {cert.date}
              </p>

              {cert.credential && (
                <p className="text-xs text-gray-500 mt-1">
                  Credential ID: {cert.credential}
                </p>
              )}

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline inline-block mt-2 hover:text-black transition"
                >
                  Show credential
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}