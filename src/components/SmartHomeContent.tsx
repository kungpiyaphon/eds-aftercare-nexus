import SmartHomeService from "./SmartHomeService";
import AffiliatedCompanies from "./AffiliatedCompanies";
import ServiceCenters from "./ServiceCenters";
import SmartHomeHeroSlider from "./SmartHomeHeroSlider";
import SmartHomeServiceSection from "./SmartHomeServiceSection";

const SmartHomeContent = () => {
    return (
        <>
            <SmartHomeHeroSlider />
            <AffiliatedCompanies />
            <SmartHomeService />
            <SmartHomeServiceSection />
            <ServiceCenters />
        </>
    );
};

export default SmartHomeContent;