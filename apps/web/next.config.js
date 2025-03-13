/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3.ap-northeast-2.amazonaws.com",
                port: "",
                pathname: "/toonda-image/**",
            },
        ],
        domains: ["i.pinimg.com", "lh3.googleusercontent.com"],
    },
    transpilePackages: ["@moija/ui", "@moija/hooks"],
};

module.exports = nextConfig;
