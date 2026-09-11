import Link from "next/link";
import {
  DISPLAY_PHONE,
  WHATSAPP_NUMBER,
  LOCATION_ADDRESS,
  GOOGLE_MAPS_URL,
  OPERATING_HOURS,
  getWhatsAppBookingUrl,
} from "@/data/fleet";
import { MapPin, Phone, MessageCircle, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-blue-700 rounded flex items-center justify-center text-white shadow-sm">
                <span className="font-heading font-black text-base text-white">
                  FT
                </span>
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                FEBRI TRANS
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              Penyedia jasa rental mobil dan motor terpercaya di Kota Madiun dan sekitarnya. Melayani sewa lepas kunci maupun dengan sopir berpengalaman.
            </p>

            {/* Google Rating Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800/80 border border-slate-700 rounded text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-white font-bold">4,8</span>
              <span className="text-slate-300">· 297+ Ulasan Google</span>
            </div>
          </div>

          {/* Col 2: Navigasi Halaman */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">
              Halaman
            </h4>
            <ul className="text-sm text-stone-400 space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/armada" className="hover:text-white transition-colors">
                  Pilihan Armada
                </Link>
              </li>
              <li>
                <Link href="/harga" className="hover:text-white transition-colors">
                  Daftar Harga
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Layanan Rental
                </Link>
              </li>
              <li>
                <Link href="/syarat-sewa" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak & Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Kami */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">
              Layanan
            </h4>
            <ul className="text-sm text-stone-400 space-y-2.5">
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors block">
                  <span className="text-stone-200 font-medium">Sewa Mobil Lepas Kunci</span>
                  <span className="block text-xs text-stone-500">Privasi perjalanan mandiri</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors block">
                  <span className="text-stone-200 font-medium">Sewa Mobil dengan Sopir</span>
                  <span className="block text-xs text-stone-500">Perjalanan dinas & wisata santai</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors block">
                  <span className="text-stone-200 font-medium">Rental Sepeda Motor</span>
                  <span className="block text-xs text-stone-500">Praktis & hemat di dalam kota</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors block">
                  <span className="text-stone-200 font-medium">Antar Jemput Stasiun / Hotel</span>
                  <span className="block text-xs text-stone-500">Kemudahan titik temu di Madiun</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Informasi Kontak & Jam */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">
              Kontak & Operasional
            </h4>
            <div className="text-sm text-stone-400 space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{OPERATING_HOURS}</p>
                  <p className="text-xs text-stone-500">Siap melayani kebutuhan darurat & malam hari</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${DISPLAY_PHONE.replace(/-/g, "")}`}
                    className="text-white font-medium hover:text-amber-400 transition-colors"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-medium hover:underline"
                  >
                    Chat WhatsApp Resmi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 text-xs">{LOCATION_ADDRESS}</p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs text-amber-500 hover:text-amber-400 font-medium"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Attribution */}
      <div className="border-t border-stone-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Febri Trans Madiun. All rights reserved.</p>
          <p>Rental Mobil & Motor Madiun • Kelun, Kartoharjo, Kota Madiun</p>
        </div>
      </div>
    </footer>
  );
}
