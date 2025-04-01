import React from "react";
import { FaHandHoldingHeart, FaEye, FaBook, FaSeedling, FaHeartbeat, FaHandsHelping, FaLeaf } from "react-icons/fa";
import OurTeam from "../components/OurTeam";


const About = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto space-y-20 text-gray-800">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          About Windows of Hope Foundation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're a community-centered organization dedicated to transforming lives by empowering vulnerable individuals in both refugee and host communities across Malawi.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-blue-50 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <FaHandHoldingHeart className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded out of compassion for underserved communities, Windows of Hope Foundation was created to provide opportunities to those most at risk — marginalized girls, orphans, widows, and single mothers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strive to restore hope, dignity, and independence through education, empowerment, and sustainable programs that create lasting change in refugee and host communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <FaEye className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To empower vulnerable individuals through education, health awareness, skill-building, and economic support — creating pathways to independence and sustainable living.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <FaHandHoldingHeart className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A world where every marginalized person in refugee and host communities can thrive spiritually, intellectually, and emotionally with dignity and self-reliance.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <FaBook className="w-6 h-6" />, title: "Promoting Education", description: "Access to inclusive, quality education for children and youth." },
            { icon: <FaHandsHelping className="w-6 h-6" />, title: "Capacity Building", description: "Vocational training for women and youth to foster economic independence." },
            { icon: <FaHeartbeat className="w-6 h-6" />, title: "Health & Well-being", description: "Awareness programs for HIV/AIDS, mental health, trauma healing, and COVID-19 prevention." },
            { icon: <FaSeedling className="w-6 h-6" />, title: "Livelihood Support", description: "Financial literacy, small business grants, and social aid to widows, elderly, and unaccompanied children." },
            { icon: <FaLeaf className="w-6 h-6" />, title: "Promoting Agriculture", description: "Sustainable farming and food security training for communities." },
            { icon: <FaHandHoldingHeart className="w-6 h-6" />, title: "Emergency Response", description: "Immediate support for communities during crises, including health and shelter needs." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-colors duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Objectives */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Compassion', 'Empowerment', 'Integrity', 'Inclusivity', 'Sustainability', 'Hope'].map((value, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300">
                <span className="font-medium text-blue-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Objectives</h2>
          <ul className="space-y-4">
            {[
              "Provide access to basic needs and education",
              "Develop sustainable programs to reduce poverty",
              "Strengthen family and community structures",
              "Promote equity and resilience in refugee and host settings"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OurTeam />
    </div>
  );
};

export default About;