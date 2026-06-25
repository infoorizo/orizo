import Link from "next/link";
import {
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

function OrangeBar() {
  return <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />;
}

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* 3-column asymmetric layout — stacks to single col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Col 1: heading + button + 2 white cards */}
          <ScrollReveal direction="left" className="flex flex-col gap-5">
            <div>
              <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">What We Do</p>
              <OrangeBar />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b2a] leading-tight">
                We Provide Best<br />Technology Services
              </h2>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold px-5 py-2.5 uppercase tracking-wide text-xs transition-colors rounded-sm"
              >
                View All Services
              </Link>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CodeBracketIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0d1b2a] text-base mb-2">Custom Software Development</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                End-to-end software engineering built around your exact requirements.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0d1b2a] text-base mb-2">Enterprise Security Solutions</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Proactive security strategies and compliance frameworks to protect your business.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </div>
          </ScrollReveal>

          {/* Col 2: 2 tall orange featured cards */}
          <ScrollReveal direction="up" delay={0.1} className="flex flex-col gap-5">
            <div
              className="bg-orange-400 p-7 sm:p-8 text-white shadow-xl shadow-orange-100 flex flex-col gap-5 relative overflow-hidden"
              style={{ borderRadius: "1.5rem 1.5rem 0 1.5rem", clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)" }}
            >
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
              <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center z-10">
                <CpuChipIcon className="w-7 h-7 text-white" />
              </div>
              <div className="z-10">
                <h3 className="font-bold text-xl mb-2">AI & Automation Solutions</h3>
                <p className="text-orange-50 text-sm leading-relaxed">
                  Intelligent automation, machine learning pipelines, and AI-powered
                  applications that eliminate manual overhead and drive smarter decisions.
                </p>
              </div>
              <Link href="/services" className="z-10 inline-flex items-center gap-1 text-white font-bold text-xs uppercase tracking-wide underline underline-offset-4 hover:gap-2 transition-all">
                Read more
              </Link>
            </div>

            <div
              className="bg-orange-400 p-7 sm:p-8 text-white shadow-xl shadow-orange-100 flex flex-col gap-5 relative overflow-hidden"
              style={{ borderRadius: "1.5rem 1.5rem 0 1.5rem", clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)" }}
            >
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
              <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center z-10">
                <CloudIcon className="w-7 h-7 text-white" />
              </div>
              <div className="z-10">
                <h3 className="font-bold text-xl mb-2">Cloud & DevOps Services</h3>
                <p className="text-orange-50 text-sm leading-relaxed">
                  Cloud-native architecture, CI/CD pipelines, and infrastructure
                  automation for resilient, scalable systems that grow with you.
                </p>
              </div>
              <Link href="/services" className="z-10 inline-flex items-center gap-1 text-white font-bold text-xs uppercase tracking-wide underline underline-offset-4 hover:gap-2 transition-all">
                Read more
              </Link>
            </div>
          </ScrollReveal>

          {/* Col 3: 3 white cards stacked */}
          <ScrollReveal direction="right" delay={0.15} className="flex flex-col gap-5">
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0d1b2a] text-base mb-2">Mobile & Web Applications</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Cross-platform mobile and web apps with intuitive UX and high performance.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0d1b2a] text-base mb-2">Digital Transformation</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Modernisation of legacy systems and processes to unlock efficiency.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <WrenchScrewdriverIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0d1b2a] text-base mb-2">24/7 Technical Support</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Round-the-clock assistance and maintenance to keep your systems running smoothly.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
