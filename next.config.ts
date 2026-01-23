import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para dominio personalizado en GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Sin basePath para dominio personalizado
  // basePath: '/gettashower-landing', // ← Removido para dominio personalizado
  // assetPrefix: '/gettashower-landing', // ← Removido para dominio personalizado
};

export default nextConfig;