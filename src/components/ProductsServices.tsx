import { Monitor, Smartphone, Laptop, Printer, HardDrive, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"

const ProductsServices = () => {
  const navigate = useNavigate();
  const products = [
    {
      icon: Monitor,
      name: "Display Solutions",
      description: "Professional monitors, TVs, and digital signage with comprehensive support",
      services: ["Installation", "Calibration", "Maintenance", "Warranty"]
    },
    {
      icon: Smartphone,
      name: "Mobile Devices",
      description: "Complete mobile device support including repairs and accessories",
      services: ["Screen Repair", "Battery Service", "Software Fix", "Data Recovery"]
    },
    {
      icon: Laptop,
      name: "Computing Equipment",
      description: "Laptops, desktops, and workstations with expert technical support",
      services: ["Hardware Upgrade", "System Optimization", "Virus Removal", "Data Backup"]
    },
    {
      icon: Printer,
      name: "Office Equipment",
      description: "Printers, scanners, and office machines with preventive maintenance",
      services: ["Print Quality Fix", "Network Setup", "Consumables", "Training"]
    },
    {
      icon: HardDrive,
      name: "Storage Solutions",
      description: "Data storage devices, backup systems, and recovery services",
      services: ["Data Recovery", "Backup Setup", "Storage Upgrade", "Security"]
    },
    {
      icon: Cpu,
      name: "Server Systems",
      description: "Enterprise server maintenance and infrastructure support",
      services: ["Server Setup", "Performance Tuning", "Security Audit", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for all your technology needs with expert service and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-gradient-primary rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {product.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary"
            onClick={() => navigate("/services")}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;