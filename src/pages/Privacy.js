
const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EE] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-[#C8A24A] font-serif text-sm font-medium tracking-widest uppercase">
                Legal Information
              </span>
              <div className="h-0.5 w-16 bg-[#C8A24A] mx-auto mt-2"></div>
            </div>
            <h1 className="text-5xl font-serif font-bold text-[#3A3A3A] mb-6 leading-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#3A3A3A]/10 p-10">
            <div className="text-lg text-[#3A3A3A]/70 mb-10 p-6 bg-[#D8CFC4]/20 rounded-xl border border-[#C8A24A]/10">
              <p className="font-light">
                Last updated: {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>

            <div className="space-y-12">
              <section className="border-b border-[#3A3A3A]/10 pb-12 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                    <span className="text-[#C8A24A] font-serif font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">
                      Information We Collect
                    </h2>
                    <p className="text-[#3A3A3A]/70 leading-relaxed font-light mb-6">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="space-y-3">
                      {['Personal information (name, email address, phone number)', 'Travel preferences and search history', 'Favorite hotels and saved searches', 'Communication preferences'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#C8A24A] mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-[#3A3A3A]/70 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border-b border-[#3A3A3A]/10 pb-12 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                    <span className="text-[#C8A24A] font-serif font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">
                      How We Use Your Information
                    </h2>
                    <p className="text-[#3A3A3A]/70 leading-relaxed font-light mb-6">
                      We use the information we collect to:
                    </p>
                    <ul className="space-y-3">
                      {['Provide, maintain, and improve our services', 'Personalize your experience and show relevant content', 'Communicate with you about products, services, and promotions', 'Monitor and analyze trends, usage, and activities', 'Detect, investigate, and prevent fraudulent transactions'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#C8A24A] mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-[#3A3A3A]/70 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border-b border-[#3A3A3A]/10 pb-12 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                    <span className="text-[#C8A24A] font-serif font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">
                      Information Sharing
                    </h2>
                    <p className="text-[#3A3A3A]/70 leading-relaxed font-light mb-6">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                    <ul className="space-y-3">
                      {['With your explicit consent', 'To comply with legal obligations', 'To protect and defend our rights and property', 'With service providers who assist in our operations'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#C8A24A] mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-[#3A3A3A]/70 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border-b border-[#3A3A3A]/10 pb-12 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                    <span className="text-[#C8A24A] font-serif font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">
                      Data Security
                    </h2>
                    <p className="text-[#3A3A3A]/70 leading-relaxed font-light">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-b border-[#3A3A3A]/10 pb-12 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                    <span className="text-[#C8A24A] font-serif font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">
                      Your Rights
                    </h2>
                    <p className="text-[#3A3A3A]/70 leading-relaxed font-light mb-6">
                      You have the right to:
                    </p>
                    <ul className="space-y-3">
                      {['Access and receive a copy of your personal information', 'Rectify or update your personal information', 'Delete your personal information', 'Restrict or object to our processing of your personal information', 'Data portability'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#C8A24A] mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-[#3A3A3A]/70 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                    <span className="text-[#C8A24A] font-serif font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-[#3A3A3A] mb-6">
                      Contact Us
                    </h2>
                    <p className="text-[#3A3A3A]/70 leading-relaxed font-light mb-6">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-[#D8CFC4]/30 p-6 rounded-xl border border-[#C8A24A]/10">
                      <p className="text-[#3A3A3A] font-light">
                        Email: privacy@tripnest.com<br />
                        Address: 123 Travel Street, Adventure City, AC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
