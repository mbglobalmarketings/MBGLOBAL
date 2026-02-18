import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, MessageCircle, TrendingUp, CheckCircle2, Camera, Calendar, Megaphone, BarChart3 } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import socialImage from "@/assets/service-social-media.jpg";
import socialEngagementImage from "@/assets/social-engagement.jpg";

const platforms = [
  { name: "Instagram", growth: "+280%", metric: "Follower Growth" },
  { name: "TikTok", growth: "5M+", metric: "Views Generated" },
  { name: "LinkedIn", growth: "+190%", metric: "Engagement Rate" },
  { name: "Facebook", growth: "3x", metric: "Lead Generation" },
];

const offerings = [
  { icon: Camera, title: "Content Creation", desc: "Scroll-stopping visuals, reels, carousels, and stories crafted for each platform's algorithm.", features: ["Photo & Video Production", "Graphic Design", "Copywriting", "Trend Monitoring"] },
  { icon: Calendar, title: "Strategy & Planning", desc: "Data-backed content calendars, audience analysis, and campaign planning that drives growth.", features: ["Content Calendar", "Audience Research", "Competitor Analysis", "Campaign Roadmap"] },
  { icon: Megaphone, title: "Community Management", desc: "Active engagement, comment management, DM responses, and community building at scale.", features: ["Daily Engagement", "Crisis Management", "UGC Curation", "Brand Voice"] },
  { icon: BarChart3, title: "Paid Social Ads", desc: "Precision-targeted ad campaigns across all platforms with continuous optimization.", features: ["Ad Creative", "Audience Targeting", "A/B Testing", "Budget Optimization"] },
];

const caseStudy = {
  brand: "NovaBrand D2C",
  challenge: "Zero social presence in a saturated direct-to-consumer market with no established audience.",
  approach: "Built a viral-first content strategy with platform-native content, influencer partnerships, and community-driven campaigns.",
  results: [
    { value: "1M+", label: "Impressions in Q1" },
    { value: "50K", label: "New Followers" },
    { value: "340%", label: "Engagement Lift" },
    { value: "5x", label: "Social Revenue" },
  ],
};

const ServiceSocialMedia = () => (
  <div className="min-h-screen pt-24 overflow-x-hidden">
    {/* Hero - Full-bleed with overlay */}
    <SectionWrapper className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img src={socialImage} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>
      <FloatingOrb color="purple" className="-top-20 left-10" />
      <FloatingOrb color="yellow" size="w-48 h-48" className="bottom-20 right-10" delay={2} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-6">
            <Users size={14} /><span>Social Media Marketing</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Build a <span className="gradient-text">Community</span> That Converts
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Viral content strategies, engaged communities, and social-first brand building across every major platform.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-purple">
              Get Social Strategy <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>

    {/* Platform Stats - Horizontal scroll cards */}
    <SectionWrapper className="py-16 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <GlassCard hover={false} className="text-center glow-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{p.name}</p>
                <div className="font-display text-3xl font-bold gradient-text-yellow mb-1">{p.growth}</div>
                <p className="text-xs text-muted-foreground">{p.metric}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Offerings - Alternating large cards */}
    <SectionWrapper className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p></FadeIn>
          <AnimatedHeading className="text-3xl md:text-5xl">
            Everything Your Brand Needs to <span className="gradient-text">Go Viral</span>
          </AnimatedHeading>
        </div>
        <div className="space-y-8">
          {offerings.map((o, i) => (
            <FadeIn key={o.title} delay={i * 0.08}>
              <GlassCard className="glow-border p-8 md:p-10 group">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 transition-all">
                        <o.icon className="text-accent" size={26} />
                      </div>
                      <h3 className="font-display text-2xl font-bold">{o.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{o.desc}</p>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Includes</p>
                    {o.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="text-accent shrink-0" size={14} />
                        <span className="text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Case Study Spotlight */}
    <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <img src={socialEngagementImage} alt="Case study" className="w-full rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs px-3 py-1.5 rounded-full bg-accent/20 text-accent font-medium">{caseStudy.brand}</span>
              </div>
            </div>
          </FadeIn>
          <div>
            <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Case Study</p></FadeIn>
            <AnimatedHeading className="mb-6 text-3xl md:text-4xl">
              From Zero to <span className="gradient-text-yellow">1M+ Impressions</span>
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <div className="space-y-4 mb-8">
                <div><h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">Challenge</h4><p className="text-muted-foreground text-sm">{caseStudy.challenge}</p></div>
                <div><h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">Approach</h4><p className="text-muted-foreground text-sm">{caseStudy.approach}</p></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.results.map((r) => (
                  <GlassCard key={r.label} hover={false} className="text-center py-4 glow-border">
                    <div className="font-display text-2xl font-bold gradient-text-yellow">{r.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                  </GlassCard>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="py-24 md:py-32">
      <FloatingOrb color="purple" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <AnimatedHeading className="mb-6">Ready to <span className="gradient-text">Break the Internet?</span></AnimatedHeading>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Let's craft a social strategy that turns followers into customers and content into revenue.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-purple hover:opacity-90 transition-all">
            Start Your Social Growth <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </div>
    </SectionWrapper>
  </div>
);

export default ServiceSocialMedia;
