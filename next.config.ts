import type { NextConfig } from 'next';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // 1. Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF is 20% smaller than WebP
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds on edge
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow external images if you use them
      },
    ],
  },

  // 2. Compiler Optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs to save bytes
  },

  // 3. Cache Headers
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache assets for 1 year
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
    ];
  },

  // 4. Redirects (Identity Unification)
  async redirects() {
    return [
      {
        source: '/tuhin',
        destination: '/identity',
        permanent: true,
      },
      {
        source: '/musfiqur-tuhin',
        destination: '/identity',
        permanent: true,
      },
      {
        source: '/m-m-rahman',
        destination: '/identity',
        permanent: true,
      },
      {
        source: '/about/names', // Fallback for user request suggestion
        destination: '/identity',
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
