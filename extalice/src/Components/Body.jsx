import React from 'react';
import '../styles/body.css';
import pageHighlight from "../assets/images/page-highlight.png"
import blogpost from "../assets/sample-blog.js";
import fashion from '../assets/sample-fashion.js';

const Body = () => {
  return (
    <>
      <div className="sections">
          <img className='background' src={pageHighlight} alt="" />
          <div className="background-text">
            <p className="image-top-text tt-left overlay-content">SHOP</p>
            <p className="image-top-text overlay-content tt-right">BLOG</p>
          </div>
      </div>
      
      <div className="posts">
        <h3 className="name">Dr. Alice Anane Tawiah</h3>
        <h1 className="post-heading">My latest Posts</h1>
        <div className="post-lineup">
          {blogpost.slice(0, 3).map((item) => {
            return (
              <div className='post-container' key={item.id}>
                <h3 className='blog-title'>{item.title}</h3>
                <div className="post-content">{item?.content.slice(0, 150)} . . . &nbsp; <span className="read-more">Read more</span></div>
              </div>
            )
          })}
        </div>
        <h3 className='see-more'>See More</h3>

        <div className="fashion-lineup">
          <h1 className="alice-fashionworld">Alice Fashionworld</h1>
          <div className="fashions">
            {fashion.map((item) => {
              return (
                <div className="fashionitem" >
                  <img src={item.url} alt="fashion item" className='fashion-image' />
                  <p className="fashion-status">{item.status}</p>
                  <p className="fashion-price">{item.price}</p>
                </div>
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