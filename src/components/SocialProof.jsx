import {
  GraduationCap,
  Landmark,
  BadgeCheck,
  Hospital,
} from "lucide-react";

const proofs = [
  {
    icon: GraduationCap,
    label: "AIIMS New Delhi",
    sub: "Clinical Validation & Co-Publication",
  },
  {
    icon: Landmark,
    label: "IIT Indore",
    sub: "DRISHTI CPS Foundation Investment",
  },
  {
    icon: BadgeCheck,
    label: "95%+ Accuracy",
    sub: "Peer-Reviewed · 500 Real Clinical Cases",
  },
  {
    icon: Hospital,
    label: "8+ Hospitals Live",
    sub: "Max · Apollo · Sir Ganga Ram · Marengo Asia",
  },
];

const SocialProof = () => (
  <section className="bg-[#F8FAFD] px-[5%] py-[60px]">
    <div className="mx-auto max-w-[1100px] text-center">
      <div className="mb-5 text-[12px] font-bold uppercase tracking-[2.5px] text-[#1A6BAD]">
        Validated &amp; Deployed
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {proofs.map(({ icon: Icon, label, sub }, i) => (
          <div key={label} className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A6BAD]/10 text-[#1A6BAD]">
                <Icon size={28} strokeWidth={2.2} />
              </div>

              <h3 className="text-sm font-bold text-[#1E2A3B]">
                {label}
              </h3>

              <p className="mt-1 text-[12px] text-[#64748B]">
                {sub}
              </p>
            </div>

            {i < proofs.length - 1 && (
              <div className="hidden h-10 w-px bg-[#E2E8F0] md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;