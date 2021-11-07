/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },async redirects() {
    return [
      {
        source: '/',
        destination: '/Login',
        permanent: true,
      },
    ]
  },

}

