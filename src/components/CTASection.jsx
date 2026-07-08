import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');

  return (
    <section
      id="demo"
      className="py-[88px] px-[5%] text-center bg-[#2E4168]"
      // style={{ background: 'linear-gradient(135deg,#0D1F3C,#060C18)' }}
    >
      <h2 className="font-poppins text-[clamp(28px,4vw,52px)] font-black text-white mb-5 tracking-tight">
        AI That Works For Your Hospital.<br />Starting in 14 Days.
      </h2>
      <p className="text-[17px] text-white/65 max-w-[560px] mx-auto mb-10">
        Book a live platform demo with the GudMed India team. We'll walk through every input-to-output workflow using scenarios from your own specialities.
      </p>

      <div className="flex gap-3 flex-wrap justify-center max-w-[500px] mx-auto mb-7">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your hospital email address"
          className="flex-1 min-w-[220px] px-5 py-[15px] rounded-xl border border-white/20 bg-white/7 text-white text-[15px] placeholder-white/40 outline-none focus:border-[#E8B84B] transition-colors"
        />
        <button className="bg-white text-[#2E4168] px-7 py-[15px] rounded-xl border-none font-poppins font-black text-[15px] whitespace-nowrap cursor-pointer transition-all hover:-translate-y-px">
          Request Demo →
        </button>
      </div>

      <div className="flex items-center justify-center gap-6 flex-wrap">
        <span className="text-[13px] text-white/55 flex items-center gap-2">
          ✉️ <strong className="text-white/85">cs@gudmed.in</strong>
        </span>
        <span className="text-[13px] text-white/55 flex items-center gap-2">
          📱 <strong className="text-white/85">+91-9999196828</strong>
        </span>
        <span className="text-[13px] text-white/55 flex items-center gap-2">
          🌐 <strong className="text-white/85">www.gudmed.in</strong>
        </span>
      </div>
    </section>
  );
};

export default CTASection;
