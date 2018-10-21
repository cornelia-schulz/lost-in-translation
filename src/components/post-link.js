import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div className='row'>
    <div className='main-image col-8'>
      <a className="postlink" href={post.frontmatter.path}><img src={post.frontmatter.image} alt={post.frontmatter.imagetitle} /></a>
    </div>
    <div className='main-text col-4'>
      <a className="postlink" href={post.frontmatter.path}><h2>{post.frontmatter.title}</h2></a>
      <p>
        {post.frontmatter.blurb}
      </p>
      <Link to={post.frontmatter.path}>
        <input className='button' type='button' value='Read more' name='blogBtn' />
      </Link>
    </div>
  </div>
)

export default PostLink