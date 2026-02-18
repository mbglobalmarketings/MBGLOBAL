import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, ArrowUpRight, Quote } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";
import techflowImage from "@/assets/work-techflow.jpg";
import scaleupImage from "@/assets/work-scaleup.jpg";
import novabrandImage from "@/assets/work-novabrand.jpg";

const caseStudies = [
  {
    title: "TechFlow SaaS", category: "SEO + Content", image: techflowImage,
    challenge: "Low organic traffic and poor search visibility in a crowded SaaS market.",
    strategy: "Full-funnel content strategy with technical SEO overhaul and link building.",
    result: "+340% organic traffic in 6 months",
    metrics: [{ value: "340%", label: "Traffic Growth" }, { value: "#1", label: "For 40+ Keywords" }, { value: "12x", label: "Organic ROI" }],
    testimonial: { text: "MB Global transformed our digital presence completely.", author: "Sarah Chen, CEO" },
  },
  {
    title: "ScaleUp Fintech", category: "Google Ads + CRO", image: scaleupImage,
    challenge: "High customer acquisition cost and low landing page conversion rates.",
    strategy: "Rebuilt campaign structure with granular targeting and A/B tested landing pages.",
    result: "72% reduction in CAC",
    metrics: [{ value: "72%", label: "CAC Reduction" }, { value: "8.5x", label: "ROAS" }, { value: "3x", label: "Conversions" }],
    testimonial: { text: "They don't just execute — they innovate.", author: "Marcus Rivera, Founder" },
  },
  {
    title: "NovaBrand D2C", category: "Social Media + Branding", image: novabrandImage,
    challenge: "Zero brand awareness in a competitive direct-to-consumer market.",
    strategy: "Built distinctive brand identity with viral social media strategy.",
    result: "1M+ impressions in first quarter",
    metrics: [{ value: "1M+", label: "Impressions" }, { value: "50K", label: "New Followers" }, { value: "5x", label: "Social Revenue" }],
    testimonial: { text: "Every dollar spent delivers measurable impact.", author: "Elena Kowalski, CMO" },
  },
];

const Work = () => {
  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      <SectionWrapper className="relative py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <FloatingOrb color="yellow" className="-top-10 right-20" />
        <FloatingOrb color="purple" size="w-48 h-48" className="bottom-10 left-10" delay={2} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Work</p></FadeIn>
          <AnimatedHeading className="mb-6">Results That <span className="gradient-text">Speak Volumes</span></AnimatedHeading>
          <FadeIn delay={0.2}><p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">Every project is a growth story. Here's how we've transformed brands into market leaders with measurable, scalable results.</p></FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {caseStudies.map((study, i) => (
              <div key={study.title}>
                <FadeIn>
                  <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }} className="relative rounded-2xl overflow-hidden mb-12 glow-border">
                    <img src={study.image} alt={study.title} className="w-full aspect-[21/9] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <div>
                        <span className="text-xs px-3 py-1.5 rounded-full bg-accent/20 text-accent font-medium">{study.category}</span>
                        <h3 className="font-display text-3xl md:text-4xl font-bold mt-3">{study.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <FadeIn delay={0.1}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <GlassCard hover={false} className="glow-border"><h4 className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">The Challenge</h4><p className="text-muted-foreground leading-relaxed">{study.challenge}</p></GlassCard>
                        <GlassCard hover={false} className="glow-border"><h4 className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">Our Strategy</h4><p className="text-muted-foreground leading-relaxed">{study.strategy}</p></GlassCard>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <GlassCard hover={false} className="glow-border flex items-start gap-4">
                        <Quote className="text-accent shrink-0 mt-1" size={24} />
                        <div><p className="text-foreground/90 italic text-lg leading-relaxed mb-2">"{study.testimonial.text}"</p><p className="text-muted-foreground text-sm">— {study.testimonial.author}</p></div>
                      </GlassCard>
                    </FadeIn>
                  </div>
                  <div className="space-y-4">
                    <FadeIn delay={0.15}>
                      <GlassCard hover={false} className="glow-border text-center py-8"><p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Result</p><p className="font-display text-xl font-bold gradient-text-yellow">{study.result}</p></GlassCard>
                    </FadeIn>
                    {study.metrics.map((m, mi) => (
                      <FadeIn key={m.label} delay={0.2 + mi * 0.08}>
                        <GlassCard hover={false} className="text-center"><div className="font-display text-2xl font-bold gradient-text mb-1">{m.value}</div><div className="text-xs text-muted-foreground">{m.label}</div></GlassCard>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32">
        <FloatingOrb color="purple" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <AnimatedHeading className="mb-6">Your Brand Could Be <span className="gradient-text-yellow">Next</span></AnimatedHeading>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Ready to write your own growth story? Let's talk about what's possible.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg glow-yellow hover:opacity-90 transition-all">Start Your Growth Story <ArrowRight size={20} /></Link>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Work;
