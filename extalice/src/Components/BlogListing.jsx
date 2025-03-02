import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogListing = ({ blog }) => {
  return (
    <div className='post-container' key={blog.id}>
      <h3 className='blog-title'>{blog.title}</h3>
      <div className="post-content">{blog?.content.slice(0, 150)} . . . </div>
      <div className="readmore">
        <NavLink to={`/blogs/${blog.id}`}>
          <span className="read-more-full">Read more</span>
        </NavLink>
      </div>
    </div>
  )
}

export default BlogListing;