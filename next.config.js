const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    pageExtensions: ['js', 'jsx', 'mdx']
})

module.exports = nextConfig
