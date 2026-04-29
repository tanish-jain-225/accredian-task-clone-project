// sections/Stats.jsx
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section id="stats" className="py-24 lg:py-32 bg-gray-50/50 overflow-hidden">
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="Global Impact"
            title="The Numbers Behind "
            highlight="Our Success"
            subtitle="Trusted by the world's most innovative companies to scale their engineering and leadership talent."
          />
        </div>

        <div className="mt-20 flex flex-wrap gap-6 xs:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="reveal group relative flex-1 min-w-[240px] xs:min-w-[280px] bg-white p-8 xs:p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-3 tracking-tighter group-hover:text-brand-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="h-1 w-10 bg-brand-500 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-lg font-black text-gray-950 mb-2 leading-tight uppercase tracking-tight">
                  {stat.label}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-50 group-hover:bg-brand-500 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Partners Showroom */}
        <div className="mt-24 reveal" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />
            <p className="text-center text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-12">
              Accelerating growth at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
              {["TechNova", "FinServe", "GlobalEdge", "InnovateCo", "NexGen", "DataSphere"].map(
                (name) => (
                  <div key={name} className="flex items-center gap-2 group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 group-hover:bg-brand-500 transition-colors duration-300" />
                    <span className="font-black text-gray-950 text-sm tracking-tighter group-hover:text-brand-600 transition-colors duration-300">
                      {name.toUpperCase()}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
