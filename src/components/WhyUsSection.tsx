import { motion } from "framer-motion";
import { Shield, Clock, Headphones, Server, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Monitoring",
    desc: "Round-the-clock monitoring with instant alerting. We catch issues before they impact your business.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Multi-layered cybersecurity with endpoint protection, SIEM, and zero-trust architecture.",
  },
  {
    icon: Server,
    title: "Cloud & Infrastructure",
    desc: "Hybrid cloud management across AWS, Azure, and on-prem — optimized for performance and cost.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    desc: "A named account manager and senior engineers assigned directly to your account.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "15-minute response time SLA for critical issues. We move fast when it matters most.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
          Why choose us
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
