// components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Programs", href: "#programs" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      // Determine active section
      const sections = navLinks
        .map((l) => l.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-2xl py-3 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#home" className="flex flex-col leading-none group transition-transform hover:scale-105 flex-shrink-0" aria-label="Accredian Home">
              <span className={`text-xl xs:text-2xl font-black tracking-tighter transition-colors duration-500 ${scrolled ? "text-white" : "text-gray-950"}`}>
                accredian<span className="text-brand-600">.</span>
              </span>
              <span className={`text-[7px] xs:text-[8px] tracking-[0.3em] xs:tracking-[0.4em] uppercase font-black -mt-1 transition-colors duration-500 ${scrolled ? "text-white/40" : "text-gray-400"}`}>
                enterprise
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 lg:px-5 py-2.5 rounded-full text-[10px] lg:text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${
                      isActive
                        ? "text-brand-500"
                        : scrolled 
                          ? "text-white/60 hover:text-white" 
                          : "text-gray-500 hover:text-gray-950"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 xs:gap-4">
              <a
                href="#contact"
                suppressHydrationWarning
                className={`hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl ${
                  scrolled 
                    ? "bg-brand-600 text-white hover:bg-brand-500 shadow-brand-600/20" 
                    : "bg-gray-950 text-white hover:bg-brand-600 shadow-gray-950/20"
                }`}
              >
                Inquire <ArrowRight size={14} strokeWidth={3} />
              </a>
              <button
                className={`flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 rounded-2xl transition-all duration-300 md:hidden ${
                  scrolled ? "bg-white/10 text-white" : "bg-gray-100 text-gray-950"
                }`}
                onClick={() => setMenuOpen(true)}
                suppressHydrationWarning
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
