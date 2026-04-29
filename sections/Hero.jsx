// sections/Hero.jsx
import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import Container from "@/components/Container";

// Abstract dashboard card component (decorative)
function DashboardCard({ className = "" }) {
  return (
    <div className={`glass rounded-3xl shadow-2xl p-6 reveal animate-float ${className}`} style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-2 bg-gray-100 rounded-full ml-2" />
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-brand-100 rounded-full w-3/4" />
        <div className="h-3 bg-gray-100 rounded-full w-full" />
        <div className="h-3 bg-gray-100 rounded-full w-5/6" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {[68, 85, 94].map((v, i) => (
          <div key={i} className="flex-1 min-w-[60px] text-center">
            <div className="text-sm font-bold text-brand-600">{v}%</div>
            <div className="h-1.5 bg-brand-100 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full bg-brand-500 rounded-full" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Floating metric card
function MetricCard({ value, label, color = "blue", className = "", delay = "0s" }) {
  const colors = {
    blue: "text-brand-600 bg-brand-50 border-brand-100",
    green: "text-green-600 bg-green-50 border-green-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100",
  };
  return (
    <div
      className={`glass rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 reveal ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center font-extrabold text-sm border ${colors[color]}`}>
        {value}
      </div>
      <span className="text-sm font-bold text-gray-700 tracking-tight whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-50/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-indigo-50/40 blur-[100px]" />
        <div className="absolute bottom-0 left-[20%] w-[40%] h-[40%] rounded-full bg-blue-50/30 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <div className="reveal flex-1 w-full">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-[10px] font-black uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Enterprise L&D Transformation
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black text-gray-950 leading-[1.1] tracking-tight mb-8 break-words">
              Empower Your <br />
              <span className="text-gradient">Digital Workforce</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              We partner with global enterprises to build high-impact learning ecosystems that transform technical skills into competitive advantages.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-brand-600 text-white font-black rounded-2xl hover:bg-brand-700 transition-all duration-300 shadow-xl shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-1 text-sm sm:text-lg uppercase tracking-widest group"
              >
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-white text-gray-900 font-black rounded-2xl border-2 border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all duration-300 text-sm sm:text-lg uppercase tracking-widest group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                  <Play size={14} className="text-brand-600 group-hover:text-white transition-colors ml-0.5" fill="currentColor" />
                </div>
                View Programs
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 p-1">
              <div className="flex -space-x-3">
                {["JD", "AS", "MK", "PL", "TW"].map((init, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-gray-700 text-[10px] sm:text-xs font-black ring-1 ring-gray-100"
                    style={{ background: `linear-gradient(135deg, #3b82f6 ${i*20}%, #1d4ed8 100%)`, color: 'white' }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="h-8 w-px bg-gray-200 mx-2 hidden xs:block" />
              <div className="min-w-[140px]">
                <p className="text-xs sm:text-sm font-black text-gray-950">500+ Corporations</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[10px] text-gray-500 font-bold ml-1">4.9/5 satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Visual Illustration */}
          <div className="relative flex-1 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md reveal" style={{ animationDelay: '0.1s' }}>
              {/* Decorative Blur Backdrops */}
              <div className="absolute inset-0 bg-brand-500/10 blur-[100px] scale-125 -z-10 rounded-full" />
              
              {/* Main Visual Component */}
              <div className="relative bg-white rounded-[40px] p-2 shadow-[0_20px_50px_rgba(59,130,246,0.15)] border border-gray-100 overflow-hidden group">
                <div className="bg-brand-600 rounded-[34px] p-6 xs:p-8 lg:p-10 text-white relative overflow-hidden">
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-10">
                      <div className="w-10 h-10 xs:w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <div className="w-5 h-5 xs:w-6 h-6 rounded-lg bg-white shadow-inner" />
                      </div>
                      <div className="px-3 py-1 xs:px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[8px] xs:text-[10px] font-black uppercase tracking-widest border border-white/20">
                        Live Analytics
                      </div>
                    </div>

                    <div className="space-y-6 mb-10">
                      {[
                        { label: "Talent ROI", pct: 92, delay: '0.3s' },
                        { label: "Skill Mastery", pct: 78, delay: '0.4s' },
                        { label: "Team Velocity", pct: 86, delay: '0.5s' }
                      ].map((item) => (
                        <div key={item.label} className="reveal" style={{ animationDelay: item.delay }}>
                          <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] xs:text-xs font-black text-white/80 uppercase tracking-tighter">{item.label}</span>
                            <span className="text-xs xs:text-sm font-black">{item.pct}%</span>
                          </div>
                          <div className="h-1.5 xs:h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full transition-all duration-1000 delay-500" style={{ width: `${item.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 xs:gap-3">
                      {[
                        { v: "140+", l: "Courses" },
                        { v: "24/7", l: "Support" },
                        { v: "12+", l: "Awards" }
                      ].map((s, i) => (
                        <div key={i} className="flex-1 min-w-[70px] bg-white/10 backdrop-blur-md rounded-2xl p-2.5 xs:p-3.5 text-center border border-white/10 transition-transform group-hover:scale-105" style={{ transitionDelay: `${i * 100}ms` }}>
                          <div className="text-xs xs:text-sm font-black text-white">{s.v}</div>
                          <div className="text-[8px] xs:text-[9px] text-white/60 font-bold uppercase tracking-tighter mt-1">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlays */}
              <DashboardCard className="absolute -bottom-10 -left-12 w-64 hidden xl:block" />
              <MetricCard 
                value="98%" 
                label="Course Satisfaction" 
                color="green" 
                className="absolute -top-8 -right-6 hidden sm:flex"
                delay="0.6s"
              />
              <MetricCard 
                value="Global" 
                label="Enterprise Ready" 
                color="purple" 
                className="absolute bottom-1/2 -right-12 translate-y-1/2 hidden lg:flex"
                delay="0.8s"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
