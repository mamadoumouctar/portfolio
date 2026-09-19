const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

const repoBasePath = ''

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    output: 'export',
    basePath: repoBasePath,
    assetPrefix: repoBasePath,
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
})

module.exports = nextConfig
