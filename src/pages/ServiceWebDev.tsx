import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap, Smartphone, CheckCircle2, Layers, Globe, Gauge, ShoppingCart } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import webDevImage from "@/assets/service-web-dev.jpg";
import webdevShowcaseImage from "@/assets/webdev-showcase.jpg";

const capabilities = [
  { icon: Palette, title: "UI/UX Design", desc: "User-centric interfaces that blend stunning aesthetics with intuitive functionality. Every pixel has a purpose." },
  { icon: Code, title: "Custom Development", desc: "Clean, scalable code built with modern frameworks. No templates, no shortcuts — just precision engineering." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect experiences across every device and screen size. Mobile-first, always." },
  { icon: Gauge, title: "Performance", desc: "Lightning-fast load times, 90+ Lighthouse scores, and Core Web Vitals optimization baked in." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "High-converting online stores with seamless checkout flows, inventory management, and payment integration." },
  { icon: Globe, title: "CMS & Integrations", desc: "Headless CMS setup, API integrations, and third-party tool connections for maximum flexibility." },
];

const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Shopify", "WordPress", "Webflow", "Figma"];

const portfolio = [
  { title: "SaaS Dashboard", type: "Web Application", stat: "4.8s → 0.9s load time" },
  { title: "D2C Storefront", type: "E-Commerce", stat: "180% conversion increase" },
  { title: "Corporate Rebrand", type: "Marketing Site", stat: "3x engagement rate" },
];

const ServiceWebDev = () => (
  <div className="min-h-screen pt-24 overflow-x-hidden">
    {/* Hero - Code aesthetic */}
    <SectionWrapper className="relative py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img src={webDevImage} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background" />
      </div>
      <FloatingOrb color="purple" size="w-80 h-80" className="-top-20 left-1/4" />
      <FloatingOrb color="yellow" size="w-48 h-48" className="bottom-0 right-10" delay={3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-6">
            <Code size={14} /><span>Web Design & Development</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Websites That <span className="gradient-text">Convert Visitors</span> Into Customers
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Performance-optimized, beautifully designed web experiences that load fast, look stunning, and drive measurable business results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-purple">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/work" className="px-8 py-4 rounded-xl glass text-foreground font-semibold flex items-center gap-2 hover:border-accent/50 transition-all">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>

    {/* Tech Stack Marquee */}
    <SectionWrapper className="py-12 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <FadeIn key={tech} delay={i * 0.05}>
              <span className="px-5 py-2.5 rounded-full glass text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/30 transition-all cursor-default">
                {tech}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Capabilities - Masonry-style grid */}
    <SectionWrapper className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Capabilities</p></FadeIn>
          <AnimatedHeading className="text-3xl md:text-5xl">
            Built for <span className="gradient-text-yellow">Speed, Scale & Style</span>
          </AnimatedHeading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <GlassCard className={`glow-border group h-full ${i === 0 || i === 3 ? "md:row-span-1" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/30 transition-all">
                  <c.icon className="text-accent" size={26} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Portfolio Preview */}
    <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Recent Work</p></FadeIn>
            <AnimatedHeading className="mb-8 text-3xl md:text-4xl">
              Sites That <span className="gradient-text">Perform</span>
            </AnimatedHeading>
            <div className="space-y-6">
              {portfolio.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <GlassCard hover={false} className="glow-border flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-lg">{p.title}</h4>
                      <p className="text-muted-foreground text-sm">{p.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-bold gradient-text-yellow text-lg">{p.stat}</div>
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4}>
              <Link to="/work" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all mt-6">
                View Full Portfolio <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
          <FadeIn direction="right">
            <img src={webdevShowcaseImage} alt="Web development showcase" className="w-full rounded-2xl glow-purple" />
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="py-24 md:py-32">
      <FloatingOrb color="purple" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <AnimatedHeading className="mb-6">Let's Build Something <span className="gradient-text-yellow">Extraordinary</span></AnimatedHeading>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Your website should be your hardest-working sales rep. Let's make it happen.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-purple hover:opacity-90 transition-all">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </div>
    </SectionWrapper>
  </div>
);

export default ServiceWebDev;
