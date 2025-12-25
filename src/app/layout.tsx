
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import bgImage from "../../public/bg.jpeg";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Karabakh | Vibe with the Vibes of Karabakh",
  description: "Qarabağın mahiyyətini Vibe Karabakh ilə kəşf edin - mədəniyyət, tarix və nəfəs kəsən mənzərələrə açılan qapınız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow`}
      >
        <Navbar />
        <div className="relative min-h-full h-full z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8">{children}</div>
      </body>
    </html>
  );
}
