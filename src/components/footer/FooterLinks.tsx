import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers",  href: "/careers" },
  { label: "Contact",  href: "/contact" },
];

const usefulLinks = [
  { label: "Privacy Policy",       href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer",           href: "/disclaimer" },
  { label: "Support",              href: "/support" },
  { label: "FAQ",                  href: "/faq" },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
      {/* Quick Links */}
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {quickLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="hover:text-orange-400 transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Useful Links */}
      <div>
        <h4 className="text-white font-bold mb-4">Useful Links</h4>
        <ul className="space-y-2 text-sm">
          {usefulLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="hover:text-orange-400 transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
