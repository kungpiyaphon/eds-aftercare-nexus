import { FaHandshake, FaBullseye, FaRocket, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function OurValuesSection() {
  const data = [
    {
      title: "Our Values",
      icon: <FaHandshake className="text-primary w-6 h-6" />,
      points: [
        <>
          Promise what you can <strong className="text-primary">Deliver</strong> & Deliver what you <strong className="font-bold">Promise</strong> to Customers & Employees
        </>,
        <>
          Relentless Endeavor to become the <strong className="font-bold">Best in Class</strong> in all our business lines
        </>,
        <>
          <strong className="font-bold">Act with Integrity</strong>, Continuous Innovation, creation of Value, Strive for the best
        </>
      ]
    },
    {
      title: "Our Vision",
      icon: <FaBullseye className="text-primary w-6 h-6" />,
      points: [
        <>
          We aim to proudly remain <strong className="font-bold">Profitable</strong> & maintain <strong className="text-primary">sustainable long term</strong> <strong className="font-bold">Partnerships</strong>
        </>,
        <>
          With our <strong className="text-primary">Vendor, Customers</strong> and <strong className="text-primary">Employees</strong>
        </>
      ]
    },
    {
      title: "Our Culture",
      icon: <FaUsers className="text-primary w-6 h-6" />,
      points: [
        <>
          We believe in the philosophy of <strong className="font-bold">Can Do Attitude</strong>
        </>,
        <>
          We create an environment for <strong className="text-primary">Teamwork, & Happy</strong> <strong className="font-bold">Work Place</strong>
        </>,
        <>
          <strong className="font-bold">Adapt & Evolve</strong> with the changing requirements of the Customers
        </>
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Values, Vision & Culture</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                </div>
                <div className="space-y-3 border-t pt-4">
                  {item.points.map((point, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
