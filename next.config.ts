import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para GitHub Pages (sin basePath si es el repo principal)
  // basePath: '/gettashower-landing', // Solo si el repo NO es el principal
  // assetPrefix: '/gettashower-landing', // Solo si el repo NO es el principal
};

export default nextConfig;