import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "ORIZO transformed our operations with a modern cloud platform in record time. The team's expertise and communication were outstanding throughout the engagement.",
    name: "Rajesh Sharma",
    role: "CTO, TechVentures India",
    initials: "RS",
    color: "bg-orange-400",
  },
  {
    quote: "Their AI automation solution reduced our manual processing time significantly. The ROI was visible within the first quarter of deployment.",
    name: "Priya Nair",
    role: "Operations Director, Innovate Corp",
    initials: "PN",
    color: "bg-indigo-500",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Client Stories</p>
          <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">What Our Clients Say</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map(({ quote, name, role, initials, color }, i) => (
            <ScrollReveal key={name} delay={i * 0.1} direction="up">
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-orange-200 border border-transparent transition-all duration-300 p-7 h-full flex flex-col">
                <Stars />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 group-hover:text-gray-700 transition-colors">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold shrink-0 group-hover:scale-110 transition-transform duration-300`}>{initials}</div>
                  <div>
                    <p className="font-bold text-[#0d1b2a] text-sm group-hover:text-orange-400 transition-colors">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
