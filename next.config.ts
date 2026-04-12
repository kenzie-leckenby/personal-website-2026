import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  /* config options here */
    devIndicators: false,
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
