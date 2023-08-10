/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/web2",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
