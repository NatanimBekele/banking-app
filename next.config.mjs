import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default withSentryConfig(withSentryConfig(withSentryConfig(nextConfig, {


// Suppresses source map uploading logs during build
silent: true,
org: "jsm-x9",
project: "javascript-nextjs",
}, {


// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,



// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,


automaticVercelMonitors: true,
}), {


org: "natanim-bekele",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,



// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Automatically annotate React components to show their full name in breadcrumbs and session replay
reactComponentAnnotation: {
enabled: true,
},



// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,


automaticVercelMonitors: true,
}), {


org: "natanim-bekele",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,



// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Automatically annotate React components to show their full name in breadcrumbs and session replay
reactComponentAnnotation: {
enabled: true,
},


tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,


automaticVercelMonitors: true,
});