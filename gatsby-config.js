module.exports = {
  siteMetadata: {
    title: "FEM Learning - Gatsby",
    description: "Learning Gatsby",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
  ],
};
