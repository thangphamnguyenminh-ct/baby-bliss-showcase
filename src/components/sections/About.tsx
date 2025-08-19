import type { About, Feature } from "@/config/types";
import { getThumbSizeUrl } from "@/lib/utils";

const AboutSection = ({ content }: { content: About }) => {
  const { title, subtitle, features } = content;

  return (
    <section id="about" className="container py-12 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>

      <div className="space-y-16">
        {features.map((it: Feature, idx: number) => (
          <article key={it.title} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <img
                src={getThumbSizeUrl(it.image.img_id, 500)}
                alt={it.image.alt}
                className="w-full h-72 md:h-96 object-cover rounded-xl border"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-prose">{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
