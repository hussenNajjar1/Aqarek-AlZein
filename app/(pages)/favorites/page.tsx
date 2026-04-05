"use client";

import { useFavorites } from "@/context/FavoritesContext";
import PropertyCard from "@/app/components/home/PropertyCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-right">
        العقارات المفضلة ❤️
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-right">لا يوجد مفضلة بعد</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
