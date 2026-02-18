import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingOrbProps {
  color?: "purple" | "yellow";
  size?: string;
  className?: string;
  delay?: number;
}

export const FloatingOrb = ({ color = "purple", size = "w-64 h-64", className = "", delay = 0 }: FloatingOrbProps) => (
  <motion.div
    animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${size} ${
      color === "purple" ? "bg-primary" : "bg-accent"
    } ${className}`}
  />
);

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => (
  <section id={id} className={`relative overflow-hidden ${className}`}>
    {children}
  </section>
);

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedHeading = ({ children, className = "" }: AnimatedHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold ${className}`}
  >
    {children}
  </motion.h2>
);

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: FadeInProps) => {
  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => (
  <motion.div
    whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
    transition={{ duration: 0.3 }}
    className={`glass rounded-xl p-6 ${hover ? "cursor-pointer" : ""} ${className}`}
  >
    {children}
  </motion.div>
);
