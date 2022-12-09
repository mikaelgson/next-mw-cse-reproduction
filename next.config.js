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
      beforeFiles: [
        {
          source: "/api/graphql",
          destination: `https://www.google.com`,
        },

        /**
         * Due to limitations in NextJS, theres no native way of translating sub paths of the url.
         * To achieve this behaviour, we need to use rewrites to alias the original pages folder name with a locale name.
         * For instance, the swedish "/artiklar" (original pages name) will need a rewrite from "/artikler" as we want to reuse the same page for all locales.
         *
         * As we set this up, we also need to prevent the different locales from using the original path name (stated in the pages directory)
         * and make sure to return 404 not to negatively impact SEO.
         */

        /**
         * Artiklar
         */
        {
          source: "/fi/artikkelit/:path*",
          destination: `/fi/artiklar/:path*`,
          locale: false,
        },
        {
          source: "/nb/artikler/:path*",
          destination: `/nb/artiklar/:path*`,
          locale: false,
        },

        /**
         * Tips
         */
        {
          source: "/fi/vinkkeja/:path*",
          destination: `/fi/tips/:path*`,
          locale: false,
        },

        /**
         * FAQ
         */
        {
          source: "/fi/asiakaspalvelu",
          destination: `/fi/kundservice`,
          locale: false,
        },
        {
          source: "/fi/asiakaspalvelu/aiheita/:path*",
          destination: `/fi/kundservice/amnen/:path*`,
          locale: false,
        },
        {
          source: "/fi/asiakaspalvelu/kysymyksia/:path*",
          destination: `/fi/kundservice/fragor/:path*`,
          locale: false,
        },

        {
          source: "/nb/kundeservice",
          destination: `/nb/kundservice`,
          locale: false,
        },
        {
          source: "/nb/kundeservice/emner/:path*",
          destination: `/nb/kundservice/amnen/:path*`,
          locale: false,
        },
        {
          source: "/nb/kundeservice/sporsmal/:path*",
          destination: `/nb/kundservice/fragor/:path*`,
          locale: false,
        },
      ],
    }
  },
}
