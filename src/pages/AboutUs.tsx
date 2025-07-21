import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurValuesSection from "@/components/OurValuesSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <OurValuesSection />
      <Footer />
    </div>
  );
}
export default AboutUs;