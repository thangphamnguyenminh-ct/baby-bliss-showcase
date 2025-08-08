import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import demoCover from "@/assets/demo-cover.jpg";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";

const demoImages = [
  { src: g1, alt: "Khoảnh khắc bé ngủ yên trên nền vải" },
  { src: g2, alt: "Bố mẹ ôm ấp bé cạnh cửa sổ" },
  { src: g3, alt: "Cận cảnh bàn chân bé" },
  { src: g4, alt: "Bé ngủ bọc khăn trung tính" },
  { src: g5, alt: "Cái ôm ấm áp của gia đình" },
  { src: g6, alt: "Bàn tay bé cầm trái tim len" },
];

const Demo = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="demo" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Xem Demo</h2>
        <p className="mt-2 text-muted-foreground">
          Thư viện ảnh hậu trường và thành phẩm để bạn cảm nhận phong cách chụp.
        </p>
      </header>

      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSelected(null); }}>
        <DialogTrigger asChild>
          <button className="w-full rounded-xl overflow-hidden border bg-card shadow-sm hover-scale" aria-label="Mở thư viện ảnh demo">
            <AspectRatio ratio={16 / 9}>
              <img src={demoCover} alt="Ảnh bìa thư viện ảnh demo newborn" className="h-full w-full object-cover" />
            </AspectRatio>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Thư viện ảnh demo</DialogTitle>
          </DialogHeader>

          {selected === null ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {demoImages.map((img, idx) => (
                <button key={idx} onClick={() => setSelected(idx)} className="group rounded-lg overflow-hidden border hover-scale" aria-label={`Xem ảnh: ${img.alt}`}>
                  <AspectRatio ratio={4 / 3}>
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </AspectRatio>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <AspectRatio ratio={4 / 3}>
                <img src={demoImages[selected].src} alt={demoImages[selected].alt} className="h-full w-full object-cover rounded-lg border" />
              </AspectRatio>
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => setSelected((i) => (i! > 0 ? (i! - 1) : demoImages.length - 1))}>Ảnh trước</Button>
                <Button variant="outline" onClick={() => setSelected(null)}>Quay lại lưới</Button>
                <Button variant="outline" onClick={() => setSelected((i) => (i! < demoImages.length - 1 ? (i! + 1) : 0))}>Ảnh tiếp</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Demo;
