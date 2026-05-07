/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'lospoblanos.com',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
      },
      {
        protocol: 'http',
        hostname: 'bigislandbees.com',
      },
      {
        protocol: 'https',
        hostname: 'd14tal8bchn59o.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'dam.hollandandbarrettimages.co.uk',
      }
    ],
  },
};

module.exports = nextConfig;
