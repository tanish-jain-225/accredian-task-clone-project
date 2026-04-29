// components/TestimonialCard.jsx
import { Quote } from "lucide-react";

export default function TestimonialCard({ name, role, company, text, initials, color }) {
  // Use provided initials or generate from name
  const displayInitials = initials || name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="group relative h-full">
      {/* Decorative background shadow */}
      <div className="absolute inset-4 bg-brand-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full flex flex-col p-6 xs:p-10 rounded-[32px] xs:rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 hover:-translate-y-2">
        {/* Quote Icon */}
        <div className="absolute top-8 right-10 text-brand-50 transition-colors duration-500 group-hover:text-brand-100">
          <Quote size={48} strokeWidth={3} />
        </div>

        {/* Content */}
        <blockquote className="relative z-10 flex-1 mb-10">
          <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
            &ldquo;{text}&rdquo;
          </p>
        </blockquote>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color || 'from-brand-600 to-indigo-700'} flex items-center justify-center text-white text-lg font-black shadow-lg shadow-brand-600/20 group-hover:scale-105 transition-transform duration-500`}>
            {displayInitials}
          </div>
          <div>
            <div className="text-gray-950 font-black text-sm tracking-tight mb-0.5">
              {name}
            </div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              {role} <span className="text-brand-300 mx-1">·</span> {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
