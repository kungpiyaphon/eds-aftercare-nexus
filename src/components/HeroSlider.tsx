import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroExecutives from "@/assets/hero-executives.jpg";
import heroVision from "@/assets/hero-vision.jpg";
import heroAiInnovation from "@/assets/hero-ai-innovation.jpg";

const slides = [
  {
    id: 1,
    image: heroExecutives,
    title: "EDS BEYOND SERVICE GENERATION",
    subtitle: "To become a leading provider of integrated services in Thailand and Asia Regions",
    description: "Our leadership team drives innovation and maintains the highest standards in after-service solutions."
  },
  {
    id: 2,
    image: heroVision,
    title: "VISION, CULTURE & VALUES",
    subtitle: "Building tomorrow's service standards today",
    description: "Our vision shapes every interaction, our culture empowers every team member, and our values guide every decision."
  },
  {
    id: 3,
    image: heroAiInnovation,
    title: "AI-POWERED INNOVATION",
    subtitle: "Revolutionary AI assistance for precise malfunction analysis",
    description: "Cutting-edge artificial intelligence empowers our technicians to diagnose and resolve issues with unprecedented accuracy and speed."
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section id="home" className="relative h-screen overflow-hidden">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-blue-100 animate-fade-in">
                {slide.subtitle}
              </h2>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed animate-fade-in">
                {slide.description}
              </p>
              <div className="flex gap-4 animate-fade-in">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
                  Our Services
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

export default HeroSlider;