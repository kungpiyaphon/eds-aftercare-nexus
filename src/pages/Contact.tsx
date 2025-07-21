import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";

const samsungBranches = [
  {
    name: "Electronics Data Source & Supply (Head Office)",
    type: "SmartHome Electronics (Head Office)",
    address: "66 Soi Ananmai 39, 24 Srinagarindra Rd, Suan Luang, Bangkok 10250",
    // phone: "+66 2 345 6780",
    lineUrl: "https://lin.ee/LRZBpYn",
    mapUrl: "https://maps.app.goo.gl/m7TVFeEKAhGKB9GQ9",
    img:"HQ"
  },
  {
    name: "Samsung MBK Center",
    type: "Mobile Service",
    address: "MBK Shopping Center, Room No. 2S-F5 F6, 5th Floor, No. 444, Phaya Thai Rd, Pathum Wan, Bangkok 10330",
    // phone: "+66 2 123 4567",
    lineUrl: "https://lin.ee/v75n74P",
    mapUrl: "https://maps.app.goo.gl/jBmtTpVgY1T7vrFn7",
    img:"MBK"
  },
  {
    name: "Samsung Future Park Rangsit",
    type: "Mobile Service",
    address: "Future Park Rangsit, 3rd Floor, No. 94 Phahonyothin Rd, Prachathipat, Thanyaburi, Pathum Thani 12130",
    // phone: "+66 2 234 5678",
    lineUrl: "https://lin.ee/LTY7JaU",
    mapUrl: "https://maps.app.goo.gl/8usBALymeczhfCuj7",
    img:"FPR"
  },
  {
    name: "Samsung Seacon Bangkae",
    type: "Mobile Service",
    address: "Seacon Bang Khae, Room No. 357, 3rd Floor, No. 607 Petchkasem Road, Bang Wa, Bangkok 10160",
    // phone: "+66 2 345 6789",
    lineUrl: "https://lin.ee/xrLC3pt",
    mapUrl: "https://maps.app.goo.gl/7ExPaacjEKDc32oU9",
    img:"SBK"
  },
  {
    name: "Samsung The Mall Bangkae",
    type: "Mobile Service",
    address: "518 Phet Kasem Rd, Bang Khae Nuea, Phasi Charoen, Bangkok 10600",
    // phone: "+66 2 456 7890",
    lineUrl: "https://lin.ee/LbH0Msv",
    mapUrl: "https://maps.app.goo.gl/guzEF1H7gTz1eaWs8",
    img:"TMB"
  },
  {
    name: "Samsung Rayong",
    type: "Mobile & Appliance Service",
    address: "The Design Village 18/49, Mueang Rayong District, Rayong 21000",
    // phone: "+66 38 123 456",
    lineUrl: "https://lin.ee/CuMPhur",
    mapUrl: "https://maps.app.goo.gl/Mxhy7GxNZMUoqgkP7",
    img:"RY"
  },
  {
    name: "Samsung Ayutthaya",
    type: "Moblie & Appliance Service",
    address: "235, Moo 5 Rotchana Rd, Tambon Phai Ling, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000",
    // phone: "+66 35 234 567",
    lineUrl: "https://lin.ee/ZPvdYqvu",
    mapUrl: "https://maps.app.goo.gl/8JBNzHKrimzMg4Gk9",
    img:"AYY"
  },
  {
    name: "Samsung Sampheng 2",
    type: "Appliance Service",
    address: "88, 150-151 Kanlapaphruek Rd, Khwaeng Bang Khae, Bang Khae, Bangkok 10160",
    // phone: "+66 2 345 6780",
    lineUrl: "https://lin.ee/HMbSFlS",
    mapUrl: "https://maps.app.goo.gl/H5m8jxdY8m82BbNt8",
    img:"SP2"
  },
  {
    name: "Xiaomi Authorized Service Center",
    type: "Mobile & Multi Product Service",
    address: "163/44 Moo 3, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000",
    // phone: "+66 2 345 6780",
    lineUrl: "https://lin.ee/LRZBpYn",
    mapUrl: "https://maps.app.goo.gl/6GoiaPGt6gfEbork9",
    img:"XAY"
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
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 overflow-hidden">
                {/* Branch Image */}
                <img
                  src={`/images/branches/${branch.img}.jpg`} // ตัวอย่าง path: public/images/branches/1.jpg
                  alt={`Photo of ${branch.name}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                <CardHeader>
                  <CardTitle className="text-lg text-primary">{branch.name}</CardTitle>
                  <CardDescription>{branch.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{branch.phone}</span>
                  </div> */}
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