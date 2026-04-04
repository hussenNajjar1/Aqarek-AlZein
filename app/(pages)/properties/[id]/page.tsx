import { properties } from "@/data/properties";
import PropertyCard from "@/app/components/home/PropertyCard";
import PropertyGallery from "@/app/components/property/PropertyGallery";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

export default async function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="p-10 text-center text-xl">العقار غير موجود</div>;
  }

  const related = properties.filter((p) => p.id !== property.id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* ✅ Gallery الجديد */}
      <PropertyGallery images={property.images} />

      {/* التفاصيل */}
      <div className="grid md:grid-cols-2 gap-10 text-right">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">{property.title}</h1>

          <p className="text-gray-500">{property.location}</p>

          <div className="flex gap-6 justify-end border-y py-3 text-gray-700">
            <span className="flex items-center gap-1">
              <FaBed /> {property.beds}
            </span>
            <span className="flex items-center gap-1">
              <FaBath /> {property.baths}
            </span>
            <span className="flex items-center gap-1">
              <FaRulerCombined /> {property.area} m²
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {property.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 justify-end">
            {property.features.map((f, i) => (
              <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
                {f}
              </span>
            ))}
          </div>

          {/* Extra */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p>سنة البناء: {property.yearBuilt}</p>
            <p>موقف سيارات: {property.parking ? "نعم" : "لا"}</p>
            <p>مفروشة: {property.furnished ? "نعم" : "لا"}</p>
            <p>النوع: {property.type}</p>
          </div>
        </div>
      </div>

      {/* مشابهة */}
      <div>
        <h2 className="text-xl font-bold text-right mb-6">عقارات مشابهة</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.slice(0, 6).map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
