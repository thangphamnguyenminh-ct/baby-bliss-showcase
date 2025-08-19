import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Review, Testimonials } from "@/config/types";
import { getThumbSizeUrl } from "@/lib/utils";
import { Star } from "lucide-react";

const TestimonialsSection = ({ content }: { content: Testimonials }) => {
  const { title, subtitle, reviews } = content;

  return (
    <section id="testimonials" className="container py-12 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r: Review) => (
          <Card key={r.name} className="group">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img
                  src={getThumbSizeUrl(r.avatar.img_id, 200)}
                  alt={r.avatar.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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

export default TestimonialsSection;
