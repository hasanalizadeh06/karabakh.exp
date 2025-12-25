"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { icon: "🏠", label: "Ana Səhifə", href: "/" },
    { icon: "🌄", label: "Qarabağ", href: "/karabakh" },
    { icon: "🗺️", label: "Turizm", href: "/tourism" },
    { icon: "🍽️", label: "Mətbəx", href: "/cuisine" },
    { icon: "🎉", label: "Mədəniyyət", href: "/culture" },
    { icon: "📸", label: "Qalereya", href: "/gallery" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-1 py-2 sm:py-3 shadow-2xl bg-gradient-to-br from-blue-50/90 via-white/90 to-blue-100/90 border-t border-blue-200 backdrop-blur-md"
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      {navItems.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} className="flex-1 px-1">
            <div
              className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-xl transition-all duration-200 ease-in-out
                ${isActive
                  ? "bg-gradient-to-br from-blue-400/90 to-blue-600/50 text-white shadow-lg scale-105 ring-2 ring-blue-300/60"
                  : "bg-white/70 hover:bg-blue-100/80 text-blue-500 hover:scale-105 hover:shadow-md"}
              `}
              style={{ minWidth: 0 }}
            >
              <span
                className={`text-lg sm:text-xl leading-none mb-0.5 drop-shadow-md transition-transform duration-200 ${isActive ? "scale-110" : ""}`}
                style={{ filter: isActive ? "drop-shadow(0 2px 8px #3b82f6aa)" : undefined }}
              >
                {item.icon}
              </span>
              <span className="text-[9px] sm:text-[11px] font-medium tracking-wide leading-none drop-shadow-sm">
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;