'use client'
import { use } from 'react';
import styles from '@/app/styles/blog.module.css';
import blogPost from '@/assets/sample-blog'; // Adjust if outside src
import NotFoundPage from '@/components/NotFoundPage';
import ContactMe from '@/components/ContactMe';
import { useRouter } from 'next/navigation';

type BlogPageProps = {
  params: Promise<{ id: string }>; // notice params is a Promise now
};

const BlogPage = ({ params }: BlogPageProps) => {

  const router = useRouter();
  const { id } = use(params);
  const blog = blogPost.find((b) => b.id === id);

  // const blog = blogPost.find((b) => b.id === params.id);
  if (!blog) {
    return <NotFoundPage message="Blog Not Found" />;
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContents}>
        <button className='w-[100px] flex gap-2' onClick={() => router.back()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/></svg> Back</button>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: blog?.content}} />
        
        <div className='!bg-white'>
          <ContactMe />
        </div>
      </div>
      
    </div>
  );
};

export default BlogPage;
