import { motion } from "framer-motion";

const certifications = [
  {
    image: "/images/BoardingPass_MyNameOnMars_Mars.png",
    title: "Mars Mission Completed",
    desc: "Achieved excellence in advanced digital marketing strategies and campaign execution.",
  },
  {
    image: "/images/boarding-pass-moon.jpeg",
    title: "Moon Travel Mission Completed",
    desc: "Successfully completed complex multi-channel marketing campaigns with exceptional results.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6A00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            ✨ Achievements
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-[#FF6A00]">Achievements</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized accomplishments and milestones in my professional journey
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-[#FF6A00]/50 transition-all duration-300 overflow-hidden"
            >

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-6">

                {/* IMAGE FIXED SECTION */}
                <div className="w-full h-52 mb-5 rounded-xl overflow-hidden border border-border group-hover:border-[#FF6A00]/40 transition bg-black/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.desc}
                </p>

                {/* Badge */}
                <div className="mt-5 pt-5 border-t border-border/50">
                  <span className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wider">
                    Achievement Unlocked
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

export default CertificationsSection;