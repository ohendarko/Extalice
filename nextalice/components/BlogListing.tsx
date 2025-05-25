'use client'
import Link from 'next/link';
import styles from '@/app/styles/blog.module.css'
import secStyles from '@/app/styles/body.module.css'
import '@/app/globals.css';

type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
};

interface BlogListingProps {
  blog: Blog;
}

const BlogListing: React.FC<BlogListingProps> = ({ blog }) => {
  return (
    <div className={secStyles.postContainer} key={blog.id}>
      <h3 className={styles.blogTitle}>{blog.title}</h3>
      <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: blog?.content.slice(0, 150) + '. . .' }} />
      <div className={styles.readmore}>
        <Link href={`/blogs/${blog.id}`}>
          <span className={styles.readmoreFull}>Read more</span>
        </Link>
      </div>
    </div>
  )
}

export default BlogListing;