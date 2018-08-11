/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// lodash (const _ = require('lodash'))
const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require('path')

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

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
    const tagTemplate = path.resolve('src/templates/tags.js')

    return graphql(`{
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
            limit: 2000
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        date
                        path
                        title
                        tags
                    }
                }
            }
        }
    }`
)
    .then(result => {
        if(result.errors) {
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        // create detailed pages
        result.data.allMarkdownRemark.edges
            .forEach(({node}) => {
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {} // additional data can be passed in via context
                })
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
            component: tagTemplate,
            context: {
                tag,
            },
        })
    })


}
