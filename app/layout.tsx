import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "B Bouwadvies | Onafhankelijk Bouwkundig Advies",
  description:
    "Onafhankelijk bouwkundig advies met focus op inzicht en kwaliteit. Van technische beoordeling tot strategisch meedenken. Altijd helder, zorgvuldig en onderbouwd.",
  keywords: [
    "bouwkundig advies",
    "bouwkundige keuring",
    "technische inspectie",
    "aankoopkeuring",
    "Nederland",
  ],
};

export const viewport: Viewport = {
  themeColor: "#f9f9f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsapp />
        <Analytics />
      </body>
    </html>
  );
}
