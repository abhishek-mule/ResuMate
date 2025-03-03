/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for dynamic features
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'avatar.vercel.sh',
      'images.unsplash.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: false, // Enforce type checking during build
  },
  swcMinify: true, // Use SWC for minification
  reactStrictMode: true,
  poweredByHeader: false, // Security: Remove X-Powered-By header
};

module.exports = nextConfig;
