// sections/Testimonials.jsx
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="Success Stories"
            title="Voices of "
            highlight="Impact"
            subtitle="Hear from the leaders who have transformed their organizations through our strategic partnership."
          />
        </div>

        <div className="mt-16 xs:mt-20 flex flex-wrap gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="reveal flex-1 min-w-[240px] xs:min-w-[280px]" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Global Rating Indicator */}
        <div className="mt-24 pt-16 border-t border-gray-100 reveal" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 xs:gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 xs:w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg xs:text-2xl font-black text-gray-950 mb-1 text-center leading-tight uppercase tracking-tighter">4.9/5 Average Program Rating</p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[7px] xs:text-[10px] text-center">Based on 12,000+ verified enterprise reviews</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
