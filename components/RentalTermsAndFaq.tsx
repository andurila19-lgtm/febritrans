"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/fleet";

export default function RentalTermsAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Bagaimana cara cek ketersediaan kendaraan?",
      answer:
        "Anda dapat menghubungi kami melalui WhatsApp di 0857-0415-5999 untuk menanyakan ketersediaan kendaraan yang diinginkan.",
    },
    {
      question: "Apakah tersedia rental lepas kunci?",
      answer:
        "Ya, kami menyediakan layanan rental lepas kunci. Untuk informasi persyaratan, silakan hubungi kami melalui WhatsApp.",
    },
    {
      question: "Apakah tersedia rental dengan driver?",
      answer:
        "Ya, tersedia layanan rental dengan driver untuk perjalanan dalam dan luar kota. Hubungi kami untuk informasi lebih lanjut.",
    },
    {
      question: "Berapa harga sewa kendaraan?",
      answer:
        "Harga sewa mulai dari Rp75.000/hari untuk motor dan Rp250.000/hari untuk mobil. Harga dapat menyesuaikan durasi dan kebutuhan sewa. Hubungi kami untuk detail harga.",
    },
    {
      question: "Apa saja persyaratan sewanya?",
      answer:
        "Persyaratan sewa dapat dikonfirmasi langsung melalui WhatsApp kami. Tim kami akan menginformasikan persyaratan yang berlaku.",
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 lg:py-24 bg-[#1E293B] text-white border-b border-slate-700/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Pertanyaan Umum
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Beberapa pertanyaan yang sering diajukan. Jika Anda memiliki pertanyaan lain, hubungi kami melalui WhatsApp.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0463bf] hover:bg-[#034e96] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors"
              >
                Tanya Syarat Sewa
              </a>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-slate-800/80 border-slate-600"
                      : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600"
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-heading font-semibold text-sm sm:text-base text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
