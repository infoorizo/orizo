import {
  LightBulbIcon,
  UserGroupIcon,
  BoltIcon,
  LockClosedIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

const whyOrizo = [
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    desc: "We leverage emerging technologies to create future-ready solutions.",
  },
  {
    icon: UserGroupIcon,
    title: "Client-Centric Approach",
    desc: "Every solution is tailored to meet your unique business needs.",
  },
  {
    icon: BoltIcon,
    title: "Agile Development",
    desc: "Fast, flexible, and efficient project execution.",
  },
  {
    icon: LockClosedIcon,
    title: "Security Focused",
    desc: "Building secure and reliable applications from day one.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Scalable Solutions",
    desc: "Technology designed to grow alongside your business.",
  },
  {
    icon: HeartIcon,
    title: "Dedicated Support",
    desc: "Continuous assistance and maintenance after deployment.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-[#f5f7fa] py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">

            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Our Edge
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Choose ORIZO</h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                We don&apos;t just build software — we build lasting partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyOrizo.map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 0.07} direction="up">
                  <div className="group border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-orange-400/60 hover:bg-white/8 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/10 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-xl bg-orange-400/15 flex items-center justify-center mb-5 group-hover:bg-orange-400/30 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-orange-300 transition-colors">{title}</h3>
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
