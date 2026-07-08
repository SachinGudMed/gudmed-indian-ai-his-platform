const metrics = [
  {
    num: '₹18 Lakh+',
    title: 'Annual Clinical Time Savings',
    desc: 'Recover valuable physician time by automating clinical documentation, allowing doctors to spend more time on patient care.',
  },
  {
    num: '25%',
    title: 'Lower Insurance Claim Rejections',
    desc: 'Structured ICD-10 documentation improves claim accuracy and helps reduce delays in insurance processing.',
  },
  {
    num: 'Zero',
    title: 'Documentation Audit Gaps',
    desc: 'Complete, standardized clinical records support audit readiness and regulatory compliance.',
  },
  {
    num: '14 days',
    title: 'Go Live in Just 14 Days',
    desc: 'Fast implementation with secure integration, staff training, and dedicated onboarding support.',
  },
];

const ROI = () => (
  <section className="py-[88px] px-[5%]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold  uppercase text-[#2E4168] mb-3">Business Impact</div>
      <h2 className="font-poppins text-[clamp(28px,3.5vw,46px)] font-black text-[#2E4168] leading-[1.12] mb-4">
        See the Operational Impact of GudMed AI
      </h2>
      <p className="text-base text-[#2E4168] max-w-[620px] leading-[1.65] mb-12">
        Measurable outcomes across clinical time, compliance, revenue, and patient satisfaction — from day one of deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {metrics.map(({ num, title, desc }) => (
          <div
            key={title}
            className="bg-[#2E4168] border border-[#2E4168] rounded-2xl p-7 transition-all cursor-pointer"
          >
            <div className="font-poppins text-[42px] font-black text-white leading-none mb-3">{num}</div>
            <div className="text-[15px] font-bold text-white mb-2">{title}</div>
            <div className="text-[13px] text-white/55 leading-[1.6]">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ROI;
