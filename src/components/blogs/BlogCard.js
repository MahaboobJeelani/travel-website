import React from 'react';
import { FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Travel
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3 flex-wrap gap-2">
          <div className="flex items-center">
            <FaCalendar className="mr-1" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <FaUser className="mr-1" />
            <span>{blog.author}</span>
          </div>
          {blog.readTime && (
            <div className="flex items-center">
              <FaClock className="mr-1" />
              <span>{blog.readTime}</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition duration-300">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>

        <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition duration-300 group">
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;