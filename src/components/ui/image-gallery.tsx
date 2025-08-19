import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Image } from "@/config/types";
import { getFullSizeUrl, getThumbSizeUrl } from "@/lib/utils";

interface ImageGalleryProps {
  images: Image[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

export const ImageGallery = ({ images, open, onOpenChange, title }: ImageGalleryProps) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelected(index);
    setDetailOpen(true);
  };

  const handleGalleryClose = (openState: boolean) => {
    onOpenChange(openState);
    if (!openState) {
      // Reset selected và detail khi đóng gallery chính
      setSelected(null);
      setDetailOpen(false);
    }
  };

  const handleDetailClose = (openState: boolean) => {
    setDetailOpen(openState);
    if (!openState) {
      setSelected(null);
    }
  };

  const navigatePrev = () => {
    if (selected === null) return;
    setSelected((i) => (i! > 0 ? i! - 1 : images.length - 1));
  };

  const navigateNext = () => {
    if (selected === null) return;
    setSelected((i) => (i! < images.length - 1 ? i! + 1 : 0));
  };

  // Kiểm tra bounds để tránh lỗi
  const selectedImage = selected !== null && images[selected] ? images[selected] : null;

  return (
    <>
      <Dialog open={open} onOpenChange={handleGalleryClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{title || "Thư viện ảnh"}</DialogTitle>
            <DialogDescription>
              Chọn một ảnh để xem chi tiết và phóng to
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img: Image, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  className="group rounded-lg border overflow-hidden relative"
                  aria-label={`Xem ảnh: ${img.alt}`}
                >
                  <AspectRatio ratio={4 / 3}>
                    <div className="overflow-hidden h-full w-full">
                      <div
                        style={{ backgroundImage: `url(${getThumbSizeUrl(img.img_id, 300)})` }}
                        className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  </AspectRatio>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {selectedImage && (
        <Dialog open={detailOpen} onOpenChange={handleDetailClose}>
          <DialogContent className="bg-black/90 border-none !p-0 !max-w-none !w-screen !h-screen !rounded-none [&>button]:text-white [&>button]:bg-white/20 [&>button]:hover:bg-white/40">
            <DialogHeader className="sr-only">
              <DialogTitle>Chi tiết ảnh</DialogTitle>
              <DialogDescription>
                Xem ảnh chi tiết với khả năng điều hướng qua lại
              </DialogDescription>
            </DialogHeader>
            <div className="relative w-full h-full">
              <img
                src={getFullSizeUrl(selectedImage.img_id)}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={navigatePrev}
                  className="bg-white/30 hover:bg-white/50"
                >
                  <ChevronLeft className="h-6 w-6 text-black" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={navigateNext}
                  className="bg-white/30 hover:bg-white/50"
                >
                  <ChevronRight className="h-6 w-6 text-black" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
