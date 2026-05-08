import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1020]/80 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Design Cradle Logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Design Cradle
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-slate-300 font-medium">
          <li>
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
          </li>
          <li>
            <a href="#community" className="hover:text-white transition">
              Community
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-white font-semibold hover:scale-105 transition shadow-lg shadow-cyan-500/20">
            <a
              href="https://chat.whatsapp.com/BB1uwIqgihwElrtBJ6n5pA"
              className="block hover:text-white"
            >
              Join Community
            </a>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0B1020] border-t border-white/10 px-6 py-6 space-y-6 text-slate-300">
          <a href="#features" className="block hover:text-white">
            Features
          </a>
          <a href="#community" className="block hover:text-white">
            Community
          </a>
          <a href="#contact" className="block hover:text-white">
            Contact
          </a>

          <button className="w-full mt-4 px-6 py-3 rounded-full bg-linear-to-r from-violet-600 to-cyan-400 text-white font-semibold">
            <a
              href="https://chat.whatsapp.com/BB1uwIqgihwElrtBJ6n5pA"
              className="block hover:text-white"
            >
              Join Community
            </a>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
