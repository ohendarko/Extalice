import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogListingFull = ({ blog }) => {
  return (
    <>
      <div className='full-post-container' key={blog.id}>
        <div className="blog-info">
        <h3 className='blog-title'>{blog.title} &nbsp;•&nbsp;</h3>
        <h4 className="blog-author">{blog.author}</h4>
        </div>
        <div className="post-content">{blog?.content.slice(0, 150)} . . . </div>
        <div className="readmore-full">
          <NavLink to={`/blogs/${blog.id}`}>
            <span className="read-more-full">Read more</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default BlogListingFull;