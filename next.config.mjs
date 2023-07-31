// used to validate env variables at build time
// to skip validation, set SKIP_ENV_VALIDATION=true
import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Exlude encoding from the build, used by Supabase
    config.externals.push("encoding");

    // Support SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
};

export default nextConfig;
