/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ecommerce.routemisr.com', 'anotherdomain.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dwp0imlbj/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
