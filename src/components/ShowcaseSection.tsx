import logoProxmox from "@/assets/logo-proxmox.png";
import logoWazuh from "@/assets/logo-wazuh.png";
import logoInvoiceNinja from "@/assets/logo-invoiceninja.png";
import logoNetbird from "@/assets/logo-netbird.png";

const logos = [
  { src: logoProxmox, alt: "Proxmox", label: "Proxmox" },
  { src: logoWazuh, alt: "Wazuh", label: "Wazuh" },
  { src: logoInvoiceNinja, alt: "Invoice Ninja", label: "Invoice Ninja" },
  { src: logoNetbird, alt: "Netbird", label: "Netbird" },
];

const ShowcaseSection = () => {
  return (
    <section className="py-12">
      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-white border border-white/20 flex items-center justify-center p-4 shadow-md">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {logo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
