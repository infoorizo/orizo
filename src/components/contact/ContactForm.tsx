"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* left — copy */}
            <div className="text-white">
              <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">Send Us a Message</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Fill out the form and our team will get back to you within one business day. We look forward to hearing about your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <PhoneIcon className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p>+91 89252 46499</p>
                    <p>+91 93457 86628</p>
                  </div>
                </div>
                {[
                  { icon: EnvelopeIcon, text: "info@orizotechnologies.com" },
                  { icon: MapPinIcon,   text: "Bangalore, India" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-400">
                    <Icon className="w-4 h-4 text-orange-400 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* right — form */}
            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 font-medium mb-1 block">Full Name</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 font-medium mb-1 block">Email Address</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 font-medium mb-1 block">Subject</label>
                    <input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 font-medium mb-1 block">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-orange-400 transition-colors resize-none" />
                  </div>

                  {error && <p className="text-red-400 text-xs">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-400 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-xl uppercase tracking-wide text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending…
                      </>
                    ) : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
