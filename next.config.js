/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 CLAVE
  },
};

module.exports = nextConfig;