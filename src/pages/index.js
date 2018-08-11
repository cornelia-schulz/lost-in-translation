import React from 'react'
import { graphql } from 'gatsby'
import PostLink from "../components/post-link"
import Layout from '../components/layout'
import McLarenFalls from '../images/McLarenFalls.jpg'


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div className='banner'>
        <img src={McLarenFalls} alt='McLaren Falls in winter' />
      </div>
      <main>
        <h1>Latest blog posts</h1>
        <div>{Posts}</div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image
            imagetitle
            blurb
          }
        }
      }
    }
  }
  `