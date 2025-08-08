import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const tiers = [
  {
    name: "Mini",
    price: "2.500.000đ",
    desc: "Phù hợp ghi lại khoảnh khắc đầu đời nhanh gọn.",
    features: [
      "Thời lượng 45 phút",
      "5 ảnh chỉnh màu chất lượng cao",
      "Tại studio, phông nền đơn giản",
    ],
  },
  {
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
  },
  {
    name: "Heirloom",
    price: "7.500.000đ",
    desc: "Trọn vẹn khoảnh khắc, lưu giữ kỷ vật gia đình.",
    features: [
      "Thời lượng 3 giờ",
      "30 ảnh chỉnh màu + album in 20 trang",
      "Chụp cùng bố mẹ/anh chị",
      "Hỗ trợ styling và hướng dẫn pose",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Báo giá</h2>
        <p className="mt-2 text-muted-foreground">
          Chọn gói phù hợp – mọi buổi chụp đều nhẹ nhàng, an toàn và ấm áp cho bé.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} className={t.highlight ? "ring-2 ring-primary" : ""}>
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
    </section>
  );
};

export default Pricing;
