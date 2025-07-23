import { Store, MapPin, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SamsungHighlightSection = () => {
  return (
    <section className="py-20 bg-background border-t">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Samsung Exclusive Service Centers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide mobile and appliance services through official Samsung-authorized centers across 7 provinces in Thailand.
          </p>
        </div>

        {/* Summary Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center gap-4">
            <Smartphone className="w-10 h-10 text-accent" />
            <div className="text-left">
              <p className="text-xl font-semibold text-primary">4 Centers in Malls</p>
              <p className="text-sm text-muted-foreground">
                Mobile service only
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Store className="w-10 h-10 text-accent" />
            <div className="text-left">
              <p className="text-xl font-semibold text-primary">3 Stand-alone Centers</p>
              <p className="text-sm text-muted-foreground">
                Appliance repair & installation
              </p>
            </div>
          </div>
        </div>

        <Button size="lg" variant="default" className="bg-gradient-primary" asChild>
          <a href="/contact">
            <MapPin className="mr-2 h-5 w-5" />
            View All Locations
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SamsungHighlightSection;
