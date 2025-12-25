import Link from "next/link";
import React from "react";

export default function Places() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Harita kartı */}
      <div className="relative rounded-3xl overflow-hidden mb-2" style={{ height: 220 }}>
        {/* Google Maps iframe arka plan */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570221.3007293073!2d44.31131505624999!3d39.76573479999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403e7b00454935e7%3A0xe5db2f732b505006!2zxZ51xZ9hIFFhbGFzxLE!5e0!3m2!1saz!2saz!4v1766665437443!5m2!1saz!2saz"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Sağ üstte yuvarlak buton */}
        <Link href="https://www.google.com/maps/place/%C5%9Eu%C5%9Fa+Qalas%C4%B1/@39.7657348,44.3113151,8z/data=!4m15!1m7!3m6!1s0x403e7b00454935e7:0xe5db2f732b505006!2zxZ51xZ9hIFFhbGFzxLE!8m2!3d39.7657348!4d46.7502799!16s%2Fg%2F11wvbfnf5f!3m6!1s0x403e7b00454935e7:0xe5db2f732b505006!8m2!3d39.7657348!4d46.7502799!15sCgtzdXNhIHFhbGFzaZIBBmNhc3RsZeABAA!16s%2Fg%2F11wvbfnf5f!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" className="absolute top-4 right-4 bg-[#5C7D41] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        {/* Alt koyu bar ve Xəritə yazısı */}
        <div className="absolute left-0 bottom-0 w-full h-14 bg-[#6E6868] flex items-center rounded-b-3xl px-6">
          <span className="text-white text-2xl font-light">Xəritə</span>
        </div>
      </div>
      {/* Meşhur yerlər başlığı */}
      <h2 className="text-[#5C7D41] text-lg font-semibold mb-2">Məşhur Yerlər</h2>
      {/* Meşhur yerlər görselleri */}
      <div className="flex gap-3">
        <img src="/place4.jpeg" alt="Yer 1" className="rounded-xl w-24 h-24 object-cover flex-1" />
        <img src="/place2.jpeg" alt="Yer 2" className="rounded-xl w-24 h-24 object-cover flex-1" />
        <img src="/place5.jpeg" alt="Yer 3" className="rounded-xl w-24 h-24 object-cover flex-1" />
      </div>
      <div className="flex gap-3">
        <img src="/place1.jpeg" alt="Yer 1" className="rounded-xl w-24 h-24 object-cover flex-1" />
        <img src="/place3.jpeg" alt="Yer 2" className="rounded-xl w-24 h-24 object-cover flex-1" />
      </div>
    </div>
  );
}
