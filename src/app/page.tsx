"use client"
import React, { useState } from "react";
import Places from "@/components/places";
import Comments from "@/components/comments";
import Experience from "@/components/experience";
import { FiFilter } from "react-icons/fi";

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
          className={`text-[#5C7D41] font-medium text-base pb-1 border-b-2 transition-all duration-150 ${activeTab === tab.value ? "border-[#5C7D41]" : "border-transparent"}`}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("places");
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 pb-20 px-2 sm:px-4 md:px-8 lg:px-20 bg-white">
      {/* Üst başlık ve filtre */}
      <div className="flex items-center justify-between mt-4 mb-2">
        <h1 className="text-2xl font-bold text-[#5C7D41]">Kəşf edin</h1>
        <button className="bg-[#5C7D41] p-2 rounded-full">
          <FiFilter size={24} color="white" />
        </button>
      </div>
      {/* Arama kutusu */}
      <div className="w-full flex items-center mb-2">
        <input type="text" placeholder="Axtar..." className="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none" />
      </div>
      {/* Sekmeler */}
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* İçerik */}
      <div className="w-full mt-2">
        {activeTab === "places" && <Places />}
        {activeTab === "comments" && <Comments />}
        {activeTab === "experience" && <Experience />}
      </div>
    </div>
  );
}
