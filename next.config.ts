import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/users/Blog',
        permanent: false, // or true if you want a permanent redirect
      },
    ]
  },
}

export default nextConfig
