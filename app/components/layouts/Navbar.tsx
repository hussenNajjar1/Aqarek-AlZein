"use client";

import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between flex-row-reverse">
        {/* Logo */}
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-row-reverse">
          <HiOutlineHome className="w-6 h-6 text-[#1E3A8A]" />

          <div className="flex flex-col leading-tight text-right">
            <span className="text-lg font-bold text-[#1E3A8A]">الزين</span>
            <span className="text-xs text-gray-500 font-medium">للعقارات</span>
          </div>
        </Link>

        {/* Favorites Button */}
        <Link
          href="/favorites"
          className="flex items-center gap-2 bg-[#1E3A8A] text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 hover:opacity-90 transition duration-200"
        >
          تصفح العقارات
        </Link>
      </div>
    </nav>
  );
}