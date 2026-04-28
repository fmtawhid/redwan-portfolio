import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Growth Campaign",
    category: "Paid Ads + SEO",
    result: "+320% Revenue in 6 months",
    desc: "Full-funnel strategy combining Google Shopping, Meta retargeting, and on-page SEO for a fashion brand.",
    gradient: "from-emerald-500/20 to-teal-500/5",
    accent: "bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "SaaS Lead Generation",
    category: "Content + LinkedIn Ads",
    result: "1,200+ Qualified Leads",
    desc: "B2B lead gen campaign leveraging thought leadership content and LinkedIn's precision targeting.",
    gradient: "from-cyan-500/20 to-blue-500/5",
    accent: "bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "Restaurant Chain Launch",
    category: "Social Media + Local SEO",
    result: "50K+ Social Followers in 3 months",
    desc: "Multi-location launch strategy with hyperlocal targeting, influencer partnerships, and Google Business optimization.",
    gradient: "from-violet-500/20 to-purple-500/5",
    accent: "bg-violet-500/10 text-violet-400",
  },
  {
    title: "App Install Campaign",
    category: "Mobile Ads + ASO",
    result: "100K+ Installs, $0.40 CPI",
    desc: "Cross-platform mobile advertising with app store optimization achieving industry-leading install costs.",
    gradient: "from-amber-500/20 to-orange-500/5",
    accent: "bg-amber-500/10 text-amber-400",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6A00]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            💼 My Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Case Studies</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">Real results from real campaigns. Here's a snapshot of what I've delivered for clients.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-[#FF6A00]/40 transition-all hover:box-glow hover:shadow-[0_0_20px_rgba(255,106,0,0.15)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full ${p.accent}`}>{p.category}</span>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex items-center gap-2 text-primary font-heading font-semibold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp size={16} />
                  </div>
                  {p.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
