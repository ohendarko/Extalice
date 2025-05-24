import React from 'react';
import Link from 'next/link';
import secStyles from "@/app/styles/App.module.css";
import styles from '@/app/styles/body.module.css';
import pageHighlight from "@/assets/images/page-highlight.png"
import blogpost from "@/assets/sample-blog.js";
import fashion from '@/assets/sample-fashion.js';
import BlogListing from '@/components/BlogListing';
import FashionListing from '@/components/FashionListing';
import ContactMe from '@/components/ContactMe';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react'; // modern React icons
import { PencilLine } from 'lucide-react';


const Body = () => {
  return (
    <div className={secStyles.app}>
      <div className={styles.sections}>

        <div className={styles.background}>
          <Image src={pageHighlight} alt="" />
        </div>
        
          <div className={styles.backgroundText}>
            <div className={`${styles.textContainer} ${styles.textContainerLeft}`}>
              <Image src="/shopping-cart.svg" alt='shopping cart' width={80} height={80} />
              <Link href="/shop">
              <p className={`${styles.imageTopText} ${styles.ttLeft} ${styles.overlayContent}`}>SHOP</p>
              </Link>
            </div>
            <div className={`${styles.textContainer} ${styles.textContainerRight}`}>
              <Image src="/notebook-pen.svg" alt='shopping cart' width={80} height={80} />
              <Link href="/blogs">
              <p className={`${styles.imageTopText} ${styles.ttRight} ${styles.overlayContent}`}>BLOG</p>
              </Link>
            </div>
          </div>
      </div>
      
      <div className={styles.posts}>
        <h3 className={styles.name}>Dr. Alice Anane Tawiah</h3>
        <h1 className={styles.postHeading}>My latest Posts</h1>
        <div className={styles.postLineup}>
          {blogpost.slice(0, 3).map((item) => {
            return (
              <BlogListing blog={item} key={item.id}/>
            )
          })}
        </div>
        <Link href="/blogs"><h3 className={styles.seeMore}>See More</h3></Link>

        <div className={styles.fashionLineup}>
          <h1 className={styles.aliceFashionworld}>Alice Fashionworld</h1>
          <div className={styles.fashions}>
            {fashion.slice(0, 5).map((item) => {
              return (
                <FashionListing fashion={item} key={item.id}/>
              )
            })}
          </div>
          <Link href="/shop">
            <h3 className={styles.openStore}>Open Shop</h3>
          </Link>
        </div>
      </div>

      <ContactMe />

    </div>
  )
}

export default Body;