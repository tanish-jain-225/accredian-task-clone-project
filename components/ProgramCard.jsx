// components/ProgramCard.jsx
import {
  Code2,
  TrendingUp,
  PieChart,
  Cloud,
  Briefcase,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";

const iconMap = { Code2, TrendingUp, PieChart, Cloud, Briefcase, Globe };

const tagColors = {
  "Most Popular": "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
  "High Demand": "bg-orange-50 text-orange-700 ring-1 ring-orange-100",
  "Fast Track": "bg-green-50 text-green-700 ring-1 ring-green-100",
  New: "bg-purple-50 text-purple-700 ring-1 ring-purple-100",
  Exclusive: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
  "": "",
};

export default function ProgramCard({
  icon,
  category,
  title,
  description,
  duration,
  level,
  tag,
}) {
  const Icon = iconMap[icon] || Code2;
  const tagClass = tagColors[tag] || "";

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-brand-500/15 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Decorative background accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/80 group-hover:to-brand-50/20 transition-all duration-500" />

      <div className="relative flex flex-col h-full p-8 z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Icon size={24} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-black text-brand-500 uppercase tracking-[0.2em]">
              {category}
            </span>
          </div>
          {tag && (
            <span
              className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider ${tagClass}`}
            >
              {tag}
            </span>
          )}
        </div>

        {/* Title & description */}
        <h3 className="text-2xl font-black text-gray-950 mb-3 leading-tight tracking-tight group-hover:text-brand-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 font-medium">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
            <Clock size={14} className="text-brand-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>{level}</span>
          </div>
        </div>

        {/* CTA */}
        <button 
          suppressHydrationWarning
          className="mt-8 w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gray-50 text-gray-950 font-black text-xs uppercase tracking-widest group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 ring-1 ring-gray-100 group-hover:ring-brand-600"
        >
          Enrol Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
