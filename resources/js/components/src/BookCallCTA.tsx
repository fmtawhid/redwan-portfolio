import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const BookCallCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#FF6A00]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className=""
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#FF6A00]/30 bg-gradient-to-br from-card via-card/80 to-card/60 backdrop-blur-xl p-8 md:p-10 hover:shadow-[0_0_30px_rgba(255,106,0,0.1)] transition-shadow">
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10 text-center">
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 mb-5 mx-auto">
                  <Calendar className="text-[#FF6A00]" size={28} />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="font-heading text-3xl md:text-4xl font-bold mb-3"
              >
                Ready to <span className="text-[#FF6A00] text-glow">Grow Your Business?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed"
              >
                Let's have a strategic conversation about your business goals and how I can help you achieve measurable growth through data-driven digital marketing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href="https://calendar.app.google/qtJL8ERiYHgUwcpL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF6A00]/80 text-white font-heading font-semibold text-base hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all duration-300 group"
                >
                  <Calendar size={18} />
                  <span>Book a Call</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Supporting text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-sm mt-6"
              >
                ⏱️ 30-minute free consultation • No commitment required
              </motion.p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FF6A00]/40 blur-sm" />
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#FF6A00]/30 blur-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCallCTA;