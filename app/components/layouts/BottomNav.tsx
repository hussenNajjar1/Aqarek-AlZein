"use client";

import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { FiSearch, FiInfo } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg h-16 bg-white border border-gray-200 rounded-full shadow-md px-6 font-cairo">
      <ul className="flex justify-between items-center h-full flex-row-reverse">
        {/* الرئيسية */}
        <li>
          <Link href="/">
            <div className="flex flex-col items-center text-gray-500 hover:text-[#1E3A8A] transition duration-200 hover:scale-110">
              <HiOutlineHome className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[10px] md:text-xs lg:text-sm mt-1">
                الرئيسية
              </span>
            </div>
          </Link>
        </li>

        {/* المفضلة */}
        <li>
          <Link href="/favorites">
            <div className="flex flex-col items-center text-gray-500 hover:text-[#1E3A8A] transition duration-200 hover:scale-110">
              <FaRegHeart className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[10px] md:text-xs lg:text-sm mt-1">
                المفضلة
              </span>
            </div>
          </Link>
        </li>

        {/* زر مميز بالنص */}
        <li>
          <Link href="/properties">
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 bg-[#1E3A8A] rounded-full flex items-center justify-center shadow-lg transition hover:scale-110 duration-200">
                <FiSearch className="text-white w-6 h-6" />
              </div>
            </div>
          </Link>
        </li>

        {/* من نحن */}
        <li>
          <Link href="/about">
            <div className="flex flex-col items-center text-gray-500 hover:text-[#1E3A8A] transition duration-200 hover:scale-110">
              <FiInfo className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[10px] md:text-xs lg:text-sm mt-1">
                من نحن
              </span>
            </div>
          </Link>
        </li>

        {/* تواصل */}
        <li>
          <Link href="/contact">
            <div className="flex flex-col items-center text-gray-500 hover:text-[#1E3A8A] transition duration-200 hover:scale-110">
              <IoChatbubblesOutline className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[10px] md:text-xs lg:text-sm mt-1">
                تواصل
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
