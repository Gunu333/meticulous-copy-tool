import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />
      <HeroSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
