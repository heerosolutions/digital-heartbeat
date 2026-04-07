import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a managed service provider?",
    a: "An MSP proactively manages your IT infrastructure, security, and support — so your team can focus on core business instead of troubleshooting tech issues.",
  },
  {
    q: "How quickly can you onboard our company?",
    a: "Typical onboarding takes 2–4 weeks, including a full infrastructure audit, security assessment, and migration of monitoring tools.",
  },
  {
    q: "Do you support remote and hybrid teams?",
    a: "Absolutely. We specialize in securing and managing distributed workforces with cloud-first solutions, VPN management, and endpoint security.",
  },
  {
    q: "What's your response time for critical issues?",
    a: "Our SLA guarantees a 15-minute response for critical (P1) issues, 1-hour for high priority, and 4-hour for standard requests.",
  },
  {
    q: "Can you work with our existing IT team?",
    a: "Yes. We offer co-managed IT services where we augment your internal team with specialized expertise and 24/7 coverage.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve healthcare, finance, legal, manufacturing, SaaS, and more — with compliance expertise for HIPAA, SOC 2, and PCI-DSS.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
          FAQs
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl bg-background px-6"
            >
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
