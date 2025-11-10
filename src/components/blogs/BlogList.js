import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-semibold text-gray-600 mb-2">
          No Blogs Available
        </h3>
        <p className="text-gray-500">
          Check back later for new travel blogs and stories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;