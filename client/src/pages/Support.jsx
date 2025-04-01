import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Support Our Mission
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join us in creating lasting change through your generosity and time
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Donation Card */}
        <div 
          className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          data-aos="fade-up"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Donate Now</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your generous donation helps us sponsor students, support widows, empower women, and provide
              access to education and basic needs in vulnerable communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/donate" 
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Donate Today
              </Link>
              <Link 
                to="/impact" 
                className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </div>

        {/* Volunteer Card */}
        <div 
          className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Volunteer</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our team by offering your time or skills in mentoring, community outreach, teaching,
              administration, or event support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/volunteer" 
                className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Become a Volunteer
              </Link>
              <Link 
                to="/volunteer#opportunities" 
                className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>

        {/* Partnership Card - Full Width */}
        <div 
          className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 col-span-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Partner With Us</h2>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Organizations and businesses can collaborate with us through financial support, in-kind donations,
                employee volunteering, or CSR programs. Together we can transform lives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-600">For partnership inquiries:</p>
                    <a href="mailto:info@windowshf.org" className="text-blue-600 font-semibold hover:underline">info@windowshf.org</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-600">Call our partnership team:</p>
                    <a href="tel:+1234567890" className="text-blue-600 font-semibold hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;