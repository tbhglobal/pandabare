/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Retired product page that Google still has indexed
      { source: "/comfort-kit", destination: "/gift-packs/", permanent: true },
      { source: "/comfort-kit/", destination: "/gift-packs/", permanent: true },
    ];
  },
};
export default nextConfig;
