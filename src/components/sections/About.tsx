import f1 from "@/assets/feature1.jpg";
import f2 from "@/assets/feature2.jpg";
import f3 from "@/assets/feature3.jpg";

const items = [
  {
    title: "Không gian nhẹ nhàng, theo nhịp của bé",
    text: "Mọi buổi chụp đều diễn ra chậm rãi, ưu tiên sự thoải mái của bé. Có thời gian cho bú, thay tã và ôm ấp, để từng khoảnh khắc đều tự nhiên.",
    image: f1,
    alt: "Không gian studio ấm áp với ánh sáng cửa sổ và vải lanh",
  },
  {
    title: "An toàn là số 1",
    text: "Kỹ thuật tạo dáng baby-led, luôn có tay nâng đỡ khi cần. Đạo cụ sạch sẽ, mềm mại, đã được khử khuẩn và thân thiện với làn da bé.",
    image: f2,
    alt: "Kỹ thuật đặt bé an toàn với tay hỗ trợ và phông nền pastel",
  },
  {
    title: "Cả gia đình cùng tham gia",
    text: "Khuyến khích bố mẹ và anh chị cùng vào khung hình. Những cái ôm, ánh nhìn tự nhiên sẽ là kỷ vật vô giá của gia đình.",
    image: f3,
    alt: "Khu vực tiếp khách ấm cúng dành cho gia đình với ánh sáng tự nhiên",
  },
];

const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">Giới thiệu studio</h2>
        <p className="mt-2 text-muted-foreground">Triết lý chụp ảnh nhẹ nhàng, an toàn và hướng đến cảm xúc.</p>
      </header>

      <div className="space-y-16">
        {items.map((it, idx) => (
          <article key={it.title} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <img
                src={it.image}
                alt={it.alt}
                className="w-full h-72 md:h-96 object-cover rounded-xl border"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-prose">{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
