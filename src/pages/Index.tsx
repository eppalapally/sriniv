import HeroSection from "@/components/HeroSection";
import PortfolioCharts from "@/components/PortfolioCharts";
import PortfolioTable from "@/components/PortfolioTable";
import InterestsPanel from "@/components/InterestsPanel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <HeroSection />
        <PortfolioCharts />
        <PortfolioTable />
        <InterestsPanel />
        <Footer />
      </div>
    </div>
  );
};

export default Index;