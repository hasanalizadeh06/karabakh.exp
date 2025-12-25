import React from "react";
import Link from "next/link";
import { BsBookmark, BsHeart } from "react-icons/bs";
import Navbar from "@/components/navbar";

export default function HorseRiddingPage() {
  return (
    <main className="min-h-screen bg-white pb-20 flex flex-col px-4 pt-2 pb-6 max-w-md mx-auto">
      <Navbar />
      {/* Geri butonu ve başlık */}
      <div className="flex items-center gap-2 mt-2 mb-2">
        <Link href="/" className="p-2 rounded-full hover:bg-gray-100 transition">
          <span className="sr-only">Geri dön</span>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#5C7D41]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-2xl font-semibold text-[#5C7D41] flex-1 text-center border-b border-[#5C7D41]/30 pb-1">Atçılıq</h1>
        <span className="w-10" />
      </div>

      {/* Şəkillər */}
      <div className="mt-2">
        <div className="text-lg text-[#5C7D41] font-semibold mb-2">Şəkillər</div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start">
            <img src="/horse1.jpg" alt="Atçılıq 1" className="rounded-2xl w-[70%] h-36 object-cover bg-white" style={{objectPosition: '0% 10%'}} />
          </div>
          <div className="flex justify-end">
            <img src="/horse2.jpg" alt="Atçılıq 2" className="rounded-2xl w-[70%] h-36 object-cover bg-white" style={{objectPosition: '0% 10%'}} />
          </div>
          <div className="flex justify-start">
            <img src="/horse3.jpg" alt="Atçılıq 3" className="rounded-2xl w-[70%] h-36 object-cover bg-white" style={{objectPosition: '0% 20%'}} />
          </div>
        </div>
      </div>

      {/* Təsviri */}
      <div className="mt-6">
        <div className="text-2xl text-[#5C7D41] font-bold mb-2">Təsviri</div>
        <div className="text-[#5C7D41] font-medium mb-1">Atçılıq Təcrübəsi: Bir Ruhun Digərinə Toxunuşu</div>
        <div className="text-gray-700 text-sm leading-relaxed">
          Qarabağ atları ilə vaxt keçirmək sadəcə bir idman növü deyil, Azərbaycanın canlı tarixinə və ruhuna toxunmaq deməkdir. Bu təcrübə insanı gündəlik həyatın səs-küyündən qoparıb, əsrlərlə formalaşmış bir zadəganlıq dünyasına aparır.
        </div>
      </div>

      {/* Fiyat */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <span className="text-[#5C7D41] font-semibold text-base">Qiymət</span>
        <span className="text-[#5C7D41] font-bold text-xl">20.00 ₼</span>
      </div>

      {/* Alt butonlar */}
      <div className="flex items-center justify-between gap-3 mt-auto w-full">
        <Link href="/account" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5C7D41] text-white text-2xl shadow hover:bg-[#46602e] transition">
          <BsBookmark />
        </Link>
        <Link href="/account" className="flex-1 mx-2 bg-[#5C7D41] text-white rounded-full py-3 font-semibold text-lg text-center shadow hover:bg-[#46602e] transition">
          Təsdiqlə
        </Link>
        <Link href="/account" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5C7D41] text-white text-2xl shadow hover:bg-[#46602e] transition">
          <BsHeart />
        </Link>
      </div>
    </main>
  );
}
