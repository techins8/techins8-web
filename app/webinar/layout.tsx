import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinaire FreeMatch : Trouvez votre contrat idéal en 7 jours",
  description: "Rejoignez notre webinaire exclusif pour découvrir comment FreeMatch aide les freelances tech à trouver leur contrat idéal en seulement 7 jours, en y consacrant 15 minutes par jour.",
  openGraph: {
    title: "Webinaire FreeMatch : Trouvez votre contrat idéal en 7 jours",
    description: "Rejoignez notre webinaire exclusif pour découvrir comment FreeMatch aide les freelances tech à trouver leur contrat idéal en seulement 7 jours, en y consacrant 15 minutes par jour.",
    images: [
      {
        url: "/images/dashboard.webp",
        width: 1200,
        height: 630,
        alt: "Webinaire FreeMatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinaire FreeMatch : Trouvez votre contrat idéal en 7 jours",
    description: "Rejoignez notre webinaire exclusif pour découvrir comment FreeMatch aide les freelances tech à trouver leur contrat idéal en seulement 7 jours, en y consacrant 15 minutes par jour.",
    images: ["/images/dashboard.webp"],
  },
};

export default function WebinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
