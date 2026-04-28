import { motion } from "framer-motion";
import { Users, Lightbulb, Target, Rocket } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Industry Expert Network",
    desc: "Access to seasoned mentors with proven track records in digital marketing across various industries.",
  },
  {
    icon: Target,
    title: "Strategy Refinement",
    desc: "Collaborative sessions to refine and optimize your marketing strategies before implementation.",
  },
  {
    icon: Lightbulb,
    title: "Expert-Backed Insights",
    desc: "Benefit from collective wisdom and real-world experience from multiple industry professionals.",
  },
  {
    icon: Rocket,
    title: "Actionable Solutions",
    desc: "Get practical, implementable strategies tailored specifically to your business needs and goals.",
  },
];

const CollaborateSection = () => {
  return (
    <section id="collaborate" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6A00]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
              🤝 Expert Mentorship
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Collaborate with <br />
              <span className="text-[#FF6A00] text-glow">Industry Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I collaborate with seasoned mentors and industry experts to refine powerful digital marketing strategies before every client campaign. Book a session today to experience expert-backed insights, tailored solutions, and actionable steps to grow your business.
            </p>
            <a
              href="https://calendar.app.google/qtJL8ERiYHgUwcpL8"
              className="inline-flex px-8 py-3 rounded-xl bg-[#FF6A00] text-white font-heading font-semibold hover:bg-[#e55d00] transition-colors"
            >
              Book a Session
            </a>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-[#FF6A00]/40 transition-all duration-300 hover:box-glow hover:shadow-[0_0_20px_rgba(255,106,0,0.15)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6A00]/20 transition-colors">
                  <f.icon className="text-[#FF6A00]" size={22} />
                </div>
                <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
