/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent-waw2-2.xx.fbcdn.net',
            },
        ],
    },
};

export default nextConfig;
