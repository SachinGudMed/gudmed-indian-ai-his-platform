import logo from "../assets/FullLogo_Transparent.png";
const Footer = () => (
  <footer className="bg-gray-300 py-7 px-[5%] flex items-center justify-between flex-wrap gap-4">
    <div className="font-syne text-base font-black text-white">
      <a href="#">
        <img
                    src={logo}
                    alt="GudMed"
                    className="h-50 w-auto"
                  />
      </a>
    </div>
    <nav className="flex gap-5">
      {['Discharge AI', 'Voice Rx', 'Nursing Notes', 'Consent Docs'].map(link => (
        <a key={link} href="#" className="text-black text-[13px] hover:text transition-colors no-underline">
          {link}
        </a>
      ))}
    </nav>
    <div className="text-[12px] text-black">
      © 2025 GudMed (Gud Medicare Solutions Pvt Ltd) · MM Tower, Sector 18, Gurugram · www.gudmed.in
    </div>
  </footer>
);

export default Footer;
