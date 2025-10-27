import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/lib/env";
import Footer from "./footer";
import "./globals.css";
import Nav from "./nav";
import { PostHogProvider } from "./providers";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://freemat.ch"),
  title: {
    default: "FreeMatch - Votre partenaire en recrutement tech",
    template: "%s | FreeMatch",
  },
  description:
    "FreeMatch est votre partenaire de confiance pour le recrutement tech. Trouvez les meilleurs talents ou votre prochain emploi dans la tech.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://freemat.ch",
    siteName: "FreeMatch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FreeMatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freematch",
    creator: "@freematch",
  },
  applicationName: "FreeMatch",
  keywords: ["FreeMatch", "FreeMatch Statistiques", "FreeMatch Data", "FreeMatch Dashboard"],
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
    apple: "/apple-touch-icon.webp",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${poppins.variable}`}>
      <head>
        {/* HotJar */}
        <Script
          id="hotjar"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,s,q,u,a,r,e){
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings={hjid:5280873};
                r=s.getElementsByTagName('head')[0];
                e=s.createElement('script');
                e.async=1;
                e.src=q+c._hjSettings.hjid+u;
                r.appendChild(e);
              })(window,document,'https://static.hj.contentsquare.net/c/csq-','.js');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${env.NEXT_PUBLIC_GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FreeMatch",
              url: "https://freemat.ch",
              description:
                "Le premier job board boosté par l'IA pour les développeurs. Notre technologie analyse et vérifie chaque offre d'emploi pour vous faire gagner un temps précieux dans votre recherche.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://freemat.ch/job-offers?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              sameAs: ["https://www.linkedin.com/company/freematch"],
            }),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FreeMatch",
              alternateName: "FreeMatch - Job Board Tech",
              url: "https://freemat.ch",
              logo: "https://freemat.ch/images/logo/logo-techins8-dark.webp",
              description:
                "Le premier job board boosté par l'IA pour les développeurs. Notre technologie analyse et vérifie chaque offre d'emploi pour vous faire gagner un temps précieux dans votre recherche.",
              sameAs: ["https://www.linkedin.com/company/freematch"],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@freemat.ch",
                contactType: "Customer Service",
                areaServed: "FR",
                availableLanguage: ["French", "English"],
              },
            }),
          }}
        />
        <Script
          defer
          data-website-id="dfid_JqCreDQCID5kvrEFddXEA"
          data-domain="freemat.ch"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body className={`${poppins.className} min-h-screen bg-background antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages}>
          <PostHogProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <div className="absolute inset-0 z-0 bg-cover bg-center"></div>

              <div className="relative z-10 flex flex-grow flex-col">
                <Nav />
                <Script
                  async
                  src="https://cdn.promotekit.com/promotekit.js"
                  data-promotekit={env.PROMOTE_KIT_TOKEN}
                ></Script>
                <main className="mt-20">{children}</main>
                <Footer />
              </div>
            </div>
            <SpeedInsights />
            <Toaster expand={false} position="top-right" closeButton richColors duration={2000} />
          </PostHogProvider>
        </NextIntlClientProvider>
        <Script
          id="umami"
          defer
          src="https://umami.clf.techins8.com/script.js"
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
