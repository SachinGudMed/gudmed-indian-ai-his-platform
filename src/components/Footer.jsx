import logo from "../assets/FullLogo_Transparent.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-16 px-[5%]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <a href="#">
              <img
                src={logo}
                alt="GudMed"
                className="h-32 w-auto"
              />
            </a>

            <p className="mt-5 text-sm leading-7 text-gray-700">
              AI-powered clinical documentation platform for Indian
              hospitals. Automating discharge summaries, nursing
              notes, consent forms, and healthcare workflows.
            </p>
          </div>

          {/* Product */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-800">
              Product
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  href="#how"
                  className="transition hover:text-[#1A6BAD]"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#compliance"
                  className="transition hover:text-[#1A6BAD]"
                >
                  Compliance
                </a>
              </li>

              <li>
                <a
                  href="#integration"
                  className="transition hover:text-[#1A6BAD]"
                >
                  Integration
                </a>
              </li>

              <li>
                <a
                  href="#roi"
                  className="transition hover:text-[#1A6BAD]"
                >
                  ROI
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-800">
              Company
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-800">
              Connect
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  WhatsApp
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  Instagram
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#1A6BAD]">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-gray-400 pt-6 text-center text-sm text-gray-700">
          © 2025 <strong>GudMed (Gud Medicare Solutions Pvt Ltd)</strong> ·
          MM Tower, Sector 18, Gurugram · www.gudmed.in
        </div>
      </div>
    </footer>
  );
};

export default Footer;