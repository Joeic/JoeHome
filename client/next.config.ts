import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
     {
      protocol: "https",
      hostname: "example.com",
      port: "",
      pathname: "/**",
     },
    ],
  },
};

export default nextConfig;
