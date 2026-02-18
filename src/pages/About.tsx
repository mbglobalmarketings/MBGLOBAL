import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Eye, Users, Rocket, CheckCircle2, Award, Globe, Zap } from "lucide-react";
import { FloatingOrb, SectionWrapper, AnimatedHeading, FadeIn, GlassCard } from "@/components/ui-elements";
import { motion } from "framer-motion";
import teamImage from "@/assets/team-work.jpg";
import cultureImage from "@/assets/about-culture.jpg";

const team = [
  { name: "Michael Bates", role: "Founder & CEO", specialty: "Growth Strategy" },
  { name: "Aria Patel", role: "Head of Marketing", specialty: "Performance Marketing" },
  { name: "James Okafor", role: "Creative Director", specialty: "Brand & Design" },
  { name: "Sophie Müller", role: "Head of SEO", specialty: "Technical SEO" },
  { name: "Liam Chen", role: "Ads Strategist", specialty: "Paid Media" },
  { name: "Emma Rodriguez", role: "Content Lead", specialty: "Content Strategy" },
];

const values = [
  { icon: Target, title: "Results-Obsessed", desc: "Every decision is driven by data and measured by impact on your bottom line." },
  { icon: Heart, title: "Client-First", desc: "Your success is our success. We operate as an extension of your team." },
  { icon: Eye, title: "Transparent", desc: "No black boxes. You see everything — every metric, every strategy, every dollar." },
  { icon: Users, title: "Collaborative", desc: "We work with you, not just for you. Partnership drives the best results." },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "Started with a vision to build a different kind of agency." },
  { year: "2020", title: "First 50 Clients", desc: "Proved our model works across industries and scales." },
  { year: "2022", title: "Global Expansion", desc: "Opened offices in London and expanded remote operations." },
  { year: "2024", title: "500+ Projects", desc: "Crossed 500 successful projects with 98% client retention." },
  { year: "2026", title: "AI-Powered Growth", desc: "Integrating AI tools for next-gen marketing automation." },
];

const achievements = [
  { icon: Award, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Zap, value: "98%", label: "Client Retention" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      <SectionWrapper className="relative py-24 md:py-32">
        <FloatingOrb color="yellow" className="-top-10 right-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">About Us</p></FadeIn>
              <AnimatedHeading className="mb-6">We're a Team of <span className="gradient-text">Growth Architects</span></AnimatedHeading>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">Born from the belief that marketing should be measurable, beautiful, and ruthlessly effective.</p>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((a) => (
                    <div key={a.label} className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><a.icon className="text-accent" size={18} /></div><div><div className="font-display font-bold text-lg gradient-text-yellow">{a.value}</div><div className="text-xs text-muted-foreground">{a.label}</div></div></div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="right">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-2xl overflow-hidden glow-border">
                <img src={teamImage} alt="MB Global team" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative py-24 md:py-32">
        <div className="absolute inset-0"><img src={cultureImage} alt="" className="w-full h-full object-cover opacity-15" /><div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" /></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Story</p></FadeIn>
            <AnimatedHeading className="mb-8 text-3xl md:text-5xl">Built Different, <span className="gradient-text-yellow">By Design</span></AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">MB Global Marketing was founded with a single conviction: that marketing agencies should be held to the same performance standards as the businesses they serve.</p>
              <p className="text-muted-foreground leading-relaxed text-lg">Today, we're a team of 50+ specialists spanning strategy, design, development, and analytics — united by a shared obsession with delivering results that matter.</p>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn><GlassCard hover={false} className="glow-border h-full p-10"><div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Eye className="text-accent" size={32} /></div><h3 className="font-display text-3xl font-bold mb-4">Our Vision</h3><p className="text-muted-foreground leading-relaxed text-lg">To become the world's most trusted growth partner for ambitious brands.</p></GlassCard></FadeIn>
            <FadeIn delay={0.1}><GlassCard hover={false} className="glow-border h-full p-10"><div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6"><Rocket className="text-accent" size={32} /></div><h3 className="font-display text-3xl font-bold mb-4">Our Mission</h3><p className="text-muted-foreground leading-relaxed text-lg">To build digital systems that scale brands faster through data-driven strategies.</p></GlassCard></FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32 border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Journey</p></FadeIn><AnimatedHeading>Growing <span className="gradient-text">Together</span></AnimatedHeading></div>
          <div className="relative"><div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border/30" /><div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {timeline.map((item, i) => (<FadeIn key={item.year} delay={i * 0.1}><div className="relative text-center"><div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10 bg-background"><span className="font-display text-xs font-bold text-accent">{item.year}</span></div><h4 className="font-display font-bold mb-1">{item.title}</h4><p className="text-muted-foreground text-sm">{item.desc}</p></div></FadeIn>))}
          </div></div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div><FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Values</p></FadeIn><AnimatedHeading className="mb-6">What <span className="gradient-text">Drives Us</span></AnimatedHeading><FadeIn delay={0.2}><p className="text-muted-foreground leading-relaxed text-lg">These aren't just words on a wall. They're the principles that guide every decision.</p></FadeIn></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (<FadeIn key={v.title} delay={i * 0.1}><GlassCard className="glow-border h-full"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><v.icon className="text-accent" size={22} /></div><h4 className="font-display font-bold text-lg mb-2">{v.title}</h4><p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p></GlassCard></FadeIn>))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><FadeIn><p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">The Team</p></FadeIn><AnimatedHeading>Meet the <span className="gradient-text-yellow">Experts</span></AnimatedHeading></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (<FadeIn key={member.name} delay={i * 0.08}><GlassCard className="glow-border"><div className="flex items-center gap-4"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0"><span className="font-display text-xl font-bold">{member.name.split(" ").map(n => n[0]).join("")}</span></div><div><h4 className="font-display font-bold">{member.name}</h4><p className="text-accent text-sm font-medium">{member.role}</p><p className="text-muted-foreground text-xs">{member.specialty}</p></div></div></GlassCard></FadeIn>))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 md:py-32">
        <FloatingOrb color="purple" size="w-96 h-96" className="left-1/2 -translate-x-1/2 top-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <AnimatedHeading className="mb-6">Want to <span className="gradient-text-yellow">Work With Us?</span></AnimatedHeading>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Whether you're looking to grow your brand or join our team, we'd love to hear from you.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg glow-yellow hover:opacity-90 transition-all">Get in Touch <ArrowRight size={20} /></Link>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
