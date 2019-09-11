module.exports = {
  siteMetadata: {
    title: `Santiment JP Magazine`,
    description: `Raw data access to on-chain, social media, development activity and pricing information for 1000+ crypto assets. Unlimited historical and real time data. Backtest strategies, build custom signals, DIY dashboards and much more with the most all-inclusive crypto API on the market.`,
    author: `Santiment Team`,
    siteUrl: 'https://jp-magazine.santiment.net'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["BACKEND_URL"],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SAN",
        // This is the field under which it's accessible
        fieldName: "san",
        // URL to query from
        url: "https://api.santiment.net/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jp-magazine starter`,
        short_name: `santiment gp-magazine`,
        start_url: `/`,
        background_color: `#5275FF`,
        theme_color: `#5275FF`,
        display: `minimal-ui`,
        icons: [
          {
            "src": "src/images/icons/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image/png",
            "density": "0.75"
          },
          {
            "src": "src/images/icons/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "density": "1.0"
          },
          {
            "src": "src/images/icons/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "density": "1.5"
          },
          {
            "src": "src/images/icons/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "density": "2.0"
          },
          {
            "src": "src/images/icons/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "density": "3.0"
          },
          {
            "src": "src/images/icons/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "density": "4.0"
          }
        ], // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
