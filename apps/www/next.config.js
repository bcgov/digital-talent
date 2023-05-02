const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // eslint is configured at the root of the monorepo
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  output: 'standalone',
};

module.exports = nextConfig;
