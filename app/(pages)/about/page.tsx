"use client";

import { motion } from "framer-motion";
import { FiAward, FiShield, FiTrendingUp } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-right">
      {/* 🔥 Hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-800  py-1 rounded-full mb-4 inline-block">
          شركة الزين للتطوير العقاري
        </h1>

        <p className="text-gray-600 text-lg leading-loose max-w-3xl mx-auto">
          شركة رائدة في مدينة سراقب تقدم حلولاً عقارية متكاملة تجمع بين الجودة
          والابتكار، لنمنح عملاءنا أفضل الفرص السكنية والاستثمارية.
        </p>
      </motion.div>

      {/* 🔥 About */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        {/* نص */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 leading-loose mb-6">
            نعمل في شركة الزين على تطوير مشاريع سكنية واستثمارية حديثة داخل
            سراقب، مع التركيز على اختيار المواقع المميزة والتصاميم العصرية التي
            تحقق أعلى قيمة لعملائنا.
          </p>

          <p className="text-gray-600 leading-loose">
            نسعى دائماً لبناء علاقات طويلة الأمد مع عملائنا، من خلال تقديم خدمات
            احترافية وتجربة سلسة تعتمد على الشفافية والثقة.
          </p>
        </motion.div>

        {/* صورة */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[320px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/jpeg/image1.jpeg"
            alt="شركة الزين"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>

      {/* 🔥 Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FiTrendingUp />,
            title: "خبرة",
            desc: "سنوات من الخبرة في السوق العقاري المحلي",
          },
          {
            icon: <FiShield />,
            title: "ثقة",
            desc: "نضمن الشفافية والمصداقية في جميع تعاملاتنا",
          },
          {
            icon: <FiAward />,
            title: "احترافية",
            desc: "نقدم خدمات عالية الجودة بمعايير حديثة",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white/80 backdrop-blur-md border border-gray-100 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
          >
            {/* 🔥 Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>
            </div>

            {/* 🔥 Title */}
            <h3 className="font-bold text-xl mb-3">{item.title}</h3>

            {/* 🔥 Desc */}
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Vision */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-24 bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-3xl text-center shadow-inner"
      >
        <h2 className="text-2xl font-bold mb-4">رؤيتنا</h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-loose">
          نسعى لأن نكون الخيار الأول في سراقب في مجال التطوير العقاري، من خلال
          تقديم مشاريع مبتكرة وخدمات متميزة تحقق رضا العملاء وتواكب تطورات
          السوق.
        </p>
      </motion.div>
    </div>
  );
}
