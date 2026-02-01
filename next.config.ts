import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "humanae.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;