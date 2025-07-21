import AboutSection from "@/components/AboutSection";
import AchievementSection from "@/components/AchievementSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurValuesSection from "@/components/OurValuesSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <OurValuesSection />
      <AchievementSection />
      <Footer />
    </div>
  );
}
export default AboutUs;