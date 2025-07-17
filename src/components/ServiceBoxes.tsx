import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServiceBoxes = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Check Status Repair",
      description:
        "Comprehensive repair services with detailed diagnostics and transparent reporting.",
      image: "/images/person-repair.png",
      gradient:
        "bg-gradient-to-t from-blue-100 via-blue-50 to-white",
      buttonText: "View Details",
      action: () => navigate("/contact"),
    },
    {
      title: "Our Services",
      description:
        "Complete range of after-service solutions tailored to your specific needs.",
      image: "/images/person-service.png",
      gradient:
        "bg-gradient-to-t from-green-100 via-green-50 to-white",
      buttonText: "Explore Services",
      action: () => navigate("/services"),
    },
    {
      title: "Order Products",
      description:
        "High-quality replacement parts and accessories with fast delivery options.",
      image: "/images/person-order.png",
      gradient:
        "bg-gradient-to-t from-purple-100 via-purple-50 to-white",
      buttonText: "Shop Now",
      externalLink: "https://external-shop.example.com",
    },
    {
      title: "Online Booking",
      description:
        "Schedule your service appointment online with flexible time slots available.",
      image: "/images/person-booking.png",
      gradient:
        "bg-gradient-to-t from-orange-100 via-orange-50 to-white",
      buttonText: "Book Now",
      action: () => navigate("/contact"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Quick Access Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for efficient service management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${service.gradient} p-6 pt-20 pb-10 flex flex-col justify-start items-center hover:shadow-xl transition-all duration-300 group h-full`}
            >
              {/* Floating Image */}
              <div className="w-24 h-24 -mt-12">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-contain w-full h-full drop-shadow-lg"
                />
              </div>

              {/* Text Content */}
              <div className="text-center z-20 flex flex-col flex-grow w-full">
                <h3 className="text-lg font-semibold text-primary mb-2 mt-4">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto">
                  {service.externalLink ? (
                    <a
                      href={service.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        {service.buttonText}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      onClick={service.action}
                      variant="secondary"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      {service.buttonText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;