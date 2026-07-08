import {
  Building2,
  FlaskConical,
  Database,
  ShieldCheck,
  HandCoins,
} from "lucide-react";

const badges = [
  { icon: Building2, title: 'NABH', sub: 'National Hospital Accreditation' },
  { icon: FlaskConical, title: 'NABL', sub: 'Laboratory Accreditation' },
  // { icon: '🌍', title: 'JCI', sub: 'International Accreditation' },
  { icon: Database, title: 'ABDM', sub: 'Ayushman Bharat Digital Mission' },
  { icon: ShieldCheck, title: 'DPDP Act', sub: 'India Data Protection' },
  { icon: HandCoins, title: 'TPA Networks', sub: 'Star Health · ICICI Lombard · MediAssist' },
];

const IndiaCompliance = () => (
  <div className="bg-[#2E4168] py-[60px] px-[5%]">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-poppins text-[28px] font-black text-white text-center mb-9">
        Built for India's Healthcare Compliance Standards
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {badges.map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="bg-white/7 border border-white/14 rounded-xl px-6 py-4 text-center min-w-[160px] transition-all hover:bg-white/12 hover:border-[#E8B84B]/35"
          >
            <div className="mb-2 flex justify-center">
              <Icon size={24} className="text-gray-400" />
            </div>
            <div className="text-[13px] font-bold text-white mb-[2px]">{title}</div>
            <div className="text-[11px] text-white/45">{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default IndiaCompliance;
