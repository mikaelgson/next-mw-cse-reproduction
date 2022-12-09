module.exports = {
  env: {
    isDevelopment: process.env.VERCEL_ENV === "development",
    isPreview: process.env.VERCEL_ENV === "preview",
    isProduction: process.env.VERCEL_ENV === "production",
  },

  reactStrictMode: true,

  i18n: {
    locales: ["default", "sv", "sv-FI", "nb", "fi"],
    defaultLocale: "default",
  },

  images: {
    // https://nextjs.org/docs/api-reference/next/image#domains
    domains: ["images.ctfassets.net"],

    // https://nextjs.org/docs/api-reference/next/image#device-sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // https://nextjs.org/docs/api-reference/next/image#device-sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/foo",
          destination: `/bar`,
        },
      ],
    }
  },
}
