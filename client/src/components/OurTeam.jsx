import React from "react";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Olivier Maenda Mzaliwa",
    role: "Founder and CEO of WHF and Ebenezer Academy",
    email: "pastorolivierm@windowshf.org",
    phone: "+265 999 951 020",
    image: "https://www.windowshf.org/images/team/olivier.jpg",
  },
  {
    id: 2,
    name: "Rodrick Ramahani Mzaliwa",
    role: "Vice Chief Executive Officer of WHF and EA",
    phone: "+1(587) 986-5959",
    image: "https://www.windowshf.org/images/team/rodrick.jpg",
  },
  {
    id: 3,
    name: "Brigitte Apendeki Esombo",
    role: "Capacity Building Manager",
    email: "brigittapendeki@gmail.com",
    phone: "+265 888 616 666",
    image: "https://www.windowshf.org/images/team/brigitte.jpg",
  },
  // Add other team members following the same structure
];

const OurTeam = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
              {member.email && (
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {member.email}
                  </a>
                </p>
              )}
              {member.phone && (
                <p className="text-gray-600">Phone: {member.phone}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
