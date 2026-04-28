import { motion } from "framer-motion";
import { Image, ZoomIn } from "lucide-react";

const galleryItems = [
  { title: "Strategy Workshop", category: "Live Session", img: "/images/1.jpeg" },
  { title: "Ad Funnel Breakdown", category: "Training", img: "/images/2.png" },
  { title: "Team Collaboration", category: "Group Session", img: "/images/3.jpeg" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6A00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            <Image size={14} /> Gallery
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Moments of <span className="text-[#FF6A00] text-glow">Growth</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our workshops, strategy sessions, and real-time mentorship experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-[#FF6A00]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hover icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-14 h-14 rounded-full bg-[#FF6A00]/20 border border-[#FF6A00]/40 flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn className="text-[#FF6A00]" />
                  </div>
                </div>

                {/* Category badge */}
                {/* <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-black/60 text-white border border-white/10">
                  {item.category}
                </div> */}
              </div>

              {/* Content */}
              {/* <div className="p-5">
                <h3 className="font-heading text-lg font-bold group-hover:text-[#FF6A00] transition-colors">
                  {item.title}
                </h3>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;