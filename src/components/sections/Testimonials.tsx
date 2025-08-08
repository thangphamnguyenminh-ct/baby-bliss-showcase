import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import c1 from "@/assets/client1.jpg";
import c2 from "@/assets/client2.jpg";
import c3 from "@/assets/client3.jpg";

const reviews = [
  {
    name: "Lan & Minh",
    text: "Buổi chụp diễn ra rất nhẹ nhàng, bé được chăm sóc kỹ và ảnh thì quá tuyệt. Rất đáng để lưu giữ kỷ niệm đầu đời!",
    avatar: c2,
  },
  {
    name: "Thu Hà",
    text: "Studio ấm áp, sạch sẽ. Mình ấn tượng với cách xử lý ánh sáng tự nhiên, ảnh ra rất mềm mại và tinh tế.",
    avatar: c1,
  },
  {
    name: "Anh Quân",
    text: "Nhiếp ảnh gia kiên nhẫn và chuyên nghiệp. Cả gia đình đều thoải mái, và sản phẩm cuối cùng vượt mong đợi.",
    avatar: c3,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Cảm nhận khách hàng</h2>
        <p className="mt-2 text-muted-foreground">
          Những lời chia sẻ chân thật từ các gia đình đã tin tưởng.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.name} className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <img
                src={r.avatar}
                alt={`Ảnh chân dung ${r.name}`}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="text-accent" />
                  ))}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80">“{r.text}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
