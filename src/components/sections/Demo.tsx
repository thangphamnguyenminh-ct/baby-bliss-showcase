import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageGallery } from "@/components/ui/image-gallery";
import type { Concept } from "@/config/types";
import { getThumbSizeUrl } from "@/lib/utils";

const DemoSection = ({ content }: { content: Concept }) => {
  const { title, subtitle, cover, gallery } = content;
  const [open, setOpen] = useState(false);

  return (
    <section id="demo" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>

      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-xl overflow-hidden border bg-card shadow-sm group"
        aria-label="Mở thư viện ảnh demo"
      >
        <AspectRatio ratio={1182 / 788}>
          <div className="overflow-hidden h-full w-full">
            <img
              src={getThumbSizeUrl(cover.img_id, 1200)}
              alt={cover.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </AspectRatio>
      </button>

      <ImageGallery
        images={gallery}
        open={open}
        onOpenChange={setOpen}
        title="Thư viện ảnh demo"
      />
    </section>
  );
};

export default DemoSection;
