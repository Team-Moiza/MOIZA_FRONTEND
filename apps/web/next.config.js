/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nas.anys.kro.kr",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "s3.ap-northeast-2.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
        domains: ["i.pinimg.com", "lh3.googleusercontent.com"],
    },
    transpilePackages: ["@moija/ui", "@moija/hooks"],
};

module.exports = nextConfig;
