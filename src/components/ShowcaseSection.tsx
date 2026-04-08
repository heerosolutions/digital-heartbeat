import logoVelociraptor from "@/assets/logo-velociraptor.png";
import logoProxmox from "@/assets/logo-proxmox.png";
import logoWazuh from "@/assets/logo-wazuh.png";
import logoInvoiceNinja from "@/assets/logo-invoiceninja.png";
import logoTruenas from "@/assets/logo-truenas.png";

const logos = [
  { src: logoProxmox, alt: "Proxmox" },
  { src: logoWazuh, alt: "Wazuh" },
  { src: logoVelociraptor, alt: "Velociraptor" },
  { src: logoInvoiceNinja, alt: "Invoice Ninja" },
  { src: logoTruenas, alt: "TrueNAS" },
];

const ShowcaseSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex gap-10 justify-center items-center animate-scroll-left" style={{ width: "200%" }}>
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center p-5"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
