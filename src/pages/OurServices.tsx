import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const OurServices = () => {
  const services = [
    {
      name: "Warehouse Management",
      description:
        "Comprehensive warehousing solution with CRM adoption, flexible space, WMS, and real-time reporting.",
      services: [
        "Multi-brand warehousing",
        "Customer CRM integration",
        "Daily reporting & billing",
        "75,000+ SKUs managed",
        "3,500 transactions/day",
        "Flexible space & racking",
        "Android PDA 2D scanner"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Backend Repair Services (Hub)",
      description:
        "Level 1–3 repair center for authorized and out-of-warranty service with pickup & drop support.",
      services: [
        "ASP Authorized Repair",
        "Warranty & Non-warranty",
        "Pickup & Drop service",
        "Bangkok & Provincial coverage"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Front-End After Sales Stores",
      description:
        "Walk-in service centers offering brand-authorized after-sales support across the country.",
      services: [
        "Walk-in warranty repair",
        "Out-of-warranty support",
        "Nationwide coverage",
        "Brand-standard compliance"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Onsite & POS Services",
      description:
        "Nationwide onsite support for electronics, POS, appliances, and scheduled maintenance.",
      services: [
        "Onsite repair (TV, printer, appliances)",
        "POS management",
        "Appointment scheduling",
        "Nationwide technician coverage"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Green Projects & Refurbishment",
      description:
        "Eco-driven initiatives to refurbish and reuse parts, reducing electronic waste and cost.",
      services: [
        "Cannibalize EOL stocks",
        "Pack reusable parts",
        "Return to factory",
        "Eco cost-saving"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Installation & Demonstration",
      description:
        "Professional product demos and installations at malls, exhibitions, and events.",
      services: [
        "Multi-brand demo capability",
        "In-mall / exhibition setups",
        "Consumer electronics & IT",
        "Mobile phones, monitors"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Preventive & Corrective Maintenance",
      description:
        "Contract-based PM/CM, store setup/closure, and support for multiple industries.",
      services: [
        "POS & CCTV PM",
        "Store opening/closure",
        "Unwiring services",
        "Food chain support",
        "4000+ outlets handled"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Software Services & Upgrades",
      description:
        "Install, update, and configure software for IT & electronic devices.",
      services: [
        "Software install",
        "OS upgrades",
        "Driver/config assistance",
        "Technical consulting"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Helpdesk & Call Center",
      description:
        "Professional support center for remote troubleshooting, customer inquiries and coordination.",
      services: [
        "Technical helpdesk",
        "Customer support",
        "Remote troubleshooting",
        "24/7 coordination"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Consumer Electronics Service",
      description:
        "Authorized repair and installation for TVs, ACs, washing machines, refrigerators, etc.",
      services: [
        "Home repair service",
        "Product installation",
        "Pick-up & delivery",
        "Warranty & non-warranty"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Eco Home Products",
      description:
        "Support for routers, e-scooters, smart air fryers, handheld steamers and more.",
      services: [
        "Installation & demo",
        "Walk-in & delivery repair",
        "Onsite service available"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "ATM Machine Services",
      description:
        "Specialized service center for ATM parts, repairs, and installation with Level 3 capabilities.",
      services: [
        "Camera & alarm install",
        "Chip replacement",
        "PBA re-soldering",
        "ATM assembly"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Vending Machine Services",
      description:
        "Complete service for vending machines including repair, install, and SLA-based onsite support.",
      services: [
        "Nationwide repair",
        "SLA-driven service",
        "Pick-up & delivery",
        "Onsite installation"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Refurbishment & Rework Projects",
      description:
        "Projects involving re-packaging, software reinstall, sticker/barcode labeling, and shrink wrap.",
      services: [
        "Unit inspection",
        "Shrink-wrap",
        "Software upgrades",
        "Sticker/Barcode labeling"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Store POS Management",
      description:
        "Comprehensive services for store POS installation, deinstallation, and late-night repair.",
      services: [
        "Store setup & closure",
        "POS multi-level service",
        "Late night support"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
    {
      name: "Other Products & Custom Services",
      description:
        "Flexible services adapted to new products and requirements with highly skilled technicians.",
      services: [
        "New product onboarding",
        "Unlimited learning curve",
        "Flexible process adaptation"
      ],
      images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg", "/images/warehouse3.jpg"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive service offerings designed to support your business and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurServices;
