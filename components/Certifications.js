import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Credentials
        </p>

        <h2 className="text-3xl font-bold mb-4">Selected Certifications</h2>

        <p className="text-gray-700 leading-8 max-w-3xl">
          A selected list of credentials that support my work in AI engineering,
          data science, cloud data fundamentals, and analytics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="border rounded-2xl p-5 flex gap-4 items-center hover:shadow-md transition"
          >
            <div className="w-16 h-16 rounded-xl border bg-white flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={cert.image}
                alt={`${cert.issuer} logo`}
                className="w-full h-full object-contain p-2"
              />
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
                  className="text-sm underline inline-block mt-2"
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