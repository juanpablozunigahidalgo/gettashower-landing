import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para GitHub Pages - TU REPO NO ES EL PRINCIPAL
  basePath: '/gettashower-landing',
  assetPrefix: '/gettashower-landing',
};

export default nextConfig;