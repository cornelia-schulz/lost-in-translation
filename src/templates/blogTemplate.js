import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../src/components/layout'
import Disqus from 'disqus-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Img from "gatsby-image"
// import taupo from '../images/lake-taupo-evening.jpg'
// import cityEvening from '../images/city-reflections-evening.jpg'
// import cityMorning from '../images/city-reflections-morning.jpg'
// import cornwallis from '../images/cornwallis.jpg'
// import nationalPark from '../images/national-park-evening.jpg'

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
    EmailIcon
  } from 'react-share'

export default function Template({
    data // this contains props that will be injected by the GraphQL query below
}) {
    const { markdownRemark, site } = data // this is the post
    const { frontmatter, html } = markdownRemark
    const title = frontmatter.title
    const shareUrl = site.siteMetadata.siteUrl+frontmatter.path
    const disqusShortname = 'www-cornelia-schulz-net'
    const disqusConfig = {
        
        identifier: frontmatter.title,
        title: frontmatter.title
    }

    return (
        <Layout>
            <div className='blog-post-container'>
                <div className='blog-img'>
                    <img className='blog-img' src={frontmatter.image} alt={frontmatter.imagetitle} />
                </div>
                <div className='socialMedia right'>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className='socialMediaLink'>
                        <FacebookIcon
                        size={28}
                        round={false}/>
                    </FacebookShareButton>
                    <FacebookShareCount
                        url={shareUrl}
                        className="socialMediaLink hidden">
                        {count => count}
                    </FacebookShareCount>
                    <LinkedinShareButton
                        url={shareUrl}
                        title={title}
                        description='A blog for everyone curious about Localisation'
                        className='socialMediaLink'>
                        <LinkedinIcon
                        size={28}
                        round={false}/>
                    </LinkedinShareButton>
                    <LinkedinShareCount
                        url={shareUrl}
                        className="socialMediaLink hidden">
                        {count => count}
                    </LinkedinShareCount>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className='socialMediaLink'>
                        <TwitterIcon
                        size={28}
                        round={false}/>
                    </TwitterShareButton>
                    <EmailShareButton
                        url={shareUrl}
                        subject='Lost in translation'
                        body='Check out this blog I found about localisation at https://www.cornelia-schulz.net' 
                        className='socialMediaLink'>
                        <EmailIcon
                        size={28}
                        round={false}/>
                    </EmailShareButton>
                </div>
                <div className='blog-post'>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                <div className='one-third-row'>
                    <div className='previous one-third'>
                        {frontmatter.previous && <Link to={frontmatter.previous}>
                            <FontAwesomeIcon icon='angle-double-left'/> Previous
                        </Link>}
                    </div>
                    <div className='home one-third'>
                        <Link to='/'><FontAwesomeIcon icon='home'/></Link>
                    </div>
                    <div className='next one-third'>
                        {frontmatter.next && <Link to={frontmatter.next}>
                            Next <FontAwesomeIcon icon='angle-double-right'/>
                        </Link>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
    query($slug: String!) {
        site {
            siteMetadata {
              siteUrl
            }
        },
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                image
                imagetitle
                path
                title
                previous
                next
            }
        }
    }
`