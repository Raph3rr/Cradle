import React from "react";

const Community = () => {
  const posts = [
    {
      name: "Ayo Designs",
      role: "UI Designer",
      content:
        "Just finished a landing page redesign. Would love feedback on spacing and typography.",
      tag: "Design Showcase",
      avatar: "🧑🏽‍🎨",
    },
    {
      name: "Dev Malik",
      role: "Frontend Dev",
      content:
        "Looking for a designer to collaborate on a SaaS dashboard project built with React.",
      tag: "Collaboration",
      avatar: "👨🏽‍💻",
    },
    {
      name: "Chisom UI",
      role: "Product Designer",
      content:
        "What’s your opinion on dark mode vs light mode for productivity apps?",
      tag: "Discussion",
      avatar: "🎨",
    },
    {
      name: "TobiDev",
      role: "Fullstack Dev",
      content:
        "Built a task manager app with Node and React. Open to feedback and improvements.",
      tag: "Project Share",
      avatar: "🚀",
    },
  ];

  return (
    <section id="community" className="py-20 px-6 bg-[#0B1020] text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Inside the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
            Community
          </span>
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A live space where designers and developers share work, ask questions,
          and build together.
        </p>
      </div>

      {/* Feed */}
      <div className="max-w-4xl mx-auto space-y-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            {/* Top user row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">{post.avatar}</div>

              <div>
                <h4 className="font-semibold">{post.name}</h4>
                <p className="text-sm text-slate-400">{post.role}</p>
              </div>

              <span className="ml-auto text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300">
                {post.tag}
              </span>
            </div>

            {/* Content */}
            <p className="text-slate-300 leading-relaxed">{post.content}</p>

            {/* Actions */}
            <div className="flex gap-6 mt-4 text-sm text-slate-400">
              <button className="hover:text-white transition">❤️ Like</button>
              <button className="hover:text-white transition">
                💬 Comment
              </button>
              <button className="hover:text-white transition">🔖 Save</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
