import React from "react";

const Stats = () => {
  const stats = [
    { label: "Lives Impacted", value: "500+" },
    { label: "Years of Service", value: "10+" },
    { label: "Programs Launched", value: "15+" },
    { label: "Volunteers", value: "200+" },
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-blue-600">{item.value}</span>
            <span className="mt-2 text-gray-600 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
