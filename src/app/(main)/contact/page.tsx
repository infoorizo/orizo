import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import MapSection from "@/components/contact/MapSection";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="bg-white text-[#0d1b2a]">
      <PageHero
        badge="Contact Us"
        title="Let's"
        highlight="Talk"
        description="Have a project in mind or want to explore how we can help? We'd love to hear from you."
      />
      <ContactInfoCards />
      <MapSection />
      <ContactForm />
      <div className="bg-[#f5f7fa] h-16" />
    </div>
  );
}
