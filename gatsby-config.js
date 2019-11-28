module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio Story`,
    description: `A starter template for Gatsby for designers and developers to tell stories about their work. Inspired by @Edmund1645`,
    author: `Yusuff Faruq`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work image`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Portfolio Story`,
        short_name: `Gatsby Portfolio Story`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `postImages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins:[{resolve: "gatsby-remark-images"}],
        plugins: ["gatsby-remark-images"]
        
      },
    }
    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
