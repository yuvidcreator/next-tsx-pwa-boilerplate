/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
// const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  pwa: {
		dest: 'public',
    scope: '/',
    sw: 'sw.js',
    disable: false,
    register: true,
    skipWaiting: true,
    fallbacks: {
      document: '/myofflinepage',
      image: '/images/Aryans-Web-Background.jpg',
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
    cacheOnFrontEndNav: true,
    // reloadOnOnline: true,
	},
  reactStrictMode: true,
  poweredByHeader: false, // disable powered by header.
  swcMinify: true, // minify using swc/rust.
  images: {
    domains: ['images.unsplash.com','dummyimage.com'],
  },
})

module.exports = nextConfig
