import React from "react";

const brandPartners = [
  { src: "/logos/samsung.png", alt: "Samsung" },
  { src: "/logos/xiaomi.png", alt: "Xiaomi" },
  { src: "/logos/brother.png", alt: "Brother" },
  { src: "/logos/hisense.png", alt: "Hisense" },
  { src: "/logos/sunvending.png", alt: "Sun Vending" },
  { src: "/logos/fujifilm.png", alt: "Fujifilm" },
  { src: "/logos/samsungsds.png", alt: "Samsung SDS" },
  { src: "/logos/lenovo.png", alt: "Lenovo" },
  { src: "/logos/centerm.png", alt: "Centerm" },
  { src: "/logos/dieboldnixdorf.png", alt: "Diebold Nixdorf" },
  { src: "/logos/sharp.png", alt: "Sharp" },
  { src: "/logos/ncr.png", alt: "NCR" },
  { src: "/logos/huntkey.png", alt: "Huntkey" },
];

const retailPartners = [
  { src: "/logos/jaymart.png", alt: "Jaymart" },
  { src: "/logos/om7.png", alt: "Com 7" },
  { src: "/logos/tgfone.png", alt: "TG Fone" },
  { src: "/logos/wistron.png", alt: "Wistron" },
  { src: "/logos/powerbuy.png", alt: "Power Buy" },
  { src: "/logos/itcity.png", alt: "IT City" },
  { src: "/logos/asurion.png", alt: "Asurion" },
  { src: "/logos/sunday.png", alt: "Sunday" },
  { src: "/logos/bolttech.png", alt: "Bolttech" },
  { src: "/logos/chubb.png", alt: "Chubb" },
  { src: "/logos/tn.png", alt: "TN" },
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
            <div className="flex gap-6 animate-slide-left w-max">
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
