// sections/Features.jsx
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute top-1/2 left-0 w-24 h-96 bg-brand-50/40 blur-[80px] -translate-y-1/2 -translate-x-1/2 rounded-full" />
      
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="The Platform Edge"
            title="Strategic Advantages For "
            highlight="Modern Teams"
            subtitle="Built for global scalability, our platform integrates seamless learning paths with robust enterprise tracking."
          />
        </div>

        <div className="mt-20 flex flex-wrap gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={feature.id} className="reveal flex-1 min-w-[280px]" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Floating CTA Banner */}
        <div className="mt-20 reveal" style={{ animationDelay: '0.4s' }}>
          <div className="relative group overflow-hidden bg-gray-950 rounded-[40px] p-8 lg:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight leading-tight">
                  Accelerate Your Organization's <br className="hidden sm:block" />
                  <span className="text-brand-500">Learning Curve</span>
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base">
                  Join hundreds of forward-thinking enterprises that use our platform to maintain a competitive edge in rapidly evolving markets.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <a
                  href="#contact"
                  suppressHydrationWarning
                  className="w-full sm:w-auto px-10 py-4.5 bg-brand-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-500 transition-all duration-300 shadow-xl shadow-brand-600/20 hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  Schedule Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
