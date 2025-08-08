import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import demoCover from "@/assets/demo-cover.jpg";

const Demo = () => {
  return (
    <section id="demo" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Xem Demo</h2>
        <p className="mt-2 text-muted-foreground">
          60 giây để cảm nhận không khí buổi chụp – nhẹ nhàng, ấm áp và an toàn cho bé.
        </p>
      </header>
      <div className="rounded-xl overflow-hidden border bg-card shadow-sm">
        <AspectRatio ratio={16 / 9}>
          <img
            src={demoCover}
            alt="Ảnh bìa video demo chụp newborn trong ánh sáng tự nhiên"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 grid place-items-center">
            <a
              href="https://www.youtube.com/results?search_query=newborn+photography+behind+the+scenes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mở video demo trên YouTube"
            >
              <Button variant="hero" size="lg" className="gap-2">
                <Play /> Xem video demo
              </Button>
            </a>
          </div>
        </AspectRatio>
      </div>
    </section>
  );
};

export default Demo;
