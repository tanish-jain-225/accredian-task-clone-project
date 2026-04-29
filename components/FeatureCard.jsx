// components/FeatureCard.jsx
import {
  Target,
  Users,
  BarChart2,
  Shield,
  Zap,
  Award,
} from "lucide-react";

const iconMap = { Target, Users, BarChart2, Shield, Zap, Award };

export default function FeatureCard({ icon, title, description, index = 0 }) {
  const Icon = iconMap[icon] || Target;

  return (
    <div
      className="group relative h-full p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      {/* Dynamic background glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 mb-8 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white shadow-inner"
        >
          <Icon size={28} strokeWidth={2.5} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-black text-gray-950 mb-4 tracking-tight leading-tight group-hover:text-brand-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Index */}
      <div className="absolute bottom-6 right-8 text-[40px] font-black text-gray-50 group-hover:text-brand-50 transition-colors duration-500 -z-10 select-none">
        0{index + 1}
      </div>
    </div>
  );
}
