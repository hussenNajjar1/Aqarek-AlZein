"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-right">
        <div>
          <h3 className="text-lg font-bold mb-4">شركة الزين للعقارات</h3>
          <p className="text-gray-400 text-sm">
            نقدم خدمات بيع وشراء وتأجير العقارات باحترافية عالية.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">روابط</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li>
              <Link href="/about">عن الشركة</Link>
            </li>
           
            <li>
              <Link href="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">تواصل</h3>
          <p className="text-gray-400 text-sm">📍 سراقب</p>
          <p className="text-gray-400 text-sm">📞 +90 000 000 000</p>
          <p className="text-gray-400 text-sm">✉️ info@alzein.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()}     جميع الحقوق محفوظة شركة الزين للتطوير العقاري
      </div>
    </motion.footer>
  );
}
