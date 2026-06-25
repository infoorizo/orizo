import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: PhoneIcon,
    lines: ["+91 89252 46499", "+91 93457 86628"],
    sub: "Mon–Fri, 9am–6pm IST",
    orange: false,
  },
  {
    icon: EnvelopeIcon,
    lines: ["info@orizotechnologies.com"],
    sub: "We reply within 24 hours",
    orange: true,
  },
  {
    icon: MapPinIcon,
    lines: ["Bangalore, India"],
    sub: "Our Office",
    orange: false,
  },
  {
    icon: ClockIcon,
    lines: ["24/7 Support"],
    sub: "For enterprise clients",
    orange: false,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-12 sm:py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map(({ icon: Icon, lines, sub, orange }, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className={`group flex items-center gap-4 px-5 py-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full ${orange ? "bg-orange-400 hover:bg-orange-500" : "bg-white hover:border-orange-200 border border-transparent"}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${orange ? "bg-white/20" : "bg-orange-400"}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  {lines.map((line) => (
                    <p key={line} className={`font-bold text-sm leading-snug ${orange ? "text-white" : "text-[#0d1b2a] group-hover:text-orange-400 transition-colors"}`}>
                      {line}
                    </p>
                  ))}
                  <p className={`text-xs mt-1 ${orange ? "text-orange-100" : "text-gray-400"}`}>{sub}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
