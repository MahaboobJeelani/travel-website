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
          className={`px-4 py-2.5 rounded-lg transition-all duration-300 ${
            currentPage === i
              ? 'bg-[#C8A24A] text-[#3A3A3A] font-medium shadow-sm'
              : 'bg-[#D8CFC4]/50 text-[#3A3A3A]/70 hover:bg-[#D8CFC4]/70 hover:text-[#3A3A3A]'
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center space-x-3 mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-5 py-2.5 bg-[#D8CFC4]/50 rounded-lg disabled:opacity-40 hover:bg-[#D8CFC4]/70 transition-all duration-300 text-[#3A3A3A]/70 hover:text-[#3A3A3A] disabled:hover:bg-[#D8CFC4]/50"
        >
          Previous
        </button>
        
        <div className="flex items-center space-x-2">
          {pages}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-5 py-2.5 bg-[#D8CFC4]/50 rounded-lg disabled:opacity-40 hover:bg-[#D8CFC4]/70 transition-all duration-300 text-[#3A3A3A]/70 hover:text-[#3A3A3A] disabled:hover:bg-[#D8CFC4]/50"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F2EE] py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-[#C8A24A] font-serif text-sm font-medium tracking-widest uppercase">
              Travel Insights
            </span>
            <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
          </div>
          <h1 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
            Travel Blogs & Stories
          </h1>
          <p className="text-xl text-[#3A3A3A]/70 max-w-2xl mx-auto leading-relaxed font-light">
            Discover inspiring travel stories, expert tips, and destination guides from our community of explorers
          </p>
        </div>

        {loading ? (
          <LoadingSpinner text="Loading blogs..." />
        ) : (
          <>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#3A3A3A]/10 p-8 mb-10">
              <BlogList blogs={currentBlogs} />
            </div>
            {renderPagination()}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;