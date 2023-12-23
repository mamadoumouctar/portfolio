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
    pageExtensions: ['ts', 'tsx', 'mdx'],

})

module.exports = nextConfig
