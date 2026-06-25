import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const stats = [
  { label: "Established",        target: 2026, suffix: "" },
  { label: "Projects Delivered",  target: 10,   suffix: "+" },
  { label: "Satisfied Clients",   target: 5,    suffix: "+" },
  { label: "Technology Experts",  target: 7,    suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f5f7fa] py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 -mb-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-12">
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Numbers That Speak for Themselves</h2>
            </div>
            {/* Replace divide-x with gap-px pattern for mobile compatibility */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {stats.map(({ label, target, suffix }, i) => (
                <ScrollReveal key={label} delay={i * 0.12} direction="up">
                  <div className="flex flex-col items-center justify-center py-6 px-4 text-center group bg-[#0d1b2a]">
                    <p className="text-3xl sm:text-5xl font-extrabold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                      <CountUp target={target} suffix={suffix} duration={2000} />
                    </p>
                    <div className="w-8 h-0.5 bg-orange-400/40 mb-2" />
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">{label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
