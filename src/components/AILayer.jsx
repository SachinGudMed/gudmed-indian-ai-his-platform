import {
  Brain,
  Tags,
  ShieldCheck,
  Pill,
  RefreshCw,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: 'Clinical Natural Language Processing',
    desc: 'Understands doctor dictation, nursing notes, medical abbreviations, and multilingual clinical conversations to generate structured, searchable, and accurate patient documentation.',
  },
  {
    icon: Tags,
    title: 'Automated Medical Coding',
    desc: 'Automatically assigns ICD-10, CPT, and DRG codes to diagnoses and procedures, reducing manual coding errors while accelerating hospital billing and insurance claims..',
  },
  {
    icon: ShieldCheck,
    title: 'Healthcare Compliance Automation',
    desc: 'Continuously validates clinical records against NABH, NABL, and ABDM standards, ensuring complete documentation, audit readiness, and regulatory compliance.',
  },
  {
    icon: Pill,
    title: 'Medication Safety Intelligence',
    desc: 'Validates prescriptions using CDSCO-approved drug references, checking interactions, dosage accuracy, allergies, and patient-specific clinical risks.',
  },
  {
    icon: RefreshCw,
    title: 'Seamless HIS & EMR Integration',
    desc: 'Automatically sync structured clinical records with your Hospital Information System, EMR, insurance portals, and ABDM using HL7 FHIR interoperability standards.',
  },
];

const AILayer = () => (
  <section className="py-[88px] px-[5%]">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-[12px] font-bold  uppercase text-[#2E4168] mb-3">AI Clinical Intelligence</div>
      <h2 className="font-poppins text-[clamp(28px,3.5vw,46px)] font-black text-[#2E4168] leading-[1.12] mb-4">
        AI That Understands Clinical Workflows, <br /> Not Just Data
      </h2>
      <p className="text-base text-[#2E4168] max-w-[620px] leading-[1.65] mb-12">
        GudMed's AI-powered clinical intelligence transforms unstructured healthcare data into accurate, structured, and actionable medical records. From medical coding and clinical documentation to drug safety checks, compliance validation, and HIS integration, every workflow is automated to improve efficiency, reduce errors, and support better patient care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#2E4168] border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-200 cursor-pointer"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1A6BAD] to-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="mb-4">
              <Icon size={30} className="text-gray-400" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
            <p className="text-[13px] text-white/55 leading-[1.6]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AILayer;
