import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
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
    domains: ["www.techins8.com"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { 
            key: "Access-Control-Allow-Origin", 
            value: "https://app.loops.so" // Ajustez selon vos besoins
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS, PATCH"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: [
              "X-CSRF-Token",
              "X-Requested-With",
              "Accept",
              "Accept-Version",
              "Content-Length",
              "Content-MD5",
              "Content-Type",
              "Date",
              "X-Api-Version",
              "Authorization"  // Important pour les appels API authentifiés
            ].join(", ")
          }
        ]
      },
      {
        // Configuration globale pour les requêtes externes
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*"  // Ou spécifiez vos domaines spécifiques
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: [
              "X-CSRF-Token",
              "X-Requested-With",
              "Accept",
              "Accept-Version",
              "Content-Length",
              "Content-MD5",
              "Content-Type",
              "Date",
              "X-Api-Version",
              "Authorization"
            ].join(", ")
          }
        ]
      }
    ];
  },

  // Ajout de la configuration des redirections si nécessaire
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: "https://app.loops.so/api/:path*"
        }
      ]
    };
  }
};

export default nextConfig;
