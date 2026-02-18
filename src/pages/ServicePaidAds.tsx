import { Link } from "react-router-dom";
import { ArrowRight, Target, DollarSign, TrendingUp, BarChart3, CheckCircle2, Zap, PieChart, MousePointer, Repeat } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import paidAdsImage from "@/assets/service-paid-ads.jpg";
import adsPerformanceImage from "@/assets/ads-performance.jpg";

const adTypes = [
  { icon: Target, title: "Google Search Ads", desc: "Intent-driven campaigns that capture buyers at the exact moment they're searching for your solution." },
  { icon: PieChart, title: "Display & Video", desc: "Brand awareness campaigns across Google's vast network with programmatic precision targeting." },
  { icon: MousePointer, title: "Social Ads", desc: "High-converting campaigns on Meta, TikTok, LinkedIn with granular audience segmentation." },
  { icon: Repeat, title: "Retargeting", desc: "Smart remarketing sequences that bring back warm prospects and maximize conversion rates." },
];

const metrics = [
  { value: "72%", label: "Lower CAC", desc: "Average reduction in customer acquisition cost" },
  { value: "$4.2M", label: "Ad Spend Managed", desc: "Monthly across all client accounts" },
  { value: "8.5x", label: "Average ROAS", desc: "Return on ad spend across campaigns" },
  { value: "2.1B", label: "Impressions", desc: "Generated for clients annually" },
];

const differentiators = [
  { title: "AI-Powered Bidding", desc: "Custom algorithms that optimize bids in real-time for maximum ROI on every dollar." },
  { title: "Creative Testing Lab", desc: "Continuous A/B testing of ad creatives, copy, and landing pages for peak performance." },
  { title: "Cross-Platform Attribution", desc: "See the full customer journey across every touchpoint with advanced attribution modeling." },
  { title: "Transparent Reporting", desc: "No hidden fees. See exactly where every dollar goes with real-time performance dashboards." },
];

const ServicePaidAds = () => (
  <div className="min-h-screen pt-24 overflow-x-hidden">
    {/* Hero - Diagonal split */}
    <SectionWrapper className="relative py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img src={paidAdsImage} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/60" />
      </div>
      <FloatingOrb color="purple" size="w-96 h-96" className="-top-20 -right-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-6">
              <Target size={14} /><span>Paid Advertising</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Every Ad Dollar, <span className="gradient-text">Maximized</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Precision-targeted campaigns across Google, Meta, and beyond. We don't burn budgets — we multiply them.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-purple">
                Get Your Ad Strategy <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                  <GlassCard hover={false} className="text-center glow-border">
                    <div className="font-display text-3xl font-bold gradient-text-yellow mb-1">{m.value}</div>
                    <div className="text-sm font-semibold mb-0.5">{m.label}</div>
                    <div className="text-xs text-muted-foreground">{m.desc}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>

    {/* Mobile metrics */}
    <SectionWrapper className="py-12 border-y border-border/20 lg:hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.1}>
              <GlassCard hover={false} className="text-center glow-border">
                <div className="font-display text-2xl font-bold gradient-text-yellow mb-1">{m.value}</div>
                <div className="text-xs font-semibold">{m.label}</div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Ad Types */}
    <SectionWrapper className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Campaign Types</p></FadeIn>
          <AnimatedHeading>Ads That <span className="gradient-text">Actually Convert</span></AnimatedHeading>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {adTypes.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.1}>
              <GlassCard className="glow-border group h-full p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/30 transition-all">
                  <a.icon className="text-accent" size={26} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Why Us - Image + List */}
    <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <img src={adsPerformanceImage} alt="Paid ads strategy" className="w-full rounded-2xl glow-purple" />
          </FadeIn>
          <div>
            <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Why MB Global</p></FadeIn>
            <AnimatedHeading className="mb-8 text-3xl md:text-4xl">
              The <span className="gradient-text-yellow">Unfair Advantage</span>
            </AnimatedHeading>
            <div className="space-y-6">
              {differentiators.map((d, i) => (
                <FadeIn key={d.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="text-accent" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{d.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="py-24 md:py-32">
      <FloatingOrb color="yellow" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <AnimatedHeading className="mb-6">Stop Burning Budget. <span className="gradient-text">Start Scaling.</span></AnimatedHeading>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get a free ad account audit and discover how much ROI you're leaving on the table.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg glow-yellow hover:opacity-90 transition-all">
            Get Free Ad Audit <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </div>
    </SectionWrapper>
  </div>
);

export default ServicePaidAds;
