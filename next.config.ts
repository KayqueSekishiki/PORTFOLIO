import type { NextConfig } from "next";

const repo = "/PORTFOLIO";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: process.env.NODE_ENV === "production" ? repo : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `${repo}/` : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;
