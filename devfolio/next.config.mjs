import withPWA from "next-pwa";
import { GenerateSW } from "workbox-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.NODE_ENV === "production") {
      config.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
        })
      );
    }
    return config;
  },
};

const pwaConfig = {
  dest: "public",
  //   disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
};

export default withPWA(pwaConfig)(nextConfig);
