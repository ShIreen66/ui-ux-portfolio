import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Images → fully optimized (recommended for production)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  // App router uses server mode (default) → Vercel friendly
  output: "standalone",

  // Public variables (optional)
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
