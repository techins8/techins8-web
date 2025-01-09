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
import { Suspense } from "react";

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
  metadataBase: new URL('https://techins8.com'),
  title: {
    default: 'TechIns8 - Votre partenaire en recrutement tech',
    template: '%s | TechIns8'
  },
  description: 'TechIns8 est votre partenaire de confiance pour le recrutement tech. Trouvez les meilleurs talents ou votre prochain emploi dans la tech.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://techins8.com',
    siteName: 'TechIns8',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechIns8'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@techins8',
    creator: '@techins8'
  },
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WZZ3MFH5');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${poppins.variable}  ${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZZ3MFH5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <div className="relative flex min-h-screen flex-col bg-background">
          <div className="absolute inset-0 z-0 bg-cover bg-center"></div>

          <div className="relative z-10 flex flex-grow flex-col">
            <Nav />
            <main className="container mx-auto flex-grow max-w-[1170px] px-0 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex-1">
              <Suspense>
                <MetaPixel />
              </Suspense>
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
