import React from "react";

const executives = [
  {
    name: "Kriengsak Sengak",
    position: "Managing Director",
    bio: [
      "More than 25 years of experience as Entrepreneur",
      "Have Successfully formed 4 companies in last 20 years",
      "Reached beyond Thailand by expanding business in other Asian countries",
      "Multi Brand experience in After sales, Warehousing and Logistics",
    ],
    image: "/images/executives/kriengsak.jpg",
  },
  {
    name: "Rajesh Sokhal",
    position: "General Manager",
    bio: [
      "28 years of Experience",
      "Worked in Multinational companies like Nestle, PepsiCo, Nokia, BrightPoint",
      "Worked in various countries as head of business - Thailand, India, Indonesia, Sri Lanka, Bangladesh, Nepal, Myanmar, Maldives",
    ],
    image: "/images/executives/rajesh.jpg",
  },
];

export default function ExecutiveSection() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#13255B]">
          To Know Our Executive
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {executives.map((exec) => (
            <div
              key={exec.name}
              className="bg-[#13255B] text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={exec.image}
                alt={exec.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{exec.name}</h3>
              <p className="italic text-sm text-gray-300 mb-3">
                {exec.position}
              </p>
              <ul className="text-sm space-y-1 text-white/90 text-left list-disc list-inside">
                {exec.bio.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
