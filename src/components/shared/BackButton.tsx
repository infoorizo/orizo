"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm font-bold text-[#0d1b2a] hover:text-orange-400 transition-colors group"
    >
      <span className="w-8 h-8 rounded-full bg-[#0d1b2a] group-hover:bg-orange-400 flex items-center justify-center transition-colors">
        <ArrowLeftIcon className="w-4 h-4 text-white" />
      </span>
      Go Back
    </button>
  );
}
