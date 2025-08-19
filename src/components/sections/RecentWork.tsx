import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Image, RecentWork } from "@/config/types";
import { getThumbSizeUrl } from "@/lib/utils";

const RecentWorkSection = ({ content }: { content: RecentWork }) => {
  const { title, subtitle, images } = content;

  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((img: Image, index: number) => (
            <CarouselItem
              key={index}
              className="basis-[75%] md:basis-[40%] lg:basis-[30%]"
            >
              <div className="p-1">
                <img
                  src={getThumbSizeUrl(img.img_id, 800)}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-lg aspect-square"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default RecentWorkSection;
