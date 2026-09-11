"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import {
  DISPLAY_PHONE,
  WHATSAPP_NUMBER,
  LOCATION_ADDRESS,
  GOOGLE_MAPS_URL,
  OPERATING_HOURS,
  FLEET_DATA,
} from "@/data/fleet";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function KontakPage() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState(FLEET_DATA[0].name);
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("1 Hari (24 Jam)");
  const [serviceType, setServiceType] = useState("Lepas Kunci");
  const [notes, setNotes] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Halo Febri Trans, saya ingin reservasi rental kendaraan:%0A`;
    if (name) message += `• Nama: ${name}%0A`;
    message += `• Kendaraan: ${vehicle}%0A`;
    message += `• Layanan: ${serviceType}%0A`;
    message += `• Durasi: ${duration}%0A`;
    if (date) message += `• Tanggal Mulai: ${date}%0A`;
    if (notes) message += `• Catatan: ${notes}%0A`;
    message += `%0AMohon info ketersediaan unit dan total tarifnya. Terima kasih.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Hubungi Kami"
          title="Kontak & Lokasi Febri Trans"
          description="Layanan pelanggan kami siap merespons kebutuhan sewa kendaraan Anda 24 jam setiap hari di Kota Madiun."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "Kontak" },
          ]}
        />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Direct Info Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border border-brand-border p-7 space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight">
                      Febri Trans Madiun
                    </h2>
                    <p className="text-xs text-brand-muted mt-1">
                      Rental Mobil & Motor Terpercaya di Kota Madiun
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-brand-body">
                    {/* Alamat */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                          Alamat Garasi
                        </span>
                        <p className="text-xs text-brand-muted leading-relaxed mt-0.5">
                          {LOCATION_ADDRESS}
                        </p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-brand-accent hover:underline font-semibold mt-1"
                        >
                          <span>Petunjuk Arah Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp & Telepon */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                          Telepon / WhatsApp
                        </span>
                        <a
                          href={`tel:${DISPLAY_PHONE.replace(/-/g, "")}`}
                          className="text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors block mt-0.5"
                        >
                          {DISPLAY_PHONE}
                        </a>
                        <span className="text-[11px] text-emerald-600 font-medium">
                          Aktif 24 Jam Setiap Hari
                        </span>
                      </div>
                    </div>

                    {/* Jam Buka */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                          Jam Operasional
                        </span>
                        <p className="text-xs text-brand-dark font-semibold mt-0.5">
                          {OPERATING_HOURS}
                        </p>
                        <p className="text-[11px] text-brand-muted">
                          Melayani serah terima pagi, siang, sore, hingga malam.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-border">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        "Halo Febri Trans, saya ingin menanyakan ketersediaan kendaraan."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat WhatsApp Langsung</span>
                    </a>
                  </div>
                </div>

                {/* Google Map Embed/Card */}
                <div className="bg-white border border-brand-border p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Peta Lokasi
                    </span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-accent hover:underline font-medium"
                    >
                      Buka di App Maps →
                    </a>
                  </div>
                  <div className="relative aspect-[16/9] w-full bg-brand-surface border border-brand-border overflow-hidden">
                    <iframe
                      title="Peta Lokasi Febri Trans Madiun"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5828453472097!2d111.5348825!3d-7.6202877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be0d10b7b1eb%3A0x6a0a0dfcce9e3e7f!2sFebri%20Trans!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-[11px] text-brand-muted">
                    Kelun, Kartoharjo, Kota Madiun, Jawa Timur.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Fast Reservation Form */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-brand-border p-7 md:p-9 space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
                      Format Reservasi WhatsApp
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                      Isi rincian rencana sewa Anda. Formulir ini otomatis menyiapkan pesan rapi untuk dikirimkan ke WhatsApp resmi kami.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                          Nama Pemesan
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Contoh: Budi Santoso"
                          className="w-full px-3.5 py-2.5 bg-brand-surface border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                        />
                      </div>

                      {/* Choice of vehicle */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                          Pilihan Armada
                        </label>
                        <select
                          value={vehicle}
                          onChange={(e) => setVehicle(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-brand-surface border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                        >
                          {FLEET_DATA.map((v) => (
                            <option key={v.id} value={v.name}>
                              {v.name} ({v.startingPrice}/hari)
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Service Type */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                          Tipe Layanan
                        </label>
                        <select
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-brand-surface border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                        >
                          <option value="Lepas Kunci">Lepas Kunci</option>
                          <option value="Dengan Sopir">Dengan Sopir</option>
                          <option value="Antar-Jemput Stasiun">Antar-Jemput Stasiun</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                          Tanggal Sewa
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-brand-surface border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                        />
                      </div>

                      {/* Duration */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                          Perkiraan Durasi
                        </label>
                        <select
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-brand-surface border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                        >
                          <option value="1 Hari (24 Jam)">1 Hari (24 Jam)</option>
                          <option value="2 Hari">2 Hari</option>
                          <option value="3 Hari">3 Hari</option>
                          <option value="1 Minggu (Diskon)">1 Minggu (Diskon)</option>
                          <option value="Lebih dari 1 Minggu">Lebih dari 1 Minggu</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                        Catatan Tambahan (Rute / Lokasi Jemput)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Contoh: Jemput di Stasiun Madiun jam 08.00 pagi, tujuan keliling kota dan Magetan..."
                        className="w-full px-3.5 py-2.5 bg-brand-surface border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Permintaan Reservasi ke WhatsApp</span>
                    </button>
                  </form>

                  <div className="pt-4 border-t border-brand-border flex items-center gap-2 text-xs text-brand-muted">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Data Anda aman dan diteruskan langsung ke WhatsApp resmi Febri Trans.</span>
                  </div>
                </div>
              </div>
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
