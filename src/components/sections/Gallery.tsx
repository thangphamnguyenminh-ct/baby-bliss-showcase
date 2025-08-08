import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";

const Gallery = () => {
  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Recent Work</h2>
        <p className="mt-2 text-muted-foreground">
          A glimpse into softly lit, natural newborn sessions.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{src:g1,alt:"Sleeping newborn wrapped in blush swaddle on linen"},{src:g2,alt:"Parents holding newborn hands in soft light"},{src:g3,alt:"Macro photo of tiny newborn feet wrapped in blanket"}].map((img, i) => (
          <figure key={i} className="group overflow-hidden rounded-xl border bg-card shadow-sm hover-scale">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
