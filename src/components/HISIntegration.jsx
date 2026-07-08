const systems = [
  {
    name: "API Ready for HIS",
    type: "Hospital Information System",
    status: "HL7 FHIR Compatible",
  },
  {
    name: "API Ready for LIS",
    type: "Laboratory Information System",
    status: "REST API Enabled",
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

      <div className="mb-3 text-[12px] font-bold uppercase  text-[#2E4168]">
        Healthcare System Integration
      </div>

      <h2 className="mb-4 font-poppins text-[clamp(28px,3.5vw,46px)] font-black leading-[1.12] text-[#2E4168]">
        Seamlessly Integrates with Your <br /> Existing Healthcare Systems
      </h2>

      <p className="mb-12 max-w-[620px] text-base leading-[1.65] text-[#64748B]">
        GudMed integrates seamlessly with your Hospital Information System (HIS), Laboratory Information System (LIS), Electronic Medical Records (EMR), and other healthcare applications using HL7 FHIR, secure APIs, and industry-standard interoperability protocols. Deploy without replacing your existing software, ensuring faster implementation, secure data exchange, and uninterrupted clinical workflows.
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
            Built for India's Digital Health Ecosystem
          </div>

          <div className="text-[13px] leading-[1.5] text-[#64748B]">
           GudMed is fully compatible with the Ayushman Bharat Digital Mission (ABDM) and supports ABHA-based health record exchange. Using national interoperability standards, hospitals can securely share clinical information, improve care coordination, and meet India's evolving digital healthcare compliance requirements.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HISIntegration;