"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 text-center">
      {/* الرقم 404 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl md:text-9xl font-extrabold text-blue-700"
      >
        404
      </motion.h1>

      {/* العنوان */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-bold text-gray-800 mt-4"
      >
        الصفحة غير موجودة 
      </motion.h2>

      {/* الوصف */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-500 mt-2 max-w-md"
      >
        يبدو أنك دخلت رابط غير صحيح أو الصفحة تم حذفها. يمكنك العودة للرئيسية 
      
      </motion.p>

      {/* الأزرار */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-6 flex-wrap justify-center"
      >
        <Link href="/">
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow transition">
            <FiHome />
            الرئيسية
          </button>
        </Link>

      </motion.div>

      {/* عنصر ديكوري */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.6 }}
        className="absolute text-[150px] md:text-[250px] font-black text-blue-900 -z-10"
      >
        404
      </motion.div>
    </div>
  );
}
