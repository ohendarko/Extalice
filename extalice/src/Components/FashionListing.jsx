import React from 'react';

const FashionListing = ({ fashion }) => {
  return (
    <div className="fashionitem" >
      <img src={fashion.url} alt="fashion item" className='fashion-image' />
      <p className="fashion-status">{fashion.status}</p>
      <p className="fashion-price">{fashion.price}</p>
    </div>
  )
}

export default FashionListing;