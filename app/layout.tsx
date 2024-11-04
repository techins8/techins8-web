import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from 'next/font/google';

// Configuration de Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "TechIns8",
  description: "Décodez les tendances cachées des entreprises tech et surpassez vos ambitions de carrière",
  icons: {
    icon: "/images/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
