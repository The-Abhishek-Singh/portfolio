/** @type {import('next').NextConfig} */
const nextConfig = {
  

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Add your domain here
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },
};

export default nextConfig;