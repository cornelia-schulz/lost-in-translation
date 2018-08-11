import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../src/components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Template({
    data // this prop will be injected by the GraphQL query below
}) {
    const { markdownRemark } = data // this is the post
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <div className='blog-post-container'>
                <div className='blog-img'>
                    <img className='blog-img' src={frontmatter.image} alt={frontmatter.image} />
                </div>
                <div className='blog-post'>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <div className='one-third-row'>
                    <div className='previous one-third'>
                        <Link to={frontmatter.previous}>
                            <FontAwesomeIcon icon='angle-double-left'/> Previous
                        </Link>
                    </div>
                    <div className='home one-third'>
                        <Link to='/'><FontAwesomeIcon icon='home'/></Link>
                    </div>
                    <div className='next one-third'>
                        <Link to={frontmatter.next}>
                            Next <FontAwesomeIcon icon='angle-double-right'/>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
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