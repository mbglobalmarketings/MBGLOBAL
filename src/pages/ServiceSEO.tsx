import { Link } from "react-router-dom";
import { ArrowRight, Search, TrendingUp, BarChart3, CheckCircle2, Target, Globe, FileText, Link2, Zap } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import seoImage from "@/assets/service-seo.jpg";
import seoRankingsImage from "@/assets/seo-rankings.jpg";

const seoServices = [
  { icon: Search, title: "Technical SEO Audit", desc: "Full crawl analysis, site architecture optimization, Core Web Vitals fixes, and indexation cleanup." },
  { icon: FileText, title: "Content Strategy", desc: "Keyword research, topic clustering, editorial calendars, and high-authority content creation." },
  { icon: Link2, title: "Link Building", desc: "White-hat outreach, digital PR, guest posting, and high-DA backlink acquisition strategies." },
  { icon: Globe, title: "Local SEO", desc: "Google Business optimization, citation building, local pack domination, and review management." },
];

const results = [
  { metric: "340%", label: "Avg Traffic Growth", period: "in 6 months" },
  { metric: "#1", label: "Rankings Achieved", period: "for 200+ keywords" },
  { metric: "12x", label: "Organic ROI", period: "on average" },
  { metric: "98%", label: "Client Retention", period: "year over year" },
];

const process = [
  { step: "01", title: "Audit & Analysis", desc: "Comprehensive technical and content audit to identify every growth opportunity." },
  { step: "02", title: "Strategy & Roadmap", desc: "Custom SEO roadmap with prioritized actions, timelines, and projected ROI." },
  { step: "03", title: "Execute & Build", desc: "On-page optimization, content creation, technical fixes, and link acquisition." },
  { step: "04", title: "Monitor & Scale", desc: "Real-time tracking, monthly reporting, and continuous iteration for compounding growth." },
];

const ServiceSEO = () => (
  <div className="min-h-screen pt-24 overflow-x-hidden">
    {/* Hero - Asymmetric split */}
    <SectionWrapper className="relative py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img src={seoImage} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>
      <FloatingOrb color="yellow" size="w-80 h-80" className="-top-20 right-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-6">
            <Search size={14} />
            <span>Search Engine Optimization</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Dominate <span className="gradient-text-yellow">Search Results</span>, Own Your Market
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Data-driven SEO strategies that put you at the top of every relevant search. More visibility. More traffic. More revenue.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-yellow">
              Get Free SEO Audit <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>

    {/* Stats Bar */}
    <SectionWrapper className="py-16 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((r, i) => (
            <FadeIn key={r.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text-yellow mb-1">{r.metric}</div>
                <div className="text-sm font-semibold mb-0.5">{r.label}</div>
                <div className="text-xs text-muted-foreground">{r.period}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Services - Staggered Cards */}
    <SectionWrapper className="py-24 md:py-32">
      <FloatingOrb color="purple" size="w-64 h-64" className="-left-20 top-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">What We Do</p></FadeIn>
          <AnimatedHeading className="text-3xl md:text-5xl">
            Full-Stack <span className="gradient-text">SEO Services</span>
          </AnimatedHeading>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {seoServices.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <GlassCard className="glow-border group h-full p-8">
                <div className="flex gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/30 transition-all">
                    <s.icon className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Process - Horizontal Timeline */}
    <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our SEO Process</p></FadeIn>
          <AnimatedHeading>How We <span className="gradient-text-yellow">Get Results</span></AnimatedHeading>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.12}>
              <div className="relative">
                {i < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" />}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 glow-border">
                    <span className="font-display text-lg font-bold text-accent">{p.step}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2">{p.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Dashboard Preview */}
    <SectionWrapper className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Real-Time Reporting</p></FadeIn>
            <AnimatedHeading className="mb-6 text-3xl md:text-4xl">
              Watch Your Rankings <span className="gradient-text">Climb Live</span>
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every client gets a custom SEO dashboard with real-time keyword rankings, traffic analytics, backlink monitoring, and ROI tracking. Full transparency, zero guesswork.
              </p>
              <div className="space-y-3">
                {["Daily rank tracking for all target keywords", "Organic traffic growth visualization", "Competitor position monitoring", "Monthly ROI & revenue attribution"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent shrink-0" size={16} />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right">
            <img src={seoRankingsImage} alt="SEO analytics dashboard" className="w-full rounded-2xl glow-purple" />
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="py-24 md:py-32">
      <FloatingOrb color="yellow" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <AnimatedHeading className="mb-6">Ready to <span className="gradient-text-yellow">Rank #1?</span></AnimatedHeading>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get a free SEO audit and discover exactly how much organic traffic you're leaving on the table.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg glow-yellow hover:opacity-90 transition-all">
            Claim Your Free Audit <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </div>
    </SectionWrapper>
  </div>
);

export default ServiceSEO;
