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
  async headers() {
    return [
      {
        // Files under /public are not content hashed, so an immutable year
        // long cache would leave anyone who had seen an old photo looking at
        // it for a year after it was replaced. A day of freshness with a week
        // of stale-while-revalidate keeps these cheap to serve while letting a
        // swapped image reach people. Next's own assets under /_next/static
        // are hashed and already cached for a year by the framework.
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
