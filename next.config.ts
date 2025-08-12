import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ Enable static export for Next.js 15+
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
