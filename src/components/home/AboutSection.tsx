import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

function OrangeBar() {
  return <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />;
}

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* image */}
        <ScrollReveal direction="left">
          <div className="relative overflow-hidden">
            <img
              src="/bg.jpg"
              alt="About Orizo Technologies"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-orange-400 rounded-2xl -z-10" />
          </div>
        </ScrollReveal>

        {/* copy */}
        <ScrollReveal direction="right" delay={0.1}>
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">About Us</p>
          <OrangeBar />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a] leading-tight mb-5">
            Empowering Businesses Through Technology
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            At ORIZO TECHNOLOGIES, we believe technology should be a catalyst
            for growth and innovation. Our team combines technical expertise,
            creative thinking, and industry knowledge to develop solutions that
            drive efficiency, improve customer engagement, and unlock new
            opportunities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
            From startups to enterprises, we help organizations navigate digital
            transformation with confidence — through software development,
            artificial intelligence, cloud computing, cybersecurity, and business
            automation services.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-600 text-white font-bold px-6 py-3 uppercase tracking-wide text-sm transition-colors"
          >
            Get a Quote <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
