import { Button } from "@/components/ui/button";
import type { Hero } from "@/config/types";
import { getFullSizeUrl } from "@/lib/utils";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const HeroSection = ({ content }: { content: Hero }) => {
  const { image, title, subtitle, cta1, cta2 } = content;

  return (
    <section id="top" className="relative">
      <div className="relative overflow-hidden bg-card shadow-sm">
        <img
          src={getFullSizeUrl(image.img_id)}
          alt={image.alt}
          className="w-full h-[60vh] md:h-[72vh] object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 md:px-6 lg:container lg:mx-auto pb-10 md:pb-14">
            <div className="max-w-2xl animate-enter">
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground hidden md:block">
                {subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact">
                  <Button variant="hero" size="lg">{cta1}</Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" size="lg">{cta2}</Button>
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-6 w-6 text-accent hover:text-primary transition-colors" />
                </a>
                <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6 text-accent hover:text-primary transition-colors" />
                </a>
                <a href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="h-6 w-6 text-accent hover:text-primary transition-colors" />
                </a>
                <a href="tel:+1234567890" aria-label="Phone" className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-accent hover:text-primary transition-colors" />
                  <span className="text-accent hover:text-primary transition-colors">+84 123 456 789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
