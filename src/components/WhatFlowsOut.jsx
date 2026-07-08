import {
  FileCheck,
  Pill,
  ClipboardPlus,
  Signature,
  BadgeIndianRupee,
  Landmark,
} from "lucide-react";

const outputs = [
  {
    icon: FileCheck,
    dest: "HIS • Patient Record",
    title: "AI-Generated Discharge Summary",
    desc: "Automatically generate structured discharge summaries with diagnoses, ICD-10 codes, medications, procedures, and follow-up instructions. Instantly stored in your HIS and securely shared with patients.",
  },
  {
    icon: Pill,
    dest: "Patient WhatsApp + Pharmacy + HIS",
    title: "Digital e-Prescriptions",
    desc: "Create multilingual electronic prescriptions that integrate with your HIS, pharmacy systems, and patient communication channels while supporting safer medication management.",
  },
  {
    icon: ClipboardPlus,
    dest: "HIS Nursing Module + Doctor Alerts",
    title: "Digital Nursing Documentation",
    desc: "Automatically organize nursing assessments, shift handovers, medication administration records, and ICU charts into structured digital nursing documentation with real-time physician alerts.",
  },
  {
    icon: Signature,
    dest: "Patient Record + Audit Trail",
    title: "Digital Patient Consent",
    desc: "Securely capture electronic patient consent with timestamps, biometric verification, and complete audit trails for legal compliance and clinical transparency.",
  },
  {
    icon: BadgeIndianRupee,
    dest: "Star Health · ICICI Lombard · MediAssist · HDFC Ergo",
    title: "Insurance Claims Automation",
    desc: "Generate ICD-10 and CPT-ready insurance documentation that accelerates pre-authorizations, streamlines claims processing, and reduces manual administrative work.",
  },
  {
    icon: Landmark,
    dest: "ABDM Health Exchange",
    title: "ABDM Health Record Integration",
    desc: "Automatically synchronize patient health records with the Ayushman Bharat Digital Mission (ABDM), enabling secure interoperability, ABHA integration, and regulatory compliance.",
  },
];

const WhatFlowsOut = () => (
  <section id="outputs" className="py-[88px] px-[5%] bg-white">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold  uppercase text-[#2E4168] mb-3">Intelligent Clinical Outputs</div>
      <h2 className="font-poppins text-[clamp(28px,3.5vw,46px)] font-black text-[#2E4168] leading-[1.12] mb-4">
        Automatically Deliver Every Clinical  <br /> to the Right Destination
      </h2>
      <p className="text-base text-[#64748B] max-w-[620px] leading-[1.65] mb-12">
        GudMed automatically distributes discharge summaries, electronic prescriptions, nursing documentation, patient consent records, insurance claims, and ABDM-compliant health records to your Hospital Information System (HIS), EMR, pharmacies, insurance providers, and healthcare teams. Every output is structured, secure, and delivered in real time to improve operational efficiency and patient care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {outputs.map(({ icon: Icon, dest, title, desc }) => (
          <div
            key={title}
            className="bg-[#2E4168] border border-[#E2E8F0] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,12,24,0.2)] hover:border-[#2E4168] group"
          >
            <span className="absolute top-3 right-3 text-[9px] font-black tracking-[2px] text-white bg-[#0D9488]/8 border border-[#0D9488]/20 rounded px-[7px] py-[2px]">
              OUTPUT
            </span>
            <div className="mb-3">
              <Icon size={30} className="text-gray-400" />
            </div>
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
