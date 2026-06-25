"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import LegalPage from "@/components/shared/LegalPage";

const faqs = [
  { category: "General", q: "What does Orizo Technologies do?",              a: "Orizo Technologies is a full-service technology company specialising in custom software development, AI & automation, cloud infrastructure, cybersecurity, mobile & web applications, and digital transformation consulting." },
  { category: "General", q: "When was Orizo Technologies founded?",          a: "Orizo Technologies was founded in 2026 with a mission to empower businesses through innovative, reliable technology solutions." },
  { category: "Services", q: "What industries do you serve?",                a: "We work across a wide range of industries including fintech, healthcare, retail, logistics, education, and enterprise software. Our solutions are adaptable to any sector." },
  { category: "Services", q: "Do you offer ongoing maintenance?",            a: "Yes. We offer post-launch maintenance retainers and dedicated support plans. Details are discussed during the onboarding process." },
  { category: "Process", q: "How long does a project take?",                 a: "Timelines depend on project scope. Simple applications typically take 6–10 weeks; enterprise solutions may take 3–6 months. We provide a detailed timeline after the discovery phase." },
  { category: "Process", q: "How do you price your services?",               a: "We offer fixed-price, time & materials, and dedicated team engagement models. We recommend the best model based on your project's nature after an initial consultation." },
  { category: "Process", q: "Can you work with our existing team?",          a: "Absolutely. We offer staff augmentation and co-development models where our engineers work alongside your in-house team." },
  { category: "Technical", q: "What technologies do you work with?",         a: "We work with React, Next.js, Node.js, Python, Go, React Native, Flutter, AWS, Azure, GCP, Docker, Kubernetes, TensorFlow, and many more. See our Services page for the full tech stack." },
  { category: "Technical", q: "Do you sign NDAs?",                          a: "Yes. We are happy to sign a mutual NDA before any discussions involving sensitive information. Contact us and we will send one promptly." },
  { category: "Billing",  q: "What are your payment terms?",                a: "We typically use a milestone-based payment structure — a deposit upfront, payments tied to delivery milestones, and a final payment upon project completion." },
];

const categories = [...new Set(faqs.map(f => f.category))];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [active, setActive] = useState("General");

  const filtered = faqs.filter(f => f.category === active);

  return (
    <LegalPage title="Frequently Asked Questions" lastUpdated="June 24, 2026">
      {/* category tabs */}
      <div className="not-prose flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button key={cat} onClick={() => { setActive(cat); setOpen(null); }}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors ${
              active === cat
                ? "bg-orange-400 border-orange-400 text-white"
                : "border-gray-200 text-gray-500 hover:border-orange-400 hover:text-orange-400"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* accordion */}
      <div className="not-prose flex flex-col gap-3">
        {filtered.map(({ q, a }, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-[#f5f7fa] transition-colors">
              <span className="font-semibold text-[#0d1b2a] text-sm sm:text-base">{q}</span>
              <ChevronDownIcon className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{a}</div>
            )}
          </div>
        ))}
      </div>
    </LegalPage>
  );
}
