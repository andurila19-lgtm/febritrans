import { DISPLAY_PHONE, WHATSAPP_NUMBER, LOCATION_ADDRESS, GOOGLE_MAPS_URL } from "@/data/fleet";

export default function FinalCta() {
  return (
    <section className="w-full py-16 lg:py-24 bg-slate-900 text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: CTA */}
          <div className="space-y-5">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Hubungi Kami
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-md">
              Cek ketersediaan kendaraan dan booking melalui WhatsApp. Kami siap membantu kebutuhan perjalanan Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Halo Febri Trans, saya ingin menanyakan ketersediaan kendaraan."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold px-7 py-3.5 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 448 512" fill="#25D366" className="w-4 h-4" aria-hidden="true">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Booking WhatsApp
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-bold px-7 py-3.5 rounded-lg border border-white/10 transition-colors"
              >
                {DISPLAY_PHONE}
              </a>
            </div>
          </div>

          {/* Right: Location */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#01abe8]">
                Berbasis di Madiun
              </p>
              <h3 className="font-heading font-bold text-xl text-white">
                Febri Trans Madiun
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {LOCATION_ADDRESS}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>Buka 24 Jam</span>
              <span className="text-slate-600">·</span>
              <span>WhatsApp {DISPLAY_PHONE}</span>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#01abe8] hover:text-white transition-colors pt-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
