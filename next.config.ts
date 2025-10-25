import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
        hostname: "www.freematch.com",
      },
    ],
    domains: ["www.freematch.com"],
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
            value: "https://app.loops.so",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS, PATCH",
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
              "Authorization",
            ].join(", "),
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
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
              "Authorization",
            ].join(", "),
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
