import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t">
      <div className="container py-8 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="font-display text-2xl">Hãy cùng ghi lại khoảnh khắc của bé yêu</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Số lượng buổi chụp giới hạn mỗi tháng để đảm bảo trải nghiệm nhẹ nhàng, không vội vã mà gia đình bạn xứng đáng có được.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="tel:+1234567890" aria-label="Phone" className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                <span className="text-muted-foreground hover:text-primary transition-colors">+84 123 456 789</span>
              </a>
            </div>
          </div>
          <div className="md:text-right text-sm text-muted-foreground">
            <p>&copy; {year} Tisstudio</p>
            <p className="mt-1">Tất cả hình ảnh được tạo ra với tình yêu dành cho gia đình bạn.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
