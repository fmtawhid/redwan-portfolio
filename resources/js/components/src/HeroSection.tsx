import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-72 h-72 bg-[#FF6A00]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-[#FF6A00]/5 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #FF6A00 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="text-[#FF6A00] font-heading text-sm font-semibold tracking-wider uppercase">Civil Engineer & Digital Marketer</span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Building Infrastructure & <br />
            <span className="text-[#FF6A00] text-glow">Growing Brands Digitally</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 font-body leading-relaxed">
            Civil Engineer by training, Digital Marketer by passion. I combine analytical thinking with creative marketing to deliver measurable results for businesses worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF6A00] text-white font-heading font-semibold hover:bg-[#e55d00] transition-all">
              Hire Me
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="px-8 py-3.5 rounded-xl border border-border text-foreground font-heading font-semibold hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors">
              About Me
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { num: "50+", label: "Projects Completed" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "5+", label: "Years Experience" },
            { num: "20+", label: "Happy Clients" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center md:text-left p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-[#FF6A00]/50 transition-colors"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-[#FF6A00] text-glow">{s.num}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-[#FF6A00] transition-colors">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
