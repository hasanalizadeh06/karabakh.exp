"use client";
import React, { useState, useEffect } from "react";
import Places from "@/components/places";
import Comments from "@/components/comments";
import Experience from "@/components/experience";
import logo from "@/../public/Screenshot_3.png";
import logo2 from "@/../public/logo.png";
import welcomebg from "@/../public/welcomebg.jpg";
import Image from "next/image";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Navbar from "@/components/navbar";

const tabs = [
  { label: "Yerlər", value: "places" },
  { label: "Rəylər", value: "comments" },
  { label: "Təcrübə", value: "experience" },
];

type TabSectionProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

function TabSection({ activeTab, setActiveTab }: TabSectionProps) {
  return (
    <div className="flex w-full justify-between items-center mt-4 mb-2 px-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`text-[#5C7D41] font-medium text-base pb-1 border-b-2 transition-all duration-150 ${
            activeTab === tab.value ? "border-[#5C7D41]" : "border-transparent"
          }`}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("places");
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const notFirstLogin = localStorage.getItem("notfirstlogin");
      if (notFirstLogin === "true") {
        setShowWelcome(false);
      } else {
        setShowWelcome(true);
      }
    }
  }, []);

  const handleWelcomeContinue = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notfirstlogin", "true");
      setShowWelcome(false);
    }
  };

  if (showWelcome) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-between bg-black relative">
        <Image
          src={welcomebg}
          alt="Welcome"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 w-full flex flex-col items-center pt-16">
          <Image src={logo2} alt="Logo" width={300} height={700} />
        </div>
        <div className="flex flex-col items-start gap-4 w-full px-8">
          <h1 className="text-white text-2xl font-semibold drop-shadow-lg">
            Xoş Gəlmişsiniz
          </h1>
          <button
            onClick={handleWelcomeContinue}
            className="relative z-10 mb-12 flex items-center gap-2 bg-white/90 text-[#5C7D41] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-white"
          >
            Kəşf etməyə hazır olun
            <div className="bg-[#5C7D41] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/30 z-0" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col gap-4 pb-20 px-2 sm:px-4 md:px-8 lg:px-20 bg-white">
      <Navbar />
      <div className="flex items-center mt-2 justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={60}
            className="max-w-none"
          />
        </Link>
        <Link href="/account" className="bg-[#5C7D41] p-2 rounded-full">
          <FiHeart size={24} color="white" />
        </Link>
      </div>
      <div className="w-full flex items-center mb-2">
        <input
          type="text"
          placeholder="Axtar..."
          className="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
        />
      </div>
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full mt-2">
        {activeTab === "places" && <Places />}
        {activeTab === "comments" && <Comments />}
        {activeTab === "experience" && <Experience />}
      </div>
    </div>
  );
}
