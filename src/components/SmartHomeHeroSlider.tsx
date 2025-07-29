import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/images/warehouse-automation.jpg",
    title: "Warehouse Automation",
    subtitle: "Smart storage and robotic efficiency",
    description:
      "Our automated warehousing systems streamline operations, improve inventory accuracy, and boost productivity through AI and robotics.",
  },
  {
    id: 2,
    image: "/images/iot-logistics.jpg",
    title: "IoT-Enabled Logistics",
    subtitle: "Real-time tracking and smart dispatch",
    description:
      "Harness the power of IoT for optimized routing, shipment visibility, and end-to-end logistics intelligence at every step of the journey.",
  },
  {
    id: 3,
    image: "/images/onsite-service.jpg",
    title: "Nationwide Onsite Services",
    subtitle: "Reliable field support when you need it",
    description:
      "From installations to repairs, our technicians provide expert onsite service with SLA-driven performance and nationwide coverage.",
  },
];

const SmartHomeHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="relative z-10 inline-block bg-white shadow-2xl rounded-2xl p-6 mb-10">
                <img
                  src="/logos/smarthome-logo.png"
                  alt="SmartHome Logo"
                  className="w-[120px] md:w-[200px] mx-auto object-contain transition-all duration-500"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-lg md:text-xl mb-4 text-blue-100 animate-fade-in">
                {slide.subtitle}
              </h2>
              <p className="text-base mb-6 text-blue-50 leading-relaxed animate-fade-in">
                {slide.description}
              </p>
              <div className="flex gap-4 animate-fade-in">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-primary"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SmartHomeHeroSlider;
