const outputs = [
  {
    icon: '📋',
    dest: 'Into Your HIS + Patient Record',
    title: 'Discharge Summary',
    desc: 'Complete structured discharge summary with ICD codes, procedures, medications, and follow-up — stored in HIS and sent to patient on WhatsApp.',
  },
  {
    icon: '💊',
    dest: 'Patient WhatsApp + Pharmacy + HIS',
    title: 'Prescription (Rx)',
    desc: 'Digital prescription in Hindi, regional languages, and English. Sent to patient\'s phone. Pushed to connected pharmacy. Stored in patient record. Insurance coded.',
  },
  {
    icon: '📊',
    dest: 'HIS Nursing Module + Doctor Alerts',
    title: 'Nursing Notes & Charts',
    desc: 'Shift notes, ICU charts, MAR records — structured and stored in the nursing module. Abnormal values trigger physician alert in real time.',
  },
  {
    icon: '✍️',
    dest: 'Patient Record + Audit Trail',
    title: 'Signed Consent Documents',
    desc: 'E-signed, timestamped, biometrically verified consent. Stored securely with complete chain of custody.',
  },
  {
    icon: '💳',
    dest: 'Star Health · ICICI Lombard · MediAssist · HDFC Ergo',
    title: 'Insurance Pre-Auth & Claims',
    desc: 'ICD-coded, CPT-mapped insurance package submitted automatically to all connected Indian TPA systems. Pre-auth decision time drops from days to hours.',
  },
  {
    icon: '🏛️',
    dest: 'ABDM Health Exchange',
    title: 'ABDM Submission',
    desc: 'All clinical records submitted to India\'s Ayushman Bharat Digital Mission (ABDM) platform automatically. Cross-facility patient record visibility enabled via ABHA. Regulatory compliance automated.',
  },
];

const WhatFlowsOut = () => (
  <section id="outputs" className="py-[88px] px-[5%] bg-white">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#2E4168] mb-3">Structured Outputs</div>
      <h2 className="font-poppins text-[clamp(28px,3.5vw,46px)] font-black text-[#2E4168] leading-[1.12] mb-4">
        Every Output Goes Exactly<br />Where It Needs To
      </h2>
      <p className="text-base text-[#64748B] max-w-[620px] leading-[1.65] mb-12">
        GudMed doesn't just create documents — it distributes them to every destination simultaneously, automatically.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {outputs.map(({ icon, dest, title, desc }) => (
          <div
            key={title}
            className="bg-[#2E4168] border border-[#E2E8F0] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,12,24,0.2)] hover:border-[#2E4168] group"
          >
            <span className="absolute top-3 right-3 text-[9px] font-black tracking-[2px] text-white bg-[#0D9488]/8 border border-[#0D9488]/20 rounded px-[7px] py-[2px]">
              OUTPUT
            </span>
            <div className="text-[26px] mb-3">{icon}</div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-white mb-2 before:content-['→']">
              <span>{dest}</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
            <p className="text-[13px] text-gray-400 leading-[1.55]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatFlowsOut;
