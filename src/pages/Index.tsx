import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProductCategories from "@/components/ProductCategories";
import ImpactSection from "@/components/ImpactSection";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <ProductCategories />
      <ImpactSection />
      <AppSection />
      <Footer />
    </div>
  );
};

export default Index;
