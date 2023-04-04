/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  experimental: {
    appDir: true,
  },  
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }}

module.exports = nextConfig
 