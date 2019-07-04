var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Villa V - Luxurious island house with magical view - for Rent in Spetses, Attica, Greece',
    description: 'Villa V, designed and decorated by a leading Greek architect, is the perfect destination for (up to) 10 vacationers looking to experience Greece in its full beauty. With 5 bedrooms, each with its own bathroom and shower, a private pool, a fully-equipped kitchen, a fully-fenced garden and expansive courtyard, a Weber gas BBQ, and Wi-Fi everywhere, inside and outside within the property, you’ll have everything needed to make the most of your trip.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Pacifico`,
          },
          {
            family: `Roboto`,
          },
          {
            family: `Montserrat`,
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: `${__dirname}/static`,
            },
          },
          `gatsby-remark-responsive-iframe`
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-143239978-1", // <- your tracking ID
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      }
    }
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
};