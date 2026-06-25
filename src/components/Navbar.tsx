"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers",  label: "Careers" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="Orizo Technologies" className="h-9 w-auto object-contain" />
            <span className="font-extrabold text-base sm:text-xl text-[#0d1b2a] tracking-tight">
              ORIZO <span className="text-orange-400">TECHNOLOGIES</span>
            </span>
          </Link>

          {/* Desktop — nav links + CTA */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold px-4 py-2 transition-colors ${
                  pathname === href
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-[#0d1b2a] hover:text-orange-400"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-orange-400 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors uppercase tracking-wide"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile — hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#0d1b2a] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile — dropdown menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold px-4 py-3 rounded-lg transition-colors ${
                  pathname === href
                    ? "text-orange-400 bg-orange-50"
                    : "text-[#0d1b2a] hover:text-orange-400 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-orange-400 hover:bg-orange-600 text-white text-sm font-bold px-5 py-3 rounded text-center transition-colors uppercase tracking-wide"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
