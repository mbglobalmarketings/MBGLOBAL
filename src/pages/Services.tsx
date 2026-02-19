import { Link } from "react-router-dom";
import { ArrowRight, Search, Target, Users, Code, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import abstractImage from "@/assets/abstract-brand.jpg";
import dashboardImage from "@/assets/dashboard-mockup.jpg";
import seoImage from "@/assets/service-seo.jpg";
import socialImage from "@/assets/service-social-media.jpg";
import paidAdsImage from "@/assets/service-paid-ads.jpg";
import webDevImage from "@/assets/service-web-dev.jpg";

const services = [
  { icon: Users, title: "Social Media Marketing", desc: "Build engaged communities, create viral content, and drive social-first revenue across every major platform.", link: "/services/social-media", image: socialImage, tag: "Engagement", color: "from-purple-500/20 to-blue-500/20" },
  { icon: Search, title: "SEO", desc: "Data-driven search engine optimization that puts you at the top of every relevant search result.", link: "/services/seo", image: seoImage, tag: "Organic Growth", color: "from-yellow-500/20 to-orange-500/20" },
  { icon: Target, title: "Paid Advertising", desc: "Precision-targeted campaigns with relentless optimization for maximum ROI on every ad rupee.", link: "/services/paid-ads", image: paidAdsImage, tag: "Paid Traffic", color: "from-pink-500/20 to-purple-500/20" },
  { icon: Code, title: "Web Development", desc: "Performance-optimized websites with stunning visuals and buttery-smooth interactions.", link: "/services/web-development", image: webDevImage, tag: "Experience", color: "from-blue-500/20 to-cyan-500/20" },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      {/* Hero */}
      <SectionWrapper className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img src={abstractImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        </div>
        <FloatingOrb color="purple" className="-top-20 right-0" />
        <FloatingOrb color="yellow" size="w-48 h-48" className="bottom-0 left-10" delay={3} />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p></FadeIn>
          <AnimatedHeading className="mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Dominate Digital</span>
          </AnimatedHeading>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
              End-to-end digital marketing services designed to drive measurable growth. Every strategy is custom, every result is trackable.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-purple hover:opacity-90 transition-all">
              Get a Custom Proposal <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Services - Image Cards with hover reveal */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <Link to={service.link}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="group grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden glow-border bg-card/30 backdrop-blur-xl border border-border/50">
                    {/* Image side */}
                    <div className={`lg:col-span-2 relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover min-h-[200px] lg:min-h-[300px] group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent lg:bg-none" />
                    </div>
                    {/* Content side */}
                    <div className={`lg:col-span-3 p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="text-accent" size={24} />
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">{service.tag}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                        Explore Service <ArrowRight size={16} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Dashboard Section */}
      <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Full Transparency</p></FadeIn>
              <AnimatedHeading className="mb-6">
                Real-Time <span className="gradient-text-yellow">Performance Dashboards</span>
              </AnimatedHeading>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every client gets a custom analytics dashboard with real-time metrics, campaign performance data, and ROI tracking. No black boxes.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  See How It Works <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="right">
              <img src={dashboardImage} alt="Analytics dashboard" className="w-full rounded-2xl glow-purple" />
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24 md:py-32">
        <FloatingOrb color="purple" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <AnimatedHeading className="mb-6">
              Let's Build Your <span className="gradient-text-yellow">Growth Stack</span>
            </AnimatedHeading>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a free consultation to discover which services will drive the most impact for your business.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg glow-yellow hover:opacity-90 transition-all">
              Start Your Growth Journey <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Services;
