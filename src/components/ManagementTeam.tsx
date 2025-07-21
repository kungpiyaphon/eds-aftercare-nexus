import React from "react";

const team = [
  {
    name: "Vareerat Panyachairagsa",
    role: "Business Head of EDS",
    image: "/images/team/vareerat.jpg",
  },
  {
    name: "Thana Geerungboonyakiat",
    role: "Business Head of Smart Home",
    image: "/images/team/thana.jpg",
  },
  {
    name: "Phatchamart Kongmanee",
    role: "Corporate Business Control Head",
    image: "/images/team/phatchamart.jpg",
  },
  {
    name: "Nisachon Choochuay",
    role: "Finance Manager",
    image: "/images/team/nisachon.jpg",
  },
];

export default function ManagementTeam() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#13255B]">
          Management Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
              />
              <h3 className="text-base font-semibold text-[#13255B]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
