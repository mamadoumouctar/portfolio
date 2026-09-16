const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const repoBasePath = isGitHubPages ? '/portfolio' : ''

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
