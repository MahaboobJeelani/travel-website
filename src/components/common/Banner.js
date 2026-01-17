import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative bg-[#3A3A3A] min-h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Landscape"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 min-h-[500px] flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Explore The World
          </h1>
          
          <div className="h-px w-24 bg-[#C8A24A] mx-auto mb-8"></div>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Discover amazing places and create unforgettable memories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hotels"
              className="bg-[#C8A24A] text-[#3A3A3A] font-medium py-3 px-8 rounded hover:bg-[#C8A24A]/90 transition-colors duration-300"
            >
              Find Hotels
            </Link>
            <Link
              to="/blogs"
              className="bg-transparent border border-white text-white font-medium py-3 px-8 rounded hover:bg-white hover:text-[#3A3A3A] transition-colors duration-300"
            >
              Read Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;