import { Building2, Handshake, Award, Globe } from "lucide-react";
import BrandCarouselSection from "./BrandCarouselSection";

const PartnersSection = () => {

  const stats = [
    {
      icon: Building2,
      number: "50+",
      label: "Global Partners"
    },
    {
      icon: Handshake,
      number: "10K+",
      label: "Joint Projects"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-primary mb-4">Authorized Service Provider</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional service solutions worldwide
          </p>
        </div>

        {/* Partner Logos Carousel */}
        <div className="relative overflow-hidden">
            <BrandCarouselSection />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;