import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "Mocha Craft",
  description: "Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
