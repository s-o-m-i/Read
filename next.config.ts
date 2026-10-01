import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/online-tasbih-counter", destination: "/tasbih-counter", permanent: true },
      { source: "/tasbeeh-counter", destination: "/tasbih-counter", permanent: true },
    ];
  },
};

export default nextConfig;
