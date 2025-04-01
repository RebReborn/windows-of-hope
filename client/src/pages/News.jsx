import React from "react";
import newsData from "../utils/newsData";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const News = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          News & Events
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest activities and community initiatives
        </p>
      </div>

      {/* Featured News */}
      <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 hover:shadow-xl transition-shadow duration-300"
        data-aos="fade-up"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={newsData[0].image}
              alt={newsData[0].title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-500">{newsData[0].date}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {newsData[0].title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {newsData[0].summary}
            </p>
            <div className="flex items-center text-blue-600 font-medium group">
              <a href="#" className="mr-2 group-hover:underline">Read full story</a>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.slice(1).map((news) => (
          <div 
            key={news.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title} 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                {news.category || "Update"}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <FaCalendarAlt className="text-blue-500 mr-2 text-sm" />
                <span className="text-sm text-gray-500">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{news.summary}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 font-medium group"
              >
                <span className="mr-2 group-hover:underline">Read more</span>
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-16" data-aos="fade-up">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          View All News
        </button>
      </div>
    </div>
  );
};

export default News;