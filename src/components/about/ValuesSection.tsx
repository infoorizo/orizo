import {
  LightBulbIcon,
  UserGroupIcon,
  TrophyIcon,
  GlobeAltIcon,
  HeartIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

function OrangeBar() {
  return <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />;
}

const values = [
  { icon: LightBulbIcon,    title: "Innovation",    desc: "We constantly explore emerging technologies to deliver forward-thinking solutions." },
  { icon: HeartIcon,        title: "Integrity",     desc: "We operate with full transparency, honesty, and commitment in every engagement." },
  { icon: UserGroupIcon,    title: "Collaboration", desc: "We work as an extension of your team, not just a vendor." },
  { icon: TrophyIcon,       title: "Excellence",    desc: "We set high standards for quality and performance in everything we build." },
  { icon: GlobeAltIcon,     title: "Impact",        desc: "We create technology that makes a measurable difference for businesses and people." },
  { icon: RocketLaunchIcon, title: "Speed",         desc: "Agile execution means faster delivery without sacrificing quality." },
];

export default function ValuesSection() {
  return (
    <section className="py-12 sm:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">What Drives Us</p>
          <OrangeBar />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">Our Core Values</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.08} direction="up">
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 p-7 relative overflow-hidden transition-all duration-300 h-full border border-transparent hover:border-orange-200">
                <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-orange-200 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0d1b2a] text-lg mb-2 group-hover:text-orange-400 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
