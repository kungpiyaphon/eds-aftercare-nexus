import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CoreStrengths from "@/components/CoreStrengths";
import ServiceBoxes from "@/components/ServiceBoxes";
import ProductsServices from "@/components/ProductsServices";
import PartnersSection from "@/components/PartnersSection";
import AffiliatedCompanies from "@/components/AffiliatedCompanies";
import SmartHomeService from "@/components/SmartHomeService";
import ServiceCenters from "@/components/ServiceCenters";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Section 1: Hero Slider */}
        <HeroSlider />
        
        {/* Section 2: Core Business Strengths */}
        <CoreStrengths />
        
        {/* Section 3: Service Boxes */}
        <ServiceBoxes />
        
        {/* Section 4: Products & Services */}
        <ProductsServices />
        
        {/* Section 5: Partners */}
        <PartnersSection />
        
        {/* Section 6: Affiliated Companies */}
        <AffiliatedCompanies />
        
        {/* Section 7: Smart Home Service */}
        <SmartHomeService />
        
        {/* Section 8: Service Centers */}
        <ServiceCenters />
        
        {/* Section 9: News & Updates */}
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;