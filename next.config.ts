import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Powered-By", value: "Mihail Subtirelu" }],
      },
    ];
  },
};

export default nextConfig;
