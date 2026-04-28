import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We analyze your business, goals, and current marketing challenges to identify key areas for improvement.",
  },
  {
    num: "02",
    title: "Expert Collaboration",
    desc: "Our team collaborates with industry mentors to develop comprehensive strategies tailored to your needs.",
  },
  {
    num: "03",
    title: "Strategy Refinement",
    desc: "Through interactive sessions, we refine strategies based on expert feedback and market insights.",
  },
  {
    num: "04",
    title: "Implementation Roadmap",
    desc: "Receive a detailed action plan with step-by-step guidance for implementing your refined strategy.",
  },
];

const MentorshipProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6A00]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            📋 Our Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Mentorship <span className="text-[#FF6A00] text-glow">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured approach to ensure you get the maximum value from our expert collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-[#FF6A00]/40 to-[#FF6A00]/10" />
              )}

              <div className="relative p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-[#FF6A00]/40 transition-all duration-300 hover:box-glow hover:shadow-[0_0_20px_rgba(255,106,0,0.15)] text-center h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 mb-6 group-hover:bg-[#FF6A00]/20 transition-colors">
                  <span className="font-heading text-2xl font-bold text-[#FF6A00]">{step.num}</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipProcessSection;
