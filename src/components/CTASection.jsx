import { useState } from 'react';
import { ArrowRight, CalendarDays, Mail, Phone } from "lucide-react";
import RequestDemoModal from './RequestDemoModal';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="demo"
      className="py-[88px] px-[5%] text-center"
    // style={{ background: 'linear-gradient(135deg,#0D1F3C,#060C18)' }}
    >
      <h2 className="font-poppins text-[clamp(28px,4vw,52px)] font-black text-[#2E4168] mb-5 tracking-tight">
        AI That Works For Your Hospital.<br />Starting in 14 Days.
      </h2>
      <p className="text-[17px] text-[#2E4168] max-w-[560px] mx-auto mb-10">
        Discover how GudMed streamlines clinical documentation, hospital workflows, and HIS integration with a personalized live demo tailored to your hospital.
      </p>

      <div className="flex gap-3 flex-wrap justify-center max-w-[500px] mx-auto mb-7">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="flex-1 min-w-[220px] px-5 py-[15px] rounded-xl border border-[#2E4168] bg-[#2E4168] text-white text-[15px] placeholder-white outline-none"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2E4168] text-white px-7 py-[15px] rounded-xl border-none font-poppins font-black text-[15px] whitespace-nowrap cursor-pointer transition-all hover:-translate-y-px"
        >
          Book a Live Demo
        </button>
      </div>

      <div className="flex items-center justify-center gap-6 flex-wrap text-[#2E4168] text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="shrink-0" />
          <span>30-Minute Personalized Demo</span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <Mail size={18} className="shrink-0" />
          <span>cs@gudmed.in</span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <Phone size={18} className="shrink-0" />
          <span>+91-9999196828</span>
        </div>
      </div>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CTASection;
