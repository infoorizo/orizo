import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import StatsSection from "@/components/home/StatsSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0d1b2a]">
      <PageHero
        badge="About Us"
        title="Who We"
        highlight="Are"
        description="A technology-driven company on a mission to empower businesses through innovation, expertise, and lasting partnerships."
      />
      <StorySection />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaBanner
        title="Ready to Work Together?"
        subtitle="Let's build something great — reach out to our team today."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
