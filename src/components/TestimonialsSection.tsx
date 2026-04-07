import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "They migrated our entire infrastructure to the cloud in under 6 weeks with zero downtime. The team's expertise is unmatched.",
    name: "Sarah Chen",
    role: "CTO, DataPrime",
  },
  {
    quote: "Since partnering with them, our security incidents dropped by 94%. Their proactive approach to IT management is a game-changer.",
    name: "Marcus Rodriguez",
    role: "VP of Operations, NetGuard",
  },
  {
    quote: "Response times are incredible. Every issue gets resolved fast and the communication is always transparent. Best MSP we've worked with.",
    name: "Lisa Thompson",
    role: "IT Director, CloudSync",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-background border border-border p-8 flex flex-col"
            >
              <p className="text-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
