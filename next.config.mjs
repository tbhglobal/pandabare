/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Retired product page that Google still has indexed
      { source: "/comfort-kit", destination: "/", permanent: true },
      { source: "/comfort-kit/", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
