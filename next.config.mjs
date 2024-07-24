/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "lh3.googleusercontent.com" }, {hostname: "lets-tweet-dev.s3.ap-south-1.amazonaws.com"}],
  },
};

export default nextConfig;
