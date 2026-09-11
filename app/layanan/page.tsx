import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import { getWhatsAppBookingUrl } from "@/data/fleet";
import {
  Key,
  UserCheck,
  Bike,
  Navigation,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Rental Mobil & Motor Madiun",
  description:
    "Pilihan layanan lengkap dari Febri Trans Madiun: Sewa Mobil Lepas Kunci, Sewa Mobil dengan Sopir, Rental Sepeda Motor Harian, dan Layanan Antar-Jemput Stasiun Madiun.",
};

export default function LayananPage() {
  const services = [
    {
      id: "lepas-kunci",
      icon: Key,
      badge: "Layanan Mandiri",
      title: "Sewa Mobil Lepas Kunci",
      tagline: "Kebebasan dan privasi penuh menyetir sendiri selama di Madiun.",
      description:
        "Layanan sewa mobil tanpa pengemudi yang memberikan Anda fleksibilitas waktu dan rute perjalanan tanpa batasan privasi. Sangat ideal untuk agenda keluarga, mudik, perjalanan dinas, maupun liburan santai bersama orang terdekat.",
      points: [
        "Fleksibilitas rute perjalanan sesuai agenda pribadi Anda",
        "Privasi berkendara penuh tanpa kehadiran pengemudi luar",
        "Pilihan unit transmisi Manual maupun Matic yang nyaman",
        "Unit diserahkan dalam keadaan bersih, wangi, dan bahan bakar memadai",
        "Syarat verifikasi dokumen mudah dan transparan",
      ],
      waMessage: "Halo Febri Trans, saya ingin menyewa mobil lepas kunci.",
    },
    {
      id: "dengan-driver",
      icon: UserCheck,
      badge: "Perjalanan Bebas Lelah",
      title: "Sewa Mobil dengan Sopir",
      tagline: "Fokus pada urusan Anda, biar pengemudi profesional kami yang mengantar.",
      description:
        "Opsi perjalanan eksklusif dan bebas stres. Driver kami berpengalaman, ramah, disiplin waktu, dan sangat mengenal jalanan di Madiun serta rute antarkota Jawa Timur seperti Magetan, Ngawi, Ponorogo, Solo, dan Surabaya.",
      points: [
        "Pengemudi ramah, terlatih, sopan, dan mengutamakan keselamatan",
        "Menguasai jalur jalan alternatif dan lokasi wisata atau kuliner lokal",
        "Cocok untuk tamu kedinasan, kunjungan bisnis, maupun ziarah keluarga",
        "Waktu penjemputan tepat waktu sesuai kesepakatan",
        "Tidak perlu lelah menyetir atau khawatir mencari tempat parkir",
      ],
      waMessage: "Halo Febri Trans, saya ingin memesan sewa mobil plus driver.",
    },
    {
      id: "rental-motor",
      icon: Bike,
      badge: "Gesit & Hemat",
      title: "Rental Sepeda Motor Madiun",
      tagline: "Transportasi roda dua lincah untuk mobilitas cepat di dalam kota.",
      description:
        "Solusi praktis dan paling ekonomis untuk menjelajah Kota Madiun tanpa hambatan kemacetan atau kesulitan mencari tempat parkir. Sangat digemari oleh wisatawan solo, backpacker, mahasiswa, hingga urusan dinas perorangan.",
      points: [
        "Tarif sangat terjangkau mulai dari Rp 75.000 per 24 jam",
        "Fasilitas lengkap: 2 unit helm bersih SNI dan jas hujan",
        "Motor matic terawat prima, tarikan enteng, dan hemat bahan bakar",
        "Mudah bermanuver di jalan raya maupun gang-gang kuliner Madiun",
        "Bisa diambil langsung di lokasi Kelun atau diantar ke stasiun",
      ],
      waMessage: "Halo Febri Trans, saya ingin rental motor harian di Madiun.",
    },
    {
      id: "antar-jemput",
      icon: Navigation,
      badge: "Titik Temu Praktis",
      title: "Layanan Antar-Jemput Stasiun & Hotel",
      tagline: "Kemudahan serah terima unit langsung di lokasi kedatangan Anda.",
      description:
        "Bagi Anda yang tiba di Kota Madiun menggunakan kereta api di Stasiun Madiun atau sedang menginap di hotel sekitar kota, kami menyediakan layanan pengantaran dan penjemputan unit kendaraan langsung ke lokasi Anda.",
      points: [
        "Bebas repot mencari transportasi lanjutan saat tiba di stasiun",
        "Koordinasi waktu penjemputan fleksibel sesuai jadwal kedatangan kereta",
        "Pengecekan dan serah terima unit langsung di area titik temu",
        "Tersedia untuk rental mobil maupun sepeda motor",
        "Konfirmasi mudah via WhatsApp sebelum jadwal kedatangan",
      ],
      waMessage: "Halo Febri Trans, saya ingin booking layanan antar jemput unit di Stasiun/Hotel Madiun.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Solusi Transportasi"
          title="Layanan Rental Febri Trans"
          description="Ragam opsi sewa kendaraan fleksibel untuk mendukung mobilitas Anda di Kota Madiun dan kota-kota sekitarnya dengan standar pelayanan profesional."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "Layanan" },
          ]}
        />

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {services.map((item, index) => {
              const IconComp = item.icon;
              const waLink = getWhatsAppBookingUrl("", item.waMessage);
              const isEven = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={`bg-white border border-brand-border p-8 md:p-12 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Left or Top Info */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-accent">
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                      {item.title}
                    </h2>

                    <p className="text-sm sm:text-base font-medium text-brand-dark">
                      {item.tagline}
                    </p>

                    <p className="text-sm text-brand-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                        Benefit & Keunggulan:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-brand-body">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Konsultasi Layanan Ini</span>
                      </a>

                      <Link
                        href="/armada"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-brand-surface border border-brand-border hover:bg-brand-dark hover:text-white text-brand-dark text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
                      >
                        <span>Lihat Pilihan Armada</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right or Side Graphic Box */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : ""}`}>
                    <div className="bg-brand-surface border border-brand-border p-8 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-brand-dark text-amber-500 flex items-center justify-center">
                        <IconComp className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-lg text-brand-dark">{item.title}</h4>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        Pemesanan cepat dan praktis dapat dilakukan langsung dengan menghubungi nomor WhatsApp admin Febri Trans.
                      </p>
                      <div className="pt-2">
                        <Link
                          href="/syarat-sewa"
                          className="text-xs font-semibold text-brand-accent hover:underline inline-flex items-center gap-1"
                        >
                          <span>Cek Ketentuan & Syarat Sewa</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
