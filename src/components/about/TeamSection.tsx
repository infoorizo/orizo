import ScrollReveal from "@/components/ScrollReveal";

const team = [
  { name: "Pavan Kumar",   role: "Technical Lead",  initials: "PK", color: "bg-orange-400" },
  { name: "Sandeep Kumar", role: "Marketing Lead",  initials: "SK", color: "bg-indigo-500" },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Our People
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Meet the Team</h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                The people behind ORIZO TECHNOLOGIES.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
              {team.map(({ name, role, initials, color }, i) => (
                <ScrollReveal key={name} delay={i * 0.08} direction="up">
                  <div className="group border border-white/10 rounded-2xl p-6 hover:border-orange-400/60 hover:bg-white/8 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/10 transition-all duration-300 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-white font-extrabold text-lg shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                      {initials}
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-orange-300 transition-colors">{name}</p>
                      <p className="text-orange-400 text-sm font-medium">{role}</p>
                    </div>
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
