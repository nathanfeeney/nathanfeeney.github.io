import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable export in production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
};

export default nextConfig;
