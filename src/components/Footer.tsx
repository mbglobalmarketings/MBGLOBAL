import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA strip */}
        <div className="py-14 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-border/20">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Ready to <span className="gradient-text-yellow">grow</span>?
            </h3>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">Let's build something extraordinary together. Start your journey today.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all glow-yellow shrink-0"
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Main grid — 3 columns */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/MB logo.png" 
                alt="MB Global Marketing" 
                className="h-32 md:h-40 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Performance-driven marketing and growth strategies for modern businesses ready to scale.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@mbglobal.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Mail size={14} /> hello@mbglobal.com
              </a>
              <a href="tel:+919675944098" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone size={14} /> +91 96759 44098
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} /> New York · London · Dubai
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-5">Pages</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Work", path: "/work" },
                { label: "Process", path: "/process" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.label} to={item.path} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Social Media", path: "/services/social-media" },
                { label: "SEO", path: "/services/seo" },
                { label: "Paid Ads", path: "/services/paid-ads" },
                { label: "Web Development", path: "/services/web-development" },
              ].map((item) => (
                <Link key={item.label} to={item.path} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs">© 2026 MB Global Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
