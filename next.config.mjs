/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    cacheMaxMemorySize: 0,
    images: {
      domains: ["pub-53a6f77e1a9e4becb121ec25cc32961c.r2.dev", "pub-7ac5ef42f72a43378effe85c23fa5922.r2.dev", "pub-f8ffb517c97d4d1cbf6c00d4c6550fdd.r2.dev"],
      unoptimized: true,
    },
  };
  
 export default nextConfig;
  