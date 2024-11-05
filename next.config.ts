import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour éviter les erreurs 402
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.techins8.com",
      },
    ],
    domains: ['www.techins8.com'], // Ajoute votre domaine
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'], // Ajoute le support pour les formats modernes
  },
  reactStrictMode: true, // Active le mode strict de React
  swcMinify: true, // Utilise SWC pour la minification
  typescript: {
    ignoreBuildErrors: false, // Force la vérification des types TypeScript
  },
  poweredByHeader: false, // Supprime l'en-tête X-Powered-By pour la sécurité
};

export default nextConfig;
