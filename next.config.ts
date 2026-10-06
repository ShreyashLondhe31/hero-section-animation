import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hero-section-animation",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;