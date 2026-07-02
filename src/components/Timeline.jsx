const steps = [
  {
    n: 1,
    week: 'Week 1',
    title: 'Discovery & Integration Scoping',
    desc: 'HIS audit, FHIR connection setup, compliance requirement mapping, India data residency (DPDP Act) configuration.',
  },
  {
    n: 2,
    week: 'Week 1–2',
    title: 'Deployment & Configuration',
    desc: 'GudMed AI modules deployed. Templates configured for your specialties. Regional language translations verified by clinical team.',
  },
  {
    n: 3,
    week: 'Week 2',
    title: 'Staff Training',
    desc: '1-day training for clinical staff. Hindi and English sessions. Practice with live patient scenarios. Support hotline active.',
  },
  {
    n: 4,
    week: 'Day 14',
    title: 'Go Live',
    desc: 'Full production deployment. On-site GudMed team for first week. Performance monitoring. First discharge summaries and nursing notes live.',
  },
];

const Timeline = () => (
  <section className="py-[88px] px-[5%] bg-[#F8FAFD]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#1A6BAD] mb-3">Implementation</div>
      <h2 className="font-syne text-[clamp(28px,3.5vw,46px)] font-black text-[#1E2A3B] leading-[1.12] mb-4">
        Live in Your Hospital in 14 Days
      </h2>
      <p className="text-base text-[#64748B] max-w-[620px] leading-[1.65] mb-12">
        GudMed's implementation team deploys on-site across India. Your clinical team is live and trained within two weeks of contract signing.
      </p>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* connector line — desktop only */}
        <div
          className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-[2px]"
          style={{ background: 'linear-gradient(90deg,#1A6BAD,#0D9488)' }}
        />

        {steps.map(({ n, week, title, desc }) => (
          <div key={n} className="text-center px-4 relative">
            <div
              className="w-11 h-11 rounded-full bg-[#1A6BAD] text-white flex items-center justify-center font-syne text-base font-black mx-auto mb-5 relative z-10"
              style={{ boxShadow: '0 0 0 5px #F8FAFD, 0 0 0 7px rgba(26,107,173,0.3)' }}
            >
              {n}
            </div>
            <div className="text-[11px] font-bold text-[#1A6BAD] tracking-widest uppercase mb-2">{week}</div>
            <div className="text-sm font-bold text-[#1E2A3B] mb-2">{title}</div>
            <div className="text-[12px] text-[#64748B] leading-[1.5]">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
