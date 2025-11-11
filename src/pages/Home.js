import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/common/Banner';
import BlogCard from '../components/blogs/BlogCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchBlogs } from '../redux/actions/blogActions';

const Home = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector(state => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner />

      {/* Featured Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Travel Blogs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring travel stories, tips, and guides from our community of explorers
            </p>
          </div>

          {loading ? (
            <LoadingSpinner text="Loading blogs..." />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {blogs.slice(0, 3).map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  to="/blogs"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  View All Blogs
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Trip Nest?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make travel planning easy and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Hotels</h3>
              <p className="text-gray-600">
                Discover hand-picked hotels with verified reviews and competitive prices
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Travel Guides</h3>
              <p className="text-gray-600">
                Get insider tips and detailed guides from experienced travelers
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Favorites</h3>
              <p className="text-gray-600">
                Bookmark your favorite hotels and access them anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find the perfect hotel for your next adventure and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hotels"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Find Hotels
            </Link>
            <Link
              to="/blogs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;