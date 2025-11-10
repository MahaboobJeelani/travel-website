import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogList from '../components/blogs/BlogList';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchBlogs } from '../redux/actions/blogActions';

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector(state => state.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg transition duration-300 ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition duration-300"
        >
          Previous
        </button>
        
        {pages}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition duration-300"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Travel Blogs & Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover inspiring travel stories, expert tips, and destination guides from our community of explorers
          </p>
        </div>

        {loading ? (
          <LoadingSpinner text="Loading blogs..." />
        ) : (
          <>
            <BlogList blogs={currentBlogs} />
            {renderPagination()}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;