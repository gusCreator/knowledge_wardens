/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https'
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https'
      }
    ]
  },
  rewrites: async () => [
    {
      source: '/:any',
      destination: '/'
    }
  ]
};

export default nextConfig;
