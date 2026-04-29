// sections/HowItWorks.jsx
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { steps } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-950 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        <div className="reveal">
          <SectionTitle
            eyebrow="The Strategic Path"
            title="Our Four-Step "
            highlight="Execution Framework"
            subtitle="A data-driven methodology designed to align learning objectives with core business outcomes."
            dark
          />
        </div>

        <div className="mt-20 relative">
          {/* Central Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent -translate-y-1/2" />

          <div className="flex flex-wrap gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="reveal group relative flex-1 min-w-[240px] xs:min-w-[280px]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 xs:p-10 rounded-[40px] hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center font-black text-white shadow-xl shadow-brand-600/40 ring-4 ring-gray-950 group-hover:scale-110 transition-transform duration-500">
                    {index + 1}
                  </div>

                  {/* Icon / Indicator */}
                  <div className="mb-8 w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-500">
                    <div className="w-6 h-6 rounded-lg bg-white/30 group-hover:bg-white transition-colors duration-500" />
                  </div>

                  <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-6 w-full border-t border-white/5">
                    <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Step {step.id} Detail
                    </span>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-brand-500 animate-pulse">
                    <ArrowRight size={24} strokeWidth={3} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center reveal" style={{ animationDelay: '0.6s' }}>
          <div className="px-6 xs:px-8 py-4 bg-brand-600/10 border border-brand-500/30 rounded-3xl xs:rounded-full flex flex-col xs:flex-row items-center gap-4 w-full xs:w-auto">
            <span className="text-xs xs:text-sm font-bold text-brand-200 tracking-tight text-center">Ready to map your organization's path?</span>
            <a 
              href="#contact" 
              suppressHydrationWarning
              className="px-6 py-2 bg-brand-600 text-white rounded-full font-black text-[10px] xs:text-xs uppercase tracking-widest hover:bg-brand-50 hover:text-brand-600 transition-all w-full xs:w-auto text-center"
            >
              Request Strategy Call
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
