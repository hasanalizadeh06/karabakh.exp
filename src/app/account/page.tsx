"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBell, FaChevronRight } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import Navbar from '@/components/navbar';
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import experiences from "@/components/experience";
import { FaChevronDown } from "react-icons/fa";

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
  // Bayrak görseli (public klasöründe /azflag.png olarak varsayalım)
  const azFlag = "/azflag.jpg";
  const [favorites, setFavorites] = useState(initialFavorites);
  const [registered, setRegistered] = useState(initialRegistered);
  const [expenses, setExpenses] = useState([
    { title: "Saxsı qab hazırlamaq", price: 20 },
    { title: "Yerli mətbəx dərsləri", price: 28 },
  ]);
  const expenseDate = "21.06.2026";

  // Bildirimler
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    {
      date: "21.06.2026",
      text: 'Təcrübənizi bitirdiniz.',
      experience:"Saxsı qab hazırlamaq",
      link: "/"
    },
    {
      date: "21.06.2026",
      text: 'Təcrübənizi bitirdiniz.',
      experience:"Yerli mətbəx dərsləri",
      link: "/"
    },
  ];

  const removeFavorite = (title: string) => {
    setFavorites(favorites.filter((item) => item.title !== title));
  };
  const removeRegistered = (title: string) => {
    setRegistered(registered.filter((item) => item.title !== title));
  };
  const removeExpense = (title: string) => {
    setExpenses(expenses.filter((item) => item.title !== title));
  };

  return (
    <div className="relative min-h-screen bg-[#FFF] flex flex-col items-center pt-8 pb-32 px-4">
      {/* Sağ üstte dil değişim butonu */}
      <button className="absolute top-6 right-6 z-30 flex items-center gap-1 bg-[#30521a] hover:bg-[#3d6b25] text-white px-2 py-1 rounded-lg shadow-lg">
        <Image src={azFlag} alt="AZ" width={20} height={14} className="rounded-sm" />
        <span className="font-semibold text-base">AZ</span>
        <FaChevronDown className="text-lg" />
      </button>
      {/* Bildirimler ikonu */}
      <button
        className="absolute top-6 left-6 z-30 bg-gradient-to-br from-[#b7d3b0] to-[#5C7D41] w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        onClick={() => setShowNotifications(true)}
        aria-label="Bildirimler"
      >
        <FaBell className="text-white text-xl" />
      </button>

      {/* Bildirimler Modalı */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/30 flex items-start justify-center z-50">
          <div className="mt-24 bg-white rounded-2xl shadow-lg px-6 py-5 w-[320px] relative flex flex-col">
            {notifications.map((notif, idx) => (
              <Link href={notif.link} key={idx} className="flex items-center justify-between gap-2 py-2 px-1 relative" onClick={() => setShowNotifications(false)}>
                <div className="flex flex-col items-start">
                  <span className="text-[#5C7D41] font-semibold text-lg mb-1">{notif.date}</span>
                  <span className="text-[#222] text-base leading-tight">{notif.text}</span>
                  <span className="text-[#5C7D41] text-base mt-1">{notif.experience}</span>
                </div>
                <span className="bg-[#5C7D41] rounded-full w-8 h-8 flex items-center justify-center ml-2">
                  <FaChevronRight className="text-white text-lg" />
                </span>
              </Link>
            ))}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-[#5C7D41]"
              onClick={() => setShowNotifications(false)}
              aria-label="Kapat"
            >
              <IoClose size={22} />
            </button>
          </div>
        </div>
      )}
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
        <h2 className="mt-4 text-[#5C7D41] text-xl font-bold">Reyhan Abdullayeva</h2>
        <span className="text-gray-500 text-sm">Turist</span>
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

      {/* Xərclər bölümü */}
      <div className="w-full max-w-lg mx-auto flex flex-col gap-4 mt-12">
        <h3 className="text-[#222] text-xl font-bold mb-2 ml-1">Xərclər</h3>
        <div className="flex items-center gap-2 mb-2 ml-1">
          <MdCheck className="text-[#5C7D41] text-xl" />
          <span className="text-[#5C7D41] text-base font-semibold">{expenseDate}</span>
        </div>
        {expenses.length === 0 ? (
          <div className="text-gray-400 text-base px-2 py-4">Xərc yoxdur.</div>
        ) : (
          <div className="flex flex-col gap-3">
            {expenses.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-[#f6f9f4] border border-[#5C7D41] rounded-2xl px-4 py-3">
                <div className="flex flex-col">
                  <span className="text-[#5C7D41] text-lg font-medium mb-1">{item.title}</span>
                  <span className="text-[#222] text-base font-semibold">{item.price.toFixed(2)} ₼</span>
                </div>
                <button
                  className="text-[#5C7D41] hover:text-red-600 text-xl ml-2"
                  onClick={() => removeExpense(item.title)}
                  aria-label="Sil"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}