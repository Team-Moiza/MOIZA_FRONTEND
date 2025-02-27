/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
    transpilePackages: ["@moija/ui", "@moija/hooks"],
};

module.exports = nextConfig;
