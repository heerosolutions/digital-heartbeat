import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
          Ready to simplify your IT?
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Let's talk about how we can keep your business running smoothly — and securely.
        </p>
        <Button size="lg" className="rounded-full px-10 gap-2 bg-foreground text-background hover:bg-navy-light">
          Book a Free Consultation
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <footer className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-heading font-semibold text-foreground text-lg">Uyuni Tech</span>
        <span>© 2026 Uyuni Tech. All rights reserved.</span>
      </footer>
    </section>
  );
};

export default FooterCTA;
