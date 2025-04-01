import React from "react";
import { FaGraduationCap, FaHandsHelping, FaHeartbeat, FaHome } from "react-icons/fa";

const Programs = () => {
  const programs = [
    {
      title: "Education Program",
      icon: <FaGraduationCap className="w-8 h-8" />,
      image: "https://source.unsplash.com/600x400/?classroom,school",
      description: "We invest in the future through Ebenezer Academy — providing quality Nursery, Primary, and Secondary education to vulnerable children. Our curriculum fosters intellectual growth and emotional resilience in a safe and inclusive environment.",
      highlights: [
        "Quality education for vulnerable children",
        "Safe and inclusive environment",
        "Focus on intellectual and emotional growth"
      ],
      goal: "Our goal is to ensure every child, regardless of background, has the opportunity to learn, dream, and thrive."
    },
    {
      title: "Capacity Building",
      icon: <FaHandsHelping className="w-8 h-8" />,
      image: "https://source.unsplash.com/600x400/?vocational,training",
      description: "We equip youth and women with practical skills for economic independence.",
      highlights: [
        "Soap & shampoo making",
        "Candle and charcoal production",
        "Tailoring & hairdressing",
        "Entrepreneurship & business management"
      ]
    },
    {
      title: "Health & Well-being",
      icon: <FaHeartbeat className="w-8 h-8" />,
      image: "https://source.unsplash.com/600x400/?healthcare,awareness",
      description: "We promote physical and mental wellness through peer education and workshops.",
      highlights: [
        "HIV/AIDS prevention and awareness",
        "COVID-19 education",
        "Early marriage prevention",
        "Trauma healing support"
      ]
    },
    {
      title: "Livelihood Support",
      icon: <FaHome className="w-8 h-8" />,
      image: "https://source.unsplash.com/600x400/?shelter,aid",
      description: "We provide assistance to separated children, widows, single mothers, and the elderly.",
      highlights: [
        "Basic needs like food and shelter",
        "Financial literacy workshops",
        "Microgrants to launch small businesses"
      ],
      goal: "This support fosters long-term independence, dignity, and improved well-being."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Our Programs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We run impactful programs that empower individuals in both refugee and host communities to build a life of dignity, self-reliance, and hope.
        </p>
      </div>

      {/* Programs */}
      <div className="space-y-24">
        {programs.map((program, index) => (
          <section 
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            data-aos="fade-up"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/0"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                  {program.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {program.title}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {program.description}
              </p>
              
              <ul className="mb-4 space-y-2">
                {program.highlights.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              {program.goal && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-blue-800 font-medium">{program.goal}</p>
                </div>
              )}
              
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center group">
                Learn more about this program
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 mt-24 text-center text-white" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to make an impact?</h3>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          Join us in transforming lives through education, empowerment, and sustainable development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Donate to Support Our Programs
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;