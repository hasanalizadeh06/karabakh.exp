"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineUser, AiOutlinePlus } from "react-icons/ai";


export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { icon: <AiOutlineHome size={38} />, label: "Ana Səhifə", href: "/" },
    { icon: <AiOutlineUser size={38} />, label: "User", href: "/account" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 flex items-end justify-center px-0 pb-2"
      style={{ pointerEvents: 'none' }}
    >
      {/* Arka plan */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#5C7D41] rounded-t-2xl z-[-1]" style={{ boxShadow: '0 -2px 16px 0 #0002' }} />
      <div className="w-full max-w-md mx-auto flex items-end justify-between px-8">
        {navItems.map((item, idx) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center flex-1" style={{ pointerEvents: 'auto' }}>
              <span
                className={`mb-1 transition-all duration-200 ${isActive ? "text-white" : "text-white/80"}`}
                style={isActive
                  ? {
                      filter:
                        "drop-shadow(0 0 24px #fff) drop-shadow(0 0 24px #fff) drop-shadow(0 0 64px #fff) drop-shadow(0 0 96px #fff) brightness(2.5)"
                    }
                  : {}}
              >
                {item.icon}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
