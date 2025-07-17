import { Boxes, Settings2, Store, MapPin, Recycle, Move3D, ShieldCheck, Laptop2, PhoneCall } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurServices = () => {
  const services = [
    {
      icon: Boxes,
      name: "Warehouse Management",
      description:
        "End-to-end warehousing with WMS, customer CRM adoption, daily reporting, and real-time tracking",
      services: [
        "Multi-brand storage",
        "WMS System",
        "Customer Billing",
        "Daily Reporting"
      ]
    },
    {
      icon: Settings2,
      name: "Backend Repair Hub",
      description:
        "Central repair hub handling Level 1–3 services, warranty & out-of-warranty, pickup/drop included",
      services: [
        "Level 1–3 Repair",
        "Authorized ASP",
        "Pickup & Drop",
        "Bangkok & Provinces"
      ]
    },
    {
      icon: Store,
      name: "Front-End After Sales Stores",
      description:
        "Walk-in repair centers with brand-authorized support across Thailand",
      services: [
        "Walk-in Support",
        "Warranty Repair",
        "Out-of-Warranty",
        "Brand Guidelines"
      ]
    },
    {
      icon: MapPin,
      name: "Onsite & POS Services",
      description:
        "Nationwide B2B/B2C onsite services for POS, appliances, vending, and more",
      services: [
        "POS Setup",
        "TV/Printer Repair",
        "Aircon/Washers",
        "Appointment Scheduling"
      ]
    },
    {
      icon: Recycle,
      name: "Green Projects & Refurbishment",
      description:
        "Refurbishing EOL products, reusing parts, and sending components back to customer factories",
      services: [
        "Parts Reuse",
        "EOL Cannibalize",
        "Eco Packing",
        "Factory Return"
      ]
    },
    {
      icon: Move3D,
      name: "Installation / Uninstallation",
      description:
        "In-mall demos and multi-brand product installations across categories",
      services: [
        "Electronics",
        "Computers",
        "Mobiles",
        "Demo Setups"
      ]
    },
    {
      icon: ShieldCheck,
      name: "Preventive & Corrective Maintenance",
      description:
        "PM/CM coverage in 19 towns, store setups, multi-industry capability",
      services: [
        "POS PM",
        "CCTV Checks",
        "Outlet Unwiring",
        "Food Chain Support"
      ]
    },
    {
      icon: Laptop2,
      name: "Software Services & Upgrades",
      description:
        "Full-service software install, updates, and configuration for multiple device types",
      services: [
        "Software Install",
        "OS Upgrades",
        "Driver Config",
        "Tech Assistance"
      ]
    },
    {
      icon: PhoneCall,
      name: "Helpdesk & Call Center",
      description:
        "Professional contact center and support team for technical or customer inquiries",
      services: [
        "Call Support",
        "Troubleshooting",
        "Remote Assistance",
        "Customer Coordination"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive service offerings designed to support your business and customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="bg-gradient-primary rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="leading-relaxed">
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
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurServices;
