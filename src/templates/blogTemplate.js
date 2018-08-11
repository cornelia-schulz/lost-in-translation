import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../src/components/layout'

// import '../css/blog-post.css'

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
            }
        }
    }
`