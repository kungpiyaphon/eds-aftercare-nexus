import { Monitor, Smartphone, Laptop, Printer, HardDrive, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Carousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="Service Image"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        />
      ))}
    </div>
  );
};

const ProductsServices = () => {
  const navigate = useNavigate();
  const products = [
    {
      icon: Monitor,
      name: "Display Solutions",
      description: "Professional monitors, TVs, and digital signage with comprehensive support",
      services: ["Installation", "Calibration", "Maintenance", "Warranty"],
      images: ["/images/mobile-repair1.jpg", "/images/mobile-repair2.jpg", "/images/mobile-repair3.jpg"]
    },
    {
      icon: Smartphone,
      name: "Mobile Devices",
      description: "Complete mobile device support including repairs and accessories",
      services: ["Screen Repair", "Battery Service", "Software Fix", "Data Recovery"],
      images: ["/images/mobile-repair1.jpg", "/images/mobile-repair2.jpg", "/images/mobile-repair3.jpg"]
    },
    {
      icon: Laptop,
      name: "Computing Equipment",
      description: "Laptops, desktops, and workstations with expert technical support",
      services: ["Hardware Upgrade", "System Optimization", "Virus Removal", "Data Backup"],
      images: ["/images/mobile-repair1.jpg", "/images/mobile-repair2.jpg", "/images/mobile-repair3.jpg"]
    },
    {
      icon: Printer,
      name: "Office Equipment",
      description: "Printers, scanners, and office machines with preventive maintenance",
      services: ["Print Quality Fix", "Network Setup", "Consumables", "Training"],
      images: ["/images/mobile-repair1.jpg", "/images/mobile-repair2.jpg", "/images/mobile-repair3.jpg"]
    },
    {
      icon: HardDrive,
      name: "Storage Solutions",
      description: "Data storage devices, backup systems, and recovery services",
      services: ["Data Recovery", "Backup Setup", "Storage Upgrade", "Security"],
      images: ["/images/mobile-repair1.jpg", "/images/mobile-repair2.jpg", "/images/mobile-repair3.jpg"]
    },
    {
      icon: Cpu,
      name: "Server Systems",
      description: "Enterprise server maintenance and infrastructure support",
      services: ["Server Setup", "Performance Tuning", "Security Audit", "Monitoring"],
      images: ["/images/mobile-repair1.jpg", "/images/mobile-repair2.jpg", "/images/mobile-repair3.jpg"]
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
                    {products.map((service, index) => (
                      <Card key={index} className="flex flex-col h-full">
                        <Carousel images={service.images} />
                        <CardHeader className="flex">
                          <CardTitle className="text-xl mt-4">{service.name}</CardTitle>
                          <CardDescription className="leading-relaxed mt-2">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-6">
                            {service.services.map((s, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{s}</span>
                              </div>
                            ))}
                          </div>
                          {/* Remove Learn More if not needed */}
                        </CardContent>
                      </Card>
                    ))}
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