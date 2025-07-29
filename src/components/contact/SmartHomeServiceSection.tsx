import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, MessageCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const smartHomeCenters = [
  {
    name: "Xiaomi Authorized Service Center",
    type: "Mobile & Multi Product Service",
    address: "163/44 Moo 3, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000",
    lineUrl: "https://lin.ee/LRZBpYn",
    mapUrl: "https://maps.app.goo.gl/6GoiaPGt6gfEbork9",
    img: "XAY"
  }
]

const SmartHomeServiceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Smart Home Authorized Centers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized service centers managed by Smart Home for Xiaomi and multi-product support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {smartHomeCenters.map((center, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 overflow-hidden"
            >
              <img
                src={`/images/branches/${center.img}.jpg`}
                alt={`Photo of ${center.name}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <CardHeader>
                <CardTitle className="text-lg text-primary">{center.name}</CardTitle>
                <CardDescription>{center.type}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span className="text-sm">{center.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Navigation className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={center.mapUrl}
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
                  onClick={() => window.open(center.lineUrl, "_blank")}
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
  )
}

export default SmartHomeServiceSection