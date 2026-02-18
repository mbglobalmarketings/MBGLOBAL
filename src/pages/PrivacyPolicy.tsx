import { motion } from "framer-motion";
import { SectionWrapper, FadeIn, AnimatedHeading } from "@/components/ui-elements";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly, such as when you fill out a contact form, subscribe to our newsletter, or engage with our services. This may include your name, email address, phone number, company name, and any other details you choose to share.\n\nWe also automatically collect certain technical data when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:\n\n• Provide, maintain, and improve our services\n• Respond to your inquiries and fulfill your requests\n• Send you marketing communications (with your consent)\n• Analyze website usage and optimize user experience\n• Comply with legal obligations and protect our rights`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our clients — provided those parties agree to keep this information confidential.\n\nWe may also disclose your information when required by law or to protect our rights, privacy, safety, or property.`,
  },
  {
    title: "4. Cookies & Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.\n\nWe use analytics tools such as Google Analytics to collect anonymized usage data. These tools may use cookies to track interactions with our website.`,
  },
  {
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your jurisdiction, you may have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Object to or restrict processing of your data\n• Request data portability\n\nTo exercise any of these rights, please contact us at privacy@mbglobal.com.`,
  },
  {
    title: "7. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <SectionWrapper className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          </FadeIn>
          <AnimatedHeading className="mb-4 text-3xl md:text-5xl">Privacy Policy</AnimatedHeading>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground mb-2">Effective Date: January 1, 2026</p>
            <p className="text-muted-foreground leading-relaxed">
              At MB Global Marketing, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
            </p>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.05}>
              <motion.div className="group">
                <h2 className="font-display text-xl md:text-2xl font-bold mb-4 text-foreground">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base pl-4 border-l-2 border-primary/20 group-hover:border-accent/40 transition-colors">
                  {section.content}
                </div>
              </motion.div>
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <div className="mt-12 p-6 rounded-2xl bg-card/40 border border-border/30">
              <h3 className="font-display text-lg font-semibold mb-2">Questions?</h3>
              <p className="text-muted-foreground text-sm">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@mbglobal.com" className="text-accent hover:underline">privacy@mbglobal.com</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default PrivacyPolicy;
