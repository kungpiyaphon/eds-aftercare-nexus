import { Building, Network, Globe, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AffiliatedCompanies = () => {
  const companies = [
    {
      name: "EDS Technology",
      description: "Advanced technology solutions and innovation development",
      logo: "ET",
      color: "bg-blue-500"
    },
    {
      name: "EDS Logistics",
      description: "Supply chain management and distribution services",
      logo: "EL",
      color: "bg-green-500"
    },
    {
      name: "EDS Training",
      description: "Professional training and certification programs",
      logo: "ETR",
      color: "bg-purple-500"
    },
    {
      name: "EDS Security",
      description: "Comprehensive security solutions and monitoring",
      logo: "ES",
      color: "bg-red-500"
    },
    {
      name: "EDS Consulting",
      description: "Strategic business consulting and optimization",
      logo: "EC",
      color: "bg-orange-500"
    },
    {
      name: "EDS International",
      description: "Global operations and international partnerships",
      logo: "EI",
      color: "bg-teal-500"
    }
  ];

  const stats = [
    {
      icon: Building,
      label: "Affiliated Companies",
      value: "12+"
    },
    {
      icon: Users,
      label: "Combined Workforce",
      value: "2,000+"
    },
    {
      icon: Globe,
      label: "Markets Served",
      value: "15+"
    },
    {
      icon: Network,
      label: "Service Network",
      value: "100+"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Affiliated Companies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse portfolio of specialized companies working together to deliver comprehensive solutions
          </p>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className={`w-20 h-20 ${company.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{company.logo}</span>
                </div>
                <CardTitle className="text-xl">{company.name}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {company.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-12">
            Our Network at a Glance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatedCompanies;