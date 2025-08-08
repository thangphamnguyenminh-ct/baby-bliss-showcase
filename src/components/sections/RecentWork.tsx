import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";
import g7 from "@/assets/gallery7.jpg";
import g8 from "@/assets/gallery8.jpg";

const galleryImages = [
  { src: g1, alt: "Bé ngủ bọc khăn màu hồng phấn trên nền vải lanh" },
  { src: g2, alt: "Bố mẹ ôm bé cạnh cửa sổ, ánh sáng tự nhiên" },
  { src: g3, alt: "Cận cảnh bàn chân bé sơ sinh quấn chăn mềm" },
  { src: g4, alt: "Bé ngủ trên chăn dệt, khăn quấn trung tính" },
  { src: g5, alt: "Khoảnh khắc gia đình ôm ấp bé gần cửa sổ" },
  { src: g6, alt: "Cận cảnh bàn tay bé cầm trái tim len nhỏ" },
  { src: g7, alt: "Bé trong giỏ với chăn mềm, tông cát và hồng" },
  { src: g8, alt: "Bé ngáp, quấn khăn kem trên nền vải lanh" },
];

const RecentWork = () => {
  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Dự án gần đây</h2>
        <p className="mt-2 text-muted-foreground">
          Những khoảnh khắc tinh tế được ghi lại.
        </p>
      </header>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {galleryImages.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-lg aspect-square" />
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

export default RecentWork;
