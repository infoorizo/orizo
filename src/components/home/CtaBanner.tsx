import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  title = "Ready to Build the Future of Your Business?",
  subtitle = "Partner with ORIZO TECHNOLOGIES and turn challenges into opportunities.",
  buttonText = "Get Started",
  buttonHref = "/contact",
}: Props) {
  return (
    <div className="bg-[#f5f7fa] pt-12 sm:pt-16 pb-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 mb-[-3rem]">
        <ScrollReveal direction="up">
          <div className="bg-orange-400 rounded-3xl shadow-2xl shadow-orange-200 px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h2>
              <p className="text-orange-100 mt-2 text-sm sm:text-base">{subtitle}</p>
            </div>
            <Link
              href={buttonHref}
              className="shrink-0 bg-white text-orange-400 hover:bg-[#0d1b2a] hover:text-white font-bold px-7 sm:px-8 py-3.5 uppercase tracking-wide text-sm transition-colors inline-flex items-center gap-2 rounded-xl whitespace-nowrap"
            >
              {buttonText} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
