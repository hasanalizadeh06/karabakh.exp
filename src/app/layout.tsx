
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
  title: "Karabakh Exp | Discover the Essence of Karabakh",
  description: "Qarabağın mahiyyətini Karabakh Exp ilə kəşf edin - mədəniyyət, tarix və nəfəs kəsən mənzərələrə açılan qapınız.",
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
        <div className="relative min-h-full h-full z-10 w-full max-w-7xl mx-auto sm:px-4 md:px-8">{children}</div>
      </body>
    </html>
  );
}
