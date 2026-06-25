import ScrollReveal from "@/components/ScrollReveal";

const process = [
  { num: "01", title: "Discovery", desc: "We deeply understand your business, goals, and challenges through structured workshops and research." },
  { num: "02", title: "Design",    desc: "We prototype and design the solution architecture, UX flows, and technical specifications." },
  { num: "03", title: "Build",     desc: "Our engineers develop your solution using agile sprints with continuous feedback loops." },
  { num: "04", title: "Launch",    desc: "We deploy, test, and hand over the solution with full documentation and training." },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
            <div className="text-center mb-10">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Our Delivery Process</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map(({ num, title, desc }, i) => (
                <ScrollReveal key={num} delay={i * 0.1} direction="up">
                  <div className="group border border-white/10 rounded-2xl p-6 hover:border-orange-400/50 hover:bg-white/5 transition-all h-full">
                    <span className="text-5xl font-extrabold text-white/10 block mb-3">{num}</span>
                    <h3 className="font-bold text-orange-400 text-lg mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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
