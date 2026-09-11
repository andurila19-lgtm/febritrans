import { GOOGLE_REVIEWS_DATA, GOOGLE_MAPS_URL } from "@/data/fleet";

export default function GoogleReviewsSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ulasan Pelanggan
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Rating{" "}
              <span className="font-semibold text-slate-800">4,8</span> dari{" "}
              <span className="font-semibold text-slate-800">297+</span> ulasan di Google Maps.
            </p>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors self-start md:self-end"
          >
            <span>Lihat di Google Maps</span>
            <span>↗</span>
          </a>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GOOGLE_REVIEWS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-sm text-slate-600 leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="pt-5 mt-5 border-t border-slate-200">
                <h4 className="font-heading font-semibold text-sm text-slate-800">
                  {rev.name}
                </h4>
                <p className="text-xs text-slate-400">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
