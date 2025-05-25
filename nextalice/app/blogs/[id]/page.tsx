// app/blogs/[id]/page.tsx
import styles from '@/app/styles/blog.module.css';
import blogPost from '@/assets/sample-blog'; // Adjust if outside src
import NotFoundPage from '@/components/NotFoundPage';
import ContactMe from '@/components/ContactMe';

type BlogPageProps = {
  params: { id: string };
};

const BlogPage = async ({ params }: BlogPageProps) => {

  const resolvedParams = await params;   // await here
  const blog = blogPost.find((b) => b.id === resolvedParams.id);

  // const blog = blogPost.find((b) => b.id === params.id);
  if (!blog) {
    return <NotFoundPage message="Blog Not Found" />;
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContents}>
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
