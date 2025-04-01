import React, { useState } from "react";
import { FaHandsHelping, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaPaperPlane } from "react-icons/fa";
import { MdInterests } from "react-icons/md";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    address: "",
    email: "",
    interest: "",
    message: "",
    skills: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const volunteerSkills = [
    "Teaching",
    "Mentoring",
    "Healthcare",
    "Counseling",
    "Agriculture",
    "Construction",
    "IT Skills",
    "Fundraising",
    "Administration",
    "Event Planning",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you ${formData.firstName} for your volunteer application! We'll contact you soon.`);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Join Our Volunteer Team
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help us make a lasting impact in the lives of vulnerable individuals and communities.
          Whether you're a student, professional, or simply someone who cares — we welcome your support.
        </p>
      </div>

      {/* Volunteer Form */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16">
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <FaHandsHelping className="text-blue-500 mr-3" />
            Volunteer Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700 flex items-center">
                  <FaUser className="mr-2 text-blue-500" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 flex items-center">
                  <FaUser className="mr-2 text-blue-500" />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700 flex items-center">
                  <FaPhone className="mr-2 text-blue-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 flex items-center">
                <MdInterests className="mr-2 text-blue-500" />
                Area of Interest
              </label>
              <input
                type="text"
                name="interest"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. Teaching, Healthcare, Administration"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Skills & Expertise
              </label>
              <div className="flex flex-wrap gap-2">
                {volunteerSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedSkills.includes(skill)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors duration-200`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Why do you want to volunteer with us?
              </label>
              <textarea
                name="message"
                rows="4"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Share your motivation and what you hope to contribute..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                isSubmitting ? "opacity-70" : "hover:from-blue-700 hover:to-blue-600 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
              {!isSubmitting && (
                <FaPaperPlane className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Volunteer Benefits */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Make an Impact</h3>
          <p className="text-gray-600">
            Directly contribute to transforming lives in vulnerable communities through your skills and time.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Grow Personally</h3>
          <p className="text-gray-600">
            Develop new skills, gain valuable experience, and broaden your perspective through service.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Join a Community</h3>
          <p className="text-gray-600">
            Connect with like-minded individuals passionate about creating positive change.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          Join our team of dedicated volunteers and be part of meaningful change in Malawi's vulnerable communities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:volunteer@windowshf.org"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            Email Our Volunteer Team
          </a>
          <a
            href="tel:+265888616600"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
          >
            <FaPhone className="mr-2" />
            Call for More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;