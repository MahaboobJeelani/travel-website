import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/common/Banner';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchBlogs } from '../redux/actions/blogActions';
import { FaHotel, FaHeart } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector(state => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#F5F2EE]">
      {/* Banner Section */}
      <Banner />
      <section className="py-20 bg-[#F5F2EE]">
        <div className="container mx-auto px-6">
          {/* Side Header Layout */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="mb-6">
                  <div className="h-px w-12 bg-[#C8A24A] mb-4"></div>
                  <span className="text-[#C8A24A] font-serif text-sm font-medium tracking-widest uppercase">
                    Featured Content
                  </span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#3A3A3A] mb-6">
                  Latest Travel Insights
                </h2>
                <p className="text-[#3A3A3A]/70 leading-relaxed mb-8">
                  Discover inspiring travel stories, tips, and guides from our community of explorers
                </p>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-[#C8A24A] font-medium group"
                >
                  Browse All
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Blog Cards */}
            <div className="lg:w-2/3">
              {loading ? (
                <LoadingSpinner text="Loading blogs..." />
              ) : (
                <div className="space-y-8">
                  {blogs.slice(0, 3).map(blog => (
                    <div key={blog.id} className="group">
                      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500">
                        <div className="md:w-1/3">
                          <div className="relative h-48 rounded-lg overflow-hidden">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-[#C8A24A]/10 text-[#C8A24A] text-xs font-medium rounded-full">
                              {blog.category}
                            </span>
                            <span className="text-sm text-[#3A3A3A]/50">
                              {blog.readTime} min
                            </span>
                          </div>
                          <h3 className="text-xl font-serif font-bold text-[#3A3A3A] mb-3 group-hover:text-[#C8A24A] transition-colors duration-300">
                            {blog.title}
                          </h3>
                          <p className="text-[#3A3A3A]/70 mb-4 line-clamp-2">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={blog.author.avatar}
                                alt={blog.author.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm text-[#3A3A3A]">{blog.author.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#D8CFC4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#C8A24A] font-serif text-lg font-medium tracking-wider">
                OUR PROMISE
              </span>
              <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
              Why Choose Roamify?
            </h2>
            <p className="text-xl text-[#3A3A3A]/80 max-w-3xl mx-auto leading-relaxed font-light">
              We make travel planning easy and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-lg group">
              <div className="w-20 h-20 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A24A] transition-all duration-500">
                <span className="text-3xl"><FaHotel /></span>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
                Best Hotels
              </h3>
              <p className="text-[#3A3A3A]/80 leading-relaxed font-light">
                Discover hand-picked hotels with verified reviews and competitive prices
              </p>
              <div className="mt-6 h-0.5 w-12 bg-[#C8A24A] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-lg group">
              <div className="w-20 h-20 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A24A] transition-all duration-500">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
                Travel Guides
              </h3>
              <p className="text-[#3A3A3A]/80 leading-relaxed font-light">
                Get insider tips and detailed guides from experienced travelers
              </p>
              <div className="mt-6 h-0.5 w-12 bg-[#C8A24A] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-lg group">
              <div className="w-20 h-20 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A24A] transition-all duration-500">
                <span className="text-3xl"><FaHeart/></span>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-4">
                Save Favorites
              </h3>
              <p className="text-[#3A3A3A]/80 leading-relaxed font-light">
                Bookmark your favorite hotels and access them anytime, anywhere
              </p>
              <div className="mt-6 h-0.5 w-12 bg-[#C8A24A] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#3A3A3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A3A3A] via-[#3A3A3A]/95 to-[#3A3A3A]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-8">
            <span className="text-[#C8A24A] font-serif text-lg font-medium tracking-wider">
              BEGIN YOUR JOURNEY
            </span>
            <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light text-white/90">
            Find the perfect hotel for your next adventure and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/hotels"
              className="group relative overflow-hidden bg-[#C8A24A] text-[#3A3A3A] font-semibold py-4 px-10 rounded-full text-lg transition-all duration-500 hover:shadow-xl hover:scale-105 min-w-[200px]"
            >
              <span className="relative z-10">Find Hotels</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
            <Link
              to="/blogs"
              className="group relative overflow-hidden border-2 border-[#C8A24A] text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-500 hover:bg-[#C8A24A] hover:text-[#3A3A3A] hover:shadow-xl hover:scale-105 min-w-[200px]"
            >
              <span className="relative z-10">Read Stories</span>
              <div className="absolute inset-0 bg-[#C8A24A] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;