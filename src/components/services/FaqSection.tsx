"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "How long does a typical project take?",         a: "Project timelines vary based on scope. A simple web application typically takes 6–10 weeks, while complex enterprise solutions can span 3–6 months. We provide a detailed timeline after the discovery phase." },
  { q: "Do you work with startups or only enterprises?", a: "We work with organizations of all sizes — from early-stage startups to large enterprises. Our engagement models and pricing are flexible to match your stage and budget." },
  { q: "What does your development process look like?", a: "We follow an agile methodology with 2-week sprints, continuous delivery, and regular demos. You have visibility into progress at every stage and can provide feedback throughout." },
  { q: "Do you provide post-launch support?",           a: "Yes. All our projects include a post-launch support period, and we offer ongoing maintenance retainers for long-term partnerships." },
  { q: "How do you handle project pricing?",            a: "We offer fixed-price, time & materials, and dedicated team models. After the discovery phase, we recommend the best model based on your project's nature and requirements." },
  { q: "Can you integrate with our existing systems?",  a: "Absolutely. System integration is one of our core strengths. We have experience connecting with CRMs, ERPs, payment gateways, third-party APIs, and legacy systems." },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
            <div className="text-center mb-10">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-white text-sm sm:text-base">{q}</span>
                    <ChevronDownIcon className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  {open === i && (
                    <div className="px-5 sm:px-6 pb-5">
                      <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
