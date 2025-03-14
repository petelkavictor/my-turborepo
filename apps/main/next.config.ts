import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/shop/:path*",
        destination: "http://localhost:3000/shop/:path*", // Proxy to the Shop app
      },
    ];
  },
};

export default nextConfig;
