import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const url = new URL(API_URL || "http://localhost:1337");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: url.protocol.replace(":", "") as "http" | "https",
        hostname: url.hostname,
        port: url.port || undefined, 
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
