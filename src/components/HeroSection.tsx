import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
          <Shield className="w-4 h-4 text-primary" />
          99.9% uptime SLA · 500+ endpoints managed · 24/7 monitoring
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Your dedicated IT
          <br />
          <span className="text-gradient">partner for growth</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          A proactive managed service provider that keeps your infrastructure
          secure, fast, and always online — so you can focus on what matters.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 gap-2 bg-foreground text-background hover:bg-navy-light">
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Our Services
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
