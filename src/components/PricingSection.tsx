import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essential",
    price: "1,500",
    period: "/mo",
    description: "For small teams getting started",
    features: [
      "24/7 monitoring & alerting",
      "Helpdesk support (business hours)",
      "Patch management",
      "Monthly health reports",
      "Up to 25 endpoints",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "3,500",
    period: "/mo",
    description: "For growing businesses",
    features: [
      "Everything in Essential",
      "24/7 helpdesk support",
      "Advanced cybersecurity suite",
      "Cloud infrastructure management",
      "Dedicated account manager",
      "Up to 100 endpoints",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "On-site support available",
      "Custom SLA agreements",
      "vCIO strategic consulting",
      "Compliance & audit support",
      "Unlimited endpoints",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-primary bg-foreground text-background relative"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? "opacity-70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold">
                  {plan.price === "Custom" ? "" : "$"}{plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "opacity-70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`rounded-full gap-2 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-cyan-light"
                    : "bg-foreground text-background hover:bg-navy-light"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
