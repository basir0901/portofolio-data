import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { ProjectScreenshot } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
  companyName: string;
}

export const ImageLightboxModal = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
  companyName,
}: LightboxProps) => {
  const { language } = useLanguage();
  const isEn = language === "en";

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % screenshots.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!isOpen || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292722]/85 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-6xl max-h-[92vh] bg-[#EDEDE9] text-[#292722] rounded-lg border border-[#E3D5CA] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E3D5CA] bg-[#F5EBE0]">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#68635C] font-semibold">
              {companyName} • {isEn ? `Image ${currentIndex + 1} of ${screenshots.length}` : `Gambar ${currentIndex + 1} dari ${screenshots.length}`}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#292722] mt-0.5">
              {current.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={current.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded border border-[#D6CCC2] bg-[#EDEDE9] hover:bg-[#D5BDAF]/30 transition-colors text-[#292722]"
              title={isEn ? "Open original file in new tab" : "Buka gambar asli di tab baru"}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEn ? "Original File" : "File Asli"}</span>
            </a>

            <button
              onClick={onClose}
              aria-label={isEn ? "Close preview window" : "Tutup jendela pratinjau"}
              className="p-1.5 rounded border border-[#D6CCC2] bg-[#EDEDE9] hover:bg-[#D6CCC2] text-[#292722] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 bg-[#D6CCC2]/30 overflow-hidden">
          {screenshots.length > 1 && (
            <>
              <button
                onClick={() =>
                  onNavigate(
                    (currentIndex - 1 + screenshots.length) % screenshots.length
                  )
                }
                aria-label={isEn ? "Previous image" : "Gambar sebelumnya"}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[#EDEDE9]/90 border border-[#E3D5CA] shadow-md hover:bg-[#F5EBE0] text-[#292722] transition-transform hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() =>
                  onNavigate((currentIndex + 1) % screenshots.length)
                }
                aria-label={isEn ? "Next image" : "Gambar selanjutnya"}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[#EDEDE9]/90 border border-[#E3D5CA] shadow-md hover:bg-[#F5EBE0] text-[#292722] transition-transform hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <img
            src={current.url}
            alt={current.title}
            className="max-h-[64vh] max-w-full object-contain rounded border border-[#D6CCC2] shadow-lg bg-white"
          />
        </div>

        {/* Caption bar */}
        <div className="px-6 py-4 bg-[#F5EBE0] border-t border-[#E3D5CA]">
          <p className="text-sm text-[#292722] leading-relaxed">
            <strong className="font-semibold text-[#292722]">
              {isEn ? "Interface Purpose:" : "Fungsi Antarmuka:"}
            </strong>{" "}
            {current.caption}
          </p>

          {/* Thumbnail preview row if multiple images */}
          {screenshots.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pt-2 border-t border-[#E3D5CA]/60">
              {screenshots.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`flex-shrink-0 relative rounded overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? "border-[#292722] scale-105"
                      : "border-[#D6CCC2] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={s.url}
                    alt={s.title}
                    className="w-16 h-11 object-cover bg-white"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
