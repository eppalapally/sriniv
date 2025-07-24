import srinivaHero from "@/assets/sriniv-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-96 lg:h-[500px] overflow-hidden rounded-3xl mb-8 animate-fade-in">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${srinivaHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
        <div className="text-white animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
            Sriniv
          </h1>
          <p className="text-xl lg:text-2xl font-medium mb-6 text-gray-200">
            Fashion-Forward Data Engineer
          </p>
          <div className="flex flex-wrap gap-3 text-sm lg:text-base">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              AI Automation
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              Data Analytics
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              Stock Analysis
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              Wellness
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;