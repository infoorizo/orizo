import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

function OrangeBar() {
  return <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />;
}

export default function StorySection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative overflow-hidden">
            <img src="/bg.jpg" alt="Our Story" className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-xl" />
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-orange-400 rounded-2xl -z-10" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1}>
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Our Story</p>
          <OrangeBar />
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-5">
            Empowering Businesses Through Technology
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Founded in 2026 with a vision to bridge the gap between business challenges and technology solutions, ORIZO TECHNOLOGIES has quickly grown into a trusted partner for organizations across industries. We combine deep technical expertise with a passion for innovation to deliver results that matter.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
            From our early days building custom software for local businesses to now serving enterprises across the globe, our commitment has remained constant — deliver excellence, build trust, and create lasting impact through technology.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-600 text-white font-bold px-6 py-3 uppercase tracking-wide text-sm transition-colors">
            Work With Us <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
