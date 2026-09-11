import Link from "next/link";
import {
  DISPLAY_PHONE,
  WHATSAPP_NUMBER,
  LOCATION_ADDRESS,
  GOOGLE_MAPS_URL,
} from "@/data/fleet";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2547] text-white border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#0463bf] flex items-center justify-center font-black text-white text-base">
                FT
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                Febri Trans Madiun
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Rental mobil dan motor di Kota Madiun. Buka 24 jam.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0463bf] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Google Maps"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase text-slate-300 tracking-wider">
              Navigasi
            </h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#armada" className="hover:text-white transition-colors">
                  Armada & Harga
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase text-slate-300 tracking-wider">
              Kontak
            </h4>
            <div className="text-sm text-slate-400 space-y-2 leading-relaxed">
              <p className="font-semibold text-white">
                Febri Trans Madiun
              </p>
              <p>{LOCATION_ADDRESS}</p>
              <p>
                <span className="text-slate-500">WhatsApp: </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01abe8] font-semibold hover:underline"
                >
                  {DISPLAY_PHONE}
                </a>
              </p>
              <p className="text-slate-500">Buka 24 Jam</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Febri Trans Madiun</p>
          <p>Rental Mobil & Motor · Kota Madiun, Jawa Timur</p>
        </div>
      </div>
    </footer>
  );
}
