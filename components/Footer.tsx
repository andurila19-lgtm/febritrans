import Link from "next/link";
import {
  DISPLAY_PHONE,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  LOCATION_ADDRESS,
  GOOGLE_MAPS_URL,
} from "@/data/fleet";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0F2547] to-[#071326] text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-black text-white text-base shadow-md">
                FT
              </div>
              <span className="font-heading font-black text-lg tracking-tight text-white uppercase">
                Febri Trans <span className="text-brand-cyan">Madiun</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Penyedia jasa rental mobil dinas instansi, sewa hiace rombongan, dan motor harian terpercaya di Kota Madiun. Melayani perjalanan kedinasan, korporasi, wisata, dan antar-jemput stasiun 24 jam.
            </p>

            <div className="pt-1 flex items-center gap-3 text-slate-300">
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Google Maps"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase text-brand-cyan tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 font-normal">
              <li>
                <Link href="/" className="hover:text-brand-cyan transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-brand-cyan transition-colors">
                  Layanan Rental
                </Link>
              </li>
              <li>
                <Link href="/armada" className="hover:text-brand-cyan transition-colors">
                  Katalog Armada &amp; Tarif
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-brand-cyan transition-colors">
                  Tentang Kami &amp; Legalitas
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-brand-cyan transition-colors">
                  Syarat Sewa &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-brand-cyan transition-colors">
                  Kontak &amp; Lokasi Garasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Legalitas & Keunggulan */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase text-brand-cyan tracking-wider">
              Legalitas &amp; Jaminan
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 font-normal">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Dokumen legalitas CV resmi</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Kuitansi bermaterai untuk SPJ dinas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Faktur resmi &amp; stempel sah</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Garansi unit pengganti 24 jam</span>
              </li>
            </ul>
          </div>

          {/* Kontak Langsung */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase text-brand-cyan tracking-wider">
              Garasi &amp; Kontak
            </h4>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed font-normal">
              <p className="font-semibold text-white">
                Garasi Febri Trans Madiun
              </p>
              <p className="text-slate-300">
                Kel. Kelun, Kec. Kartoharjo, Kota Madiun, Jawa Timur
              </p>
              <p className="pt-1">
                <span className="text-slate-400">WhatsApp: </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cyan font-bold hover:underline"
                >
                  {DISPLAY_PHONE}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email: </span>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-slate-300 hover:text-brand-cyan transition-colors"
                >
                  {EMAIL_ADDRESS}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10 py-5 bg-black/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} CV FEBRI TRANS MADIUN. Hak Cipta Dilindungi.</p>
          <p className="text-slate-400">
            Sewa Rental Mobil Dinas &amp; Motor Kota Madiun Jawa Timur
          </p>
        </div>
      </div>
    </footer>
  );
}
