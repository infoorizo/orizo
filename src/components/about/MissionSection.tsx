import ScrollReveal from "@/components/ScrollReveal";
import { EyeIcon, FlagIcon, StarIcon } from "@heroicons/react/24/outline";

const cards = [
  {
    icon: FlagIcon,
    title: "Our Mission",
    desc: "To empower organizations of every size with intelligent technology solutions that streamline operations, accelerate growth, and create lasting competitive advantage.",
  },
  {
    icon: EyeIcon,
    title: "Our Vision",
    desc: "To be the most trusted technology partner for businesses worldwide — known for innovation, reliability, and delivering outcomes that matter.",
  },
  {
    icon: StarIcon,
    title: "Our Promise",
    desc: "We commit to transparency, quality, and measurable impact in every engagement. Your success is the only metric we measure ourselves by.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Our Foundation</p>
          <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">Mission, Vision &amp; Promise</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Everything we do is guided by a clear purpose and set of principles.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.1} direction="up">
              <div
                className={`relative p-7 sm:p-8 rounded-2xl h-full flex flex-col gap-5 overflow-hidden ${
                  i === 1
                    ? "bg-orange-400 text-white shadow-xl shadow-orange-100"
                    : "bg-[#f5f7fa] border border-gray-100"
                }`}
                style={i === 1 ? { borderRadius: "1.5rem 1.5rem 0 1.5rem", clipPath: "polygon(0 0,100% 0,100% calc(100% - 32px),calc(100% - 32px) 100%,0 100%)" } : {}}
              >
                {i === 1 && <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10" />}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${i === 1 ? "bg-white/25" : "bg-orange-400"}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`font-bold text-xl ${i === 1 ? "text-white" : "text-[#0d1b2a]"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${i === 1 ? "text-orange-50" : "text-gray-500"}`}>{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
