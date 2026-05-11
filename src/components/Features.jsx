import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Design Feedback That Actually Helps",
      desc: "Get real feedback on your UI/UX from designers who understand systems, not opinions.",
      icon: "🎨",
    },
    {
      title: "Build With Developers",
      desc: "Find devs to collaborate with and turn ideas into real working products.",
      icon: "💻",
    },
    {
      title: "Showcase Your Projects",
      desc: "Share your work-in-progress and finished builds with a focused creative community.",
      icon: "🚀",
    },
    {
      title: "Learn Through Building",
      desc: "Improve by working on real ideas instead of just theory and tutorials.",
      icon: "🧠",
    },
    {
      title: "Find Teammates Fast",
      desc: "Connect with designers and developers ready to build something real.",
      icon: "🤝",
    },
    {
      title: "Stay Inspired Daily",
      desc: "See what others are building and stay motivated inside a creator-driven space.",
      icon: "✨",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 text-white bg-[#0B1020]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
            Cradle
          </span>
          ?
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A focused community where designers and developers actually build,
          share, and grow together.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto
  opacity-0 translate-y-6 animate-[fadeIn_0.8s_ease-out_forwards]"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5
             hover:bg-white/10 transition duration-300
             hover:shadow-lg hover:shadow-violet-500/10"
          >
            {/* Icon with same gradient feel as Hero */}
            <div className="text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
