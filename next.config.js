/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.slidesgo.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
