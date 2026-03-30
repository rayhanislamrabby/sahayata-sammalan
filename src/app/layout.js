import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "Sahayata Sammalan | Manush-er Pashe Amra",
  description:
    "Sahayata Sammalan ekti shechchashebi shongothon jeta somaj-er pichiye pora manush-er jonno kaj kore.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header>
          <NavBar />
        </header>

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
