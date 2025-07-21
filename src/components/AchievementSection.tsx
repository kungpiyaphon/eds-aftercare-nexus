import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Tag {
  label: string;
  detail: string;
}

const tags: Tag[] = [
  { label: "ISO Certified", detail: "EDS is ISO 9001:2015 certified ensuring top quality processes." },
  { label: "20+ Years Experience", detail: "Our team brings over 20 years of after-sales service expertise." },
  { label: "1M+ Repairs", detail: "We have completed over 1,000,000 successful repairs." },
  { label: "Nationwide Support", detail: "Available in every region of Thailand for full coverage." },
  { label: "Certified Technicians", detail: "Our staff are trained and certified for every brand we service." },
  { label: "Top Brand Partner", detail: "We partner with major brands such as HP, Lenovo, Asus, and more." },
  { label: "Fast Turnaround", detail: "Our average repair time is under 48 hours." },
  { label: "Customer Satisfaction 95%", detail: "We consistently receive over 95% satisfaction in surveys." },
  { label: "Smart Tracking System", detail: "You can track your repair status in real-time via our portal." },
];

export default function AchievementSection() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#13255B] mb-4">Our Key Achievements</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Here are some of the accomplishments and milestones that make us trusted by global brands and partners.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tags.map((tag) => (
            <div
              key={tag.label}
              onMouseEnter={() => setHoveredTag(tag.label)}
              onMouseLeave={() => setHoveredTag(null)}
              className="relative"
            >
              <Card className="cursor-default hover:bg-[#13255B] hover:text-white transition-all duration-300">
                <CardContent className="p-6">
                  <p className="font-semibold text-lg">{tag.label}</p>
                </CardContent>
              </Card>

              {hoveredTag === tag.label && (
                <div className="absolute top-full left-0 mt-2 w-full z-10 bg-white border border-gray-200 shadow-lg rounded-lg text-sm p-4 text-gray-800">
                  {tag.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
