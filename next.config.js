/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPWA({
  pwa: {
		dest: 'public',
		// runtimeCaching,
	},
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','dummyimage.com'],
  },
})

module.exports = nextConfig
