import React from 'react';
import '../styles/blog.css';
import blogPosts from '../assets/sample-blog';
import BlogListingFull from '../Components/BlogListingFull';


const BlogsPage = () => {
  return (
    <div  className='blog-page'>
      <div className="blog-header">
          <h1 className='heading'>All Blogs</h1>
      </div>
      <div className='blog-component'>
        {blogPosts.map((item) => {
          return (
            <BlogListingFull blog={item} />
          )
        })}
      </div>
    </div>
  )
}

export default BlogsPage;