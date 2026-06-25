import {
  BanknotesIcon,
  ComputerDesktopIcon,
  LightBulbIcon,
  HeartIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

function OrangeBar() {
  return <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />;
}

const perks = [
  { icon: BanknotesIcon,       title: "Competitive Pay",  desc: "Market-leading salaries and performance bonuses." },
  { icon: ComputerDesktopIcon, title: "Remote Friendly",  desc: "Flexible remote and hybrid working arrangements." },
  { icon: LightBulbIcon,       title: "Learning Budget",  desc: "Annual budget for courses, conferences, and certifications." },
  { icon: HeartIcon,           title: "Health Benefits",  desc: "Comprehensive medical, dental, and wellness coverage." },
  { icon: UserGroupIcon,       title: "Great Culture",    desc: "Inclusive, collaborative team with flat hierarchy." },
  { icon: TrophyIcon,          title: "Growth Path",      desc: "Clear career progression with mentorship from leaders." },
];

export default function PerksSection() {
  return (
    <section className="py-12 sm:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Why Orizo</p>
          <OrangeBar />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">Why Work With Us</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.08} direction="up">
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-7 relative overflow-hidden transition-all h-full">
                <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0d1b2a] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
