import { motion } from "framer-motion";
import darazLogo from "@/assets/daraz.png";
import rokomariLogo from "@/assets/rokomery.png";
import passiveJournalLogo from "@/assets/passivjournal.png";
import ictLogo from "@/assets/ict.png"; 
import "./BrandCollaborationSection.css";

const brands = [
  { name: "Daraz", url: "https://www.daraz.com.bd", logo: darazLogo },
  { name: "Rokomari", url: "https://www.rokomari.com", logo: rokomariLogo },
  { name: "Passive Journal", url: "https://www.passivejournal.com", logo: passiveJournalLogo },
  { name: "ICT", url: "https://www.ict.edu.bd", logo: ictLogo }
];

const BrandCollaborationSection = () => {

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent" />
      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent" />

      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6A00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            🤝 Collaboration
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Collaborate Brands
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Trusted brands and partners I've worked with
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="brand-carousel">
          {[...brands, ...brands].map((brand, i) => (
            <a
              key={i}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-item group"
            >
              <div className="w-40 h-24 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex items-center justify-center p-5 transition-all duration-300 group-hover:border-[#FF6A00]/50 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.15)] group-hover:scale-110">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback to text if image fails
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector("span")) {
                      const span = document.createElement("span");
                      span.className = "text-muted-foreground group-hover:text-primary font-heading font-bold text-lg transition-colors";
                      span.textContent = brand.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCollaborationSection;
