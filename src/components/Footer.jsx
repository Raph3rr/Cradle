import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#0B1020] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-white font-semibold text-lg">Cradle Community</div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#community" className="hover:text-white transition">
            Community
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Cradle. Built for creators.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
