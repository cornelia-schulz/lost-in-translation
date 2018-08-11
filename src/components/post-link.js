import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div className='row'>
    <div className='main-image col-8'>
      <img src={post.frontmatter.image} alt={post.frontmatter.imagetitle} />
    </div>
    <div className='main-text col-4'>
      <h2>{post.frontmatter.title}</h2>
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