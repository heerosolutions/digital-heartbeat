import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const images = [
  { src: showcase1, alt: "Network monitoring dashboard" },
  { src: showcase2, alt: "Cloud migration architecture" },
  { src: showcase3, alt: "Security operations center" },
  { src: showcase4, alt: "IT helpdesk system" },
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
