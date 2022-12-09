module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["sv", "en"],
    defaultLocale: "sv",
  },

  async rewrites() {
    /**
     * This must exist for bug to appear, does not have to match
     */
    return [
      {
        source: "/foo",
        destination: `/bar`,
      },
    ]
  },
}
