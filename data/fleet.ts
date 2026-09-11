export interface Vehicle {
  id: string;
  name: string;
  startingPrice: string;
  priceNum: number;
  category: "mobil" | "motor";
  capacity: string;
  transmission: string;
  imageUrl: string;
}

export const DISPLAY_PHONE = "0857-0415-5999";
export const WHATSAPP_NUMBER = "6285704155999";
export const LOCATION_ADDRESS = "Kelun, Kec. Kartoharjo, Kota Madiun, Jawa Timur";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/cJbY3AfDVWTrxtFf8";

export const FLEET_DATA: Vehicle[] = [
  {
    id: "toyota-avanza",
    name: "Toyota Avanza",
    startingPrice: "Rp 300.000",
    priceNum: 300000,
    category: "mobil",
    capacity: "7 Orang",
    transmission: "Manual / Matic",
    imageUrl: "/images/fleet/avanza.jpg",
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    startingPrice: "Rp 500.000",
    priceNum: 500000,
    category: "mobil",
    capacity: "7 Orang",
    transmission: "Manual / Matic",
    imageUrl: "/images/fleet/innova.jpg",
  },
  {
    id: "honda-brio",
    name: "Honda Brio",
    startingPrice: "Rp 250.000",
    priceNum: 250000,
    category: "mobil",
    capacity: "5 Orang",
    transmission: "Matic",
    imageUrl: "/images/fleet/brio.jpg",
  },
  {
    id: "honda-calya",
    name: "Honda Calya",
    startingPrice: "Rp 275.000",
    priceNum: 275000,
    category: "mobil",
    capacity: "7 Orang",
    transmission: "Manual / Matic",
    imageUrl: "/images/fleet/calya.jpg",
  },
  {
    id: "honda-beat",
    name: "Honda Beat",
    startingPrice: "Rp 75.000",
    priceNum: 75000,
    category: "motor",
    capacity: "2 Orang",
    transmission: "Matic",
    imageUrl: "/images/fleet/beat.jpg",
  },
  {
    id: "honda-vario",
    name: "Honda Vario",
    startingPrice: "Rp 100.000",
    priceNum: 100000,
    category: "motor",
    capacity: "2 Orang",
    transmission: "Matic",
    imageUrl: "/images/fleet/vario.jpg",
  },
];

export function getWhatsAppBookingUrl(vehicleName: string = ""): string {
  const text = vehicleName
    ? `Halo Febri Trans, saya ingin menanyakan ketersediaan ${vehicleName}.`
    : "Halo Febri Trans, saya ingin menanyakan ketersediaan kendaraan.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const GOOGLE_REVIEWS_DATA = [
  {
    name: "Arief Pollo",
    role: "Local Guide",
    text: "Tempat ramah nyaman bersih dan ramah. Pelayanan cepat.",
    rating: 5,
  },
  {
    name: "Fery Andrian",
    role: "Local Guide",
    text: "Pengalaman saya jakarta pp dan melayani tamu sepenuh hati.",
    rating: 5,
  },
  {
    name: "Noor Hendra Tegar Saputra",
    role: "Local Guide",
    text: "Pelayanannya ramah dan juga drivernya sangat profesional.",
    rating: 5,
  },
];
