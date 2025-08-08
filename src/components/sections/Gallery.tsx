import { useEffect, useMemo, useRef, useState } from "react";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";
import g7 from "@/assets/gallery7.jpg";
import g8 from "@/assets/gallery8.jpg";
import g9 from "@/assets/gallery9.jpg";
import g10 from "@/assets/gallery10.jpg";
import g11 from "@/assets/gallery11.jpg";
import g12 from "@/assets/gallery12.jpg";

const baseImages = [
  { src: g1, alt: "Bé ngủ bọc khăn màu hồng phấn trên nền vải lanh" },
  { src: g2, alt: "Bố mẹ ôm bé cạnh cửa sổ, ánh sáng tự nhiên" },
  { src: g3, alt: "Cận cảnh bàn chân bé sơ sinh quấn chăn mềm" },
  { src: g4, alt: "Bé ngủ trên chăn dệt, khăn quấn trung tính" },
  { src: g5, alt: "Khoảnh khắc gia đình ôm ấp bé gần cửa sổ" },
  { src: g6, alt: "Cận cảnh bàn tay bé cầm trái tim len nhỏ" },
  { src: g7, alt: "Bé trong giỏ với chăn mềm, tông cát và hồng" },
  { src: g8, alt: "Bé ngáp, quấn khăn kem trên nền vải lanh" },
  { src: g9, alt: "Anh/chị hôn trán em bé, ánh sáng ấm áp" },
  { src: g10, alt: "Chân dung tối giản trên phông nền mềm" },
  { src: g11, alt: "Bé đội mũ len nhỏ, tông màu trung tính" },
  { src: g12, alt: "Bàn tay bố mẹ tạo hình trái tim quanh chân bé" },
];

const Gallery = () => {
  const [count, setCount] = useState(9);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => {
    const images: typeof baseImages = [];
    for (let i = 0; i < count; i++) {
      images.push(baseImages[i % baseImages.length]);
    }
    return images;
  }, [count]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount((c) => Math.min(c + 6, 120));
        }
      });
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Bộ sưu tập mới</h2>
        <p className="mt-2 text-muted-foreground">
          Nhiều khoảnh khắc tinh tế – cuộn xuống để xem thêm (tải vô hạn).
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((img, i) => (
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
      <div ref={sentinelRef} className="h-10" aria-hidden />
    </section>
  );
};

export default Gallery;
