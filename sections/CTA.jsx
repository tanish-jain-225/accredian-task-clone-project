// sections/CTA.jsx
"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { CheckCircle2, Headphones, ArrowRight, ShieldCheck } from "lucide-react";

const benefits = [
  "Free 30-minute strategic consultation",
  "Custom program proposal within 48h",
  "Data-driven skill gap assessment",
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid work email is required";
    if (!form.company.trim()) e.company = "Company name is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-gray-950"
    >
      {/* Premium Background Design */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/30 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
          {/* Left — Value Proposition */}
          <div className="reveal flex-1 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/30 text-brand-300 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <Headphones size={14} className="text-brand-400" />
              Strategic Advisory
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 break-words">
              Transform Your Team's <br />
              <span className="text-brand-500">Future Today</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 font-medium max-w-lg">
              Join 400+ leading enterprises who trust Accredian to deliver world-class learning experiences and measurable talent ROI.
            </p>
            
            <div className="space-y-6 mb-12">
              {benefits.map((b) => (
                <div key={b} className="flex items-start xs:items-center gap-4 text-white font-bold group">
                  <div className="w-6 h-6 rounded-lg bg-brand-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 transition-colors mt-0.5 xs:mt-0">
                    <CheckCircle2 size={16} className="text-brand-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs xs:text-sm tracking-tight leading-tight">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 max-w-sm">
              <div className="w-10 h-10 xs:w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={24} className="w-5 h-5 xs:w-6 h-6 text-brand-400" />
              </div>
              <div>
                <p className="text-white font-black text-[10px] uppercase tracking-widest">Enterprise Privacy</p>
                <p className="text-gray-500 text-[8px] xs:text-[10px] font-bold">GDPR & ISO 27001 Certified Environment</p>
              </div>
            </div>
          </div>

          {/* Right — Form Container — Refactored to Flex */}
          <div className="reveal flex-1 w-full" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[40px] p-6 xs:p-10 lg:p-12 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 xs:w-20 h-20 rounded-3xl bg-brand-500/20 border-2 border-brand-500 flex items-center justify-center mb-8 reveal animate-bounce">
                      <CheckCircle2 size={40} className="w-8 h-8 xs:w-10 h-10 text-brand-500" />
                    </div>
                    <h3 className="text-2xl xs:text-3xl font-black text-white mb-4 uppercase tracking-tighter">Proposal Incoming</h3>
                    <p className="text-gray-400 font-medium mb-10 max-w-xs leading-relaxed text-sm">
                      Thank you <span className="text-white font-bold">{form.name}</span>. Our enterprise consultant will reach out to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      suppressHydrationWarning
                      className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-colors w-full"
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "" }); }}
                    >
                      Submit New Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="relative z-10 flex flex-col gap-6">
                    <div>
                      <h3 className="text-xl xs:text-2xl font-black text-white mb-2 tracking-tight">Request consultation</h3>
                      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Prepare for enterprise growth</p>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="cta-name" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                          Full Name
                        </label>
                        <input
                          id="cta-name"
                          type="text"
                          autoComplete="name"
                          placeholder="Shreya Kapoor"
                          value={form.name}
                          onChange={handleChange("name")}
                          suppressHydrationWarning
                          className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-white placeholder-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all ${
                            errors.name ? "border-red-500" : "border-white/10"
                          }`}
                        />
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="cta-email" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                          Work Email
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          autoComplete="email"
                          placeholder="shreya@accredian.com"
                          value={form.email}
                          onChange={handleChange("email")}
                          suppressHydrationWarning
                          className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-white placeholder-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all ${
                            errors.email ? "border-red-500" : "border-white/10"
                          }`}
                        />
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="cta-company" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                          Organization
                        </label>
                        <input
                          id="cta-company"
                          type="text"
                          autoComplete="organization"
                          placeholder="TechNova Global"
                          value={form.company}
                          onChange={handleChange("company")}
                          suppressHydrationWarning
                          className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-white placeholder-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all ${
                            errors.company ? "border-red-500" : "border-white/10"
                          }`}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full py-5 bg-brand-600 text-white font-black text-[10px] xs:text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-500 transition-all duration-300 shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 flex items-center justify-center gap-3 group"
                    >
                      Initialize Partnership <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-[8px] xs:text-[10px] text-gray-600 font-bold uppercase tracking-widest pt-2">
                      Secured by Enterprise encryption
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
