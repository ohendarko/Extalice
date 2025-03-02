import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/blog.css';
import blogPost from "../assets/sample-blog.js";
import NotFoundPage from './NotFoundPage.jsx';
import ContactMe from '../Components/ContactMe.jsx';

const BlogPage = () => {

  const { id } = useParams();
  const blog = blogPost.find((b) => b.id === id);
  console.log("URL Param ID:", id);
  

  if (!blog) {
    return <NotFoundPage message="Blog Not Found" />;
  }
  return (
    <>
    <div className='blog-page'>
      <div className="blog-contents">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-content">{blog.content}</p>
      </div>
      <ContactMe />
    </div>
    
    </>

  )
}



export default BlogPage;