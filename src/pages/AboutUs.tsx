import AboutSection from "@/components/AboutSection";
import AchievementSection from "@/components/AchievementSection";
import ExecutiveSection from "@/components/ExecutiveSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ManagementTeam from "@/components/ManagementTeam";
import OurValuesSection from "@/components/OurValuesSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <OurValuesSection />
      <AchievementSection />
      <ExecutiveSection />
      <ManagementTeam />
      <Footer />
    </div>
  );
}
export default AboutUs;