/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Ensures React errors are shown in development
  
    // Image optimization configuration
    images: {
      loader: 'default', // Default Next.js loader
      path: '/assets/_next/image', // Path for optimized images
    },
  
    // Base path or asset prefix in case your site is deployed in a subfolder
    basePath: '',
    assetPrefix: '',
  };
  
  module.exports = nextConfig;
  