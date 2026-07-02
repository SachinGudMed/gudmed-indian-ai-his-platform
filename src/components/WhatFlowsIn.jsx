const inputs = [
  {
    icon: '🎙️',
    title: 'Voice — Doctor Dictation',
    desc: 'Doctor speaks during consultation or ward round. GudMed transcribes, structures, and maps to the patient record in real time. Any language.',
  },
  {
    icon: '📋',
    title: 'Nurse Structured Input',
    desc: 'Vitals, observations, medication administration, and care notes entered via tablet or mobile. AI structures into compliant nursing documentation format.',
  },
  {
    icon: '📄',
    title: 'Clinical Notes & IPD Records',
    desc: 'Admission notes, progress notes, procedure documentation — all captured and linked to the patient\'s active record and discharge workflow.',
  },
  {
    icon: '✍️',
    title: 'Consent Workflows',
    desc: 'Consent triggered by clinical order. Patient receives digital form on phone. E-signature captured with biometric verification. Stored instantly.',
  },
];

const WhatFlowsIn = () => (
  <section id="inputs" className="py-[88px] px-[5%] bg-[#F8FAFD]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#1A6BAD] mb-3">Clinical Inputs</div>
      <h2 className="font-syne text-[clamp(28px,3.5vw,46px)] font-black text-[#1E2A3B] leading-[1.12] mb-4">
        GudMed Captures Every<br />Clinical Input — Automatically
      </h2>
      <p className="text-base text-[#64748B] max-w-[620px] leading-[1.65] mb-12">
        No forms, no typing, no templates. GudMed captures clinical data from the natural workflow of doctors, nurses, and administrators.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {inputs.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,12,24,0.2)] hover:border-[#1A6BAD] group"
          >
            <span className="absolute top-3 right-3 text-[9px] font-black tracking-[2px] text-[#E8B84B] bg-[#E8B84B]/10 border border-[#E8B84B]/25 rounded px-[7px] py-[2px]">
              INPUT
            </span>
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-sm font-bold text-[#1E2A3B] mb-2">{title}</h3>
            <p className="text-[13px] text-[#64748B] leading-[1.55]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatFlowsIn;
