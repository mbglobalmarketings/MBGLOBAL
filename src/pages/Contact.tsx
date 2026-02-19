import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, Zap, Clock, Shield, Star } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import contactBgImage from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", budget: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      {/* Hero - Compact & punchy */}
      <SectionWrapper className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img src={contactBgImage} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <FloatingOrb color="purple" className="-top-20 right-0" />
        <FloatingOrb color="yellow" size="w-48 h-48" className="bottom-0 -left-10" delay={2} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Contact</p></FadeIn>
          <AnimatedHeading className="mb-6">
            Let's Build Your <span className="gradient-text">Growth Engine</span>
          </AnimatedHeading>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to scale? Drop us a message and we'll get back to you within 24 hours with a custom strategy outline.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Trust badges bar */}
      <SectionWrapper className="py-10 border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, text: "24h Response Time" },
              { icon: Shield, text: "100% Confidential" },
              { icon: Star, text: "No Obligation" },
              { icon: Zap, text: "Free Strategy Session" },
            ].map((item, i) => (
              <FadeIn key={item.text} delay={i * 0.1}>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="text-accent" size={16} />
                  <span>{item.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h3 className="font-display text-2xl font-bold mb-6">
                  Start with a <span className="gradient-text-yellow">free consultation</span>
                </h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  No pressure. No commitment. Just a conversation about your goals and how we can help you get there faster.
                </p>
              </FadeIn>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Mail, label: "hello@mbglobalmarketing.com" },
                  { icon: Phone, label: "+91 96759 44098" },
                  { icon: MapPin, label: "Mumbai • Bangalore • Remote" },
                ].map((item, i) => (
                  <FadeIn key={item.label} delay={0.1 + i * 0.1}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-accent" size={20} />
                      </div>
                      <span className="text-muted-foreground">{item.label}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <GlassCard hover={false} className="glow-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="text-accent" size={18} />
                    <h4 className="font-display font-bold">What You'll Get</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Free 30-minute strategy session",
                      "Custom growth roadmap outline",
                      "Competitor analysis snapshot",
                      "No-obligation proposal",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="text-accent shrink-0" size={14} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </FadeIn>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <GlassCard hover={false} className="glow-border p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">Company</label>
                        <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Acme Inc." />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">Service Needed</label>
                        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all">
                          <option value="">Select service</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="seo">SEO</option>
                          <option value="paid-ads">Paid Advertising</option>
                          <option value="web-dev">Web Development</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Monthly Budget</label>
                      <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all">
                        <option value="">Select range</option>
                        <option value="5L-10L">₹5L - ₹10L</option>
                        <option value="10L-25L">₹10L - ₹25L</option>
                        <option value="25L-50L">₹25L - ₹50L</option>
                        <option value="50L+">₹50L+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Tell us about your project *</label>
                      <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder="What are your goals? What challenges are you facing?" />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 glow-purple hover:opacity-90 transition-all">
                      Send Message <Send size={18} />
                    </motion.button>
                    <p className="text-muted-foreground text-xs text-center">
                      We'll respond within 24 hours. Your data is secure and will never be shared.
                    </p>
                  </form>
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
