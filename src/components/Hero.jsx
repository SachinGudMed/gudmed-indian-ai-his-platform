const DiagCard = ({ icon, title, sub, side }) => {
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

        ${
          side === "in"
            ? "border-[#E8B84B]/20 hover:border-[#E8B84B]/40"
            : "border-[#0D9488]/20 hover:border-[#0D9488]/40"
        }

        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
      `}
    >
      <div className="flex items-start gap-3">
        <div className="text-lg mt-[2px]">{icon}</div>

        <div className="flex-1">
          <div className="text-sm sm:text-[15px] font-semibold text-white group-hover:text-white">
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
  <section className="min-h-screen bg-[#2E4168] flex flex-col justify-center items-center px-[5%] pt-28 pb-20 relative overflow-hidden text-center">

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
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E8B84B]/30 bg-[#E8B84B]/10 mb-8">
        <span className="text-xs sm:text-sm font-medium text-[#E8B84B] tracking-wide">
          India's AI-Powered Hospital Information System
        </span>
      </div>

      {/* HEADING */}
      <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
        AI That Works
        <span className="block bg-gradient-to-r from-[#1A6BAD] to-[#0D9488] text-transparent bg-clip-text">
          For Your Hospital.
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        GudMed is India's AI-powered clinical documentation and Hospital Information System (HIS) platform.
        It sits as the AI intelligence layer above your existing HIS/EMR, capturing clinical inputs
        and converting them into ABDM-ready, insurance-ready structured medical outputs automatically.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a
          href="#demo"
          className="bg-[#1A6BAD] hover:bg-[#2278BB] text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/30"
        >
          🚀 See It Live
        </a>

        <a
          href="#inputs"
          className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-medium transition"
        >
          How It Works →
        </a>
      </div>

      {/* ARCHITECTURE */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-8 backdrop-blur-xl">

        <div className="text-[11px] sm:text-xs tracking-[3px] uppercase text-white/40 mb-8">
          Platform Architecture
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">

          {/* INPUTS */}
          <div className="flex flex-col gap-4 text-left lg:text-right">
            <div className="text-xs tracking-[2px] text-[#E8B84B] uppercase">
              Inputs
            </div>

            <DiagCard side="in" icon="🎙️" title="Doctor Voice" sub="Any language · Any accent" />
            <DiagCard side="in" icon="📋" title="Nurse Charts" sub="Vitals · Observations · MAR" />
            <DiagCard side="in" icon="📄" title="Clinical Notes" sub="IPD · OPD · ICU · Emergency" />
            <DiagCard side="in" icon="✍️" title="Consent Forms" sub="Surgical · Anaesthetic · General" />
          </div>

          {/* CENTER AI */}
          <div className="flex flex-col items-center justify-center gap-4">

            <div className="text-[#E8B84B] text-2xl">
              →
            </div>

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#1A6BAD] bg-[#0B1B33] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(26,107,173,0.25)]">
              <div className="text-xs font-bold text-white tracking-wide">
                GUDMED AI
              </div>
              <div className="text-xs text-white/40">
                Processes
              </div>
            </div>

            <div className="text-[#0D9488] text-2xl">
              ←
            </div>

          </div>

          {/* OUTPUTS */}
          <div className="flex flex-col gap-4 text-left">
            <div className="text-xs tracking-[2px] text-[#0D9488] uppercase">
              Outputs Into HIS
            </div>

            <DiagCard side="out" icon="📋" title="Discharge Summary" sub="Structured · ICD-10 coded" />
            <DiagCard side="out" icon="💊" title="Prescription (Rx)" sub="Patient WhatsApp + HIS" />
            <DiagCard side="out" icon="📊" title="Nursing Records" sub="Shift notes · ICU charts" />
            <DiagCard side="out" icon="🏛️" title="Insurance / ABDM" sub="Auto-submitted · ABDM ready" />
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Hero;
