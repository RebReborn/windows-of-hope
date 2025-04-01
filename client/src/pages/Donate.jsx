import React, { useState } from "react";
import { FaHandHoldingHeart, FaFileUpload, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdPayment, MdAttachMoney } from "react-icons/md";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    currency: "MWK",
    purpose: "general",
    file: null,
    paymentMethod: "bank",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file" && files) {
      setFileName(files[0].name);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you for your donation of ${formData.amount} ${formData.currency}! We'll contact you shortly.`);
      setIsSubmitting(false);
    }, 1500);
  };

  const donationPurposes = [
    { value: "general", label: "General Donation" },
    { value: "education", label: "Education Program" },
    { value: "livelihood", label: "Livelihood Support" },
    { value: "health", label: "Health & Well-being" },
    { value: "emergency", label: "Emergency Relief" },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Support Our Cause
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your donation helps us empower orphans, widows, and vulnerable women through education, care, and sustainable programs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Bank Transfer Card */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
              <MdPayment className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Bank Transfer</h2>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">Bank Name</span>
              <p className="font-medium">First Capital Bank</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Account Name</span>
              <p className="font-medium">Windows of Hope Foundation</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Account Number</span>
              <p className="font-medium">0026502002722</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Branch</span>
              <p className="font-medium">Area 2, Lilongwe</p>
            </div>
          </div>
        </div>

        {/* Mobile Money Card */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-600">
              <MdAttachMoney className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Mobile Money</h2>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">Provider</span>
              <p className="font-medium">Airtel Money</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Account Name</span>
              <p className="font-medium">Windows of Hope</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Phone Number</span>
              <p className="font-medium">+265 888 616 600</p>
            </div>
          </div>
        </div>

        {/* Other Methods Card */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-4 text-purple-600">
              <FaHandHoldingHeart className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Other Options</h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600">
              For international donations, corporate giving, or in-kind donations, please contact us directly.
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@windowshf.org" className="hover:underline">info@windowshf.org</a>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16">
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <FaHandHoldingHeart className="text-blue-500 mr-3" />
            Donation Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Donation Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {formData.currency === "MWK" ? "MK" : "$"}
                  </span>
                  <input
                    type="number"
                    name="amount"
                    required
                    className="w-full border border-gray-300 px-4 py-3 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Currency</label>
                <select
                  name="currency"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  onChange={handleChange}
                >
                  <option value="MWK">MWK (Malawi Kwacha)</option>
                  <option value="USD">USD (US Dollar)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Purpose of Donation</label>
              <select
                name="purpose"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={handleChange}
              >
                {donationPurposes.map((purpose) => (
                  <option key={purpose.value} value={purpose.value}>
                    {purpose.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === "bank"}
                    onChange={handleChange}
                    className="text-blue-500"
                  />
                  <span>Bank Transfer</span>
                </label>
                <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile"
                    checked={formData.paymentMethod === "mobile"}
                    onChange={handleChange}
                    className="text-blue-500"
                  />
                  <span>Mobile Money</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Upload Proof of Payment
              </label>
              <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <FaFileUpload className="w-8 h-8 mb-2 text-blue-500" />
                <p className="text-sm text-gray-500">
                  {fileName || "Click to upload deposit slip or screenshot"}
                </p>
                <input
                  type="file"
                  name="file"
                  className="hidden"
                  onChange={handleChange}
                  accept="image/*,.pdf"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                isSubmitting ? "opacity-70" : "hover:from-blue-700 hover:to-blue-600 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? "Processing..." : "Donate Now"}
              {!isSubmitting && (
                <FaHandHoldingHeart className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          Our team is ready to help with any questions about donations, partnerships, or our programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:info@windowshf.org"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            Email Us
          </a>
          <a
            href="tel:+265888616600"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
          >
            <FaPhone className="mr-2" />
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;