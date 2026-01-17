import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaShareAlt, FaBookmark, FaPrint, FaArrowRight, FaTag, FaQuoteLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/common/LoadingSpinner';
import BlogCard from '../components/blogs/BlogCard';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { blogs, loading } = useSelector(state => state.blogs);
    
    const blog = blogs.find(blog => blog.id.toString() === id);
    
    const blogFullContent = {
        1: {
            id: 1,
            title: "Top 10 Hidden Beaches in Thailand You Must Visit",
            author: "Travel Explorer",
            date: "January 15, 2024",
            readTime: "5 min read",
            category: "Destinations",
            featuredImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200",
            tags: ["Thailand", "Beaches", "Travel", "Asia", "Adventure", "Vacation", "Exploration"],
            content: `
                <p class="mb-6 text-darkgray opacity-90 leading-relaxed">Thailand, known as the "Land of Smiles," is home to some of the world's most beautiful beaches. While popular destinations like Phuket and Pattaya attract millions, the country's true coastal treasures remain hidden from the average tourist.</p>
                
                <h2 class="text-2xl font-semibold text-darkgray mb-4 mt-8">Why Explore Hidden Beaches?</h2>
                <p class="mb-6 text-darkgray opacity-90 leading-relaxed">Hidden beaches offer more than just stunning views. They provide tranquility, authentic cultural experiences, and the chance to connect with nature in its purest form. These secluded spots often feature clearer waters, better-preserved marine life, and a sense of discovery that commercial beaches lack.</p>
                
                <h3 class="text-xl font-semibold text-darkgray mb-3 mt-6">1. Secret Beach, Koh Phi Phi</h3>
                <p class="mb-6 text-darkgray opacity-90 leading-relaxed">Accessible only by long-tail boat during specific tides, this secluded gem near Koh Phi Phi offers complete privacy. The beach is framed by dramatic limestone cliffs and features crystal-clear turquoise waters perfect for snorkeling among vibrant coral reefs.</p>
                
                <div class="bg-darkgray bg-opacity-5 p-6 rounded-sm border-l-4 border-gold my-8">
                    <FaQuoteLeft className="text-gold mb-3 text-xl" />
                    <p class="text-darkgray opacity-90 italic">"The true beauty of Thailand's coastline lies not in its popular destinations, but in the hidden coves and secret beaches waiting to be discovered by adventurous travelers who dare to venture off the beaten path."</p>
                </div>
                
                <h3 class="text-xl font-semibold text-darkgray mb-3 mt-6">2. Mai Khao Beach, Phuket</h3>
                <p class="mb-6 text-darkgray opacity-90 leading-relaxed">Stretching 11 kilometers along Phuket's northwest coast, Mai Khao remains surprisingly uncrowded despite its proximity to the airport. As part of Sirinat National Park, it's protected from overdevelopment, ensuring pristine conditions and the occasional sea turtle nesting site.</p>
                
                <h3 class="text-xl font-semibold text-darkgray mb-3 mt-6">3. Freedom Beach, Phuket</h3>
                <p class="mb-6 text-darkgray opacity-90 leading-relaxed">Tucked away from Patong's hustle, Freedom Beach lives up to its name with soft white sand and clear waters. Accessible only by boat or a challenging 20-minute hike, it rewards visitors with peace, serenity, and some of Phuket's best snorkeling spots.</p>
                
                <h3 class="text-xl font-semibold text-darkgray mb-3 mt-6">4. Koh Lipe's Secret Spots</h3>
                <p class="mb-6 text-darkgray opacity-90 leading-relaxed">While Koh Lipe itself is gaining popularity, its hidden coves remain largely untouched. Sunrise Beach's northern end offers privacy, while walking trails lead to secluded spots only locals know about.</p>
                
                <h2 class="text-2xl font-semibold text-darkgray mb-4 mt-8">Tips for Visiting Hidden Beaches</h2>
                <ul class="list-disc pl-6 mb-8 text-darkgray opacity-90 space-y-2">
                    <li>Hire local guides who know the tides and safe access points</li>
                    <li>Pack essentials: water, snacks, sunscreen, and reef-safe mosquito repellent</li>
                    <li>Respect local customs and environmental protection areas</li>
                    <li>Visit during weekdays to avoid any potential weekend crowds</li>
                    <li>Practice "Leave No Trace" principles to preserve these fragile ecosystems</li>
                </ul>
                
                <p class="text-darkgray opacity-90 leading-relaxed">Exploring Thailand's hidden beaches offers more than just beautiful photos—it provides authentic travel experiences, supports local economies, and creates memories that last a lifetime. Remember that the journey to these secluded spots is often part of the adventure.</p>
            `,
            authorBio: "Travel Explorer is a seasoned travel writer with over 10 years of experience exploring destinations across Asia. Specializing in off-the-beaten-path locations, they bring authentic stories and practical advice to fellow adventurers."
        },
        2: {
            id: 2,
            title: "A Complete Guide to European Winter Destinations",
            author: "Travel Explorer",
            date: "January 10, 2024",
            readTime: "7 min read",
            category: "Europe",
            featuredImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
            tags: ["Europe", "Winter", "Travel", "Mountains", "Snow", "Adventure"],
            content: "Detailed content for European Winter Destinations...",
            authorBio: "Travel Explorer is a seasoned travel writer..."
        },
        3: {
            id: 3,
            title: "Budget Travel: How to Explore Japan for Under $50 a Day",
            author: "Travel Explorer",
            date: "January 5, 2024",
            readTime: "6 min read",
            category: "Budget Travel",
            featuredImage: "https://images.unsplash.com/photo-1540959733332-45e1b7732c5f?w=1200",
            tags: ["Japan", "Budget", "Travel", "Asia", "Culture"],
            content: "Detailed content for Japan Budget Travel...",
            authorBio: "Travel Explorer is a seasoned travel writer..."
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-beige flex items-center justify-center">
                <LoadingSpinner text="Loading blog..." size="large" />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-beige flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-8">
                    <div className="text-darkgray text-6xl mb-6 opacity-40">📝</div>
                    <h2 className="text-2xl font-semibold text-darkgray mb-3">Blog Not Found</h2>
                    <p className="text-darkgray mb-6 opacity-80">The blog you're looking for doesn't exist.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => navigate('/blogs')}
                            className="bg-darkgray hover:bg-opacity-90 text-beige font-medium py-3 px-6 rounded-sm transition duration-300"
                        >
                            Browse Blogs
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gold hover:bg-opacity-90 text-darkgray font-medium py-3 px-6 rounded-sm transition duration-300"
                        >
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const fullBlog = blogFullContent[blog.id] || {
        ...blog,
        content: `<p class="text-darkgray opacity-90 leading-relaxed">${blog.excerpt} This is the full article content. More details about this destination will be available soon.</p>`,
        authorBio: "Travel Explorer is a seasoned travel writer with extensive experience in exploring destinations worldwide."
    };
    const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-beige">
            {/* Header Navigation */}
            <div className="bg-beige border-b border-darkgray border-opacity-10 sticky top-0 z-40">
                <div className="container mx-auto px-6 py-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-darkgray hover:text-opacity-80 font-medium transition duration-300 group"
                    >
                        <FaArrowLeft className="mr-3 text-gold group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Blogs
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Article Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 bg-gold bg-opacity-15 text-darkgray text-sm font-medium rounded-sm">
                                {fullBlog.category || 'Travel'}
                            </span>
                            <span className="text-darkgray opacity-70 text-sm">•</span>
                            <span className="text-darkgray opacity-70 text-sm">{fullBlog.readTime}</span>
                        </div>
                        
                        <h1 className="text-4xl font-semibold text-darkgray mb-8 leading-tight tracking-tight">
                            {fullBlog.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-6 text-darkgray opacity-80">
                            <div className="flex items-center gap-2">
                                <FaUser className="text-gold" size={14} />
                                <span className="font-medium">{fullBlog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendar className="text-gold" size={14} />
                                <span>{fullBlog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-gold" size={14} />
                                <span>{fullBlog.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-12">
                        <img
                            src={fullBlog.featuredImage || blog.image}
                            alt={fullBlog.title}
                            className="w-full h-[400px] object-cover rounded-sm shadow-md"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="mb-16">
                        <div 
                            className="text-darkgray opacity-90 leading-relaxed text-lg space-y-6"
                            dangerouslySetInnerHTML={{ __html: fullBlog.content }}
                        />
                    </div>

                    {/* Tags */}
                    <div className="mb-16">
                        <h3 className="text-lg font-semibold text-darkgray mb-4 flex items-center gap-2">
                            <FaTag className="text-gold" />
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {fullBlog.tags && fullBlog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-darkgray bg-opacity-5 hover:bg-opacity-10 text-darkgray rounded-sm text-sm transition duration-300 cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-darkgray border-opacity-10 mb-16">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-darkgray hover:text-gold transition duration-300">
                                <FaBookmark size={16} />
                                <span className="text-sm font-medium">Save for later</span>
                            </button>
                            <button className="flex items-center gap-2 text-darkgray hover:text-gold transition duration-300">
                                <FaShareAlt size={16} />
                                <span className="text-sm font-medium">Share article</span>
                            </button>
                            <button className="flex items-center gap-2 text-darkgray hover:text-gold transition duration-300">
                                <FaPrint size={16} />
                                <span className="text-sm font-medium">Print</span>
                            </button>
                        </div>
                        
                        <button 
                            onClick={() => navigate('/blogs')}
                            className="flex items-center gap-2 bg-darkgray hover:bg-opacity-90 text-beige px-6 py-3 rounded-sm transition duration-300"
                        >
                            <span>View All Blogs</span>
                            <FaArrowRight size={14} />
                        </button>
                    </div>

                    {/* Related Posts */}
                    {relatedBlogs.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold text-darkgray mb-8">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedBlogs.map((relatedBlog) => (
                                    <div key={relatedBlog.id}>
                                        <BlogCard blog={relatedBlog} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Bio */}
                    <div className="bg-darkgray bg-opacity-5 rounded-sm p-8">
                        <h3 className="text-xl font-semibold text-darkgray mb-4">About the Author</h3>
                        <p className="text-darkgray opacity-90 leading-relaxed mb-4">
                            {fullBlog.authorBio}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-darkgray bg-opacity-10 rounded-full flex items-center justify-center">
                                <span className="font-semibold text-darkgray">
                                    {fullBlog.author.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-darkgray">{fullBlog.author}</h4>
                                <p className="text-darkgray opacity-70 text-sm">Senior Travel Writer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;