"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/1.jpg", "/2.jpg"];

export default function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center text-white">

      {/* ── Slideshow images ── */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${images[current]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* ── Dark scrim ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/65 to-gray-950/80" />

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
