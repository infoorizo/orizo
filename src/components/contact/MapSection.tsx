import ScrollReveal from "@/components/ScrollReveal";
import { BuildingOffice2Icon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const details = [
  { icon: BuildingOffice2Icon, title: "Headquarters",   desc: "Bangalore,india" },
  { icon: ClockIcon,           title: "Business Hours", desc: "Monday – Friday\n9:00 AM – 6:00 PM IST" },
  { icon: GlobeAltIcon,        title: "Phone",          desc: "+91 89252 46499\n+91 93457 86628" },
];

export default function MapSection() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* map placeholder */}
        <ScrollReveal direction="left">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0d1b2a] h-64 sm:h-96 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }} />
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <BuildingOffice2Icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold">ORIZO TECHNOLOGIES</p>
              <p className="text-gray-400 text-sm mt-1">Bangalore , india</p>
            </div>
          </div>
        </ScrollReveal>

        {/* details */}
        <ScrollReveal direction="right" delay={0.1}>
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Find Us</p>
          <div className="w-12 h-1 bg-orange-400 mt-2 mb-6" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-8">Where We Are</h2>
          <div className="flex flex-col gap-5">
            {details.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0d1b2a] text-base">{title}</p>
                  {desc.split("\n").map((line, i) => (
                    <p key={i} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
