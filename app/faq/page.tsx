"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import { getWhatsAppBookingUrl, DISPLAY_PHONE } from "@/data/fleet";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: "Apakah Febri Trans melayani rental lepas kunci (tanpa sopir)?",
      a: "Ya, kami melayani sistem sewa lepas kunci baik untuk kendaraan mobil maupun sepeda motor dengan syarat verifikasi identitas (KTP, SIM, dan data pendukung) yang valid demi keamanan bersama.",
    },
    {
      q: "Dokumen apa saja yang wajib disiapkan untuk menyewa kendaraan?",
      a: "Penyewa wajib melampirkan foto KTP asli dan SIM aktif (SIM A untuk mobil atau SIM C untuk motor). Dokumen pendukung lain seperti Kartu Keluarga, ID Pegawai/Mahasiswa, atau tiket kedatangan kereta api dapat disertakan untuk mempercepat proses verifikasi.",
    },
    {
      q: "Bagaimana perhitungan durasi waktu sewa di Febri Trans?",
      a: "Perhitungan sewa harian standar adalah 24 jam penuh sejak waktu serah terima unit kendaraan dilakukan. Kami juga melayani permintaan sewa mingguan atau bulanan dengan penawaran harga khusus.",
    },
    {
      q: "Apakah unit kendaraan bisa diantar ke Stasiun Madiun atau hotel tempat menginap?",
      a: "Bisa. Kami melayani antar-jemput unit kendaraan ke Stasiun Kereta Api Madiun, terminal, hotel, maupun alamat tempat tinggal Anda di wilayah Kota Madiun sesuai kesepakatan jadwal sebelumnya.",
    },
    {
      q: "Apakah Febri Trans buka dan siap melayani 24 jam?",
      a: "Ya, Febri Trans buka 24 jam setiap hari. Layanan pelanggan kami siap menerima pertanyaan, konfirmasi ketersediaan unit, maupun serah terima kendaraan pada pagi, siang, sore, hingga malam hari.",
    },
    {
      q: "Bagaimana langkah mudah memesan atau booking kendaraan?",
      a: "Cukup hubungi WhatsApp kami di nomor 0857-0415-5999, sebutkan jenis armada yang diinginkan beserta tanggal dan jam pemakaian. Tim kami akan segera mengonfirmasi ketersediaan unit dan memandu proses serah terima.",
    },
    {
      q: "Apakah rental sepeda motor sudah dilengkapi helm dan jas hujan?",
      a: "Ya. Setiap penyewaan sepeda motor di Febri Trans sudah termasuk fasilitas 2 buah helm bersih berstandar SNI serta jas hujan untuk mengantisipasi cuaca selama perjalanan Anda.",
    },
    {
      q: "Apakah kendaraan mobil bisa digunakan untuk bepergian ke luar Kota Madiun?",
      a: "Bisa. Armada kami siap untuk perjalanan di wilayah Madiun Raya (Kota/Kab. Madiun, Magetan, Ponorogo, Ngawi) maupun rute luar kota lainnya. Pastikan Anda menginformasikan rute tujuan saat proses pemesanan awal.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Bantuan & Informasi"
          title="Pertanyaan yang Sering Diajukan"
          description="Temukan jawaban cepat seputar tata cara booking, kelengkapan dokumen, kebijakan durasi, dan layanan rental di Febri Trans Madiun."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "FAQ" },
          ]}
        />

        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Accordion Container */}
            <div className="bg-white border border-brand-border divide-y divide-brand-border">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="transition-colors">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between gap-4 focus:outline-none hover:bg-brand-surface/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-brand-dark pr-2">
                        {faq.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-brand-dark text-white border-brand-dark" : "text-brand-dark"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-brand-muted leading-relaxed">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Support CTA Callout */}
            <div className="bg-white border border-brand-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-xl font-bold text-brand-dark tracking-tight">
                  Butuh bantuan langsung atau informasi armada spesifik?
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted max-w-lg">
                  Staf kami siap melayani dan menjawab setiap pertanyaan Anda secara ramah melalui chat WhatsApp 24 jam.
                </p>
              </div>

              <a
                href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin bertanya lebih lanjut mengenai layanan rental.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya via WhatsApp ({DISPLAY_PHONE})</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
