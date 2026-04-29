// components/Footer.jsx
import { MessageCircle, Send, Play, Globe, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Careers", "Press Kit", "Blog", "Contact"],
  Programs: ["Data Science & AI", "Product Management", "Business Analytics", "Cloud Architecture", "Executive Leadership"],
  Enterprise: ["Corporate Training", "Team Plans", "Custom Curriculum", "ROI Calculator", "Case Studies"],
  Support: ["Help Center", "Community", "Status Page", "Privacy Policy", "Terms of Service"],
};

const socials = [
  { Icon: MessageCircle, href: "#", label: "LinkedIn" },
  { Icon: Send, href: "#", label: "Twitter" },
  { Icon: Play, href: "#", label: "YouTube" },
  { Icon: Globe, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 overflow-hidden relative" role="contentinfo">
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-600/10 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:max-w-[30%] w-full">
            <div className="mb-8">
              <span className="text-2xl xs:text-3xl font-black text-white tracking-tighter">
                accredian<span className="text-brand-600">.</span>
              </span>
              <p className="text-[8px] xs:text-[10px] text-gray-500 font-black tracking-[0.4em] uppercase mt-1">
                credentials that matter
              </p>
            </div>
            <p className="text-gray-400 text-xs xs:text-sm font-medium leading-relaxed mb-10 max-w-xs">
              Pioneering the future of enterprise learning through research-backed curricula and expert-led digital transformation programs.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <a href="mailto:enterprise@accredian.com" className="flex items-center gap-3 text-xs xs:text-sm font-bold text-gray-300 hover:text-brand-400 transition-colors group">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600/20">
                  <Mail size={14} className="text-brand-500" />
                </div>
                <span className="break-all">enterprise@accredian.com</span>
              </a>
              <div className="flex items-center gap-3 text-xs xs:text-sm font-bold text-gray-300 group">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-brand-500" />
                </div>
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-xs xs:text-sm font-bold text-gray-300 group">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-brand-500" />
                </div>
                Mumbai · Bengaluru · Delhi
              </div>
            </div>
          </div>

          {/* Link Columns — Refactored to Flex */}
          <div className="flex-1 flex flex-wrap gap-x-8 gap-y-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex-1 min-w-[140px]">
                <h4 className="text-white font-black text-[9px] xs:text-[10px] uppercase tracking-[0.2em] mb-8">
                  {title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs xs:text-sm font-bold text-gray-500 hover:text-brand-400 transition-all duration-300 flex items-center group"
                      >
                        {link}
                        <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all flex-shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[9px] xs:text-[10px] font-black text-gray-600 uppercase tracking-widest text-center" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Accredian Enterprise. Global Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a href="#" className="text-[9px] xs:text-[10px] font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
              <a href="#" className="text-[9px] xs:text-[10px] font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
              <a href="#" className="text-[9px] xs:text-[10px] font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors">Cookies</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 w-full md:w-auto">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all duration-500"
              >
                <Icon size={18} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
