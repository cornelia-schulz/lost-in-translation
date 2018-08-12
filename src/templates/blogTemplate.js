import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../src/components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    /**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

    const disqus_config = function () {
    this.page.url = shareUrl  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = frontmatter.path // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script')
    s.src = 'https://www-cornelia-schulz-net.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s)
    })()
    {/* <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */}

    return (
        <Layout>
            <div className='blog-post-container'>
                <div className='blog-img'>
                    <img className='blog-img' src={frontmatter.image} alt={frontmatter.image} />
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
                <div id="disqus_thread"></div>
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
                path
                title
                previous
                next
            }
        }
    }
`