import React from "react";

const About = () => {
  return (
    <div className="py-20 px-4 max-w-5xl mx-auto space-y-16 text-gray-800">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Windows of Hope Foundation</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're a community-centered organization dedicated to transforming lives by empowering vulnerable individuals in both refugee and host communities across Malawi.
        </p>
      </div>

      {/* Our Story */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p>
          Founded out of compassion for underserved communities, Windows of Hope Foundation was created to provide opportunities to those most at risk — marginalized girls, orphans, widows, and single mothers. We strive to restore hope, dignity, and independence through education, empowerment, and sustainable programs.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            To empower vulnerable individuals through education, health awareness, skill-building, and economic support — creating pathways to independence and sustainable living.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            A world where every marginalized person in refugee and host communities can thrive spiritually, intellectually, and emotionally with dignity and self-reliance.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Promoting Education:</strong> Access to inclusive, quality education for children and youth.</li>
          <li><strong>Capacity Building:</strong> Vocational training for women and youth to foster economic independence.</li>
          <li><strong>Health & Well-being:</strong> Awareness programs for HIV/AIDS, mental health, trauma healing, and COVID-19 prevention.</li>
          <li><strong>Livelihood Support:</strong> Financial literacy, small business grants, and social aid to widows, elderly, and unaccompanied children.</li>
          <li><strong>Promoting Agriculture:</strong> Sustainable farming and food security training for communities.</li>
          <li><strong>Emergency Response:</strong> Immediate support for communities during crises, including health and shelter needs.</li>
        </ul>
      </section>

      {/* Our Values */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Core Values</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Compassion</li>
          <li>Empowerment</li>
          <li>Integrity</li>
          <li>Inclusivity</li>
          <li>Sustainability</li>
          <li>Hope</li>
        </ul>
      </section>

      {/* Objectives */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Objectives</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide access to basic needs and education</li>
          <li>Develop sustainable programs to reduce poverty</li>
          <li>Strengthen family and community structures</li>
          <li>Promote equity and resilience in refugee and host settings</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
