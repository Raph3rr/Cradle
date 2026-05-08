import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0B1020] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to join the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
            community?
          </span>
        </h2>

        <p className="text-slate-400 mt-4">
          Connect with designers and developers building real projects together.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 font-semibold hover:scale-105 transition">
            <a
              href="https://chat.whatsapp.com/BB1uwIqgihwElrtBJ6n5pA"
              className="block hover:text-white"
            >
              Join Cradle
            </a>
          </button>

          <a
            href="mailto:hello@cradle.com"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Small info */}
        <p className="text-slate-500 text-sm mt-8">
          We usually respond within 24–48 hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
