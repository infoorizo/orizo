import ScrollReveal from "@/components/ScrollReveal";

const stacks = [
  { category: "Frontend",        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend",         items: ["Node.js", "Python", "Go", "Java Spring", "GraphQL"] },
  { category: "Mobile",          items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "Cloud & DevOps",  items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
  { category: "AI & Data",       items: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Apache Spark"] },
  { category: "Databases",       items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
];

export default function TechStackSection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">Technology</p>
          <div className="w-12 h-1 bg-orange-400 mt-2 mb-5 mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2a]">Our Technology Stack</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We use industry-leading tools and frameworks to build reliable, modern solutions.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map(({ category, items }, i) => (
            <ScrollReveal key={category} delay={i * 0.08} direction="up">
              <div className="group bg-[#f5f7fa] rounded-2xl p-6 h-full hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-orange-300 hover:bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-orange-400 rounded-full group-hover:h-10 transition-all duration-300" />
                  <h3 className="font-bold text-[#0d1b2a] text-base group-hover:text-orange-400 transition-colors">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 transition-all duration-200 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
