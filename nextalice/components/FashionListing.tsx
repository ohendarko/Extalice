import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/body.module.css'
import { StaticImageData } from 'next/image';

type FashionItem = {
  url: string | StaticImageData;
  status: string;
  price: string | number;
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