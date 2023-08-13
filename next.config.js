/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ipfs.w3s.link add this domain as images host
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
