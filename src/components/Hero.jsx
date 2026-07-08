import {
  Mic,
  ClipboardList,
  FileText,
  PenSquare,
  FileCheck,
  Pill,
  ClipboardPlus,
  ShieldCheck,
} from "lucide-react";

const DiagCard = ({ icon: Icon, title, sub, side }) => {
  return (
    <div
      className={`
        group rounded-xl p-4 sm:p-5
        transition-all duration-300
        hover:scale-[1.02]
        hover:bg-white/[0.08]
        cursor-default
        bg-white/[0.04]
        border
        ${side === "in"
          ? "border-[#E8B84B]/20 hover:border-[#E8B84B]/40"
          : "border-[#0D9488]/20 hover:border-[#0D9488]/40"
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className="mt-[2px]">
          <Icon
            size={22}
            className={
              side === "in" ? "text-white" : "text-white"
            }
          />
        </div>

        <div className="flex-1">
          <div className="text-sm sm:text-[15px] font-semibold text-white">
            {title}
          </div>

          <div className="text-xs sm:text-sm text-white/50 mt-1 leading-relaxed">
            {sub}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-[5%] pt-28 pb-20 relative overflow-hidden text-center">

    {/* GRID BACKGROUND */}
    <div
      className="absolute inset-0 opacity-60 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,107,173,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,173,0.06) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* GLOW EFFECTS */}
    <div className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-3xl" />
    <div className="absolute w-[300px] h-[300px] rounded-full bottom-10 left-10 bg-yellow-400/10 blur-2xl" />
    <div className="absolute w-[300px] h-[300px] rounded-full top-20 right-10 bg-teal-400/10 blur-2xl" />

    <div className="relative z-10 max-w-[1000px] w-full">

      {/* BADGE */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#2E4168] bg-[#2E4168] mb-8">
        <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
          AI-Powered Hospital Information System • ABDM Ready • NABH Ready
        </span>
      </div>

      {/* HEADING */}
      <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2E4168] leading-tight mb-6">
        AI That Works
        <span className="block">
          For Your Hospital.
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-[#2E4168] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        GudMed is India's AI-powered clinical documentation and Hospital Information System (HIS) platform.
        It sits as the AI intelligence layer above your existing HIS/EMR, capturing clinical inputs
        and converting them into ABDM-ready, insurance-ready structured medical outputs automatically.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a
          href="#demo"
          className="bg-[#2E4168] hover:bg-[#2E4168] text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/30"
        >
          Request a Free Demo
        </a>

        <a
          href="#inputs"
          className="border border-[#2E4168] hover:border-[#2E4168] text-[#2E4168] px-8 py-4 rounded-xl font-medium transition"
        >
          How It Works →
        </a>
      </div>

      {/* ARCHITECTURE */}
      <div className="bg-[#2E4168] border border-white/10 rounded-2xl p-5 sm:p-8 backdrop-blur-xl">

        <div className="text-[11px] sm:text-xs tracking-[3px] uppercase text-white/40 mb-8">
          How GudMed AI Works
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">

          {/* INPUTS */}
          <div className="flex flex-col gap-4 text-left lg:text-right">
            <div className="text-xs tracking-[2px] text-white uppercase">
              Clinical Inputs
            </div>

            <DiagCard side="in" icon={Mic} title="AI Voice Dictation for Doctors" sub="Any accent" />
            <DiagCard side="in" icon={ClipboardList} title="Digital Nursing Documentation" sub="Vitals · Observations · MAR" />
            <DiagCard side="in" icon={FileText} title="Clinical Notes & Assessments" sub="IPD · OPD · ICU · Emergency" />
            <DiagCard side="in" icon={PenSquare} title="Digital Consent Management" sub="Surgical · Anaesthetic · General" />
          </div>

          {/* CENTER AI */}
          <div className="flex flex-col items-center justify-center gap-4">

            <div className="text-white text-2xl">
              →
            </div>

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#1A6BAD] bg-[#0B1B33] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(26,107,173,0.25)]">
              <div className="text-xs font-bold text-white tracking-wide">
                GUDMED AI
              </div>
              <div className="text-xs text-white/40">
                Engine
              </div>
            </div>

            <div className="text-white text-2xl">
              ←
            </div>

          </div>

          {/* OUTPUTS */}
          <div className="flex flex-col gap-4 text-left">
            <div className="text-xs tracking-[2px] text-white uppercase">
              AI-Generated Clinical Outputs
            </div>

            <DiagCard side="out" icon={FileCheck} title="Discharge Summary" sub="AI-Generated, Structured & ICD-10 Ready" />
            <DiagCard side="out" icon={Pill} title="Prescription (Rx)" sub="Integrated with HIS & Patient Communication" />
            <DiagCard side="out" icon={ClipboardPlus} title="Nursing Records" sub="Automated Shift Notes & ICU Documentation" />
            <DiagCard side="out" icon={ShieldCheck} title="Insurance / ABDM" sub="ABDM-Compliant Records & Insurance Documentation" />
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Hero;
