import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import mini1 from "@/assets/pricing-mini-1.jpg";
import mini2 from "@/assets/pricing-mini-2.jpg";
import classic1 from "@/assets/pricing-classic-1.jpg";
import classic2 from "@/assets/pricing-classic-2.jpg";
import heirloom1 from "@/assets/pricing-heirloom-1.jpg";
import heirloom2 from "@/assets/pricing-heirloom-2.jpg";

const tiers = [
  {
    key: "mini",
    name: "Mini",
    price: "2.500.000đ",
    desc: "Phù hợp ghi lại khoảnh khắc đầu đời nhanh gọn.",
    features: [
      "Thời lượng 45 phút",
      "5 ảnh chỉnh màu chất lượng cao",
      "Tại studio, phông nền đơn giản",
    ],
    images: [mini1, mini2],
  },
  {
    key: "classic",
    name: "Classic",
    price: "4.500.000đ",
    desc: "Gói phổ biến cân bằng thời gian và kết quả.",
    features: [
      "Thời lượng 2 giờ",
      "15 ảnh chỉnh màu chất lượng cao",
      "Tùy chọn props an toàn cho bé",
      "Tư vấn trước buổi chụp",
    ],
    highlight: true,
    images: [classic1, classic2],
  },
  {
    key: "heirloom",
    name: "Heirloom",
    price: "7.500.000đ",
    desc: "Trọn vẹn khoảnh khắc, lưu giữ kỷ vật gia đình.",
    features: [
      "Thời lượng 3 giờ",
      "30 ảnh chỉnh màu + album in 20 trang",
      "Chụp cùng bố mẹ/anh chị",
      "Hỗ trợ styling và hướng dẫn pose",
    ],
    images: [heirloom1, heirloom2],
  },
];

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const activeTier = tiers.find((t) => t.key === activeKey);

  return (
    <section id="pricing" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Báo giá</h2>
        <p className="mt-2 text-muted-foreground">
          Chọn gói phù hợp – mọi buổi chụp đều nhẹ nhàng, an toàn và ấm áp cho bé.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} className={t.highlight ? "ring-2 ring-primary" : ""}>
            <div
              onClick={() => { setActiveKey(t.key); setOpen(true); }}
              className="w-full rounded-t-lg overflow-hidden border-b relative group cursor-pointer"
            >
              <img src={t.images[0]} alt={`Ảnh demo gói ${t.name}`} className="w-full h-44 object-cover" />
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
            <CardContent>
              <ul className="space-y-2 text-sm">
                {t.features.map((f) => (
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
        ))}
      </div>

      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setActiveKey(null); }}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Thư viện demo – {activeTier?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {activeTier?.images.map((img, i) => (
              <img key={i} src={img} alt={`Ảnh demo ${activeTier?.name} ${i + 1}`} className="w-full h-48 object-cover rounded-lg border" />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Pricing;
