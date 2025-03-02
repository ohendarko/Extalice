import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/shop">
            <p className="image-top-text tt-left overlay-content">SHOP</p>
            </NavLink>
            <NavLink to="/blogs">
            <p className="image-top-text overlay-content tt-right">BLOG</p>
            </NavLink>
          </div>
      </div>
      
      <div className="posts">
        <h3 className="name">Dr. Alice Anane Tawiah</h3>
        <h1 className="post-heading">My latest Posts</h1>
        <div className="post-lineup">
          {blogpost.slice(0, 3).map((item) => {
            return (
              <BlogListing blog={item} />
            )
          })}
        </div>
        <NavLink to="/blogs"><h3 className='see-more'>See More</h3></NavLink>

        <div className="fashion-lineup">
          <h1 className="alice-fashionworld">Alice Fashionworld</h1>
          <div className="fashions">
            {fashion.slice(0, 5).map((item) => {
              return (
                <FashionListing fashion={item} />
              )
            })}
          </div>
          <NavLink to="/shop">
            <h3 className="open-store">Open Store</h3>
          </NavLink>
        </div>
        
      </div>

    </>
  )
}

export default Body;