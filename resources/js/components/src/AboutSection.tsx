import { motion } from "framer-motion";
import { Zap, Quote, CheckCircle, MapPin, GraduationCap, Briefcase } from "lucide-react";
import profileImg from "@/assets/profile.png";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            ✨ About Me
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Civil Engineer & <br />
            <span className="text-[#FF6A00] text-glow">Digital Marketing Expert</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bridging the gap between engineering precision and creative digital marketing
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group text-center p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-[#FF6A00]/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-[#FF6A00] text-glow relative z-10">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1 relative z-10">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF6A00]/30 via-[#FF6A00]/10 to-transparent rounded-3xl blur-lg" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#FF6A00]/20">
                <img
                  src={profileImg}
                  alt="Syed Redwan"
                  loading="lazy"
                  width={768}
                  height={960}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
                    <span className="text-[#FF6A00] text-xs font-medium">Available for Projects</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold">👋 Syed Redwan</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Barishal, Bangladesh
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl bg-card border border-[#FF6A00]/30 box-glow"
              >
                <p className="font-heading text-lg font-bold text-[#FF6A00]">5+</p>
                <p className="text-xs text-muted-foreground">Years Exp.</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["🏗️ Civil Engineer", "📱 Digital Marketer", "🎯 Ads Expert"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary border border-border text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <p className="text-foreground leading-relaxed mb-4">
                I'm Syed Redwan — a dedicated and ambitious Civil Engineer from Barishal Sadar, Bangladesh. Alongside my engineering background, I'm a passionate Freelance Digital Marketer specializing in Facebook Ads, Google Ads, SEO, branding, and WordPress development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I combine analytical engineering thinking with creative marketing strategies to help businesses build strong online presence and achieve measurable growth. My unique blend of technical and marketing expertise allows me to approach problems from multiple angles.
              </p>

              <div className="relative p-5 rounded-2xl bg-[#FF6A00]/5 border border-[#FF6A00]/20 mb-6">
                <Quote className="absolute top-3 left-3 text-[#FF6A00]/30" size={28} />
                <p className="text-foreground italic font-medium pl-8">
                  "I build infrastructure in the real world and grow brands in the digital world."
                </p>
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
              <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                <Zap className="text-[#FF6A00]" size={18} />
                Why Work With Me
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Data-Driven Strategy",
                  "Engineering Precision",
                  "Fast Turnaround",
                  "Dedicated Support",
                  "Multi-Platform Expertise",
                  "Creative Problem Solving",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-[#FF6A00]/5 transition-colors">
                    <CheckCircle className="text-[#FF6A00] shrink-0" size={14} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
