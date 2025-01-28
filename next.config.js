/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensures React errors are shown in development

  // Image optimization configuration
  images: {
    loader: 'default', // Default Next.js loader
    path: '/Liturgia/assets/_next/image', // Updated path for optimized images
  },

  // Base path or asset prefix for GitHub Pages
  basePath: '/Liturgia', // Replace with your GitHub repository name
  assetPrefix: '/Liturgia/', // Ensures assets are loaded correctly
};

module.exports = nextConfig;
