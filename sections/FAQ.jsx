// sections/FAQ.jsx
"use client";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FAQItem from "@/components/FAQItem";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faqs" className="py-24 lg:py-32 bg-gray-50/30 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* LEFT — Title & Support */}
          <div className="flex-1 lg:max-w-[40%] reveal">
            <SectionTitle
              eyebrow="Knowledge Base"
              title="Common "
              highlight="Enquiries"
              subtitle="Everything you need to know about our enterprise methodology, program structure, and strategic integration."
              left
            />
            <div className="mt-12 p-6 xs:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 xs:w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 xs:w-6 h-6 rounded-lg bg-brand-500 shadow-inner" />
                </div>
                <h4 className="text-sm xs:text-lg font-black text-gray-950 uppercase tracking-tight">Need specific answers?</h4>
              </div>
              <p className="text-gray-500 text-xs xs:text-sm font-medium leading-relaxed mb-6">
                Our enterprise advisory team is available 24/7 to provide custom program consultations for your organization.
              </p>
              <a 
                href="#contact" 
                suppressHydrationWarning
                className="inline-flex items-center justify-center w-full py-4 bg-brand-600 text-white font-black text-[10px] xs:text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20"
              >
                Contact Enterprise Support
              </a>
            </div>
          </div>

          {/* RIGHT — Accordion — Refactored to Flex */}
          <div className="flex-1 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="reveal w-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <FAQItem {...faq} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
