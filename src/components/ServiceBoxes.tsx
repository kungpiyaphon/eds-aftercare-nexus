import { Wrench, Cog, ShoppingCart, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceBoxes = () => {
  const services = [
    {
      icon: Wrench,
      title: "Repair Details",
      description: "Comprehensive repair services with detailed diagnostics and transparent reporting",
      color: "bg-blue-50 text-blue-600",
      buttonText: "View Details"
    },
    {
      icon: Cog,
      title: "Our Services",
      description: "Complete range of after-service solutions tailored to your specific needs",
      color: "bg-green-50 text-green-600",
      buttonText: "Explore Services"
    },
    {
      icon: ShoppingCart,
      title: "Order Products",
      description: "High-quality replacement parts and accessories with fast delivery options",
      color: "bg-purple-50 text-purple-600",
      buttonText: "Shop Now"
    },
    {
      icon: Calendar,
      title: "Online Booking",
      description: "Schedule your service appointment online with flexible time slots available",
      color: "bg-orange-50 text-orange-600",
      buttonText: "Book Now"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Quick Access Services</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for efficient service management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;