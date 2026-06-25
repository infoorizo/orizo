import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageHero({ badge, title, highlight, description }: Props) {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <span className="inline-block bg-orange-400/10 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#0d1b2a]">
            {title} <span className="text-orange-400">{highlight}</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">{description}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
