import React from 'react';
import Link from 'next/link';
import '@/app/globals.css'
import secStyles from "@/app/styles/App.module.css";
import styles from '@/app/styles/body.module.css';
import pageHighlight from "@/assets/images/page-highlight.png"
import blogpost from "@/assets/sample-blog.js";
import fashion from '@/assets/sample-fashion.js';
import BlogListing from '@/components/BlogListing';
import FashionListing from '@/components/FashionListing';
import ContactMe from '@/components/ContactMe';
import Image from 'next/image';



const Body = () => {
  return (
    <div className={secStyles.app}>
      <div className={styles.sections}>

        <div className={styles.background}>
          <Image src={pageHighlight} alt="" />
        </div>
        
          <div className={styles.backgroundText}>
            <div className={`${styles.textContainer} ${styles.textContainerLeft}`}>
              <svg className={styles.shoppingCart} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <Link href="/shop">
              <p className={`${styles.imageTopText} ${styles.ttLeft} ${styles.overlayContent}`}>SHOP</p>
              </Link>
            </div>
            <div className={`${styles.textContainer} ${styles.textContainerRight}`}>
              <Image src="/notebook-pen.svg" alt='shopping cart' width={50} height={50} />
              <Link href="/blogs">
              <p className={`${styles.imageTopText} ${styles.ttRight} ${styles.overlayContent}`}>BLOG</p>
              </Link>
            </div>
          </div>
      </div>
      
      <div className={`${styles.posts} mt-20`}>
        <h3 className={`${styles.name}`}>Dr. Alice Anane Tawiah</h3>
        <h1 className={styles.postHeading}>My latest Posts</h1>
        <div className={`${styles.postLineup} px-3`}>
          {blogpost.slice(0, 3).map((item) => {
            return (
              <BlogListing blog={item} key={item.id}/>
            )
          })}
        </div>
        <Link href="/blogs"><h3 className={`${styles.seeMore}`}>See More</h3></Link>

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
      
      <div className='flex'>
        <ContactMe />        
      </div>

    </div>
  )
}

export default Body;