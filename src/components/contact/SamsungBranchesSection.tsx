import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const samsungBranches = [
  {
    name: "Samsung MBK Center",
    type: "Mobile Service",
    address: "MBK Shopping Center, Room No. 2S-F5 F6, 5th Floor, No. 444, Phaya Thai Rd, Pathum Wan, Bangkok 10330",
    lineUrl: "https://lin.ee/v75n74P",
    mapUrl: "https://maps.app.goo.gl/jBmtTpVgY1T7vrFn7",
    img: "MBK"
  },
  {
    name: "Samsung Future Park Rangsit",
    type: "Mobile Service",
    address: "Future Park Rangsit, 3rd Floor, No. 94 Phahonyothin Rd, Prachathipat, Thanyaburi, Pathum Thani 12130",
    lineUrl: "https://lin.ee/LTY7JaU",
    mapUrl: "https://maps.app.goo.gl/8usBALymeczhfCuj7",
    img: "FPR"
  },
  {
    name: "Samsung Seacon Bangkae",
    type: "Mobile Service",
    address: "Seacon Bang Khae, Room No. 357, 3rd Floor, No. 607 Petchkasem Road, Bang Wa, Bangkok 10160",
    lineUrl: "https://lin.ee/xrLC3pt",
    mapUrl: "https://maps.app.goo.gl/7ExPaacjEKDc32oU9",
    img: "SBK"
  },
  {
    name: "Samsung The Mall Bangkae",
    type: "Mobile Service",
    address: "518 Phet Kasem Rd, Bang Khae Nuea, Phasi Charoen, Bangkok 10600",
    lineUrl: "https://lin.ee/LbH0Msv",
    mapUrl: "https://maps.app.goo.gl/guzEF1H7gTz1eaWs8",
    img: "TMB"
  },
  {
    name: "Samsung Rayong",
    type: "Mobile & Appliance Service",
    address: "The Design Village 18/49, Mueang Rayong District, Rayong 21000",
    lineUrl: "https://lin.ee/CuMPhur",
    mapUrl: "https://maps.app.goo.gl/Mxhy7GxNZMUoqgkP7",
    img: "RY"
  },
  {
    name: "Samsung Ayutthaya",
    type: "Mobile & Appliance Service",
    address: "235, Moo 5 Rotchana Rd, Tambon Phai Ling, Phra Nakhon Si Ayutthaya District, Ayutthaya 13000",
    lineUrl: "https://lin.ee/ZPvdYqvu",
    mapUrl: "https://maps.app.goo.gl/8JBNzHKrimzMg4Gk9",
    img: "AYY"
  },
  {
    name: "Samsung Sampheng 2",
    type: "Appliance Service",
    address: "88, 150-151 Kanlapaphruek Rd, Khwaeng Bang Khae, Bang Khae, Bangkok 10160",
    lineUrl: "https://lin.ee/HMbSFlS",
    mapUrl: "https://maps.app.goo.gl/H5m8jxdY8m82BbNt8",
    img: "SP2"
  }
];

const SamsungBranchesSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Samsung Authorized Service Centers
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          Explore our nationwide Samsung service locations for mobile and appliance support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {samsungBranches.map((branch, index) => (
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

export default SamsungBranchesSection;
