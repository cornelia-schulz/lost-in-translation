import React from 'react'
import {Link, graphql} from 'gatsby'
import PostLink from '../components/post-link'
import Layout from '../components/layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Piha from '../images/Bethells.jpg'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share'

const IndexPage = ({data: {site, allMarkdownRemark: {edges}}}) => {
  const Posts = edges
    .filter (edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map (edge => <PostLink key={edge.node.id} post={edge.node} />);
  const shareUrl = site.siteMetadata.siteUrl;
  const title = site.siteMetadata.title;

  return (
    <Layout>
      <div
        className="bannerImage"
        style={{
          backgroundImage: `url(${Piha})`,
          backgroundSize: 'cover',
          width: '100%',
          position: 'relative',
          height: '500px',
        }}
      >
        <div className="featureContent">
          <h4 style={{ color: '#fff' }}>FEATURED ARTICLE</h4>
          <Link to="/localisation-With-I18next"><h2>Localisation in React with I18next</h2></Link>
          <p>Published by Cornelia Schulz in October 2018</p>
          <div className="socialMedia">
            <div>
              <a className="socialMediaLink rss" href="/rss.xml">
                <FontAwesomeIcon icon="rss" />
              </a>
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="socialMediaLink"
              >
                <FacebookIcon size={28} round={false} />
              </FacebookShareButton>
              <FacebookShareCount
                url={shareUrl}
                className="socialMediaLink hidden"
              >
                {count => count}
              </FacebookShareCount>
              <LinkedinShareButton
                url={shareUrl}
                title={title}
                description="A blog for everyone curious about Localisation"
                className="socialMediaLink"
              >
                <LinkedinIcon size={28} round={false} />
              </LinkedinShareButton>
              <LinkedinShareCount
                url={shareUrl}
                className="socialMediaLink hidden"
              >
                {count => count}
              </LinkedinShareCount>
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="socialMediaLink"
              >
                <TwitterIcon size={28} round={false} />
              </TwitterShareButton>
              <EmailShareButton
                url={shareUrl}
                subject="Lost in translation"
                body="Check out this blog I found about localisation at https://www.cornelia-schulz.net"
                className="socialMediaLink"
              >
                <EmailIcon size={28} round={false} />
              </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
      <main>
        <h1>Latest blog posts</h1>
        <div>{Posts}</div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
      }
     
    },
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
