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
  title: {
    default: "Febri Trans Madiun — Rental Mobil & Motor Madiun",
    template: "%s | Febri Trans Madiun",
  },
  description:
    "Layanan sewa mobil dan motor di Kota Madiun. Buka 24 jam. Siap lepas kunci atau dengan sopir. Rating 4,8 dari 297+ ulasan Google. WhatsApp: 0857-0415-5999.",
  keywords: [
    "Rental Mobil Madiun",
    "Sewa Mobil Madiun",
    "Rental Motor Madiun",
    "Sewa Avanza Madiun",
    "Sewa Innova Madiun",
    "Sewa Brio Madiun",
    "Rental Mobil Lepas Kunci Madiun",
    "Febri Trans Madiun",
  ],
  authors: [{ name: "Febri Trans Madiun" }],
  creator: "Febri Trans Madiun",
  publisher: "Febri Trans Madiun",
  metadataBase: new URL("https://febritrans.com"),
  openGraph: {
    title: "Febri Trans Madiun — Rental Mobil & Motor",
    description:
      "Layanan sewa mobil dan motor di Kota Madiun. Buka 24 jam. Rating 4,8 dari 297+ ulasan Google.",
    url: "https://febritrans.com",
    siteName: "Febri Trans Madiun",
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
      <body className="bg-brand-bg text-brand-body font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
