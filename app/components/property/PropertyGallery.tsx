"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={mainImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={mainImage}
              alt="property"
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* الصور المصغرة */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
        {images.map((img, i) => {
          const isActive = mainImage === img;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMainImage(img)}
              className={`relative h-24 rounded-xl overflow-hidden cursor-pointer border-2 ${
                isActive
                  ? "border-blue-500 ring-2 ring-blue-300"
                  : "border-transparent"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />

              {!isActive && (
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
