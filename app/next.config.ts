import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // For static site output.
  output: "export",

  // For GitHub Pages deployment where pages might be served from a directory.
  basePath: process.env.BASE_PATH,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
