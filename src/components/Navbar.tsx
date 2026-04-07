import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading text-xl font-bold"><span className="font-heading text-xl font-bold">Uyuni Tech</span></span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-navy-light">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
