// components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import MobileMenu from "./MobileMenu";

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
        className="sticky top-0 z-50 w-full glass-dark shadow-2xl py-3 xs:py-4 border-b border-white/5 transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <a href="#home" className="flex flex-col leading-none group transition-transform hover:scale-105 flex-shrink-0" aria-label="Accredian Home">
              <span className="text-lg xs:text-2xl font-black tracking-tighter text-white">
                accredian<span className="text-brand-600">.</span>
              </span>
              <span className="text-[6px] xs:text-[8px] tracking-[0.3em] xs:tracking-[0.4em] uppercase font-black -mt-1 text-white/40">
                enterprise
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" role="navigation" aria-label="Main navigation">
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
                        : "text-white/60 hover:text-white"
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
                className="hidden md:inline-flex items-center gap-2 px-4 xs:px-6 py-2.5 xs:py-3 rounded-full text-[9px] xs:text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl bg-brand-600 text-white hover:bg-brand-500 shadow-brand-600/20"
              >
                Inquire <ArrowRight size={14} strokeWidth={3} className="hidden xs:block" />
              </a>
              <button
                className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 rounded-2xl transition-all duration-300 md:hidden bg-white/10 text-white hover:bg-white/20"
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

      <MobileMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        activeSection={activeSection}
      />
    </>
  );
}
