import { GOOGLE_REVIEWS_DATA, GOOGLE_MAPS_URL } from "@/data/fleet";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function GoogleReviewsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#FFFBF5] border-b border-amber-100/80 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider">
                ⭐ Testimoni Klien
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
                Pengalaman Nyata Pelanggan <br />
                <span className="text-amber-700">Febri Trans Madiun</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Ulasan asli dan terverifikasi dari para pelanggan kami di Google Maps Rating 4.9/5.0.
              </p>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-amber-200 text-amber-900 font-bold text-xs uppercase tracking-wider hover:bg-amber-50 shadow-sm transition-all duration-200 self-start md:self-end"
            >
              <span>Buka Google Maps Review</span>
              <span className="text-amber-600">↗</span>
            </a>
          </div>
        </ScrollReveal>

        {/* 3 Review Cards */}
        <ScrollReveal direction="up" staggerChildren={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {GOOGLE_REVIEWS_DATA.map((rev, idx) => (
              <ScrollRevealItem key={idx}>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-amber-100/90 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-300 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div className="space-y-4">
                    {/* 5 Rating Stars */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <svg
                            key={i}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Verified
                      </span>
                    </div>

                    <blockquote className="text-sm text-slate-700 italic leading-relaxed font-normal">
                      &ldquo;{rev.text}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author with Avatar */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-amber-200/60 shadow-sm"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-brand-blue transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal">
                        {rev.role}
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
