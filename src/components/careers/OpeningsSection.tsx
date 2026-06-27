"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseIcon, MapPinIcon, ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface Opening {
  title: string;
  dept: string;
  type: string;
  location: string;
  description: string;
}

const openings: Opening[] = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    description:
      "We are looking for a Senior Full-Stack Engineer to design, build, and maintain scalable web applications. You will work across both frontend (React/Next.js) and backend (Node.js/Python) layers, collaborate closely with product and design, and help establish engineering best practices. Strong experience with APIs, databases, and cloud deployments is essential.",
  },
  {
    title: "AI / ML Engineer",
    dept: "AI & Data",
    type: "Full-time",
    location: "Remote",
    description:
      "Join our AI team to build intelligent systems and data pipelines that power our products. You will develop and deploy machine learning models, work with LLMs and automation frameworks, and collaborate with engineers to integrate AI capabilities into production applications. Experience with Python, TensorFlow or PyTorch, and cloud ML services is required.",
  },
  {
    title: "Cloud DevOps Engineer",
    dept: "Infrastructure",
    type: "Full-time",
    location: "Hybrid",
    description:
      "We need a skilled DevOps Engineer to own our cloud infrastructure, CI/CD pipelines, and deployment automation. You will work with AWS/GCP, Docker, Kubernetes, and Terraform to ensure high availability and performance. Strong knowledge of monitoring, security practices, and infrastructure-as-code is expected.",
  },
  {
    title: "Mobile Developer (React Native)",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    description:
      "As a Mobile Developer, you will build and maintain cross-platform mobile applications using React Native. You will work on new features, performance improvements, and App Store/Play Store releases. Experience with native modules, offline-first architectures, and smooth animations is a strong plus.",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    type: "Full-time",
    location: "Remote",
    description:
      "We are hiring a UI/UX Designer to craft intuitive, accessible, and visually compelling digital experiences. You will lead user research, wireframing, prototyping, and design system maintenance. Proficiency in Figma and a strong portfolio demonstrating end-to-end product design are required.",
  },
  {
    title: "Business Development Manager",
    dept: "Sales",
    type: "Full-time",
    location: "On-site",
    description:
      "We are looking for a driven Business Development Manager to identify growth opportunities, build client relationships, and close deals. You will work closely with leadership to define go-to-market strategy, manage the sales pipeline, and represent ORIZO TECHNOLOGIES at industry events. Prior experience in B2B tech sales is essential.",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  resume: string;
}

export default function OpeningsSection() {
  const [selected, setSelected] = useState<Opening | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", experience: "", message: "", resume: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  function openModal(job: Opening) {
    setSelected(job);
    setSent(false);
    setError("");
    setForm({ name: "", email: "", phone: "", experience: "", message: "", resume: "" });
  }

  function closeModal() {
    setSelected(null);
    setSent(false);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          job_title:  selected?.title,
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone,
          experience: form.experience,
          portfolio:  form.resume,
          message:    form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(`Failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-[#f5f7fa] py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
              <div className="text-center mb-10">
                <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                  Open Positions
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Current Openings</h2>
                <p className="text-gray-400 mt-3 text-sm sm:text-base">
                  Don&apos;t see a fit? Email us at info@orizotechnologies.com
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {openings.map((job, i) => (
                  <ScrollReveal key={job.title} delay={i * 0.07} direction="up">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10 rounded-2xl px-5 sm:px-6 py-5 hover:border-orange-400/50 hover:bg-white/5 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-orange-400/15 flex items-center justify-center shrink-0">
                          <BriefcaseIcon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm sm:text-base">{job.title}</p>
                          <p className="text-gray-400 text-xs mt-0.5">{job.dept}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 pl-[60px] sm:pl-0">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <ClockIcon className="w-3.5 h-3.5" />{job.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPinIcon className="w-3.5 h-3.5" />{job.location}
                        </span>
                        <button
                          onClick={() => openModal(job)}
                          className="bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors uppercase tracking-wide"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Floating Apply Window ── */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* floating window */}
            <motion.div
              className="relative bg-[#0d1b2a] w-full max-w-2xl rounded-3xl shadow-2xl shadow-black/40 border border-white/10 max-h-[90vh] overflow-y-auto z-10"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* window title bar */}
              <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-7 pb-5 border-b border-white/10">
                <div>
                  <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                    {selected.dept}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">{selected.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <ClockIcon className="w-3.5 h-3.5" />{selected.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPinIcon className="w-3.5 h-3.5" />{selected.location}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-orange-400 flex items-center justify-center transition-colors mt-1"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="px-6 sm:px-8 py-6">
                {/* job description */}
                <div className="mb-6">
                  <h4 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-3">About This Role</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{selected.description}</p>
                </div>

                <div className="h-px bg-white/10 mb-6" />

                {/* form / success */}
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center mb-5 shadow-lg shadow-orange-400/30">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Application Received!</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
                      Thank you for applying to <span className="text-orange-400 font-semibold">ORIZO TECHNOLOGIES</span>.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                      Your application for <span className="text-white font-semibold">{selected.title}</span> has been received. Our team will review your details and get back to you within <span className="text-white font-semibold">24 hours</span>.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-left w-full max-w-xs mb-6">
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Application Summary</p>
                      <p className="text-white text-sm font-semibold">{form.name}</p>
                      <p className="text-gray-400 text-xs">{form.email}</p>
                      <p className="text-gray-400 text-xs mt-1">Role: {selected.title}</p>
                      {form.experience && <p className="text-gray-400 text-xs">Experience: {form.experience} years</p>}
                    </div>
                    <button onClick={closeModal} className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-base">Your Application</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 font-medium mb-1 block">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 font-medium mb-1 block">Email Address *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 font-medium mb-1 block">Phone Number</label>
                        <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 00000 00000"
                          className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 font-medium mb-1 block">Years of Experience *</label>
                        <select required value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })}
                          className="w-full bg-[#0d1b2a] border border-white/15 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors">
                          <option value="" disabled>Select experience</option>
                          <option value="0-1">0–1 years (Fresher)</option>
                          <option value="1-3">1–3 years</option>
                          <option value="3-5">3–5 years</option>
                          <option value="5-8">5–8 years</option>
                          <option value="8+">8+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 font-medium mb-1 block">Portfolio / LinkedIn / GitHub URL</label>
                      <input value={form.resume} onChange={e => setForm({ ...form, resume: e.target.value })}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 font-medium mb-1 block">Why are you a great fit? *</label>
                      <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your relevant experience and why you want to join ORIZO TECHNOLOGIES..."
                        className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors resize-none" />
                    </div>

                    <button type="submit"
                      className="bg-orange-400 hover:bg-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-xl uppercase tracking-wide text-sm transition-colors mt-1 flex items-center justify-center gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Submitting…
                        </>
                      ) : "Submit Application"}
                    </button>
                    {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
