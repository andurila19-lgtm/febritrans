import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FEBRI TRANS | SEWA RENTAL MOBIL DINAS & MOTOR MADIUN",
  description:
    "Spesialis perjalanan bisnis, dinas, dan wisata di Kota Madiun & Jawa Timur. Siapkan armada mobil dan motor terawat serta sopir profesional. WhatsApp 0857-0415-5999 buka 24 jam.",
  keywords: [
    "Rental Mobil Madiun",
    "Sewa Mobil Dinas Madiun",
    "Rental Mobil Madiun Murah",
    "Sewa Avanza Madiun",
    "Sewa Innova Reborn Madiun",
    "Sewa Innova Zenix Madiun",
    "Rental Hiace Madiun",
    "Rental Motor Madiun",
    "Rental Mobil Lepas Kunci Madiun",
    "Febri Trans Madiun",
  ],
  authors: [{ name: "CV FEBRI TRANS MADIUN" }],
  creator: "Febri Trans",
  publisher: "Febri Trans",
  metadataBase: new URL("https://febritrans.com"),
  openGraph: {
    title: "FEBRI TRANS | SEWA RENTAL MOBIL DINAS & MOTOR MADIUN",
    description:
      "Spesialis perjalanan bisnis, dinas, dan wisata Madiun Raya. Armada prima, sopir profesional, harga transparan, dan dokumen invoice resmi.",
    url: "https://febritrans.com",
    siteName: "FEBRI TRANS Madiun",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-[#F7FAFC] text-[#2D3748] font-sans antialiased selection:bg-[#0463bf] selection:text-white">
        {children}
      </body>
    </html>
  );
}
