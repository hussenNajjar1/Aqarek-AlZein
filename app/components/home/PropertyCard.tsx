"use client";

import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useFavorites } from "@/context/FavoritesContext";
import { motion } from "framer-motion";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group"
    >
      <Link href={`/properties/${property.id}`}>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer">
          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* ❤️ Favorite */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(property);
              }}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-50 transition"
            >
              <FaHeart
                className={`transition duration-300 ${
                  favorite
                    ? "text-red-600 scale-110"
                    : "text-gray-400 hover:text-red-400"
                }`}
              />
            </button>

            {/* Type */}
            <span
              className={`absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full text-white 
              ${property.type === "للبيع" ? "bg-blue-700" : "bg-green-600"}`}
            >
              {property.type}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 text-right space-y-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition">
              {property.title}
            </h3>

            <p className="flex items-center justify-end gap-1 text-sm text-gray-500">
              <IoLocationSharp />
              {property.location}
            </p>

            {/* Specs */}
            <div className="flex justify-between text-sm text-gray-600 border-y py-2">
              <div className="flex items-center gap-1">
                <FaBed /> {property.beds}
              </div>

              <div className="flex items-center gap-1">
                <FaBath /> {property.baths}
              </div>

              <div className="flex items-center gap-1">
                <FaRulerCombined /> {property.area} m²
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 justify-end">
              {property.features.slice(0, 2).map((f: string, i: number) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {f}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex flex-col items-end">
                <span className="text-lg font-bold text-blue-800">
                  ${property.price.toLocaleString()}
                </span>

                <span className="text-xs text-gray-500">
                  {property.furnished ? "مفروشة" : "غير مفروشة"}
                </span>
              </div>

              <span className="text-sm text-blue-700 font-medium opacity-0 group-hover:opacity-100 transition">
                عرض التفاصيل →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
