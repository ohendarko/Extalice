'use client';

import React from 'react';
import styles from '@/app/styles/blog.module.css';
import blogPosts from '@/assets/sample-blog';
import BlogListingFull from '@/components/BlogListingFull';
import { useSearchParams, useRouter } from 'next/navigation';

const PAGE_SIZE = 5;

const BlogsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentBlogs = blogPosts.slice(startIndex, startIndex + PAGE_SIZE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/blogs?page=${page}`);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={i === currentPage ? styles.activePage : ''}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogHeader}>
        <h1 className={styles.heading}>Journey With The King</h1>
      </div>

      <div className={styles.blogComponent}>
        {currentBlogs.map((item) => (
          <BlogListingFull blog={item} key={item.id} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>

        {renderPageNumbers()}

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
};

export default BlogsPage;
