// components/MobileMenu.jsx
"use client";
import { X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-gray-950/60 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-[60] h-full w-[90%] xs:w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        {/* Header */}
        <div className="flex items-center justify-between px-4 xs:px-6 py-5 xs:py-7 border-b border-gray-50 relative z-10">
          <div className="flex flex-col leading-none">
            <span className="text-lg xs:text-2xl font-black text-gray-950 tracking-tighter">
              accredian<span className="text-brand-600">.</span>
            </span>
            <span className="text-[6px] xs:text-[8px] tracking-[0.3em] xs:tracking-[0.4em] uppercase font-black -mt-1 text-gray-400">
              enterprise
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 xs:w-11 xs:h-11 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-950 hover:bg-gray-100 transition-all duration-300"
            aria-label="Close menu"
          >
            <X size={18} strokeWidth={3} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-10 space-y-2 relative z-10 overflow-y-auto">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                suppressHydrationWarning
                className={`group flex items-center justify-between px-4 xs:px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? "bg-brand-50 text-brand-600 shadow-sm" 
                    : "text-gray-950 hover:bg-gray-50 hover:text-brand-600"
                }`}
              >
                {link.label}
                <ArrowRight size={16} className={`transition-all duration-300 ${
                  isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                }`} />
              </a>
            );
          })}
        </nav>

        {/* Footer / CTA */}
        <div className="px-4 pb-4 relative z-10">
          <div className="p-4 bg-brand-50 rounded-3xl border border-brand-100 mb-4">
            <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-2">Support 24/7</p>
            <p className="text-xs font-bold text-gray-600">Ready to transform your enterprise?</p>
          </div>
          <a
            href="#contact"
            onClick={onClose}
            suppressHydrationWarning
            className="flex items-center justify-center w-full py-5 bg-brand-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-700 transition-all duration-300 shadow-xl shadow-brand-600/30"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </>
  );
}
