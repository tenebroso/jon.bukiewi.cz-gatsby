module.exports = {
  siteMetadata: {
    title: 'Jon Bukiewicz | Remote Engineering Manager & Technical Leader',
    description: `Jon Bukiewicz is a remote Engineering Manager with a strong background in technical leadership, people management, and workplace equity-focused software. Currently leading high-impact engineering teams at Syndio.`,
    keywords: `Jon Bukiewicz, Engineering Manager, Software Engineering Leader, Technical Leadership, Remote Engineering, Workplace Equity, Syndio, PayEQ, PayFinder, Team Management, Product Development, Full Stack Engineering`,
    author: `@jonbukiewicz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
