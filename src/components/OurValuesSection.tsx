import { useState } from "react";
import {
  FaHandshake,
  FaBullseye,
  FaUsers
} from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Item {
  title: string;
  icon: JSX.Element;
  points: JSX.Element[];
}

export default function OurValuesSection() {
  const data: Item[] = [
    {
      title: "Our Values",
      icon: <FaHandshake className="w-10 h-10 text-primary" />,
      points: [
        <>
          Promise <br /> what you can <br /> <span className="text-2xl font-bold">Deliver</span> <br /> & Deliver what you <br /><span className="text-2xl font-bold">Promise</span><br /> to Customers & <br />Employees
        </>,
        <>
          -----------------
        </>,
        <>
          Relentless Endeavor <br />to become the <br /><span className="text-2xl font-bold">Best in Class</span><br /> in all our business lines
        </>,
        <>
          -----------------
        </>,
        <>
          <span className="text-2xl font-bold">Act with Integrity</span><br /> Continuous Innovation <br /> creation of Value, Strive for the best
        </>
      ]
    },
    {
      title: "Our Vision",
      icon: <FaBullseye className="w-10 h-10 text-primary" />,
      points: [
        <>
          We aim to proudly remain <br /><span className="text-2xl font-bold">Profitable</span><br /> & maintain <br /><span className="font-bold">sustainable long term</span><br /> <span className="text-2xl font-bold">Partnerships</span>
        </>,
        <>
          With our <br /><span className="text-lg">Vendor, Customers</span> <br /> and <br /> <span className="text-2xl font-bold">Employees</span>
        </>
      ]
    },
    {
      title: "Our Culture",
      icon: <FaUsers className="w-10 h-10 text-primary" />,
      points: [
        <>
          We believe in the philosophy of <br /><span className="text-2xl">Can Do Attitude</span>
        </>,
        <>
          -----------------
        </>,
        <>
          We create an environment for <br /><span className="text-xl font-bold">Teamwork, & Happy</span> <br /><span className="font-bold">Work Place</span>
        </>,
        <>
          -----------------
        </>,
        <>
          <span className="font-bold">Adapt & Evolve</span><br /> with the <br />changing requirements <br /> of the Customers
        </>
      ]
    }
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Values, Vision & Culture
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, index) => {
            const isHovered = hovered === index;
            return (
              <div
                key={index}
                className={cn(
                  "relative min-h-[700px] rounded-2xl overflow-hidden bg-gray-100 transition-all duration-500 shadow-md group cursor-default",
                  isHovered && "bg-[#13255B]"
                )}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Default State */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 h-full",
                    isHovered ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
                  )}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-3xl font-semibold text-[#13255B] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Hover State - Slide In Content */}
                <div
                  className={cn(
                    "absolute inset-0 px-6 py-8 text-white transition-all duration-500 h-full",
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                >
                  <h4 className="text-3xl text-center font-semibold mb-4">{item.title}</h4>
                  <ul className="space-y-3 text-lg text-center leading-relaxed">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
