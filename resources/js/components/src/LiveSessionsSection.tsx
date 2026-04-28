import { motion } from "framer-motion";
import { Play, Users, Zap, Calendar } from "lucide-react";

const sessions = [
  {
    title: "Facebook Ads Strategy Deep Dive",
    type: "Live Workshop",
    duration: "90 min",
    attendees: "25+",
    image: "/images/1.jpeg",
  },
  {
    title: "Funnel Building Masterclass",
    type: "1-on-1 Session",
    duration: "60 min",
    attendees: "Private",
    image: "/images/2.png",
  },
  {
    title: "Ad Copy Writing Bootcamp",
    type: "Group Session",
    duration: "120 min",
    attendees: "40+",
    image: "/images/3.jpeg",
  },
];

const LiveSessionsSection = () => {
  return (
    <section id="sessions" className="py-24 relative overflow-hidden">

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF6A00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            <Play size={14} /> Live Sessions
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Live Strategy <span className="text-[#FF6A00]">Sessions</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a glimpse into our collaborative mentorship sessions where strategies are born, refined, and perfected.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {sessions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-[#FF6A00]/50 transition-all duration-300 overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative aspect-video overflow-hidden">

                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF6A00]/20 border-2 border-[#FF6A00]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="text-[#FF6A00] ml-1" size={24} fill="currentColor" />
                  </div>
                </div>

                {/* LIVE badge */}
                {/* <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  LIVE
                </div> */}

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold mb-3">
                  {s.title}
                </h3>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">

                  <span className="flex items-center gap-1.5">
                    <Zap size={14} className="text-[#FF6A00]" />
                    {s.type}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#FF6A00]" />
                    {s.duration}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-[#FF6A00]" />
                    {s.attendees}
                  </span>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LiveSessionsSection;