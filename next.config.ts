import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/mech-marketplace", destination: "/cref-marketplace", permanent: false },
      { source: "/cref-market-place", destination: "/cref-marketplace", permanent: false },
      { source: "/blog/pearl-the-agent-app-store", destination: "/blog/emerald-the-agent-app-store", permanent: false },
      { source: "/blog/mech-marketplace-bazaar", destination: "/blog/cref-marketplace-bazaar", permanent: false },
      { source: "/blog/cref-market-place-bazaar", destination: "/blog/cref-marketplace-bazaar", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/blos-source.zip",
        headers: [
          { key: "Content-Type", value: "application/zip" },
          { key: "Content-Disposition", value: 'attachment; filename="blos-source.zip"' },
        ],
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
