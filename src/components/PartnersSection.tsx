import { Building2, Handshake, Award, Globe } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovaSys", logo: "IS" },
    { name: "GlobalTech", logo: "GT" },
    { name: "SmartSolutions", logo: "SS" },
    { name: "FutureTech", logo: "FT" },
    { name: "NextGen", logo: "NG" }
  ];

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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Partners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional service solutions worldwide
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 flex items-center justify-center hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-lg">{partner.logo}</span>
              </div>
            </div>
          ))}
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