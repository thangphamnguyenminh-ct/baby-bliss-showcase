import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ui/image-gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";
import type { Pricing, Tier } from "@/config/types";
import { getThumbSizeUrl } from "@/lib/utils";

const PricingSection = ({ content }: { content: Pricing }) => {
  const { title, subtitle, tiers } = content;
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const activeTier = tiers.find((t) => t.key === activeKey);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollState();
    api.on("reInit", updateScrollState);
    api.on("select", updateScrollState);

    return () => {
      api.off("reInit", updateScrollState);
      api.off("select", updateScrollState);
    };
  }, [api]);

  return (
    <section id="pricing" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-1">
          {tiers.map((t: Tier) => (
            <CarouselItem key={t.name} className="basis-[90%] md:basis-[42%] lg:basis-[33%] pl-1">
              <div className="p-1 h-full">
                <Card className={t.highlight ? "ring-2 ring-primary h-full flex flex-col" : "h-full flex flex-col"}>
                  <div
                    onClick={() => { setActiveKey(t.key); setOpen(true); }}
                    className="w-full rounded-t-lg overflow-hidden border-b relative group cursor-pointer"
                  >
                    <img src={getThumbSizeUrl(t.images[0].img_id, 600)} alt={t.images[0].alt} className="w-full h-44 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">Xem qua</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-baseline justify-between">
                      <span>{t.name}</span>
                      <span className="font-display text-2xl">{t.price}</span>
                    </CardTitle>
                    <CardDescription>{t.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 text-sm flex-1">
                      {t.features.map((f: string) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle className="text-accent mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`mailto:hello@example.com?subject=Đặt%20lịch%20gói%20${encodeURIComponent(t.name)}`} className="mt-6 inline-block">
                      <Button variant={t.highlight ? "hero" : "outline"} size="lg">Đặt lịch</Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {canScrollPrev && <CarouselPrevious />}
        {canScrollNext && <CarouselNext />}
      </Carousel>

      <ImageGallery
        images={activeTier?.images || []}
        open={open}
        onOpenChange={(v) => { setOpen(v); if (!v) setActiveKey(null); }}
        title={`Thư viện demo – ${activeTier?.name}`}
      />
    </section>
  );
};

export default PricingSection;
