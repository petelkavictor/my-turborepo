import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SHOP_DOMAIN: process.env.SHOP_DOMAIN,
  },
  async rewrites() {
    return [
      {
        source: "/shop",
        destination: `${process.env.SHOP_DOMAIN}/shop`, // Proxy to the Shop app
      },
      {
        source: "/shop/:path*",
        destination: `${process.env.SHOP_DOMAIN}/shop/:path*`, // Proxy to the Shop app
      },
    ];
  },
};

module.exports = nextConfig;
