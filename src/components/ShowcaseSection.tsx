import showcaseDell from "@/assets/showcase-dell.jpg";
import showcaseLenovo from "@/assets/showcase-lenovo.jpg";
import showcaseWazuh from "@/assets/showcase-wazuh.jpg";
import showcaseVelociraptor from "@/assets/showcase-velociraptor.jpg";
import showcaseOpensource from "@/assets/showcase-opensource.jpg";

const images = [
  { src: showcaseDell, alt: "Dell enterprise server and laptop solutions" },
  { src: showcaseLenovo, alt: "Lenovo ThinkPad and ThinkStation workstations" },
  { src: showcaseWazuh, alt: "Wazuh open source SIEM platform" },
  { src: showcaseVelociraptor, alt: "Velociraptor endpoint detection and response" },
  { src: showcaseOpensource, alt: "Open source technology ecosystem" },
];

const ShowcaseSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex gap-6 animate-scroll-left" style={{ width: "200%" }}>
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[500px] h-[320px] rounded-2xl overflow-hidden bg-secondary"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
