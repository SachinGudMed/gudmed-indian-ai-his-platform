const metrics = [
  {
    num: '₹18 Lakh+',
    title: 'Annual Physician Time Recovered (100-bed hospital)',
    desc: '13 hours of documentation time saved daily × 365 days × Indian consultant costs. Documentation burden shifts from physicians to AI.',
  },
  {
    num: '25%',
    title: 'Reduction in TPA Rejection Rate',
    desc: 'ICD-10 coded, structured, compliant documentation eliminates the most common reasons for insurance claim rejection in Indian hospitals.',
  },
  {
    num: 'Zero',
    title: 'NABH Audit Findings on Documentation',
    desc: 'Every nursing note, discharge summary, and consent form 100% complete, signed, and timestamped before finalisation. Audit failure risk eliminated.',
  },
  {
    num: '14 days',
    title: 'From Contract to First Live Discharge Summary',
    desc: 'The fastest clinical AI implementation timeline in the Indian hospital market — with on-site team, regional language support, and zero disruption to existing workflows.',
  },
];

const ROI = () => (
  <section className="py-[88px] px-[5%] bg-[#2E4168]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#E8B84B] mb-3">Return on Investment</div>
      <h2 className="font-syne text-[clamp(28px,3.5vw,46px)] font-black text-white leading-[1.12] mb-4">
        GudMed Pays for Itself<br />in Month One
      </h2>
      <p className="text-base text-white/60 max-w-[620px] leading-[1.65] mb-12">
        Measurable outcomes across clinical time, compliance, revenue, and patient satisfaction — from day one of deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {metrics.map(({ num, title, desc }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 rounded-2xl p-7 transition-all hover:bg-white/[0.09] hover:border-[#1A6BAD]/40"
          >
            <div className="font-syne text-[42px] font-black text-[#E8B84B] leading-none mb-3">{num}</div>
            <div className="text-[15px] font-bold text-white mb-2">{title}</div>
            <div className="text-[13px] text-white/55 leading-[1.6]">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ROI;
