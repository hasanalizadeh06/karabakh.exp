"use client";
import React, { useState } from "react";
import Navbar from '@/components/navbar';
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import experiences from "@/components/experience";

const adminImg = "/admin.jpg";
const leftCircle = "/Screenshot_1.png";
const rightCircle = "/Screenshot_2.png";

// Experience bilgilerini experience.tsx'den almak için categories'i import edemiyorsan, dosyadan kopyalayabilirsin.
// Burada doğrudan kopyalanmış örnek veri kullanılacak.

const initialFavorites = [
  { img: "/exp2.jpg", title: "Bal toplamaq" },
  { img: "/exp3.jpg", title: "Yerli mətbəx dərsləri" },
];
const initialRegistered = [
  { img: "/exp4.jpg", title: "Saxsı qab hazırlamaq" },
];


export default function AccountPage() {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [registered, setRegistered] = useState(initialRegistered);

  const removeFavorite = (title: string) => {
    setFavorites(favorites.filter((item) => item.title !== title));
  };
  const removeRegistered = (title: string) => {
    setRegistered(registered.filter((item) => item.title !== title));
  };

  return (
    <div className="relative min-h-screen bg-[#FFF] flex flex-col items-center pt-8 pb-20 px-4">
      {/* Absolute yuvarlaklar */}
      <Image src={leftCircle} alt="left" width={90} height={90} className="absolute left-0 top-0 z-10" />
      <Image src={rightCircle} alt="right" width={90} height={90} className="absolute right-0 top-0 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Profil resmi */}
      <div className="flex flex-col items-center justify-center mt-8 mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#5C7D41] shadow-lg flex items-center justify-center">
          <Image src={adminImg} alt="Admin" width={128} height={128} className="object-cover w-full h-full" />
        </div>
        <h2 className="mt-4 text-[#5C7D41] text-xl font-bold">Admin</h2>
        <span className="text-gray-500 text-sm">admin@karabakhexp.az</span>
      </div>

      {/* Sevimlilər */}
      <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
        <h3 className="text-[#222] text-xl font-bold mb-3 ml-1">Sevimlilər</h3>
        <div className="flex gap-4 overflow-x-auto">
          {favorites.length == 0 ? <div className="text-gray-400 text-base px-2">Sevimli təcrübə yoxdur.</div> : favorites.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col w-[220px] border border-gray-100 relative">
              <button
                className="absolute top-2 right-2 bg-[#5C7D41] text-white rounded-full w-7 h-7 flex items-center justify-center z-20"
                onClick={() => removeFavorite(item.title)}
                aria-label="Sil"
              >
                <IoClose size={20} />
              </button>
              <div className="relative w-full h-32">
                <Image src={item.img} alt={item.title} width={220} height={128} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 px-3 py-2">
                <div className="text-[#5C7D41] text-base font-medium leading-tight mt-2 mb-2">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Qeydə alınanlar */}
      <div className="w-full max-w-lg mx-auto flex flex-col gap-6 mt-10">
        <h3 className="text-[#222] text-xl font-bold mb-3 ml-1">Qeydə alınanlar</h3>
        <div className="flex flex-wrap gap-4">
          {registered.length == 0 ? <div className="text-gray-400 text-base px-2">Qeydə alınan təcrübə yoxdur.</div> : registered.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col w-[220px] border border-gray-100 relative">
              <button
                className="absolute top-2 right-2 bg-[#5C7D41] text-white rounded-full w-7 h-7 flex items-center justify-center z-20"
                onClick={() => removeRegistered(item.title)}
                aria-label="Sil"
              >
                <IoClose size={20} />
              </button>
              <div className="relative w-full h-32">
                <Image src={item.img} alt={item.title} width={220} height={128} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 px-3 py-2">
                <div className="text-[#5C7D41] text-base font-medium leading-tight mt-2 mb-2">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}