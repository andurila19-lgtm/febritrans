"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Apakah bisa sewa mobil lepas kunci untuk luar kota Madiun?",
      answer:
        "Bisa. Armada Febri Trans dapat digunakan untuk wilayah Karisidenan Madiun (Kota Madiun, Magetan, Ngawi, Ponorogo, Pacitan) hingga perjalanan antar-kota di Jawa Timur & Jawa Tengah. Cukup konfirmasikan rencana rute tujuan Anda kepada admin kami saat reservasi.",
    },
    {
      question: "Bagaimana hitungan durasi sewa harian 24 jam?",
      answer:
        "Sewa harian dihitung 24 jam penuh terhitung sejak jam serah terima kunci dilakukan. Sebagai contoh, jika serah terima dilakukan pukul 09.00 pagi hari ini, maka batas pengembalian unit adalah pukul 09.00 pagi keesokan harinya.",
    },
    {
      question: "Apakah unit motor bisa diantar ke Stasiun Madiun?",
      answer:
        "Sangat bisa. Kami menyediakan fasilitas antar-jemput unit motor matik langsung di lobi atau pintu keluar Stasiun Kereta Api Madiun. Unit diserahkan dalam kondisi bersih, tangki bensin terisi cukup, serta lengkap dengan 2 helm SNI higienis dan jas hujan di dalam bagasi.",
    },
    {
      question: "Bagaimana jika ingin sewa mendadak hari ini?",
      answer:
        "Kami siap melayani kebutuhan mendadak selama unit di Garasi Kelun masih tersedia. Silakan langsung hubungi customer service WhatsApp kami di 0857-0415-5999 agar tim kami bisa langsung mengecek ketersediaan mobil atau motor tercepat untuk Anda.",
    },
    {
      question: "Apakah tersedia paket sewa mobil plus driver dan bbm (all-in)?",
      answer:
        "Tentu saja. Bagi Anda yang menginginkan kenyamanan tanpa repot, kami menyediakan paket All-In (Mobil + Supir Ramah + BBM + Tol). Driver kami sangat menguasai jalur wisata Telaga Sarangan, Tawangmangu, hingga rute perkantoran Madiun Raya.",
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="max-w-xl mx-auto text-center mb-12 space-y-2">
          <div className="inline-flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#C89D42]">
            <HelpCircle className="w-4 h-4" />
            <span>Informasi Penting</span>
          </div>
          <h2 className="font-newsreader text-3xl sm:text-5xl font-normal text-[#121314] tracking-tight">
            Tanya Jawab Seputar Rental
          </h2>
          <p className="text-sm text-[#6E6B65]">
            Jawaban lengkap atas pertanyaan yang sering diajukan calon penyewa sebelum menyewa armada di Febri Trans.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#E2DFD8] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-newsreader text-lg sm:text-xl text-[#121314] font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-none border border-[#E2DFD8] bg-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#121314] text-white border-[#121314]" : "text-[#44474A]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm text-[#44474A] leading-relaxed border-t border-[#E2DFD8]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
