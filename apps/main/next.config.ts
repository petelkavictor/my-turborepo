import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SHOP_DOMAIN: process.env.SHOP_DOMAIN,
  },
  async rewrites() {
    return [
      {
        source: "/shop",
        destination: process.env.SHOP_DOMAIN ? `${process.env.SHOP_DOMAIN}` : "/shop",
      },
      {
        source: "/shop/:path*",
        destination: process.env.SHOP_DOMAIN ? `${process.env.SHOP_DOMAIN}/:path*` : "/shop:path", // Proxy to the Shop app
      },
    ];
  },
};

module.exports = nextConfig;
