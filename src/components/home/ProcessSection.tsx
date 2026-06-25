import ScrollReveal from "@/components/ScrollReveal";

const process = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "We analyze your requirements, define goals, and create a detailed project roadmap aligned with your business objectives.",
  },
  {
    num: "02",
    title: "Design & Development",
    desc: "Our team designs intuitive interfaces and builds robust, scalable solutions using modern technologies and agile methodologies.",
  },
  {
    num: "03",
    title: "Deploy & Support",
    desc: "We launch your solution, monitor performance, and provide continuous support to ensure long-term success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 sm:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a]">Our Process</h2>
          <div className="flex justify-center mt-2"><div className="w-12 h-1 bg-orange-400" /></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
          {/* connecting line — only on md+ */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gray-300" />

          {process.map(({ num, title, desc }, i) => (
            <ScrollReveal key={num} delay={i * 0.12} direction="up">
              <div className="relative flex flex-col items-center text-center px-6 sm:px-8 pb-8">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-200 leading-none mb-1 select-none">
                  {num}
                </span>
                <div className="w-4 h-4 rounded-full bg-orange-400 border-4 border-white shadow-md -mt-3 mb-4 z-10" />
                <h3 className="font-bold text-orange-400 text-base sm:text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
