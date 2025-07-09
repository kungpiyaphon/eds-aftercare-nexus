import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCenters = () => {
  const centers = [
    {
      city: "Bangkok",
      address: "123 Sukhumvit Road, Bangkok 10110",
      phone: "+66 2 123 4567",
      hours: "Mon-Sat: 8:00-18:00",
      position: { top: "45%", left: "52%" }
    },
    {
      city: "Chiang Mai",
      address: "456 Nimman Road, Chiang Mai 50200",
      phone: "+66 53 234 567",
      hours: "Mon-Sat: 8:00-17:00",
      position: { top: "25%", left: "48%" }
    },
    {
      city: "Phuket",
      address: "789 Patong Beach Road, Phuket 83150",
      phone: "+66 76 345 678",
      hours: "Mon-Sat: 9:00-18:00",
      position: { top: "75%", left: "46%" }
    },
    {
      city: "Pattaya",
      address: "321 Beach Road, Pattaya 20150",
      phone: "+66 38 456 789",
      hours: "Mon-Sat: 8:30-17:30",
      position: { top: "50%", left: "58%" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Service Centers</h2>
          <p className="text-xl text-muted-foreground">
            Find our service centers across Thailand for convenient support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Thailand Map */}
          <div className="relative">
            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-card">
              <div className="relative bg-primary/10 rounded-xl p-8 h-96">
                {/* Simplified Thailand map outline */}
                <div className="absolute inset-4 border-2 border-primary/30 rounded-lg">
                  <div className="w-full h-full relative">
                    {/* Service center pins */}
                    {centers.map((center, index) => (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        style={{ top: center.position.top, left: center.position.left }}
                      >
                        <div className="relative">
                          <div className="w-6 h-6 bg-accent rounded-full border-2 border-white shadow-md animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {center.city}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                  Thailand Service Network
                </div>
              </div>
            </div>
          </div>

          {/* Service Centers List */}
          <div className="space-y-6">
            {centers.map((center, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    {center.city} Service Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Navigation className="h-4 w-4 text-muted-foreground mt-1" />
                    <span className="text-sm">{center.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{center.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{center.hours}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Need Service Outside These Areas?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer mobile service and pickup options for customers nationwide
            </p>
            <Button size="lg" className="bg-gradient-primary">
              Request Mobile Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenters;