const capabilities = [
  {
    icon: '🧠',
    title: 'Clinical Natural Language Processing',
    desc: 'Understands medical abbreviations, specialty terminology, Hindi, regional Indian languages and English clinical language. Extracts diagnoses, medications, procedures, and follow-up instructions.',
  },
  {
    icon: '🏷️',
    title: 'ICD-10 & CPT Auto-Coding',
    desc: 'Every diagnosis and procedure automatically mapped to the correct ICD-10 code. CPT codes for billing. DRG classification for TPA and insurance. Zero manual coding.',
  },
  {
    icon: '✅',
    title: 'Compliance Validation Engine',
    desc: 'Every output checked against NABH, NABL, and ABDM (Ayushman Bharat Digital Mission) requirements before finalisation. Mandatory fields enforced. Incomplete records blocked. Audit trail built automatically.',
  },
  {
    icon: '🌐',
    title: 'Hindi & Regional Language Translation',
    desc: 'Patient-facing documents generated in Hindi, English, and regional Indian languages simultaneously. Clinical records in English. Cultural context applied — not just literal translation.',
  },
  {
    icon: '💊',
    title: 'Indian Formulary & Drug Safety',
    desc: 'Every medication cross-referenced against the CDSCO-approved Indian drug formulary. Drug interactions checked. Dosing verified against patient weight and organ function.',
  },
  {
    icon: '🔄',
    title: 'HIS Write-Back & Distribution',
    desc: 'Structured output written into your HIS via HL7 FHIR. Simultaneously distributed to patient, insurance portal, ABDM (Ayushman Bharat Digital Mission), and clinical team. One process, every destination.',
  },
];

const AILayer = () => (
  <section className="py-[88px] px-[5%] bg-[#2E4168]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#E8B84B] mb-3">The AI Engine</div>
      <h2 className="font-syne text-[clamp(28px,3.5vw,46px)] font-black text-white leading-[1.12] mb-4">
        What GudMed AI Does<br />With Your Clinical Data
      </h2>
      <p className="text-base text-white/60 max-w-[620px] leading-[1.65] mb-12">
        Six AI capabilities working simultaneously — so every piece of clinical data becomes structured, compliant, and actionable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-200 hover:bg-white/[0.08] hover:border-[#1A6BAD]/50 group"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1A6BAD] to-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="text-[26px] mb-4">{icon}</div>
            <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
            <p className="text-[13px] text-white/55 leading-[1.6]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AILayer;
