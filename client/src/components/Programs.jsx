import React from "react";

const programs = [
  {
    title: "Ebenezer Academy",
    description: "Providing quality education to vulnerable children in both refugee and host communities.",
    image: "https://source.unsplash.com/400x300/?school,classroom",
  },
  {
    title: "Women's Empowerment",
    description: "Equipping women with vocational and entrepreneurial skills for sustainable livelihoods.",
    image: "https://source.unsplash.com/400x300/?women,empowerment",
  },
  {
    title: "Child Protection & Trauma Support",
    description: "Offering emotional support and safety to children affected by crisis and hardship.",
    image: "https://source.unsplash.com/400x300/?children,refugees",
  },
];

const Programs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Programs</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src={program.image} alt={program.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
