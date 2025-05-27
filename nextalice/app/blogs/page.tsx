'use client';

import React, { Suspense } from 'react';
import BlogsPage from './BlogsPage';
import Spinner from '@/components/Spinner';

const BlogsPageWrapper = () => {
  return (
    <Suspense fallback={ <div><Spinner loading={true} /></div>}>
      <BlogsPage />
    </Suspense>
  );
};

export default BlogsPageWrapper;
