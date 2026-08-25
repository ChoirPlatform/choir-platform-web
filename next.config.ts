import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up and finds a stray
  // package-lock.json in the user's home directory and warns on every build.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
