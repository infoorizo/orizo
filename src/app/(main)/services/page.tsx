import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import TechStackSection from "@/components/services/TechStackSection";
import ProcessSection from "@/components/services/ProcessSection";
import FaqSection from "@/components/services/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0d1b2a]">
      <PageHero
        badge="What We Offer"
        title="Our"
        highlight="Services"
        description="End-to-end technology services designed to solve real business problems and drive measurable growth."
      />
      <ServicesGrid />
      <TechStackSection />
      <ProcessSection />
      <FaqSection />
      <CtaBanner
        title="Need a Custom Solution?"
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
        buttonText="Get a Quote"
        buttonHref="/contact"
      />
    </div>
  );
}
