import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";

const samsungBranches = [
  {
    name: "Samsung MBK Center",
    type: "Mobile Service",
    address: "444 Phayathai Rd, Wang Mai, Pathum Wan, Bangkok 10330",
    phone: "+66 2 123 4567",
    lineUrl: "https://lin.ee/v75n74P",
    mapUrl: "https://goo.gl/maps/example1"
  },
  {
    name: "Samsung Future Park Rangsit",
    type: "Mobile Service",
    address: "94 Phahonyothin Rd, Prachathipat, Thanyaburi, Pathum Thani 12130",
    phone: "+66 2 234 5678",
    lineUrl: "https://lin.ee/LTY7JaU",
    mapUrl: "https://goo.gl/maps/example2"
  },
  {
    name: "Samsung Seacon Bangkae",
    type: "Mobile Service",
    address: "607 Phetkasem Rd, Bang Wa, Phasi Charoen, Bangkok 10160",
    phone: "+66 2 345 6789",
    lineUrl: "https://lin.ee/xrLC3pt",
    mapUrl: "https://goo.gl/maps/example3"
  },
  {
    name: "Samsung The Mall Bangkae",
    type: "Mobile Service",
    address: "275 Phetkasem Rd, Bang Khae, Bangkok 10160",
    phone: "+66 2 456 7890",
    lineUrl: "https://lin.ee/LbH0Msv",
    mapUrl: "https://goo.gl/maps/example4"
  },
  {
    name: "Samsung Rayong",
    type: "Appliance Service",
    address: "123 Sukhumvit Rd, Noen Phra, Mueang Rayong District, Rayong 21000",
    phone: "+66 38 123 456",
    lineUrl: "https://lin.ee/CuMPhur",
    mapUrl: "https://goo.gl/maps/example5"
  },
  {
    name: "Samsung Ayutthaya",
    type: "Appliance Service",
    address: "456 Rojana Rd, Phra Nakhon Si Ayutthaya, 13000",
    phone: "+66 35 234 567",
    lineUrl: "https://lin.ee/ZPvdYqvu",
    mapUrl: "https://goo.gl/maps/example6"
  },
  {
    name: "Samsung Sampheng 2",
    type: "Appliance Service",
    address: "789 Bang Khae Rd, Bangkok 10160",
    phone: "+66 2 345 6780",
    lineUrl: "https://lin.ee/HMbSFlS",
    mapUrl: "https://goo.gl/maps/example7"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Samsung Authorized Service Centers</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our official Samsung service locations nationwide – both for mobile devices and appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samsungBranches.map((branch, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{branch.name}</CardTitle>
                  <CardDescription>{branch.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Navigation className="h-4 w-4 text-muted-foreground" />
                    <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;