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
    <section className="py-12">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center p-3"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
