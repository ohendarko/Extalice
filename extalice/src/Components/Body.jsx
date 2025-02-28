import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/body.css';
import pageHighlight from "../assets/images/page-highlight.png"
import blogpost from "../assets/sample-blog.js";
import fashion from '../assets/sample-fashion.js';
import BlogListing from './BlogListing.jsx';
import FashionListing from './FashionListing.jsx';

const Body = () => {
  return (
    <>
      <div className="sections">
          <img className='background' src={pageHighlight} alt="" />
          <div className="background-text">
            <Link to="/shop">
            <p className="image-top-text tt-left overlay-content">SHOP</p>
            </Link>
            <Link to="/blogs">
            <p className="image-top-text overlay-content tt-right">BLOG</p>
            </Link>
          </div>
      </div>
      
      <div className="posts">
        <h3 className="name">Dr. Alice Anane Tawiah</h3>
        <h1 className="post-heading">My latest Posts</h1>
        <div className="post-lineup">
          {blogpost.slice(0, 3).map((item) => {
            return (
              <BlogListing job={item} />
            )
          })}
        </div>
        <Link to="/blogs"><h3 className='see-more'>See More</h3></Link>

        <div className="fashion-lineup">
          <h1 className="alice-fashionworld">Alice Fashionworld</h1>
          <div className="fashions">
            {fashion.map((item) => {
              return (
                <FashionListing fashion={item} />
              )
            })}
          </div>
          <h3 className="open-store">Open Store</h3>
        </div>
        
      </div>

    </>
  )
}

export default Body;