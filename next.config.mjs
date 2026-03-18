/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,

  experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
      remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sarkariresult6.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;