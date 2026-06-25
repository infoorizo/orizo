import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import PerksSection from "@/components/careers/PerksSection";
import CultureSection from "@/components/careers/CultureSection";
import HiringProcessSection from "@/components/careers/HiringProcessSection";
import OpeningsSection from "@/components/careers/OpeningsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <div className="bg-white text-[#0d1b2a]">
      <PageHero
        badge="Join Our Team"
        title="Build Your Career at"
        highlight="ORIZO"
        description="We're looking for passionate people who love technology and want to make a real impact."
      />
      <PerksSection />
      <CultureSection />
      <HiringProcessSection />
      <OpeningsSection />
      <CtaBanner
        title="Don't See Your Role?"
        subtitle="We're always looking for talented people. Send us your profile."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
