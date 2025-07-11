import SmartHomeService from "./SmartHomeService";
import AffiliatedCompanies from "./AffiliatedCompanies";
import ServiceCenters from "./ServiceCenters";

const SmartHomeContent = () => {
    return (
        <>
            <AffiliatedCompanies />
            <SmartHomeService />
            <ServiceCenters />
        </>
    );
};

export default SmartHomeContent;