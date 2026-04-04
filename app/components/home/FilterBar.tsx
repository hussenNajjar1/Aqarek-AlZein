"use client";

import { Filters } from "@/types/property";
import { FiHome, FiMapPin, FiDollarSign } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

type Props = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export default function FilterBar({ filters, setFilters }: Props) {
  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 mb-10 border border-gray-100">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-right">
        {/* نوع العملية */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">
            بيع &إيجار{" "}
          </label>

          <div className="relative">
            <FiHome className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <select
              className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pr-12 pl-3 py-2.5 bg-white transition"
              value={filters.type}
              onChange={(e) => handleChange("type", e.target.value)}
            >
              <option value="">الكل</option>
              <option value="للبيع">بيع</option>
              <option value="للإيجار">إيجار</option>
            </select>
          </div>
        </div>

        {/* النوع العقاري */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">
            نوع العقار
          </label>

          <div className="relative">
            <HiOutlineBuildingOffice2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <select
              className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pr-12 pl-3 py-2.5 bg-white transition"
              value={filters.category}
              onChange={(e) => handleChange("category", e.target.value)}
            >
              <option value="">كل الأنواع</option>
              <option value="شقة">شقة</option>
              <option value="فيلا">فيلا</option>
              <option value="بيت">بيت</option>
              <option value="مزرعة">مزرعة</option>
            </select>
          </div>
        </div>

        {/* الموقع */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">الموقع</label>

          <div className="relative">
            <FiMapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="ابحث بالموقع..."
              className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pr-12 pl-3 py-2.5 transition"
              value={filters.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>
        </div>

        {/* السعر */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">
            أقصى سعر
          </label>

          <div className="relative">
            <FiDollarSign className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="number"
              placeholder="مثلاً 50000"
              className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pr-12 pl-3 py-2.5 transition"
              value={filters.maxPrice}
              onChange={(e) => handleChange("maxPrice", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
