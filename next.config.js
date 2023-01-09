/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.lorem.space",
      },
      {
        protocol: "https",
        hostname: "munchiesprod.s3.ap-southeast-1.amazonaws.com",
      },

      {
        protocol: "https",
        hostname: "munchiesprod.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
