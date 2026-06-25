import Link from "next/link";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

function OrangeBar() {
  return <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />;
}

const services = [
  {
    icon: CodeBracketIcon,
    title: "Custom Software Development",
    desc: "We design and build tailor-made software applications that align precisely with your business goals — from concept to deployment.",
    features: ["Web Applications", "API Development", "System Integration", "Legacy Modernisation"],
  },
  {
    icon: CpuChipIcon,
    title: "AI & Automation Solutions",
    desc: "Harness the power of artificial intelligence and intelligent automation to eliminate repetitive tasks and unlock smarter decision-making.",
    features: ["Machine Learning Models", "Process Automation", "NLP & Chatbots", "Predictive Analytics"],
    highlight: true,
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps Services",
    desc: "Modernise your infrastructure with cloud-native architecture and CI/CD pipelines that enable reliable, scalable deployments.",
    features: ["Cloud Migration", "AWS / Azure / GCP", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security Solutions",
    desc: "Protect your business with proactive cybersecurity strategies, compliance frameworks, and ongoing monitoring.",
    features: ["Penetration Testing", "SOC 2 Compliance", "Data Encryption", "Security Audits"],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile & Web Applications",
    desc: "Deliver exceptional digital experiences across all platforms with our cross-platform mobile and responsive web applications.",
    features: ["iOS & Android Apps", "React Native", "Progressive Web Apps", "UI/UX Design"],
    highlight: true,
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Digital Transformation",
    desc: "Guide your organisation through strategic digital transformation — modernising operations, culture, and technology.",
    features: ["Process Optimisation", "Digital Strategy", "Change Management", "Technology Roadmap"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-12 sm:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Core Services</p>
          <OrangeBar />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">Everything Your Business Needs</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, features, highlight }, i) => (
            <ScrollReveal key={title} delay={i * 0.08} direction="up">
              <div
                className={`relative flex flex-col h-full rounded-2xl p-7 overflow-hidden transition-all ${
                  highlight
                    ? "bg-orange-400 text-white shadow-xl shadow-orange-100"
                    : "bg-white shadow-md hover:shadow-xl"
                }`}
                style={highlight ? { borderRadius: "1.5rem 1.5rem 0 1.5rem", clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)" } : {}}
              >
                {highlight && <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/10" />}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 shrink-0 ${highlight ? "bg-white/25" : "bg-orange-400"}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${highlight ? "text-white" : "text-[#0d1b2a]"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${highlight ? "text-orange-50" : "text-gray-500"}`}>{desc}</p>
                <ul className="space-y-2 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-medium">
                      <CheckCircleIcon className={`w-4 h-4 shrink-0 ${highlight ? "text-white/80" : "text-orange-400"}`} />
                      <span className={highlight ? "text-orange-100" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide underline underline-offset-4 ${highlight ? "text-white" : "text-orange-400 hover:text-orange-600"}`}>
                  Learn More <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
