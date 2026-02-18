import { motion } from "framer-motion";
import { SectionWrapper, FadeIn, AnimatedHeading } from "@/components/ui-elements";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the MB Global Marketing website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.\n\nThese terms apply to all visitors, users, and clients of our services.`,
  },
  {
    title: "2. Services",
    content: `MB Global Marketing provides digital marketing services including but not limited to social media marketing, search engine optimization (SEO), paid advertising management, web development, and related consulting services.\n\nThe specific scope, deliverables, and timelines for each engagement will be outlined in a separate service agreement or statement of work.`,
  },
  {
    title: "3. Client Obligations",
    content: `As a client, you agree to:\n\n• Provide accurate and complete information as needed for service delivery\n• Grant necessary access to platforms, accounts, and tools as required\n• Review and approve deliverables in a timely manner\n• Make payments according to the agreed-upon schedule\n• Comply with all applicable laws and regulations`,
  },
  {
    title: "4. Intellectual Property",
    content: `All content, designs, strategies, and materials created by MB Global Marketing remain our intellectual property until full payment is received. Upon full payment, ownership of deliverables transfers to the client as specified in the service agreement.\n\nOur proprietary tools, processes, methodologies, and frameworks remain the exclusive property of MB Global Marketing.`,
  },
  {
    title: "5. Payment Terms",
    content: `Payment terms are as specified in your service agreement. Unless otherwise stated:\n\n• Invoices are due within 30 days of issuance\n• Late payments may incur a 1.5% monthly interest charge\n• We reserve the right to suspend services for overdue accounts\n• All fees are non-refundable unless otherwise stated in writing`,
  },
  {
    title: "6. Limitation of Liability",
    content: `MB Global Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim.\n\nWe do not guarantee specific results such as search engine rankings, conversion rates, or revenue increases, as these depend on numerous factors beyond our control.`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business strategies, analytics data, customer information, and any other sensitive materials.\n\nThis obligation survives the termination of our business relationship.`,
  },
  {
    title: "8. Termination",
    content: `Either party may terminate the service agreement with 30 days' written notice. Upon termination:\n\n• All outstanding invoices become immediately due\n• We will deliver any completed work up to the termination date\n• Access to our tools and platforms will be revoked\n• Confidentiality obligations continue to apply`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in New York City.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated terms.`,
  },
];

const TermsOfService = () => (
  <div className="min-h-screen">
    <SectionWrapper className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          </FadeIn>
          <AnimatedHeading className="mb-4 text-3xl md:text-5xl">Terms of Service</AnimatedHeading>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground mb-2">Effective Date: January 1, 2026</p>
            <p className="text-muted-foreground leading-relaxed">
              Please read these Terms of Service carefully before using MB Global Marketing's website and services.
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
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base pl-4 border-l-2 border-accent/20 group-hover:border-accent/40 transition-colors">
                  {section.content}
                </div>
              </motion.div>
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <div className="mt-12 p-6 rounded-2xl bg-card/40 border border-border/30">
              <h3 className="font-display text-lg font-semibold mb-2">Questions?</h3>
              <p className="text-muted-foreground text-sm">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@mbglobal.com" className="text-accent hover:underline">legal@mbglobal.com</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default TermsOfService;
