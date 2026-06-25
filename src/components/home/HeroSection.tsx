import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function HeroSection() {
  return (
    <HeroSlideshow>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-1 gap-10 items-center min-h-[78vh] py-16 sm:py-24">
          {/* copy */}
          <div className="max-w-2xl">
            <ScrollReveal delay={0.05}>
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Welcome to Orizo Technologies
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
                Transforming Ideas Into{" "}
                <span className="text-orange-400">Digital Excellence</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                We empower businesses with innovative software solutions,
                AI-driven technologies, cloud infrastructure, and digital
                transformation services that accelerate growth and create
                lasting impact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.27}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-400 hover:bg-orange-600 text-white font-bold px-7 py-3.5 uppercase tracking-wide text-sm transition-colors text-center"
                >
                  Get a Quotation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/40 hover:border-orange-400 hover:text-orange-400 text-white font-bold px-7 py-3.5 uppercase tracking-wide text-sm transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </HeroSlideshow>
  );
}
