// components/FAQItem.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-2 rounded-[28px] overflow-hidden transition-all duration-500 ${
        open
          ? "border-brand-200 bg-white shadow-xl shadow-brand-500/5"
          : "border-gray-100 bg-white hover:border-brand-100 hover:shadow-sm"
      }`}
    >
      <button
        id={`faq-btn-${index}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        suppressHydrationWarning
        className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-[28px]"
        onClick={() => setOpen(!open)}
      >
        <span className="font-black text-gray-950 text-base leading-snug pr-4 tracking-tight">
          {question}
        </span>
        <span
          className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-500 shadow-inner ${
            open
              ? "bg-brand-600 text-white rotate-0"
              : "bg-gray-50 text-gray-400 group-hover:text-brand-500"
          }`}
        >
          {open ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 flex gap-4">
          <div className="w-1 h-auto bg-brand-200 rounded-full" />
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
