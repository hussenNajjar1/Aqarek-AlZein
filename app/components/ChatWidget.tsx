"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { fakeQuestions, fakeResponses, ChatMessage } from "@/data/chat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "مرحباً 👋 نحن شركة الزين للعقارات، كيف يمكننا مساعدتك؟",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const endRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { text, from: "user" };

    const botMsg: ChatMessage = {
      text:
        fakeResponses[text] ||
        "شكراً لتواصلك 🙏 أحد مستشارينا سيتواصل معك قريباً.",
      from: "bot",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* زر الشات */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-[90px] right-6 z-50 md:bottom-6"
      >
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition">
          {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
        </div>
      </button>

      {/* النافذة */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 w-[380px] h-[520px] z-50 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white flex flex-col"
          >
            {/* HEADER BRAND */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                AZ
              </div>

              <div className="text-right">
                <h2 className="font-semibold text-sm">شركة الزين للعقارات</h2>
                <p className="text-xs text-blue-100">
                  مستشار عقاري • متصل الآن
                </p>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-right bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.from === "user" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`px-4 py-2 text-sm max-w-[75%] shadow-sm ${
                      msg.from === "user"
                        ? "bg-blue-600 text-white rounded-2xl rounded-br-none"
                        : "bg-white text-gray-700 border rounded-2xl rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              <div ref={endRef} />
            </div>

            {/* SUGGESTIONS */}
            <div className="px-3 py-2 border-t bg-white flex flex-wrap gap-2">
              {fakeQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-1 rounded-full border border-blue-200 text-blue-700 hover:bg-blue-50 transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* INPUT */}
            <div className="p-3 border-t bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب سؤالك..."
                className="flex-1 text-sm outline-none px-3 py-2 rounded-xl border focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition text-right"
              />

              <button
                onClick={() => sendMessage(input)}
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-xl shadow transition"
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
