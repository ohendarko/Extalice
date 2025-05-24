// app/blogs/[id]/page.tsx
import styles from '@/app/styles/blog.module.css';
import blogPost from '@/assets/sample-blog'; // Adjust if outside src
import NotFoundPage from '@/components/NotFoundPage';
import ContactMe from '@/components/ContactMe';

type BlogPageProps = {
  params: { id: string };
};

const BlogPage = ({ params }: BlogPageProps) => {
  const blog = blogPost.find((b) => b.id === params.id);

  if (!blog) {
    return <NotFoundPage message="Blog Not Found" />;
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContents}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogContent}>{blog.content}</p>
      </div>
      <ContactMe />
    </div>
  );
};

export default BlogPage;
