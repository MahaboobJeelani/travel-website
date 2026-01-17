import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { COMPANY_INFO, TEAM_MEMBERS, FAQS } from '../utils/constants';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EE]">
      {/* Hero Section */}

      <section className="bg-[#3A3A3A] text-white py-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3A3A3A]/95 via-[#3A3A3A]/90 to-[#3A3A3A]/95"></div>
          {/* Subtle Pattern Overlay for Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMThoNnY2aC02di02em0wIDNoNnY2aC02di02em0wIDNoNnY2aC02di02em0tMyAwaDZ2NmgtNnYtNnptMCAwaDZ2NmgtNnYtNnptMCAwaDZ2NmgtNnYtNnptLTMgMGg2djZoLTZ2LTZ6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-8">
            <span className="text-[#C8A24A] font-serif text-lg font-medium tracking-wider">
              OUR JOURNEY
            </span>
            <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
          </div>
          <h1 className="text-6xl font-serif font-bold mb-8 leading-tight">
            About Roamify
          </h1>
          <p className="text-2xl max-w-3xl mx-auto leading-relaxed font-light text-white/90">
            Your trusted partner in discovering the world's most amazing destinations
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F5F2EE]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

            {/* Left Column - Decorative/Visual Element */}
            <div className="lg:w-5/12 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Background Image - Replace with your preferred travel image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80")'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A]/60 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Overlay */}
                <div className="absolute inset-0 border-2 border-[#C8A24A]/20 pointer-events-none"></div>

                {/* Floating Text Badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#C8A24A]/20">
                    <h3 className="text-lg font-serif font-semibold text-[#3A3A3A] mb-2">
                      Since 2020
                    </h3>
                    <p className="text-sm text-[#3A3A3A]/70 font-light">
                      Empowering travelers worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-7/12">
              <div className="mb-12">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-[#C8A24A]"></div>
                  <span className="text-[#C8A24A] font-serif text-lg font-medium tracking-wider uppercase">
                    Our Legacy
                  </span>
                  <div className="h-px w-12 bg-[#C8A24A]"></div>
                </div>
                <h2 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-10 leading-tight">
                  The Story Behind <br />
                  <span className="text-[#C8A24A]">Roamify</span>
                </h2>
              </div>

              <div className="space-y-10">
                <div className="relative pl-10 group">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-[#C8A24A] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#C8A24A] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-xl text-[#3A3A3A]/80 leading-relaxed font-light pl-4 border-l border-[#C8A24A]/20">
                    Founded in 2020, Roamify emerged from a simple idea: travel should be accessible,
                    enjoyable, and memorable for everyone. Our team of travel enthusiasts and tech experts
                    came together to create a platform that simplifies travel planning while providing
                    authentic experiences.
                  </p>
                </div>

                <div className="relative pl-10 group">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-[#C8A24A] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#C8A24A] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-xl text-[#3A3A3A]/80 leading-relaxed font-light pl-4 border-l border-[#C8A24A]/20">
                    We believe that every journey tells a story, and we're here to help you write yours.
                    From finding the perfect hotel to discovering hidden gems through our travel blogs,
                    we're committed to making your travel experiences extraordinary.
                  </p>
                </div>

                <div className="relative pl-10 group">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-[#C8A24A] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#C8A24A] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-xl text-[#3A3A3A]/80 leading-relaxed font-light pl-4 border-l border-[#C8A24A]/20">
                    Today, we serve thousands of travelers worldwide, helping them explore new destinations,
                    create lasting memories, and share their stories with our growing community.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-16 pt-10 border-t border-[#3A3A3A]/10">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-[#C8A24A] mb-2">5K+</div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Happy Travelers
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-[#C8A24A] mb-2">50+</div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Countries Covered
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-[#C8A24A] mb-2">1K+</div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Stories Shared
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#D8CFC4]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="text-center p-12 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-xl group">
              <div className="w-24 h-24 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8A24A] transition-all duration-500">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#3A3A3A] mb-6">Our Mission</h3>
              <p className="text-[#3A3A3A]/80 leading-relaxed font-light text-lg">
                To empower travelers with the tools, information, and inspiration they need to
                explore the world confidently and create unforgettable experiences.
              </p>
              <div className="mt-8 h-0.5 w-16 bg-[#C8A24A] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <div className="text-center p-12 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-xl group">
              <div className="w-24 h-24 rounded-full bg-[#3A3A3A] flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8A24A] transition-all duration-500">
                <span className="text-3xl">🔭</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#3A3A3A] mb-6">Our Vision</h3>
              <p className="text-[#3A3A3A]/80 leading-relaxed font-light text-lg">
                A world where travel is seamless, sustainable, and accessible to all, fostering
                global connections and cultural understanding.
              </p>
              <div className="mt-8 h-0.5 w-16 bg-[#C8A24A] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C8A24A]"></div>
              <span className="text-[#C8A24A] font-serif text-lg font-medium tracking-wider uppercase">
                The Minds Behind
              </span>
              <div className="h-px w-12 bg-[#C8A24A]"></div>
            </div>
            <h2 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
              Our Leadership Team
            </h2>
            <p className="text-xl text-[#3A3A3A]/70 max-w-3xl mx-auto font-light leading-relaxed">
              Meet the passionate individuals who drive innovation and excellence at Roamify
            </p>
          </div>

          {/* Main Team Grid */}
          <div className="relative">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iI0M4QTI0QSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={member.id} className="relative group">
                  {/* Card Container */}
                  <div className="flex flex-col lg:flex-row gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 hover:shadow-2xl">

                    {/* Image Container */}
                    <div className="lg:w-2/5 flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A24A]/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-full h-64 lg:h-auto rounded-xl object-cover shadow-lg border-4 border-white"
                        />
                        {/* Social/Info Overlay on Hover */}
                        <div className="absolute inset-0 bg-[#3A3A3A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="text-[#C8A24A] font-medium mb-2">Connect</div>
                            <div className="flex justify-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-[#C8A24A]/20 flex items-center justify-center hover:bg-[#C8A24A]/40 transition-all duration-300 cursor-pointer">
                                <span className="text-sm text-[#C8A24A]">in</span>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-[#C8A24A]/20 flex items-center justify-center hover:bg-[#C8A24A]/40 transition-all duration-300 cursor-pointer">
                                <span className="text-sm text-[#C8A24A]">@</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="lg:w-3/5">
                      <div className="mb-4">
                        <h3 className="text-2xl font-serif font-bold text-[#3A3A3A] group-hover:text-[#C8A24A] transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="h-px w-8 bg-[#C8A24A]"></div>
                          <p className="text-[#C8A24A] font-medium tracking-wide">
                            {member.position}
                          </p>
                          <div className="h-px flex-grow bg-[#3A3A3A]/10"></div>
                        </div>
                      </div>

                      <p className="text-[#3A3A3A]/80 font-light leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Skills/Expertise Tags */}
                      <div className="mb-6">
                        <div className="text-sm text-[#3A3A3A]/60 font-medium mb-3">Expertise</div>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise?.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 text-xs bg-[#C8A24A]/10 text-[#C8A24A] rounded-full border border-[#C8A24A]/20 hover:bg-[#C8A24A]/20 transition-all duration-300 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quote/Signature */}
                      <div className="pt-6 border-t border-[#3A3A3A]/10">
                        <div className="relative">
                          <div className="absolute -top-4 left-0 text-3xl text-[#C8A24A]/30">"</div>
                          <p className="text-sm text-[#3A3A3A]/60 italic pl-6">
                            "Passionate about creating memorable travel experiences"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats Bar */}
            <div className="mt-16 pt-12 border-t border-[#3A3A3A]/10">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2 group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Years Combined
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2 group-hover:scale-110 transition-transform duration-300">
                      50+
                    </div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Countries Visited
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2 group-hover:scale-110 transition-transform duration-300">
                      1000+
                    </div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Stories Created
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-serif font-bold text-[#C8A24A] mb-2 group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <p className="text-sm text-[#3A3A3A]/70 uppercase tracking-wider font-light">
                      Passion Driven
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#D8CFC4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="text-[#C8A24A] font-serif text-lg font-medium tracking-wider">
                NEED HELP?
              </span>
              <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#3A3A3A]/10 hover:border-[#C8A24A]/30 transition-all duration-500 group"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-500 group-hover:bg-white/30"
                >
                  <span className="font-serif font-semibold text-lg text-[#3A3A3A] pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <FaChevronUp className="text-[#C8A24A]" />
                    ) : (
                      <FaChevronDown className="text-[#3A3A3A]/50 group-hover:text-[#C8A24A]" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 pt-2">
                    <div className="h-px w-full bg-[#C8A24A]/20 mb-6"></div>
                    <p className="text-[#3A3A3A]/80 leading-relaxed font-light text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;