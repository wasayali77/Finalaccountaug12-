///** @type {import('next').NextConfig} */
//const nextConfig = {
//  basePath: '/account',
//  assetPrefix: '/account',
//  trailingSlash: false,
//  reactStrictMode: true,
  // output: 'standalone',
//};

//module.exports = nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 // basePath: '/account',
 // assetPrefix: '/account',
  trailingSlash: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Yeh line add ki hai
  },
  // output: 'standalone',
};

export default nextConfig;
