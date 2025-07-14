import { MapPin, Navigation, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ServiceCenters = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const centers = [
    {
      region: "Bangkok",
      center: "Head Office",
      coverage: [
        "Bangkok", "Nonthaburi", "Pathumthani", "Samutprakan"
      ],
      position: { top: "53%", left: "52%" },
    },
    {
      region: "Northern",
      center: "Chiangmai",
      coverage: [
        "Chiangmai", "Lamphun", "Chiangrai", "Maehongson"
      ],
      position: { top: "18%", left: "42%" },
    },
    {
      region: "Northern",
      center: "Phrae",
      coverage: [
        "Phrae", "Phayao", "Nan", "Lampang", "Uttaradit"
      ],
      position: { top: "23%", left: "48%" },
    },
    {
      region: "Central",
      center: "Lopburi",
      coverage: [
        "Lopburi", "Singburi", "Angthong", "Saraburi", "Ayutthaya", "Nakhornnayok", "Uthaithani", "Chainat"
      ],
      position: { top: "33%", left: "50%" },
    },
    {
      region: "Central",
      center: "Nakhonsawan",
      coverage: [
        "Nakhonsawan", "Phetchabun", "Kamphaengphet", "Tak", "Sukhothai", "Phitsanulok", "Phichit"
      ],
      position: { top: "30%", left: "46%" },
    },
    {
      region: "Northeastern",
      center: "Khonkaen",
      coverage: [
        "Khonkaen", "Kalasin", "Mahasarakham", "Mukdahan", "Loei"
      ],
      position: { top: "31%", left: "58%" },
    },
    {
      region: "Northeastern",
      center: "Nakhonratchasima",
      coverage: [
        "Nakhonratchasima", "Chaiyaphum", "Buriram", "Prachinburi", "Sakaeo"
      ],
      position: { top: "38%", left: "60%" },
    },
    {
      region: "Northeastern",
      center: "Udonthani",
      coverage: [
        "Udonthani", "Nongkhai", "Nongbualamphu", "Nakhonphanom", "Sakonnakhon", "Buengkan"
      ],
      position: { top: "24%", left: "62%" },
    },
    {
      region: "Northeastern",
      center: "Sisaket",
      coverage: [
        "Sisaket", "Roi Et", "Surin"
      ],
      position: { top: "42%", left: "66%" },
    },
    {
      region: "Northeastern",
      center: "Ubonratchathani",
      coverage: [
        "Ubonratchathani", "Yasothon", "Amnatcharoen"
      ],
      position: { top: "46%", left: "68%" },
    },
    {
      region: "Western",
      center: "Ratchaburi",
      coverage: [
        "Ratchaburi", "Phetchaburi", "Nakhornpathom", "Samutsakhon", "Samutsongkhram", "Suphanburi", "Kanchanaburi"
      ],
      position: { top: "50%", left: "45%" },
    },
    {
      region: "Eastern",
      center: "Chonburi",
      coverage: [
        "Chonburi", "Chachoengsao"
      ],
      position: { top: "47%", left: "58%" },
    },
    {
      region: "Eastern",
      center: "Rayong",
      coverage: [
        "Rayong", "Chanthaburi", "Trat"
      ],
      position: { top: "50%", left: "62%" },
    },
    {
      region: "Southern",
      center: "Chumphon",
      coverage: [
        "Chumphon", "Ranong", "Prachuapkhirikhan"
      ],
      position: { top: "68%", left: "48%" },
    },
    {
      region: "Southern",
      center: "Nakhonsithammarat",
      coverage: [
        "Nakhonsithammarat", "Suratthani"
      ],
      position: { top: "76%", left: "55%" },
    },
    {
      region: "Southern",
      center: "Phuket",
      coverage: [
        "Phuket", "Krabi", "Phangnga"
      ],
      position: { top: "80%", left: "47%" },
    },
    {
      region: "Southern",
      center: "Songkhla",
      coverage: [
        "Songkhla", "Phatthalung", "Trang", "Satun"
      ],
      position: { top: "84%", left: "59%" },
    },
    {
      region: "Southern",
      center: "Yala",
      coverage: [
        "Yala", "Pattani", "Narathiwat"
      ],
      position: { top: "90%", left: "60%" },
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Service Centers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find our service centers across Thailand for convenient support
          </p>
        </div>

        {/* Full-width map area */}
        <div className="relative bg-gradient-subtle rounded-2xl p-8 shadow-card mb-16">
          <div className="relative bg-primary/10 rounded-xl h-[500px] overflow-hidden">
            <div className="absolute inset-4 border-2 border-primary/30 rounded-lg">
              <div className="w-full h-full relative">
                {centers.map((center, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ top: center.position.top, left: center.position.left }}
                    onClick={() => setSelectedCenter(index)}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 bg-accent rounded-full border-2 border-white shadow-md animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {center.center}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
              On-Site Services Nationwide
            </div>
          </div>

          {/* Overlay card on pin click */}
          {selectedCenter !== null && (
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-10">
              <Card className="w-full max-w-md z-20 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-muted-foreground"
                  onClick={() => setSelectedCenter(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    {centers[selectedCenter].center} Service Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2">
                    {centers[selectedCenter].coverage.map((province, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Navigation className="h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-sm">{province}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    Get Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
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