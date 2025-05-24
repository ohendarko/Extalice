import React from 'react';
import styles from '@/app/styles/blog.module.css';
import blogPosts from '@/assets/sample-blog';
import BlogListingFull from '@/components/BlogListingFull';


const BlogsPage = () => {
  return (
    <div  className={styles.blogPage}>
      <div className={styles.blogHeader}>
          <h1 className={styles.heading}>Journey With The King</h1>
      </div>
      <div className={styles.blogComponent}>
        {blogPosts.map((item) => {
          return (
            <BlogListingFull blog={item} key={item.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default BlogsPage;