import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Largest generated width is 1920px (the default goes to 3840px, which produced 300–700 KB photos).
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
