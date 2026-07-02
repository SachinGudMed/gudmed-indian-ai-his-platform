const proofs = [
  { label: 'AIIMS New Delhi', sub: 'Clinical Validation & Co-Publication' },
  { label: 'IIT Indore', sub: 'DRISHTI CPS Foundation Investment' },
  { label: '95%+ Accuracy', sub: 'Peer-Reviewed · 500 Real Clinical Cases' },
  { label: '8+ Hospitals Live', sub: 'Max · Apollo · Sir Ganga Ram · Marengo Asia' },
];

const SocialProof = () => (
  <section className="py-[60px] px-[5%] bg-[#F8FAFD]">
    <div className="max-w-[1100px] mx-auto text-center">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#1A6BAD] mb-5">Validated &amp; Deployed</div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {proofs.map(({ label, sub }, i) => (
          <div key={label} className="flex items-center gap-10">
            <div className="text-center">
              <div className="text-sm font-bold text-[#1E2A3B]">{label}</div>
              <div className="text-[12px] text-[#64748B] mt-[2px]">{sub}</div>
            </div>
            {i < proofs.length - 1 && (
              <div className="hidden md:block w-px h-9 bg-[#E2E8F0]" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
