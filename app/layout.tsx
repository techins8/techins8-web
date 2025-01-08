import { Toaster } from "@/components/ui/sonner";
import { env } from "@/lib/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Poppins, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import Footer from "./footer";
import "./globals.css";
import Nav from "./nav";
import MetaPixel from "@/components/MetaPixel";

// Configuration de Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Techins8 - Les données pour les acteurs de la tech !",
  description:
    "TechIns8 est un tableau de bord destiné aux professionnels du secteur technologique français, offrant un accès à diverses données sur l'état du marché.",
  applicationName: "TechIns8",
  keywords: [
    "TechIns8",
    "TechIns8 Statistiques",
    "TechIns8 Data",
    "TechIns8 Dashboard",
  ],
  authors: [
    {
      name: "Lucien Arbieu",
      url: "https://www.linkedin.com/in/lucien-arbieu-developpeur-full-stack/",
    },
    { name: "Fahari Hamada Sidi", url: "https://www.linkedin.com/in/fahari/" },
  ],
  openGraph: {
    title: "TechIns8 - Les données pour les acteurs de la tech !",
    description:
      "TechIns8 est un tableau de bord destiné aux professionnels du secteur technologique français, offrant un accès à diverses données sur l'état du marché.",
    images: [
      {
        url: "/images/logo/logo-color.png",
        width: 300,
        height: 100,
      },
    ],
    siteName: "Techins8",
    locale: "fr-FR",
    type: "website",
    url: "https://techins8.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_GA_ID} />
        <MetaPixel />
      </head>
      <body className={`${poppins.variable}  ${inter.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col bg-background">
          <div className="absolute inset-0 z-0 bg-cover bg-center"></div>

          <div className="relative z-10 flex flex-grow flex-col">
            <Nav />
            <main className="container mx-auto flex-grow max-w-[1170px] px-0 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
        <Toaster
          expand={false}
          position="top-right"
          closeButton
          richColors
          duration={2000}
        />
        <Script
          defer
          src="https://umami.clf.techins8.com/script.js"
          data-website-id="23b0e7bf-5bf9-401f-876a-925f8a79b439"
        />
      </body>
    </html>
  );
}
