import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Apply Online",       desc: "Submit your CV and a short note on why you're excited about ORIZO through our contact form." },
  { num: "02", title: "Intro Call",         desc: "A 30-minute conversation with our talent team to learn more about you and your goals." },
  { num: "03", title: "Technical Review",   desc: "A practical assessment or technical interview relevant to the role — no trick questions." },
  { num: "04", title: "Team Interview",     desc: "Meet the team you'd be working with to ensure mutual fit and alignment." },
  { num: "05", title: "Offer & Onboarding", desc: "We move fast. Expect a clear offer with full details, followed by a smooth onboarding experience." },
];

export default function HiringProcessSection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Hiring</p>
          <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">Our Hiring Process</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Simple, transparent, and designed to be a great experience for every candidate.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {/* connecting line — only on lg+ */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gray-200" />
          {steps.map(({ num, title, desc }, i) => (
            <ScrollReveal key={num} delay={i * 0.1} direction="up">
              <div className="flex flex-col items-center text-center px-4 pb-4">
                <div className="w-14 h-14 rounded-full bg-orange-400 flex items-center justify-center text-white font-extrabold text-lg mb-4 relative z-10 shadow-lg shadow-orange-200">
                  {num}
                </div>
                <h3 className="font-bold text-[#0d1b2a] text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
