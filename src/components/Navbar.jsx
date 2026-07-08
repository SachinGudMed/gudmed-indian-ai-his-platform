import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Gudmed1-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-300 backdrop-blur-md border-b border-[#1A6BAD]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="GudMed"
            className="h-10 md:h-10 w-auto mt-2"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#inputs"
            className="text-black hover:text transition hover:underline"
          >
            Inputs
          </a>

          <a
            href="#outputs"
            className="text-black hover:text transition hover:underline"
          >
            Outputs
          </a>

          <a
            href="#integration"
            className="text-black hover:text transition hover:underline"
          >
            HIS Integration
          </a>

          <a
            href="#demo"
            className="bg-[#2E4168] text-white px-5 py-2.5 rounded-lg font-semibold transition"
          >
            Book a Live Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="bg-[#08101d] border-t border-white/10 px-5 py-5 flex flex-col gap-5">
          <a
            href="#inputs"
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-[#E8B84B]"
          >
            Inputs
          </a>

          <a
            href="#outputs"
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-[#E8B84B]"
          >
            Outputs
          </a>

          <a
            href="#integration"
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-[#E8B84B]"
          >
            HIS Integration
          </a>

          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="bg-[#1A6BAD] hover:bg-[#2278BB] text-white rounded-lg py-3 text-center font-semibold"
          >
            Get Demo →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;