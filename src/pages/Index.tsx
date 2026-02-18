import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowRight, TrendingUp, Users, Zap, Star,
  Search, Target, Rocket,
  CheckCircle2, ArrowUpRight, Code, Sparkles, Globe, BarChart3, Palette
} from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import HeroScene from "@/components/HeroScene";
import analyticsImage from "@/assets/homepage-analytics.jpg";
import teamImage from "@/assets/team-work.jpg";
import abstractImage from "@/assets/abstract-brand.jpg";
import techflowImage from "@/assets/work-techflow.jpg";
import scaleupImage from "@/assets/work-scaleup.jpg";
import novabrandImage from "@/assets/work-novabrand.jpg";

const services = [
  { icon: Users, title: "Social Media Marketing", desc: "Build engaged communities across every platform", link: "/services/social-media", color: "from-pink-500/20 to-rose-500/20" },
  { icon: Code, title: "Web Development", desc: "Stunning sites that drive conversions and engagement", link: "/services/web-development", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Target, title: "Paid Ads", desc: "High-ROI campaigns that convert clicks to customers", link: "/services/paid-ads", color: "from-purple-500/20 to-violet-500/20" },
  { icon: Search, title: "SEO", desc: "Dominate search rankings with data-driven optimization", link: "/services/seo", color: "from-green-500/20 to-emerald-500/20" },
];

const metrics = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "10x", label: "Average ROI" },
  { value: "50+", label: "Team Experts" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechFlow", text: "MB Global transformed our digital presence completely. Revenue up 340% in 6 months.", avatar: "SC" },
  { name: "Marcus Rivera", role: "Founder, ScaleUp", text: "The most strategic marketing team we've ever worked with. They don't just execute — they innovate.", avatar: "MR" },
  { name: "Elena Kowalski", role: "CMO, NovaBrand", text: "Their approach to growth is surgical. Every dollar spent delivers measurable impact.", avatar: "EK" },
];

const logos = ["TechFlow", "ScaleUp", "NovaBrand", "GrowthLab", "Apex Digital", "Quantum"];

const caseStudyPreviews = [
  { title: "TechFlow SaaS", result: "+340% Traffic", category: "SEO", image: techflowImage },
  { title: "ScaleUp Fintech", result: "72% Lower CAC", category: "Ads", image: scaleupImage },
  { title: "NovaBrand D2C", result: "1M+ Impressions", category: "Social", image: novabrandImage },
];

const whyUsItems = [
  { title: "We're Bold", desc: "A team of forward thinkers, we keep it real to help you reach your audience.", icon: Rocket, bg: "bg-gradient-to-br from-amber-500/20 to-orange-500/20" },
  { title: "We're Data-Driven", desc: "We are research-obsessed, professionally sharp, and committed to timely results.", icon: BarChart3, bg: "bg-gradient-to-br from-violet-500/20 to-purple-500/20" },
  { title: "We're Creative", desc: "Old and boring don't work. Our ideation and innovation match the current trends.", icon: Palette, bg: "bg-gradient-to-br from-rose-500/20 to-pink-500/20" },
  { title: "We're Global", desc: "Operating across markets and time zones, we bring worldwide perspective to local impact.", icon: Globe, bg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HERO — Centered content with 3D background */}
      <SectionWrapper className="relative min-h-screen flex items-center pt-20">
        <motion.div ref={heroRef} style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <HeroScene />
        </motion.div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/70 via-transparent to-background/70" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Top badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-accent">
                <Sparkles size={14} /><span>Award-Winning Performance Marketing Agency</span>
              </div>
            </motion.div>

            {/* Main headline — massive & split */}
            <div className="text-center mb-6">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="font-display text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-bold leading-[0.95] tracking-tight">
                We Build
              </motion.h1>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="font-display text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-bold leading-[0.95] tracking-tight gradient-text">
                Digital Growth
              </motion.h1>
            </div>

            {/* Subheadline — two-column on desktop */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-right md:border-r md:border-border/30 md:pr-6">
                We combine data science, creative storytelling, and cutting-edge technology to help brands dominate their markets.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                From SEO and paid media to full-stack web development — we're your end-to-end growth engine.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="flex flex-wrap justify-center gap-4 mb-14">
              <Link to="/contact" className="px-10 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base flex items-center gap-2 hover:opacity-90 transition-all glow-yellow">
                Get Free Strategy Call <ArrowRight size={18} />
              </Link>
              <Link to="/work" className="px-10 py-4 rounded-xl glass text-foreground font-bold text-base flex items-center gap-2 hover:border-accent/50 transition-all">
                View Our Work <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            {/* Metrics strip — card style */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap justify-center gap-4 md:gap-6">
              {metrics.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + i * 0.1 }} className="glass rounded-xl px-6 py-4 text-center min-w-[120px]">
                  <div className="font-display text-2xl md:text-3xl font-bold gradient-text-yellow">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* LOGO BAR */}
      <SectionWrapper className="py-16 border-y border-border/20">
        <div className="container mx-auto px-6">
          <FadeIn><p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-widest">Trusted by industry leaders</p></FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {logos.map((logo, i) => (<FadeIn key={logo} delay={i * 0.08}><span className="font-display text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default">{logo}</span></FadeIn>))}
          </div>
        </div>
      </SectionWrapper>

      {/* SERVICES — Dynamic animated grid */}
      <SectionWrapper className="py-24 md:py-32 relative">
        <FloatingOrb color="yellow" size="w-72 h-72" className="-right-20 top-40" />
        <FloatingOrb color="purple" size="w-56 h-56" className="-left-16 bottom-20" delay={2} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p></FadeIn>
              <AnimatedHeading>What We <span className="gradient-text-yellow">Deliver</span></AnimatedHeading>
            </div>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">A 360° digital marketing agency covering every angle of your brand's growth.</p>
            </FadeIn>
          </div>

          {/* Bento-style dynamic grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <Link to={service.link}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative rounded-2xl overflow-hidden h-full ${i === 0 ? "md:row-span-1" : ""}`}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="absolute inset-[1px] rounded-2xl bg-card/90 backdrop-blur-xl" />
                    
                    <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[280px] justify-between">
                      {/* Top row: number + icon */}
                      <div className="flex items-center justify-between mb-8">
                        <motion.span 
                          className="font-display text-6xl font-bold text-foreground/[0.06]"
                          whileHover={{ scale: 1.2 }}
                        >
                          0{i + 1}
                        </motion.span>
                        <motion.div 
                          className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:rotate-6 transition-all duration-300"
                          whileHover={{ rotate: 12 }}
                        >
                          <service.icon className="text-accent" size={26} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text-yellow transition-all duration-300">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                        
                        {/* Animated arrow line */}
                        <div className="flex items-center gap-3">
                          <span className="text-accent font-semibold text-sm">Explore</span>
                          <motion.div 
                            className="h-px bg-gradient-to-r from-accent to-transparent flex-1 origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                          />
                          <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                            <ArrowUpRight className="text-accent group-hover:text-accent-foreground transition-colors" size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-14">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-sm font-semibold hover:border-accent/50 hover:gap-3 transition-all">
                View All Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* WHY US — Bento grid inspired by reference */}
      <SectionWrapper className="py-24 md:py-32 relative">
        <FloatingOrb color="purple" size="w-80 h-80" className="-left-20 top-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</p></FadeIn>
              <AnimatedHeading className="mb-6">How Do We Create <span className="gradient-text">Impact?</span></AnimatedHeading>
            </div>
            <FadeIn delay={0.2}><p className="text-muted-foreground text-lg leading-relaxed lg:pt-12">We innovate with our team of experts to create ideas that turn into conversions, aligning with your business goals. Here's what makes us different.</p></FadeIn>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUsItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12}>
                <motion.div whileHover={{ y: -6 }} className={`${item.bg} rounded-2xl p-6 h-full border border-border/30 flex flex-col justify-between min-h-[220px]`}>
                  <div className="w-12 h-12 rounded-xl bg-background/30 flex items-center justify-center mb-6">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* PARALLAX IMAGE BREAK */}
      <SectionWrapper className="relative h-[50vh]">
        <img src={abstractImage} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn><div className="text-center"><h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Strategy Meets <span className="gradient-text-yellow">Execution</span></h2><p className="text-muted-foreground text-lg">Where data-driven insights become revenue-generating machines.</p></div></FadeIn>
        </div>
      </SectionWrapper>

      {/* BRAND STORY */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Who We Are</p></FadeIn>
              <AnimatedHeading className="mb-6">Not Just an Agency. <span className="gradient-text">Your Growth Partner.</span></AnimatedHeading>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">MB Global Marketing is a performance-first digital agency that helps ambitious brands scale through data-driven strategies, stunning creative, and relentless optimization.</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[{ label: "Data-Driven", desc: "Every decision backed by analytics" }, { label: "Full-Stack", desc: "Strategy to execution, end-to-end" }, { label: "Transparent", desc: "Real-time reporting & full access" }, { label: "Results-First", desc: "We optimize for ROI, not vanity" }].map((item) => (
                    <div key={item.label} className="flex items-start gap-3"><CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} /><div><div className="font-semibold">{item.label}</div><div className="text-sm text-muted-foreground">{item.desc}</div></div></div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.4}><Link to="/about" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">Learn More About Us <ArrowRight size={16} /></Link></FadeIn>
            </div>
            <div className="lg:col-span-2">
              <FadeIn direction="right">
                <div className="relative">
                  <img src={teamImage} alt="MB Global team" className="w-full rounded-2xl" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 left-6 px-5 py-3 rounded-xl glass-strong">
                    <div className="flex items-center gap-2"><Rocket className="text-accent" size={18} /><span className="text-sm font-semibold">Since 2019</span></div>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* METRICS */}
      <SectionWrapper className="py-20 border-y border-border/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, i) => (
              <FadeIn key={metric.label} delay={i * 0.12}><div className="text-center"><motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }} className="font-display text-5xl md:text-6xl font-bold gradient-text-yellow mb-3">{metric.value}</motion.div><div className="text-muted-foreground text-sm">{metric.label}</div></div></FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CASE STUDIES */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div><FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Case Studies</p></FadeIn><AnimatedHeading>Results That <span className="gradient-text-yellow">Speak Volumes</span></AnimatedHeading></div>
            <FadeIn delay={0.2}><Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-semibold hover:border-accent/50 transition-all">View All Work <ArrowUpRight size={16} /></Link></FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudyPreviews.map((study, i) => (
              <FadeIn key={study.title} delay={i * 0.1}>
                <Link to="/work">
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group relative rounded-2xl overflow-hidden glow-border">
                    <img src={study.image} alt={study.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent font-medium">{study.category}</span>
                      <h3 className="font-display text-xl font-bold mt-2 mb-1">{study.title}</h3>
                      <div className="font-display text-2xl font-bold gradient-text-yellow">{study.result}</div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* DASHBOARD SHOWCASE */}
      <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left"><img src={analyticsImage} alt="Analytics dashboard" className="w-full rounded-2xl glow-purple" /></FadeIn>
            <div>
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Full Transparency</p></FadeIn>
              <AnimatedHeading className="mb-6 text-3xl md:text-4xl">Real-Time <span className="gradient-text">Performance Dashboards</span></AnimatedHeading>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground leading-relaxed mb-8">Every client gets a custom analytics dashboard with real-time metrics, campaign performance data, and ROI tracking. No black boxes.</p>
                <div className="space-y-3">
                  {["Live campaign performance metrics", "Revenue attribution & ROI tracking", "Competitor benchmarking", "Monthly strategy recommendations"].map((item) => (
                    <div key={item} className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={16} /><span className="text-sm text-foreground/80">{item}</span></div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* TESTIMONIALS — Marquee-style with featured quote */}
      <SectionWrapper className="py-24 md:py-32 relative">
        <FloatingOrb color="purple" size="w-72 h-72" className="-right-20 top-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — Section header + featured quote */}
            <div className="lg:col-span-2">
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</p></FadeIn>
              <AnimatedHeading className="mb-8 text-3xl md:text-4xl lg:text-5xl">What Our <span className="gradient-text">Clients Say</span></AnimatedHeading>
              <FadeIn delay={0.2}>
                <div className="relative">
                  <div className="absolute -top-4 -left-2 font-display text-7xl text-accent/20 leading-none select-none">"</div>
                  <div className="pl-6 pt-4">
                    <p className="text-foreground text-xl leading-relaxed font-medium italic mb-6">{testimonials[0].text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-sm font-bold">{testimonials[0].avatar}</div>
                      <div>
                        <div className="font-semibold">{testimonials[0].name}</div>
                        <div className="text-muted-foreground text-sm">{testimonials[0].role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            {/* Right — Stacked cards */}
            <div className="lg:col-span-3 space-y-5">
              {testimonials.slice(1).map((t, i) => (
                <FadeIn key={t.name} delay={0.1 + i * 0.15}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="relative p-6 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm flex flex-col md:flex-row gap-5"
                  >
                    <div className="flex gap-0.5 md:flex-col md:gap-0.5 shrink-0 pt-1">
                      {[...Array(5)].map((_, si) => <Star key={si} size={14} className="text-accent fill-accent" />)}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/90 leading-relaxed mb-4 italic">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-xs font-bold">{t.avatar}</div>
                        <div><span className="font-semibold text-sm">{t.name}</span><span className="text-muted-foreground text-sm ml-2">· {t.role}</span></div>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
              {/* Extra social proof bar */}
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-accent/5 border border-accent/10">
                  <div className="flex -space-x-2">
                    {["SC", "MR", "EK"].map((a, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border-2 border-background flex items-center justify-center text-[10px] font-bold">{a}</div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-accent fill-accent" />)}</div>
                    <span className="text-sm text-muted-foreground">4.9/5 from 200+ reviews</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL CTA — Premium split layout */}
      <SectionWrapper className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-card to-accent/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15),transparent_60%)]" />
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl translate-y-1/2 -translate-x-1/4" />
              
              <div className="relative p-10 md:p-16 lg:p-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Ready to Grow?</p>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                        Let's Build Your<br /><span className="gradient-text-yellow">Growth Engine</span>
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                        Get a free strategy session with our experts. We'll audit your current performance and map out a custom growth plan.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link to="/contact" className="px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg flex items-center gap-2 hover:opacity-90 transition-all glow-yellow">
                        Book Free Call <ArrowRight size={20} />
                      </Link>
                      <Link to="/work" className="px-10 py-5 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 font-bold text-lg flex items-center gap-2 hover:border-accent/50 transition-all">
                        See Our Results
                      </Link>
                    </motion.div>
                  </div>
                  {/* Right — What you get list */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="space-y-5">
                      {[
                        { label: "Full Performance Audit", desc: "We analyze your entire digital footprint" },
                        { label: "Custom Growth Roadmap", desc: "Actionable 90-day plan tailored to your goals" },
                        { label: "ROI Projections", desc: "Clear revenue forecasts based on your data" },
                        { label: "Competitor Analysis", desc: "See exactly where you can outperform rivals" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-border/20"
                        >
                          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="text-accent" size={20} />
                          </div>
                          <div>
                            <div className="font-semibold mb-0.5">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Index;
