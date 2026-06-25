import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orizo Technologies | Transforming Ideas Into Digital Excellence",
    template: "%s | Orizo Technologies",
  },
  description:
    "Transforming Ideas Into Digital Excellence. Custom software, AI solutions, cloud services, cybersecurity, and digital transformation.",
  icons: {
    icon: "/final.png",
    shortcut: "/final.png",
    apple: "/final.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">{children}</body>
    </html>
  );
}
