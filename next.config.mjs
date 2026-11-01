/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serve modern formats for better Core Web Vitals (LCP)
    formats: ["image/avif", "image/webp"],
  },
  // The blog moved to /insights.
  async redirects() {
    return [
      { source: "/blog", destination: "/insights", permanent: true },
      {
        source: "/blog/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      { source: "/ar/blog", destination: "/ar/insights", permanent: true },
      {
        source: "/ar/blog/:slug",
        destination: "/ar/insights/:slug",
        permanent: true,
      },
    ];
  },
  // Long lived caching for hashed static assets
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
