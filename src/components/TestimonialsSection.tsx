export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "Professional, helpful and very engaged with my guests.",
      author: "Jessica T.",
    },
    {
      quote:
        "Guests complimented how friendly and quick they were.",
      author: "Brandy R.",
    },
    {
      quote:
        "Excellent customer service and unique cocktails were a hit.",
      author: "Kelly H.",
    },
    {
      quote:
        "Professional, punctual and prepared for any event.",
      author: "Thorb T.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-400 font-semibold mb-5">
            Client Reviews
          </p>

          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Trusted Across Cincinnati
          </h2>

          <p className="text-white/60 text-lg">
            5.0 Rating • The Knot Reviews • Weddings & Private Events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-[#181818] border border-white/10 rounded-3xl p-8"
            >
              <div className="text-amber-400 text-2xl mb-5">
                ★★★★★
              </div>

              <p className="text-white/75 leading-relaxed mb-6">
                “{review.quote}”
              </p>

              <p className="text-white font-semibold">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://www.theknot.com/marketplace/bartender-with-a-smile-cincinnati-oh-2087539"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl hover:scale-105 transition"
          >
            <span className="font-semibold">
              Read More Reviews On The Knot
            </span>
          </a>

          <p className="mt-4 text-white/40 text-sm">
            Review excerpts adapted from public client reviews.
          </p>
        </div>
      </div>
    </section>
  );
}