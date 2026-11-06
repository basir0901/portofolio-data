import { useLanguage } from "@/context/LanguageContext";
import { Globe, Check, X } from "lucide-react";

export const LanguageModal = () => {
  const { isModalOpen, setIsModalOpen, language, setLanguage } = useLanguage();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292722]/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-lg rounded-2xl border border-[#D5BDAF] bg-[#EDEDE9] p-6 sm:p-8 shadow-2xl relative animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg text-[#68635C] hover:text-[#292722] hover:bg-[#E3D5CA]/50 transition-colors"
          aria-label="Tutup / Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E3D5CA]">
          <div className="p-2.5 rounded-xl bg-[#F5EBE0] border border-[#D6CCC2] text-[#292722]">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3
              id="modal-title"
              className="text-lg sm:text-xl font-bold text-[#292722] tracking-tight"
            >
              Pilih Bahasa / Select Language
            </h3>
            <span className="text-xs text-[#292722] font-semibold">
              Preferensi Bahasa Portofolio
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1.5 mb-6 text-sm text-[#292722] font-medium leading-relaxed">
          <p>
            Selamat datang di portofolio <strong>Basir Arsy Syams</strong>. Silakan pilih bahasa yang ingin Anda gunakan:
          </p>
          <p className="italic text-[#292722]/80">
            Welcome to Basir Arsy Syams' portfolio. Please choose your preferred language:
          </p>
        </div>

        {/* Language Options Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* Bahasa Indonesia */}
          <button
            type="button"
            onClick={() => setLanguage("id")}
            className={`group text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${language === "id"
                ? "border-[#292722] bg-[#F5EBE0] shadow-sm ring-1 ring-[#292722]"
                : "border-[#E3D5CA] bg-[#F5EBE0]/60 hover:bg-[#F5EBE0] hover:border-[#D5BDAF]"
              }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl" role="img" aria-label="Bendera Indonesia">
                  🇮🇩
                </span>
                {language === "id" && (
                  <span className="w-5 h-5 rounded-full bg-[#292722] text-[#EDEDE9] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </span>
                )}
              </div>
              <h4 className="text-base font-bold text-[#292722]">
                Bahasa Indonesia
              </h4>
              <p className="text-xs sm:text-[13px] text-[#292722] font-medium mt-1 leading-snug">
                Baca seluruh isi profil & proyek dalam Bahasa Indonesia.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#E3D5CA]/80">
              <span className="text-xs font-bold text-[#292722] uppercase tracking-wider group-hover:underline">
                Pilih Bahasa Indonesia →
              </span>
            </div>
          </button>

          {/* English */}
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`group text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${language === "en"
                ? "border-[#292722] bg-[#F5EBE0] shadow-sm ring-1 ring-[#292722]"
                : "border-[#E3D5CA] bg-[#F5EBE0]/60 hover:bg-[#F5EBE0] hover:border-[#D5BDAF]"
              }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl" role="img" aria-label="UK Flag">
                  🇬🇧
                </span>
                {language === "en" && (
                  <span className="w-5 h-5 rounded-full bg-[#292722] text-[#EDEDE9] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </span>
                )}
              </div>
              <h4 className="text-base font-bold text-[#292722]">
                English
              </h4>
              <p className="text-xs sm:text-[13px] text-[#292722] font-medium mt-1 leading-snug">
                Explore the complete profile & projects in English.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#E3D5CA]/80">
              <span className="text-xs font-bold text-[#292722] uppercase tracking-wider group-hover:underline">
                Select English →
              </span>
            </div>
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#292722] font-medium text-center leading-relaxed">
          * Anda dapat mengganti bahasa kapan saja melalui tombol <strong>[Bahasa Indonesia | Bahasa Inggris]</strong> pada bilah navigasi atas.
          <br />
          <span className="italic">You can switch language anytime using the <strong>[Bahasa Indonesia | Bahasa Inggris]</strong> buttons on the top navigation bar.</span>
        </p>
      </div>
    </div>
  );
};

