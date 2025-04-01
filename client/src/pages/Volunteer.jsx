import React, { useState } from "react";

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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Thanks for applying! We'll get in touch soon.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      dob: "",
      address: "",
      email: "",
      interest: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Volunteer With Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us make a lasting impact in the lives of vulnerable individuals and communities.
            Your support, whether as a student, professional, or caring individual, is invaluable.
          </p>
        </header>

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-lg p-6 md:p-8 rounded-xl space-y-6 border border-gray-100"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            Volunteer Application
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block font-medium text-gray-700">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block font-medium text-gray-700">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="123-456-7890"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dob" className="block font-medium text-gray-700">
                Date of Birth *
              </label>
              <input
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block font-medium text-gray-700">
              Address *
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your full address"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="interest" className="block font-medium text-gray-700">
              Area of Interest *
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="">Select an interest</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="community">Community Support</option>
              <option value="environment">Environment</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block font-medium text-gray-700">
              Why do you want to volunteer? *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              rows="4"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Tell us about your motivation..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-200 ${
              isSubmitting 
                ? "opacity-75 cursor-not-allowed" 
                : "hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {/* Call to Action */}
        <footer className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900">Be the Change!</h3>
          <p className="text-gray-600">
            Join our mission to transform lives and empower vulnerable communities.
            Together, we can make a real difference.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Volunteer;