import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhySection from "@/components/home/WhySection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="bg-white text-[#0d1b2a]">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CtaBanner />
    </div>
  );
}
