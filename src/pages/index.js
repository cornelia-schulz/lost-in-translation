import React from 'react'
import { Link, graphql } from 'gatsby'
import PostLink from "../components/post-link"
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <div className='bannerImage'
        style={{
          backgroundImage: `url(${McLarenFalls})`,
          backgroundSize: 'cover',
          width: '100%',
          position: 'relative',
          height: '500px'
        }}>
        {/* <img src={McLarenFalls} alt='McLaren Falls in winter' /> */}
        <div className='featureContent'>
          <h4>FEATURED ARTICLE</h4>
          <Link to='/machine-translations'><h2>Machine translations</h2></Link>
          <p>Published by Cornelia Schulz in August 2018</p>
          <div className='socialMedia'>
            <p>
              <a href='/rss.xml'><FontAwesomeIcon icon='rss'/></a>
            </p>
          </div>
        </div>
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