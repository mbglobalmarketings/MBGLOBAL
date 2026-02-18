import { Link } from "react-router-dom";
import { ArrowRight, Search, Lightbulb, Code, Rocket, CheckCircle2, ArrowDown } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import discoverImage from "@/assets/process-discover.jpg";
import strategyImage from "@/assets/process-strategy.jpg";
import buildImage from "@/assets/process-build.jpg";
import scaleImage from "@/assets/process-scale.jpg";

const steps = [
  { icon: Search, number: "01", title: "Discover", desc: "Deep dive into your business, audience, and competitors. We audit everything to find hidden opportunities and growth levers.", details: ["Market analysis", "Competitor audit", "Audience research", "Performance baseline"], image: discoverImage },
  { icon: Lightbulb, number: "02", title: "Strategy", desc: "Craft a custom growth roadmap with clear milestones, KPIs, and tactical plans aligned to your business objectives.", details: ["Channel strategy", "Content planning", "Budget allocation", "KPI framework"], image: strategyImage },
  { icon: Code, number: "03", title: "Build", desc: "Execute with precision. From campaigns to creative, we build every asset with performance and conversion in mind.", details: ["Campaign setup", "Creative production", "Landing pages", "Tracking & analytics"], image: buildImage },
  { icon: Rocket, number: "04", title: "Scale", desc: "Optimize and amplify what works. Continuous testing, iteration, and scaling to maximize your growth trajectory.", details: ["A/B testing", "Performance optimization", "Budget scaling", "Monthly reporting"], image: scaleImage },
];

const Process = () => {
  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      <SectionWrapper className="relative py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <img src={strategyImage} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <FloatingOrb color="purple" className="-top-10 left-1/4" />
        <FloatingOrb color="yellow" size="w-48 h-48" className="bottom-10 right-10" delay={2} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Process</p></FadeIn>
          <AnimatedHeading className="mb-6">A System Built to <span className="gradient-text">Deliver Results</span></AnimatedHeading>
          <FadeIn delay={0.2}><p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-10">Our proven four-phase process turns strategy into measurable growth, every single time.</p></FadeIn>
          <FadeIn delay={0.4}><motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-flex items-center gap-2 text-muted-foreground text-sm"><ArrowDown size={16} /> Scroll to explore</motion.div></FadeIn>
        </div>
      </SectionWrapper>

      {steps.map((step, i) => (
        <SectionWrapper key={step.title} className={`py-24 md:py-32 ${i % 2 === 0 ? "" : "border-y border-border/20"}`}>
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <FadeIn>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center glow-border"><step.icon className="text-accent" size={36} /></div>
                    <div><span className="font-display text-sm font-bold text-accent uppercase tracking-wider">Phase {step.number}</span><h3 className="font-display text-4xl md:text-5xl font-bold">{step.title}</h3></div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}><p className="text-muted-foreground leading-relaxed mb-8 text-lg">{step.desc}</p></FadeIn>
                <FadeIn delay={0.2}>
                  <div className="grid grid-cols-2 gap-4">
                    {step.details.map((detail) => (<div key={detail} className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={16} /><span className="text-sm text-foreground/80">{detail}</span></div>))}
                  </div>
                </FadeIn>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-2xl overflow-hidden glow-border">
                    <img src={step.image} alt={step.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 font-display text-8xl font-bold text-primary/10">{step.number}</div>
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">The Journey</p></FadeIn><AnimatedHeading>From Discovery to <span className="gradient-text-yellow">Dominance</span></AnimatedHeading></div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative">
                  {i < 3 && <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-accent/30 to-transparent z-0" />}
                  <GlassCard hover={false} className="glow-border text-center relative z-10"><div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"><span className="font-display font-bold text-accent">{step.number}</span></div><h4 className="font-display font-bold text-lg">{step.title}</h4></GlassCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32">
        <FloatingOrb color="purple" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <AnimatedHeading className="mb-6">Ready to Start <span className="gradient-text-yellow">Phase One?</span></AnimatedHeading>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Your growth journey begins with a single conversation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-purple hover:opacity-90 transition-all">Book Your Discovery Call <ArrowRight size={20} /></Link>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Process;
