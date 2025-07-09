import { Award, Shield, Zap, Users } from "lucide-react";

const CoreStrengths = () => {
  const strengths = [
    {
      icon: Award,
      title: "No.1 End-to-End After Service",
      description: "Leading the industry with comprehensive service solutions from diagnosis to delivery"
    },
    {
      icon: Shield,
      title: "Trusted Excellence",
      description: "Decades of proven reliability and customer satisfaction across all service categories"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Lightning-fast service delivery with guaranteed response times and priority support"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained professionals equipped with the latest technology and expertise"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Core Business Strengths</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering exceptional after-service solutions with unmatched expertise and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;