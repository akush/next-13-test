/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_ASSET_PREFIX } = process.env;
const nextConfig = {
  assetPrefix: NEXT_PUBLIC_ASSET_PREFIX,
}

module.exports = nextConfig
