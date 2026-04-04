"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-white font-cairo">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
            }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/jpeg/image1.jpeg"
              alt="Real Estate"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            className="w-full lg:w-1/2 text-right"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-5xl font-bold text-blue-800 py-1 rounded-full mb-4 inline-block"
            >
              شركة الزين للعقارات
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight"
            >
              بيع وشراء وتأجير العقارات
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-lg max-w-xl ml-auto"
            >
              نقدم لك أفضل الفرص العقارية في سراقب سواء كنت تبحث عن منزل للسكن
              أو استثمار ناجح. نساعدك في اختيار العقار المناسب بسهولة وأمان مع
              فريق متخصص وخبرة واسعة في السوق العقاري.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4 justify-end"
            >
              <Link
                href="/properties"
                className="bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-900 transition hover:scale-105 duration-300"
              >
                تصفح العقارات
              </Link>

              <Link
                href="/contact"
                className="border border-blue-800 text-blue-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition hover:scale-105 duration-300"
              >
                تواصل معنا
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}