// sections/Programs.jsx
"use client";
import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data";

const categories = ["All", "Technology", "Business", "Analytics", "Cloud", "Leadership"];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-50/30 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="Expert-Led Learning"
            title="Industry-Defining "
            highlight="Specializations"
            subtitle="Explore our comprehensive suite of programs designed to bridge the gap between technical expertise and business leadership."
          />
        </div>

        {/* Premium Filter UI */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 reveal" style={{ animationDelay: '0.1s' }}>
          <div className="p-1.5 bg-gray-100/50 rounded-2xl flex flex-wrap items-center justify-center gap-1 border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                suppressHydrationWarning
                className={`px-5 xs:px-6 py-2 xs:py-2.5 rounded-xl text-[10px] xs:text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white text-brand-600 shadow-md shadow-gray-200/50 ring-1 ring-gray-200"
                    : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid — Refactored to Flex */}
        <div className="mt-16 flex flex-wrap gap-10">
          {filteredPrograms.map((program, index) => (
            <div key={program.id} className="reveal flex-1 min-w-[280px]" style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
              <ProgramCard {...program} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center reveal" style={{ animationDelay: '0.2s' }}>
          <button 
            type="button"
            suppressHydrationWarning
            className="group relative px-10 py-4 rounded-2xl bg-gray-950 text-white font-black text-xs xs:text-sm uppercase tracking-[0.2em] overflow-hidden hover:bg-brand-600 transition-colors duration-500 w-full xs:w-auto"
          >
            <span className="relative z-10">View Full Catalog</span>
            <div className="absolute inset-0 bg-brand-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </Container>
    </section>
  );
}
