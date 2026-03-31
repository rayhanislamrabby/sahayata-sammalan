import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Sahayata Sammalan | Standing Beside Humanity",
  description:
    "Sahayata Sammalan is a voluntary organization dedicated to empowering underprivileged communities in Bangladesh through social impact and collective support.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", 
  },

  keywords: [
    "Sahayata Sammalan",
    "Voluntary Organization Bangladesh",
    "Social Work Bangladesh",
    "Helping Underprivileged",
    "Charity Organization",
  ],

  alternates: {
    canonical: "https://sahayatasammalan.org",
  },

  openGraph: {
    title: "Sahayata Sammalan | Standing Beside Humanity",
    description:
      "Empowering communities and standing beside those in need. Join Sahayata Sammalan in creating a lasting social impact.",
    url: "https://sahayatasammalan.org",
    siteName: "Sahayata Sammalan",
    images: [
      {
        url: "/navlogo.png",
        width: 1200,
        height: 630,
        alt: "Sahayata Sammalan Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export const viewport = {
  themeColor: "#009661",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <NavBar />
        
        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}