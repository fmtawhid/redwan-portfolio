import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Globe, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("contacts.store"), {
      onSuccess: () => {
        setSubmitMessage("Message Sent! ✓");
        reset();
        setTimeout(() => setSubmitMessage(""), 3000);
      },
      onError: () => {
        setSubmitMessage("Failed to send message");
      },
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-medium mb-4">
            📬 Contact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Let's Work <span className="text-[#FF6A00] text-glow">Together</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">Have a project in mind? Let's discuss how I can help your business grow.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Ready to take your business to the next level? Whether you need digital marketing, web development, or engineering consultation — let's connect!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "syedredwan1@gmail.com", href: "mailto:syedredwan1@gmail.com" },
                { icon: Phone, label: "+88-013-14933669", href: "tel:+8801314933669" },
                { icon: Globe, label: "www.syedredwan.com", href: "http://www.syedredwan.com" },
                { icon: MapPin, label: "Barishal Sadar, Barishal, Bangladesh", href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border hover:border-[#FF6A00]/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center">
                    <c.icon className="text-[#FF6A00]" size={18} />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-muted-foreground text-sm hover:text-[#FF6A00] transition-colors">{c.label}</a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-heading font-semibold mb-3">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, url: "https://www.facebook.com/syedredwan0", label: "Facebook" },
                  { icon: Instagram, url: "https://www.instagram.com/syed_red1", label: "Instagram" },
                  { icon: Twitter, url: "https://x.com/SyedRedwan", label: "X" },
                ].map((s) => (
                  <a key={s.label} href={s.url} className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-[#FF6A00] hover:text-[#FF6A00] text-muted-foreground transition-colors">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-[#FF6A00]/30 transition-colors"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/30 transition-colors"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/30 transition-colors"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Subject"
                value={data.subject}
                onChange={(e) => setData("subject", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/30 transition-colors"
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={data.message}
                onChange={(e) => setData("message", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/30 transition-colors resize-none"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={processing}
              className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold hover:box-glow transition-shadow disabled:opacity-50"
            >
              {submitMessage || (processing ? "Sending..." : <>
                <Send size={16} /> Send Message
              </>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
