import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe, ArrowUp, Heart, X, Twitter } from "lucide-react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Facebook Marketing",
  "Google Marketing",
  "SEO Optimization",
  "Branding",
  "WordPress Development",
  "Ads Campaign",
];

const Footer = () => {
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const { data, setData, post, processing, reset } = useForm({
    email: "",
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("emails.store"), {
      onSuccess: () => {
        setSubscribeMessage("Subscribed! ✓");
        reset();
        setTimeout(() => setSubscribeMessage(""), 3000);
      },
      onError: () => {
        setSubscribeMessage("Failed to subscribe");
      },
    });
  };

  return (
  <footer className="relative py-16 border-t border-border overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container relative z-10">

{/* 🔥 Subscribe Section */}
<div className="mb-16 flex justify-center">
<div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-[#E65D00]/20 via-[#E65D00]/10 to-transparent p-8 md:p-10 text-center shadow-xl">

    {/* Glow */}
    <div className="absolute inset-0 bg-[#E65D00]/10 blur-3xl opacity-30 pointer-events-none" />

    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
      Subscribe To Get Latest Updates From Me
    </h3>

    <p className="text-muted-foreground text-sm md:text-base mb-6">
      Get marketing tips, case studies, and industry insights delivered to your inbox.
    </p>

    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={data.email}
        onChange={(e) => setData("email", e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm outline-none focus:border-[#E65D00] focus:ring-2 focus:ring-[#E65D00]/30"
      />

      <button 
        type="submit" 
        disabled={processing}
        className="px-5 py-2.5 rounded-lg bg-[#E65D00] text-white text-sm font-medium hover:bg-[#d45100] transition disabled:opacity-50"
      >
        {subscribeMessage || (processing ? "..." : "Subscribe")}
      </button>
    </form>
  </div>
</div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

        {/* Column 1 */}
        <div>
          <a href="#home" className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Syed<span className="text-primary">Redwan</span>
          </a>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            Civil Engineer & Freelance Digital Marketer helping businesses grow through strategic marketing and web solutions.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {[
              { icon: Facebook, url: "https://www.facebook.com/syedredwan0", label: "Facebook" },
              { icon: Instagram, url: "https://www.instagram.com/syed_red1", label: "Instagram" },
              { icon: Twitter, url: "https://x.com/SyedRedwan", label: "X" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-[#E65D00] hover:text-[#E65D00] hover:bg-[#E65D00]/5 text-muted-foreground transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:pl-1 transition-all duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary hover:pl-1 transition-all duration-200">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-5">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail className="text-primary shrink-0 mt-0.5" size={16} />
              <a href="mailto:syedredwan1@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                syedredwan1@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="text-primary shrink-0 mt-0.5" size={16} />
              <a href="tel:+8801314933669" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +88-013-14933669
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Globe className="text-primary shrink-0 mt-0.5" size={16} />
              <a href="http://www.syedredwan.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                www.syedredwan.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
              <span className="text-sm text-muted-foreground">
                Barishal, Bangladesh
              </span>
            </li>
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-[#E65D00]/10 border border-[#E65D00]/20 text-[#E65D00] text-sm font-medium hover:bg-[#E65D00]/20 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-1">
          © 2025 <span className="text-foreground font-semibold">Syed Redwan</span>. Made with <Heart size={12} className="text-primary" /> All rights reserved.
        </p>

        <a href="#home" className="flex items-center gap-2 hover:text-primary transition-colors group">
          Back to top
          <span className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <ArrowUp size={14} />
          </span>
        </a>
      </div>

    </div>
  </footer>
);
};

export default Footer;