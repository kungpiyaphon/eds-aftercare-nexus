import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Warehouse, Truck } from "lucide-react";

const SmartHomeBanner = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Smart Home Electronics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert in Smart Warehouse Integration & Automation Solution
          </p>
        </div>

        {/* Banner with gradient background */}
        <div className="bg-gradient-to-r from-[#13255B] via-[#1D3C84] to-[#2E5CBA] rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Logo block */}
          <div className="relative z-10 inline-block bg-white shadow-2xl rounded-2xl p-6 mb-10">
            <img
              src="/logos/smarthome-logo.png"
              alt="SmartHome Logo"
              className="w-[280px] md:w-[360px] mx-auto object-contain transition-all duration-500"
            />
          </div>

          {/* Icons below logo */}
          <div key={key} className="relative h-24 mb-10">
            {/* Truck moving in (left to center) */}
            <Truck className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white w-10 h-10 animate-truck-in" />

            {/* Warehouse icon at center bottom */}
            <Warehouse className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12" />

            {/* Truck moving out (center to right) */}
            <Truck className="absolute left-[60%] top-1/2 transform -translate-y-1/2 text-white w-10 h-10 animate-truck-out delay-[3s]" />
          </div>

          {/* CTA */}
          <h3 className="text-3xl font-bold text-white mb-6">
            Explore SmartHome Solutions
          </h3>
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full"
            onClick={() => navigate("/smart-home")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeBanner;