import React from 'react';

const BlogListing = ({ job }) => {
  return (
    <div className='post-container' key={job.id}>
      <h3 className='blog-title'>{job.title}</h3>
      <div className="post-content">{job?.content.slice(0, 150)} . . . </div>
      <div className="readmore">
        <span className="read-more">Read more</span>
      </div>
    </div>
  )
}

export default BlogListing;