module.exports = {
  env: {
    isDevelopment: process.env.VERCEL_ENV === "development",
    isPreview: process.env.VERCEL_ENV === "preview",
    isProduction: process.env.VERCEL_ENV === "production",
  },

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/foo",
        destination: `/bar`,
      },
    ]
  },
}
