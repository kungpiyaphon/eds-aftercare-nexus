import { Home, Wifi, Shield, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import smartHomeImage from "@/assets/smart-home-service.jpg";

const SmartHomeService = () => {
  const features = [
    {
      icon: Home,
      title: "Home Automation",
      description: "Complete smart home setup and maintenance services"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Seamless connection of all your smart devices"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Advanced security solutions for peace of mind"
    },
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Control everything from your smartphone or tablet"
    }
  ];

  return (
    <section id="smart-home" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Smart Home Service Innovation</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your home into a smart, efficient, and secure living space with our comprehensive 
              smart home solutions. From installation to ongoing support, we handle everything.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary">
                Get Smart Home Quote
              </Button>
              <Button size="lg" variant="outline">
                View Smart Solutions
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={smartHomeImage}
                alt="Smart Home Technology"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Smart Homes Installed</div>
              </CardContent>
            </Card>
            
            <Card className="absolute -top-6 -right-6 bg-card/95 backdrop-blur-sm shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeService;