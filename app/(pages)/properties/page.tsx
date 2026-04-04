"use client";

import { useState, useMemo } from "react";
import PropertyCard from "@/app/components/home/PropertyCard";
import FilterBar from "@/app/components/home/FilterBar";
import { properties } from "@/data/properties";
import type { Filters, Property } from "@/types/property";

import { FiSearch } from "react-icons/fi";

export default function Page() {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    category: "",
    location: "",
    maxPrice: "",
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((p: Property) => {
      if (filters.type && p.type !== filters.type) return false;

      if (filters.category && p.category !== filters.category) return false;

      if (
        filters.location &&
        !p.location.toLowerCase().includes(filters.location.toLowerCase())
      )
        return false;

      if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;

      return true;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* العنوان */}
      <h1 className="text-2xl font-bold text-right mb-6">جميع العقارات</h1>

      {/* الفلتر */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* النتائج */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProperties.length ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 flex flex-col items-center justify-center py-16 gap-3">
            <FiSearch className="w-10 h-10 text-gray-400" />

            <span className="text-lg font-medium">لا يوجد نتائج</span>
            <span className="text-sm text-gray-400">
              جرّب تغيير الفلاتر أو البحث
            </span>
          </p>
        )}
      </div>

    </div>
  );
}
