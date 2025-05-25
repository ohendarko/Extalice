import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/blog.module.css';


type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
};

interface BlogListingProps {
  blog: Blog;
}

const BlogListingFull: React.FC<BlogListingProps> = ({ blog }) => {
  return (
    <>
      <div className={styles.fullPostContainer} key={blog.id}>
        <div className={styles.blogInfo}>
        <h3 className={styles.blogTitle}>{blog.title} &nbsp;</h3>
        {/* <h4 className={styles.blogAuthor}>{blog.author}</h4> */}
        </div>
        
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: blog?.content.slice(0, 150) + '. . .' }} />
        <div className={styles.readmoreFull}>
          <Link href={`/blogs/${blog.id}`}>
            <span className={styles.readMoreFull}>Read more</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogListingFull;