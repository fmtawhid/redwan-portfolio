import { motion } from "framer-motion";
import { Facebook, Search, Target, Megaphone, Palette, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Facebook,
    title: "Facebook Marketing",
    desc: "Strategic Facebook ad campaigns to reach your ideal audience, generate leads, and drive consistent sales.",
    features: ["Audience Targeting", "Lead Generation", "Retargeting Campaigns", "Performance Analytics"],
  },
  {
    icon: Search,
    title: "Google Marketing",
    desc: "Google Ads campaigns optimized for maximum ROI — from search ads to display and YouTube campaigns.",
    features: ["Search Campaigns", "Display Advertising", "YouTube Ads", "Keyword Research"],
  },
  {
    icon: Target,
    title: "Ads Campaign Management",
    desc: "End-to-end campaign management across platforms with continuous optimization for better results.",
    features: ["Multi-Platform Ads", "Budget Optimization", "A/B Testing", "Conversion Tracking"],
  },
  {
    icon: Megaphone,
    title: "SEO Optimization",
    desc: "Boost your website's visibility with data-driven SEO strategies that drive organic traffic and rankings.",
    features: ["On-Page SEO", "Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Build a powerful brand identity that resonates with your audience and stands out in the market.",
    features: ["Brand Strategy", "Visual Identity", "Content Creation", "Social Media Branding"],
  },
{
  icon: Globe,
  title: "AI Automation Systems",
  desc: "We build intelligent AI-powered automation systems to streamline your business operations, save time, and boost productivity.",
  features: [
    "AI Chatbot Integration",
    "Workflow Automation",
    "Lead Generation Automation",
    "CRM & API Integration"
  ],
}
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6A00]/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FF6A00]/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            🚀 Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What I Can Do For <br />
            <span className="text-[#FF6A00] text-glow">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing and web development services designed to grow your business and maximize your online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-[#FF6A00]/50 transition-all duration-300 hover:box-glow overflow-hidden flex flex-col hover:shadow-[0_0_20px_rgba(255,106,0,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6A00]/20 to-[#FF6A00]/5 flex items-center justify-center mb-5 group-hover:from-[#FF6A00]/30 group-hover:to-[#FF6A00]/10 transition-colors border border-[#FF6A00]/10">
                  <s.icon className="text-[#FF6A00]" size={26} />
                </div>

                <h3 className="font-heading text-lg font-bold mb-3 leading-snug">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>

                <div className="space-y-2.5 mb-6 flex-1">
                  {s.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      initial={false}
                      animate={hoveredIndex === i ? { x: 0, opacity: 1 } : { x: 0, opacity: 0.7 }}
                      transition={{ delay: fi * 0.05 }}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle className="text-[#FF6A00] shrink-0" size={14} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{f}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#FF6A00] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer mt-auto">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
