import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/tasbih-counter", destination: "/", permanent: true },
      { source: "/digital-tasbih", destination: "/", permanent: true },
      { source: "/dhikr-counter", destination: "/", permanent: true },
      { source: "/zikr-counter", destination: "/", permanent: true },
      { source: "/online-tasbih-counter", destination: "/", permanent: true },
      { source: "/tasbeeh-counter", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
