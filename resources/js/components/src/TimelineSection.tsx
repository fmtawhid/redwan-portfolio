import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Award, Star, BookOpen } from "lucide-react";

const experiences = [
  {
    year: "2024 – Present",
    title: "Self-Employed",
    org: "Digital Marketer",
    desc: "Running Google Ads, Facebook Ads, Instagram Ads campaigns. Social media marketing, content creation, branding, video editing, and analytics.",
    icon: Rocket,
  },
  {
    year: "2025 – Present",
    title: "Rokomari",
    org: "Marketing & Sales Partner",
    desc: "Driving marketing strategies and sales initiatives to expand market reach and customer acquisition for Bangladesh's largest online bookstore.",
    icon: Rocket,
  },
  {
    year: "2024 – 2025",
    title: "Daraz Bangladesh Limited",
    org: "Marketing & Sales Partner",
    desc: "Managing marketing campaigns and sales partnerships to increase brand visibility and drive revenue growth.",
    icon: Briefcase,
  },
  {
    year: "2023 – 2025",
    title: "Passive Journal",
    org: "Marketing & Sales Partner",
    desc: "Built and executed comprehensive marketing strategies focusing on brand positioning and customer engagement.",
    icon: Star,
  },
  {
    year: "2024",
    title: "Roads & Highways Department",
    org: "Internship",
    desc: "Assisted in planning, designing, and supervising road/highway projects. Conducted site visits and prepared technical reports.",
    icon: Briefcase,
  },
  {
    year: "2022 – 2023",
    title: "ICT Olympiad Bangladesh",
    org: "Divisional Polytechnic Manager",
    desc: "Planned and managed events, coordinated with educational institutions, and promoted ICT education.",
    icon: Award,
  },
];

const education = [
  {
    year: "2025 – Present",
    title: "BSc in Civil Engineering",
    org: "University of Global Village",
    desc: "Pursuing a Bachelor's degree in Civil Engineering with focus on infrastructure development.",
    icon: GraduationCap,
  },
  {
    year: "2020 – 2024",
    title: "Diploma in Engineering (Civil Technology)",
    org: "Infra Polytechnic Institute",
    desc: "Specialized in civil engineering, construction management, and infrastructure development.",
    icon: GraduationCap,
  },
  {
    year: "2020",
    title: "SSC (Business Studies)",
    org: "Oxford Mission High School",
    desc: "Completed Secondary School Certificate in Business Studies stream.",
    icon: BookOpen,
  },
];

const TimelineColumn = ({
  items,
  label,
  icon: Icon,
}: {
  items: typeof experiences;
  label: string;
  icon: React.ElementType;
}) => (
  <div>
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center">
        <Icon className="text-[#FF6A00]" size={20} />
      </div>
      <h3 className="font-heading text-xl font-bold">{label}</h3>
    </div>

    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6A00]/40 via-[#FF6A00]/20 to-transparent" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative flex gap-5 group"
          >
            <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-card border-2 border-[#FF6A00]/40 flex items-center justify-center group-hover:border-[#FF6A00] group-hover:shadow-[0_0_10px_rgba(255,106,0,0.3)] transition-all duration-300">
              <item.icon className="text-[#FF6A00]" size={16} />
            </div>

            <div className="flex-1 p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border group-hover:border-[#FF6A00]/30 transition-all duration-300">
              <span className="inline-block text-xs font-semibold text-[#FF6A00] tracking-wider uppercase mb-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20">
                {item.year}
              </span>

              <h4 className="font-heading text-base font-semibold mb-1">
                {item.title}
              </h4>
              <p className="text-primary/70 text-sm font-medium mb-2">
                {item.org}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            ✨ My Journey
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-primary text-glow">Timeline</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A snapshot of my professional journey and academic achievements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <TimelineColumn
            items={experiences}
            label="Work Experience"
            icon={Briefcase}
          />
          <TimelineColumn
            items={education}
            label="Education"
            icon={GraduationCap}
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;