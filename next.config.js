const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['lh3.googleusercontent.com', 'images.pexels.com', 'books.google.co.in'],
	},
};

module.exports = nextConfig;
