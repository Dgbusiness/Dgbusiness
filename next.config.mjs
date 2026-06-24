/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/Dgbusiness',
  assetPrefix: '/Dgbusiness/',
  env: { NEXT_PUBLIC_BASE_PATH: '/Dgbusiness' },
};

export default nextConfig;
