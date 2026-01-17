import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D8CFC4]/30 mb-6">
          <span className="text-4xl text-[#3A3A3A]/40">📝</span>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
            No Blogs Available
          </h3>
          <div className="h-px w-16 bg-[#C8A24A] mx-auto mb-6"></div>
          <p className="text-[#3A3A3A]/70 leading-relaxed font-light">
            Check back later for new travel blogs and stories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;