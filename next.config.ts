/* eslint-disable */
import type { NextConfig } from "next";

const nextConfig: NextConfig & { eslint: { ignoreDuringBuilds: boolean } } = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
