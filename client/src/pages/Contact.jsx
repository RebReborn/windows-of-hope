import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out with questions, partnership inquiries, or to get involved with our work.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Address Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <FaMapMarkerAlt className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Our Location</h2>
          <p className="text-gray-600">
            P.O. Box 16<br />
            Dowa, Malawi
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <FaPhone className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Call Us</h2>
          <a 
            href="tel:+265888616600" 
            className="text-blue-600 hover:underline font-medium"
          >
            +265 888 616 600
          </a>
          <p className="text-sm text-gray-500 mt-2">Monday - Friday, 8am - 5pm</p>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <FaEnvelope className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Email Us</h2>
          <a 
            href="mailto:info@windowshf.org" 
            className="text-blue-600 hover:underline font-medium"
          >
            info@windowshf.org
          </a>
          <p className="text-sm text-gray-500 mt-2">We typically reply within 24 hours</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16">
        <div className="md:flex">
          {/* Form Side */}
          <div className="md:w-2/3 p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required 
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                <span className="mr-2">Send Message</span>
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="md:w-1/3 bg-blue-600 text-white p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <MdOutlineSupportAgent className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-bold">Need Help?</h3>
            </div>
            <p className="mb-6 text-blue-100">
              Our team is here to answer any questions you may have about our programs, partnerships, or how to get involved.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhone className="w-5 h-5 mt-1 mr-3 text-blue-200" />
                <div>
                  <p className="text-sm text-blue-200">Call us at</p>
                  <a href="tel:+265888616600" className="font-medium hover:underline">+265 888 616 600</a>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="w-5 h-5 mt-1 mr-3 text-blue-200" />
                <div>
                  <p className="text-sm text-blue-200">Email us at</p>
                  <a href="mailto:info@windowshf.org" className="font-medium hover:underline">info@windowshf.org</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          Whether you're donating, volunteering, or spreading the word — your support helps transform lives in Malawi's most vulnerable communities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Become a Volunteer
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
            Make a Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;