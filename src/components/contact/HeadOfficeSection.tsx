import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const headOffices = [
  {
    name: "EDS Headquarters",
    type: "Smart Home Electronics (Head Office)",
    address: "66 Soi Ananmai 39, 24 Srinagarindra Rd, Suan Luang, Bangkok 10250",
    mapUrl: "https://maps.app.goo.gl/m7TVFeEKAhGKB9GQ9",
    lineUrl: "https://lin.ee/LRZBpYn",
    img: "HQ"
  },
  {
    name: "Xiaomi Flagship Service - Ayutthaya",
    type: "Mobile & Multi Product Service",
    address: "163/44 Moo 3, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000",
    mapUrl: "https://maps.app.goo.gl/6GoiaPGt6gfEbork9",
    lineUrl: "https://lin.ee/LRZBpYn",
    img: "XAY"
  }
];

const HeadOfficeSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-muted/40 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Corporate Headquarters & Flagship Service
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          Find us at our headquarters or our flagship Xiaomi service center in Ayutthaya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {headOffices.map((branch, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <img
                src={`/images/branches/${branch.img}.jpg`}
                alt={`Photo of ${branch.name}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-lg text-primary">{branch.name}</CardTitle>
                <CardDescription>{branch.type}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span className="text-sm">{branch.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
                <Button
                  variant="default"
                  className="w-full flex gap-2 items-center"
                  onClick={() => window.open(branch.lineUrl, "_blank")}
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact via LINE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeadOfficeSection;