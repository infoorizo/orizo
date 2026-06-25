import LegalPage from "@/components/shared/LegalPage";
import Link from "next/link";

export const metadata = { title: "Support — ORIZO TECHNOLOGIES" };

const channels = [
  {
    title: "Email Support",
    detail: "info@orizotechnologies.com",
    note: "Response within 24 hours",
  },
  {
    title: "Phone Support",
    detail: "+91 89252 46499\n+91 93457 86628",
    note: "Mon–Fri, 9am–6pm IST",
  },
  {
    title: "Enterprise SLA",
    detail: "info@orizotechnologies.com",
    note: "24/7 for enterprise clients",
  },
];

export default function SupportPage() {
  return (
    <LegalPage title="Support" lastUpdated="June 24, 2026">
      <h2>How We Can Help</h2>
      <p>
        Our support team is available to assist with technical issues, billing
        questions, and any concerns related to your engagement with ORIZO
        TECHNOLOGIES. We are committed to resolving your issues promptly and
        professionally.
      </p>

      <h2>Support Channels</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {channels.map(({ title, detail, note }) => (
          <div
            key={title}
            className="bg-[#f5f7fa] rounded-2xl p-5 border border-gray-100 flex flex-col gap-1"
          >
            <p className="font-bold text-[#0d1b2a] text-sm">{title}</p>
            <div>
              {detail.split("\n").map((line, i) => (
                <p key={i} className="text-orange-400 font-semibold text-sm leading-snug">
                  {line}
                </p>
              ))}
            </div>
            <p className="text-gray-400 text-xs">{note}</p>
          </div>
        ))}
      </div>

      <h2>Response Times</h2>
      <p>
        Standard support requests are handled within 1–2 business days.
        Critical production issues for active clients are prioritised and
        typically addressed within 4 hours during business hours.
      </p>

      <h2>Before Contacting Support</h2>
      <p>
        Please check our{" "}
        <Link href="/faq" className="text-orange-400 hover:underline">
          FAQ page
        </Link>{" "}
        — many common questions are already answered there. When contacting
        support, please include your project name, a clear description of the
        issue, and any relevant error messages or screenshots.
      </p>

      <h2>Enterprise Support</h2>
      <p>
        Enterprise clients have access to a dedicated account manager and 24/7
        priority support as outlined in their service agreement. Contact us at{" "}
        <span className="text-orange-400 font-semibold">
          info@orizotechnologies.com
        </span>{" "}
        for expedited assistance.
      </p>
    </LegalPage>
  );
}
