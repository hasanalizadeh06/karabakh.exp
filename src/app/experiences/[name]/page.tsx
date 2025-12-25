import Navbar from '@/components/navbar'
import React from "react";
import Image from "next/image";
import logo from "@/../public/logo.png";

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#eaf4e6] via-[#d6e7d0] to-[#5C7D41] relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 opacity-10 z-0">
        <Image src={logo} alt="Logo" fill className="object-contain" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
        <Image src={logo} alt="Logo" width={320} height={120} className="mb-6 drop-shadow-lg" />
        <h1 className="text-[#5C7D41] text-4xl font-extrabold mb-2 tracking-tight text-center drop-shadow">Coming Soon</h1>
        <p className="text-[#46602e] text-lg font-medium mb-8 text-center max-w-md">Bu səhifə üzərində çalışırıq. Tezliklə burada yeni təcrübələr və imkanlar sizi gözləyir!</p>
        <div className="animate-bounce mt-4">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#5C7D41">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
