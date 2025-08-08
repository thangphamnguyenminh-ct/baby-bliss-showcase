import heroImage from "@/assets/hero-newborn.jpg";
import { Button } from "@/components/ui/button";
import { Star, Camera } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative">
      <div className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
        <img
          src={heroImage}
          alt="Newborn baby swaddled in soft linen, gentle natural light"
          className="w-full h-[60vh] md:h-[72vh] object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-10 md:pb-14">
            <div className="max-w-2xl animate-enter">
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
                Timeless Newborn Photography
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Gentle posing. Natural light. Heirloom images of your baby’s first days.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact">
                  <Button variant="hero" size="lg">Book Your Session</Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" size="lg">View Portfolio</Button>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Star className="text-accent" /><span>5.0 average rating</span></div>
                <div className="flex items-center gap-2"><Camera className="text-accent" /><span>Newborn specialist</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
