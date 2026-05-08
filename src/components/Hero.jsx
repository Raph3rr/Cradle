import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B1020] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-3xl top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300">
          🚀 Built for Designers & Developers
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build. Learn.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
            Connect.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
          Cradle Community is a space where designers and developers come
          together to share ideas, build projects, and grow together in modern
          tech.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-white font-semibold hover:scale-105 transition">
            <a
              href="https://chat.whatsapp.com/BB1uwIqgihwElrtBJ6n5pA"
              className="block hover:text-white"
            >
              Join Community
            </a>
          </button>

          <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
            <a href="#features" className="block hover:text-white">
              Explore Features
            </a>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400 text-sm">
          <div>
            <span className="text-white font-semibold">500+</span> Members
          </div>

          <div>
            <span className="text-white font-semibold">100+</span> Projects
            Shared
          </div>

          <div>
            <span className="text-white font-semibold">24/7</span> Active
            Community
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
