import {
  Mic,
  ClipboardList,
  FileText,
  PenSquare,
} from "lucide-react";

const inputs = [
  {
    icon: Mic,
    title: "AI Voice Dictation for Doctors",
    desc: "Capture doctor conversations in real time with AI-powered speech recognition. Automatically convert consultations into structured clinical documentation integrated with your HIS and EMR.",
  },
  {
    icon: ClipboardList,
    title: "Digital Nursing Documentation",
    desc: "Record vitals, medication administration, observations, and nursing assessments digitally. GudMed organizes every entry into standardized nursing documentation for improved patient care and compliance.",
  },
  {
    icon: FileText,
    title: "Clinical Notes & Patient Records",
    desc: "Automatically organize admission notes, progress notes, procedure documentation, and IPD records into complete patient records accessible across your hospital.",
  },
  {
    icon: PenSquare,
    title: "Digital Patient Consent",
    desc: "Automate patient consent workflows with secure digital forms, biometric e-signatures, and instant storage—ensuring compliance, traceability, and faster approvals.",
  },
];

const WhatFlowsIn = () => (
  <section id="inputs" className="py-[88px] px-[5%] bg-[#F8FAFD]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold  uppercase text-[#2E4168] mb-3">Digital Clinical Documentation</div>
      <h2 className="font-poppins text-[clamp(28px,3.5vw,46px)] font-black text-[#2E4168] leading-[1.12] mb-4">
        Capture Every Clinical Interaction<br />with AI-Powered Documentation
      </h2>
      <p className="text-base text-[#64748B] max-w-[620px] leading-[1.65] mb-12">
        GudMed captures clinical documentation, doctor dictation, nursing records, patient consent forms, and medical notes in real time. Using AI-powered automation, every clinical interaction is converted into structured digital records that integrate seamlessly with your Hospital Information System (HIS), EMR, and existing healthcare workflows—reducing manual documentation while improving accuracy and compliance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {inputs.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#2E4168] border border-[#E2E8F0] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,12,24,0.2)] hover:border-white group"
          >
            <span className="absolute top-3 right-3 text-[9px] font-black tracking-[2px] text-white bg-[#2E4168] border border-[#E8B84B]/25 rounded px-[7px] py-[2px]">
              INPUT
            </span>

            <div className="mb-4">
              <Icon size={32} className="text-white" />
            </div>

            <h3 className="text-sm font-bold text-white mb-2">
              {title}
            </h3>

            <p className="text-[13px] text-gray-400 leading-[1.55]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatFlowsIn;
