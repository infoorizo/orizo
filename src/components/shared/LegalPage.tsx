import BackButton from "@/components/shared/BackButton";

interface Props {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-white text-[#0d1b2a]">
      {/* top bar */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <BackButton />
          <span className="flex items-center gap-2 font-extrabold text-[#0d1b2a]">
            <img src="/logo.png" alt="Orizo Technologies" className="h-7 w-auto object-contain" />
            ORIZO <span className="text-orange-400">TECHNOLOGIES</span>
          </span>
        </div>
      </div>

      {/* content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* heading */}
        <div className="mb-10 pb-8 border-b border-gray-100">
          <span className="inline-block bg-orange-400/10 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-2">{title}</h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* body */}
        <div className="prose prose-gray max-w-none text-sm sm:text-base leading-relaxed">
          {children}
        </div>
      </div>

      {/* minimal bottom bar */}
      <div className="border-t border-gray-100 bg-white mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Orizo Technologies. All rights reserved.</p>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
