import { PERSONAL_INFO } from "@/data/portfolioData";
import { PERSONAL_INFO_EN } from "@/data/portfolioDataEn";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Download } from "lucide-react";

export const HeroSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const info = isEn ? PERSONAL_INFO_EN : PERSONAL_INFO;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-8 bg-[#EDEDE9] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E3D5CA] text-xs text-[#68635C]">
          <div className="flex flex-wrap items-center gap-5">
            {[info.availabilityText1, info.availabilityText2].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
                <span className="font-semibold uppercase tracking-wide text-[#292722]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Typography & Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#292722] leading-[1.08] uppercase">
                {info.name} 😊
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#292722] leading-relaxed max-w-3xl font-medium pt-1">
              {info.bio}
            </p>

            {/* Academic Credential Card */}
            <div className="p-4 rounded border border-[#E3D5CA] bg-[#F5EBE0] max-w-2xl flex items-start gap-3.5">
              <div className="p-2 rounded bg-[#EDEDE9] border border-[#D6CCC2] text-[#292722] mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#292722] block">
                  {isEn ? "Educational Background" : "Latar Belakang Pendidikan"}
                </span>
                <p className="text-xs sm:text-sm text-[#292722] font-medium leading-normal">
                  {isEn ? (
                    <>
                      Bachelor of Applied Science in Software Engineering Technology —{" "}
                      <strong className="text-[#292722] font-bold">IPB University</strong> (Class of 2025)
                    </>
                  ) : (
                    <>
                      Sarjana Terapan Komputer —{" "}
                      <strong className="text-[#292722] font-bold">IPB University</strong> (Lulus 2025)
                    </>
                  )}
                </p>
                <div className="pt-2">
                  <a
                    href={info.diplomaPath || PERSONAL_INFO.diplomaPath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#292722] hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isEn ? "View / Download Ijazah (PDF)" : "Lihat / Unduh Dokumen Ijazah (PDF)"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & Portrait (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Portrait Frame */}
            <div className="relative group mx-auto max-w-xs lg:max-w-none">
              <div className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-[#D5BDAF] rounded-lg -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="rounded-lg overflow-hidden border border-[#D6CCC2] bg-[#F5EBE0] aspect-[4/3] sm:aspect-square flex items-center justify-center p-2">
                <img
                  src={info.avatarPath}
                  alt={info.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
