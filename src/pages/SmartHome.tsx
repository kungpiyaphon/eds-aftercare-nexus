import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartHomeContent from "@/components/SmartHomeContent";

const SmartHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-12">
        <SmartHomeContent />
      </main>
      <Footer />
    </div>
  );
};

export default SmartHome;