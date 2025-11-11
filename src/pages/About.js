import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { COMPANY_INFO, TEAM_MEMBERS, FAQS } from '../utils/constants';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Trip Nest</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in discovering the world's most amazing destinations
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2020, Trip Nest emerged from a simple idea: travel should be accessible, 
                enjoyable, and memorable for everyone. Our team of travel enthusiasts and tech experts 
                came together to create a platform that simplifies travel planning while providing 
                authentic experiences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe that every journey tells a story, and we're here to help you write yours. 
                From finding the perfect hotel to discovering hidden gems through our travel blogs, 
                we're committed to making your travel experiences extraordinary.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we serve thousands of travelers worldwide, helping them explore new destinations, 
                create lasting memories, and share their stories with our growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower travelers with the tools, information, and inspiration they need to 
                explore the world confidently and create unforgettable experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where travel is seamless, sustainable, and accessible to all, fostering 
                global connections and cultural understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition duration-300"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl">
              <strong>Email:</strong> {COMPANY_INFO.email}
            </p>
            <p className="text-xl">
              <strong>Phone:</strong> {COMPANY_INFO.phone}
            </p>
            <p className="text-xl">
              <strong>Address:</strong> {COMPANY_INFO.address}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;