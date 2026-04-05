"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-right min-h-screen">
      {/* 🔥 Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl font-extrabold mb-3">تواصل معنا</h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-loose">
          فريق شركة الزين جاهز للرد على جميع استفساراتك ومساعدتك في اختيار
          العقار المناسب لك
        </p>
      </motion.div>

      {/* 🔥 Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2  lg:order-1"
        >
          {[
            {
              icon: <FiMapPin />,
              title: "العنوان",
              desc: "سراقب - سوريا",
            },
            {
              icon: <FiPhone />,
              title: "رقم الهاتف",
              desc: "+90 000 000 000",
            },
            {
              icon: <FiMail />,
              title: "البريد الإلكتروني",
              desc: "info@alzein.com",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center md:justify-end gap-4 bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xl shrink-0">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6 order-1 lg:order-2"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              الاسم الكامل
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full text-right border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pl-12 pr-3 py-3 transition"
                placeholder="أدخل اسمك"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                className="w-full text-right border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pl-12 pr-3 py-3 transition"
                placeholder="example@email.com"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              رسالتك
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
              <textarea
                className="w-full text-right border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl pl-12 pr-3 py-3 h-36 transition"
                placeholder="اكتب رسالتك هنا..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            <FiSend className="w-5 h-5" />
            إرسال الرسالة
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
