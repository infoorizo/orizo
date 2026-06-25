import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  { num: "01", title: "Ownership",     desc: "Every team member owns their work end-to-end and is empowered to make decisions." },
  { num: "02", title: "Transparency",  desc: "We share context openly — from company direction to individual performance." },
  { num: "03", title: "Learning",      desc: "We invest in growth through mentorship, learning budgets, and internal knowledge sharing." },
  { num: "04", title: "Balance",       desc: "We believe great work comes from rested, fulfilled people. We protect your time outside work." },
];

export default function CultureSection() {
  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
            <div className="text-center mb-10">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Life at Orizo
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Our Culture</h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                We build great products because we build a great team first.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map(({ num, title, desc }, i) => (
                <ScrollReveal key={num} delay={i * 0.1} direction="up">
                  <div className="group border border-white/10 rounded-2xl p-6 hover:border-orange-400/60 hover:bg-white/8 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/10 transition-all duration-300 h-full">
                    <span className="text-5xl font-extrabold text-white/10 group-hover:text-orange-400/20 block mb-3 transition-colors duration-300">{num}</span>
                    <h3 className="font-bold text-orange-400 text-lg mb-2 group-hover:text-orange-300 transition-colors">{title}</h3>
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
