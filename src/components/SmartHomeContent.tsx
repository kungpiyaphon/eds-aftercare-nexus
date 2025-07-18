import SmartHomeService from "./SmartHomeService";
import AffiliatedCompanies from "./AffiliatedCompanies";
import ServiceCenters from "./ServiceCenters";
import SmartHomeHeroSlider from "./SmartHomeHeroSlider";

const SmartHomeContent = () => {
    return (
        <>
            <SmartHomeHeroSlider />
            <AffiliatedCompanies />
            <SmartHomeService />
            <ServiceCenters />
        </>
    );
};

export default SmartHomeContent;