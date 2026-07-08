const systems = [
  {
    name: "API Ready for HIS",
    type: "Hospital Information System",
    status: "HL7 FHIR Ready",
  },
  {
    name: "API Ready for LIS",
    type: "Laboratory Information System",
    status: "REST API Ready",
  },
  {
    name: "ABDM Compatible",
    type: "Ayushman Bharat Digital Mission",
    status: "ABHA Enabled",
  },
];

const HISIntegration = () => (
  <section
    id="integration"
    className="bg-[#F8FAFD] px-[5%] py-[88px]"
  >
    <div className="mx-auto max-w-[1100px]">
      {/* Heading */}

      <div className="mb-3 text-[12px] font-bold uppercase tracking-[2.5px] text-[#2E4168]">
        HIS Compatibility
      </div>

      <h2 className="mb-4 font-poppins text-[clamp(28px,3.5vw,46px)] font-black leading-[1.12] text-[#2E4168]">
        Works With Your Existing
        <br />
        Hospital Information System
      </h2>

      <p className="mb-12 max-w-[620px] text-base leading-[1.65] text-[#64748B]">
        GudMed integrates seamlessly with Hospital Information
        Systems (HIS), Laboratory Information Systems (LIS), and
        healthcare platforms using secure APIs and HL7 FHIR
        standards. No rip-and-replace. No downtime.
      </p>

      {/* Integration Cards */}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systems.map(({ name, type, status }) => (
          <div
            key={name}
            className="rounded-xl border border-[#E2E8F0] bg-white p-5 text-center transition-all duration-300 hover:border-[#1A6BAD] hover:shadow-[0_4px_24px_rgba(6,12,24,0.12)]"
          >
            <div className="mb-1 text-sm font-black text-[#1E2A3B]">
              {name}
            </div>

            <div className="text-[12px] text-[#64748B]">
              {type}
            </div>

            <span className="mt-3 inline-block rounded border border-[#A7F3D0] bg-[#ECFDF5] px-2 py-[3px] text-[10px] font-bold text-[#2E4168]">
              {status}
            </span>
          </div>
        ))}
      </div>

      {/* ABDM Card */}

      <div className="flex items-center gap-5 rounded-2xl border border-[#1A6BAD]/20 bg-[#1A6BAD]/6 p-6">
        <span className="flex-shrink-0 text-[32px]">⚡</span>

        <div>
          <div className="mb-1 text-[15px] font-bold text-[#1E2A3B]">
            ABDM &amp; ABHA Integration Built In
          </div>

          <div className="text-[13px] leading-[1.5] text-[#64748B]">
            GudMed is built for India's Ayushman Bharat Digital
            Mission (ABDM) ecosystem with seamless ABHA integration.
            Clinical documents can be securely exchanged across
            connected healthcare systems while maintaining compliance
            with national interoperability standards.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HISIntegration;