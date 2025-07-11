import React from "react";

const brandPartners = [
  { src: "/logos/samsung.svg", alt: "Samsung" },
  { src: "/logos/lg.svg", alt: "LG" },
  { src: "/logos/sony.svg", alt: "Sony" },
  { src: "/logos/panasonic.svg", alt: "Panasonic" },
  { src: "/logos/huawei.svg", alt: "Huawei" },
  { src: "/logos/xiaomi.svg", alt: "Xiaomi" },
  { src: "/logos/sharp.svg", alt: "Sharp" },
];

const retailPartners = [
  { src: "/logos/bigc.svg", alt: "Big C" },
  { src: "/logos/tesco.svg", alt: "Tesco Lotus" },
  { src: "/logos/powerbuy.svg", alt: "PowerBuy" },
  { src: "/logos/bananait.svg", alt: "Banana IT" },
  { src: "/logos/advice.svg", alt: "Advice" },
  { src: "/logos/jmart.svg", alt: "Jmart" },
];

const BrandCarouselSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-16">
        {/* Brand Partners */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Brand Partners</h3>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-slide-left w-max">
              {[...brandPartners, ...brandPartners].map((logo, i) => (
                <div
                  key={i}
                  className="w-40 h-24 bg-white rounded-xl flex items-center justify-center p-4 shadow-card hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retail Partners */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Retail Partners</h3>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-slide-right w-max">
              {[...retailPartners, ...retailPartners].map((logo, i) => (
                <div
                  key={i}
                  className="w-40 h-24 bg-white rounded-xl flex items-center justify-center p-4 shadow-card hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarouselSection;
