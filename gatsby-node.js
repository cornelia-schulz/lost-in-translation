/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
    const tagTemplate = path.resolve('src/templates/tags.js')
    return new Promise((resolve, reject) => {
      graphql(`
        {
          posts: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                }
                fields {
                  slug
                }
              }
            }
          }
        }

          
        `).then(result => {
            result.data.posts.edges.map(({ node }) => {
              createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/blogTemplate.js"),
                context: {
                  slug: node.fields.slug
                }
              })
            })
            resolve()
          })
        })


    let tags = []
    // iteratre through each post and put all tags into 'tags'
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })
    // eliminate duplicate tags
    tags = _.uniq(tags)
    
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tags,
            context: {
                tag,
            },
        })
    })

}

