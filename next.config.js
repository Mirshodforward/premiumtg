/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sayt to'liq statik: `next build` → out/ papkasi, uni o'z serverimizda nginx beradi
  output: "export",
  poweredByHeader: false,
  compress: true,
  // Bu papkani workspace ildizi sifatida belgilash (lockfile ogohlantirishini bartaraf etadi)
  turbopack: { root: __dirname },
  // Statik eksportda bu sarlavhalarni Next emas, serverdagi nginx qo'shadi
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
