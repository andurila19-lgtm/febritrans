import { GOOGLE_REVIEWS_DATA, GOOGLE_MAPS_URL } from "@/data/fleet";
import { Star, ExternalLink } from "lucide-react";

export default function GoogleReviewsSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
              Reputasi & Kepuasan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Rating 4,8 dari 297+ Ulasan Google
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 max-w-[60ch]">
              Ulasan asli dari pelanggan yang telah menggunakan jasa rental mobil dan motor Febri Trans di Madiun.
            </p>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 rounded transition-all shrink-0 whitespace-nowrap "
          >
            <span>Buka Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="font-bold text-xs sm:text-sm text-slate-900">{rev.name}</p>
                <p className="text-[11px] text-slate-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
