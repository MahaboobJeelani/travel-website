import { FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 group">
      {/* Blog Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#C8A24A] text-[#3A3A3A] px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
          Travel
        </div>
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center text-[#3A3A3A]/60 text-sm mb-4 gap-3 font-light">
          <div className="flex items-center gap-1.5">
            <FaCalendar className="text-[#C8A24A]" size={12} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaUser className="text-[#C8A24A]" size={12} />
            <span>{blog.author}</span>
          </div>
          {blog.readTime && (
            <div className="flex items-center gap-1.5">
              <FaClock className="text-[#C8A24A]" size={12} />
              <span>{blog.readTime}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-semibold text-[#3A3A3A] mb-4 line-clamp-2 group-hover:text-[#C8A24A] transition-colors duration-300 leading-tight">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#3A3A3A]/70 mb-5 line-clamp-3 leading-relaxed font-light">
          {blog.excerpt}
        </p>

        {/* Read More Button */}
        <div className="pt-4 border-t border-[#3A3A3A]/5">
          <Link to={`/readblog/${blog.id}`}>
            <button className="inline-flex items-center gap-2 text-[#3A3A3A] hover:text-[#C8A24A] font-medium transition-all duration-300 group/link">
              <span>Read More</span>
              <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" size={14} />
            </button>
          </Link>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A24A]/20 rounded-xl pointer-events-none transition-all duration-500"></div>
    </div>
  );
};

export default BlogCard;