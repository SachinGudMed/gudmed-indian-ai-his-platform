//Todo:- add API ready for HIS and LIS

// const systems = [
//   { name: 'Cerner', type: 'Oracle Health', status: 'HL7 FHIR Ready' },
//   { name: 'Epic', type: 'Epic Systems', status: 'HL7 FHIR Ready' },
//   { name: 'Meditech', type: 'Meditech Expanse', status: 'HL7 FHIR Ready' },
//   { name: 'Allscripts', type: 'Veradigm Health', status: 'HL7 FHIR Ready' },
//   { name: 'eHospital / Custom', type: 'Indian Govt HIS', status: 'API Integration' },
//   { name: 'Infor Cloverleaf', type: 'Integration Engine', status: 'HL7 v2.x + FHIR' },
//   { name: 'InterSystems', type: 'HealthShare', status: 'FHIR R4 Ready' },
//   { name: 'Any HIS', type: 'Custom API Build', status: 'Scoped in 2 weeks' },
// ];

const HISIntegration = () => (
  <section id="integration" className="py-[88px] px-[5%] bg-[#F8FAFD]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold tracking-[2.5px] uppercase text-[#1A6BAD] mb-3">HIS Compatibility</div>
      <h2 className="font-syne text-[clamp(28px,3.5vw,46px)] font-black text-[#1E2A3B] leading-[1.12] mb-4">
        Works With Your Existing<br />Hospital Information System
      </h2>
      <p className="text-base text-[#64748B] max-w-[620px] leading-[1.65] mb-12">
        GudMed integrates via HL7 FHIR — the international health data standard. No rip-and-replace. No downtime. No retraining your IT team.
      </p>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {systems.map(({ name, type, status }) => (
          <div
            key={name}
            className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-center transition-all hover:border-[#1A6BAD] hover:shadow-[0_4px_24px_rgba(6,12,24,0.12)]"
          >
            <div className="text-sm font-black text-[#1E2A3B] mb-1">{name}</div>
            <div className="text-[12px] text-[#64748B]">{type}</div>
            <span className="inline-block mt-2 text-[10px] font-bold text-[#10B981] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-[2px] rounded">
              {status}
            </span>
          </div>
        ))}
      </div> */}

      <div className="bg-[#1A6BAD]/6 border border-[#1A6BAD]/20 rounded-2xl p-6 flex items-center gap-5">
        <span className="text-[32px] flex-shrink-0">⚡</span>
        <div>
          <div className="text-[15px] font-bold text-[#1E2A3B] mb-1">ABDM &amp; ABHA Integration Built In</div>
          <div className="text-[13px] text-[#64748B] leading-[1.5]">
            GudMed is pre-built for India's Ayushman Bharat Digital Mission (ABDM) health data exchange and ABHA-linked patient records. Clinical data submitted automatically — zero additional development required from your IT team.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HISIntegration;
