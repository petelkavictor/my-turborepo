import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/shop/:path*",
        destination: "https://my-turborepo-shop.vercel.app/shop/:path*", // Proxy to the Shop app
      },
    ];
  },
};

export default nextConfig;
