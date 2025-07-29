import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceImages = [
  "/images/xiaomi/xiaomi1.jpg",
  "/images/xiaomi/xiaomi2.jpg",
  "/images/xiaomi/xiaomi3.jpg",
];

const brandLogos = [
  "/logos/asurion.png",
  "/logos/bolttech.png",
  "/logos/brother.png",
  "/logos/centerm.png",
  "/logos/chubb.png",
  "/logos/dieboldnixdorf.png",
  "/logos/fujifilm.png",
  "/logos/hisense.png",
  "/logos/huntkey.png",
  "/logos/itcity.png",
  "/logos/jaymart.png",
  "/logos/lenovo.png",
  "/logos/ncr.png",
  "/logos/om7.png",
  "/logos/powerbuy.png",
  "/logos/samsungsds.png",
  "/logos/sharp.png",
  "/logos/sunday.png",
  "/logos/sunvending.png",
  "/logos/tgfone.png",
  "/logos/tn.png",
  "/logos/wistron.png",
  "/logos/xiaomi.png",
];

const SmartHomeServiceSection = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % serviceImages.length);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, []);

  useEffect(() => {
    const brandTimer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % Math.ceil(brandLogos.length / 12));
    }, 4000);
    return () => clearInterval(brandTimer);
  }, []);

  const brandChunks = Array.from({ length: Math.ceil(brandLogos.length / 12) }, (_, i) =>
    brandLogos.slice(i * 12, i * 12 + 12)
  );

  return (
    <section className="py-20 min-h-[600px] bg-gradient-to-br from-[#F57C00] via-[#FFA726] to-[#FFE0B2]">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8">
        {/* Left Column: Service Center Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Xiaomi Authorized Service Center, Ayutthaya
          </h2>
          <div className="rounded-xl overflow-hidden w-full h-[300px] bg-white shadow-lg">
            <img
              src={serviceImages[currentImage]}
              alt="service"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
          <Button
            className="mt-6 bg-white text-[#F57C00] hover:bg-orange-100 font-semibold"
            size="lg"
            onClick={() => navigate("/contact")}
          >
            Contact Service Center
          </Button>
        </div>

        {/* Right Column: Brand Logos */}
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
            Brand Authorized Service Provider
          </h3>
          <div className="grid grid-cols-3 gap-4 p-4 bg-white/10 rounded-xl shadow-xl min-h-[420px] transition-all duration-500">
            {brandChunks[currentSet].map((logo, i) => (
              <div
                key={i}
                className="w-full h-20 bg-white rounded-md flex items-center justify-center p-2 shadow-md hover:scale-105 transition-transform"
              >
                <img src={logo} alt={`brand-${i}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeServiceSection;