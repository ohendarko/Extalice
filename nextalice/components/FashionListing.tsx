import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/body.module.css'

type FashionItem = {
  url: any;
  status: string;
  price: string | number; // adjust as needed
};

interface FashionListingProps {
  fashion: FashionItem;
}

const FashionListing: React.FC<FashionListingProps> = ({ fashion }) => {
  return (
    <div className={styles.fashionitem} >
      <Image src={fashion.url} alt="fashion item" className={styles.fashionImage} />
      <p className={styles.fashionStatus}>{fashion.status}</p>
      <p className={styles.fashionPrice}>{fashion.price}</p>
    </div>
  )
}

export default FashionListing;