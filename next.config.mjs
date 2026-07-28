/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serve modern formats for better Core Web Vitals (LCP)
    formats: ["image/avif", "image/webp"],
  },
  // Long-lived caching for hashed static assets
  async headers() {
    return [
      {
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
