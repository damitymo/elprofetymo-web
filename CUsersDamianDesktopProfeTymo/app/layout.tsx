import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elprofetymo.com.ar"),
  title: {
    default: "El Profe Tymo · Damián De Jesús Tymoszuk",
    template: "%s · El Profe Tymo",
  },
  description:
    "Profe de programación, dev fullstack y eterno curioso. Cursos anuales, proyectos y blog técnico.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://elprofetymo.com.ar",
    siteName: "El Profe Tymo",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
