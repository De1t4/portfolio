import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ImageGalleryModalProps {
  images: string[];
  initialIndex?: number;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageGalleryModal({
  images,
  initialIndex = 0,
  title,
  isOpen,
  onClose,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goNext, goPrev, onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-md" />

          {/* Modal container */}
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[95dvh] flex flex-col bg-gray-900/80 backdrop-blur-xl border border-gray-700/60 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/60 flex-shrink-0">
              <div className="flex items-center gap-3">
                <ZoomIn className="w-4 h-4 text-emerald-400" />
                <h2 className="font-montserrat font-bold text-sm text-gray-100 tracking-wider uppercase">
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/60 transition-all duration-200"
                aria-label="Cerrar galería"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main image area */}
            <div className="relative bg-gray-950/40 overflow-hidden flex-1 min-h-[300px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} - imagen ${currentIndex + 1}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-contain"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Navigation arrows — only show when more than one image */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-gray-900/70 border border-gray-700/50 text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 backdrop-blur-sm transition-all duration-200 shadow-lg"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-gray-900/70 border border-gray-700/50 text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 backdrop-blur-sm transition-all duration-200 shadow-lg"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Gradient edges */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-950/30 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-950/30 to-transparent pointer-events-none" />
            </div>

            {/* Thumbnails — only show when more than one image */}
            {images.length > 1 && (
              <div className="px-6 py-4 border-t border-gray-800/60 flex-shrink-0 overflow-y-auto">
                <div className="flex gap-2 justify-center flex-wrap">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                        idx === currentIndex
                          ? "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)] scale-105"
                          : "border-gray-700/50 hover:border-gray-500 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
