import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { SKILL_CATEGORIES_EN } from "@/data/portfolioDataEn";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal } from "lucide-react";

export const SkillsSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const categories = isEn ? SKILL_CATEGORIES_EN : SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#292722] block mb-2 font-bold">
              {isEn ? "04 / Technical Capabilities" : "04 / Kapabilitas Teknis"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              {isEn ? "04. Technical Skills & Stack" : "04. Keahlian & Penguasaan Teknologi"}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#292722] max-w-md font-semibold leading-relaxed">
            {isEn
              ? "Technical competency matrix grounded in production-grade system implementation without arbitrary percentage ratings."
              : "Matriks kompetensi teknis yang berakar pada implementasi sistem di lingkungan produksi nyata tanpa penilaian persentase arbitrer."}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-6 sm:p-7 flex flex-col justify-between hover:border-[#292722] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E3D5CA]">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-5 h-5 text-[#292722]" />
                    <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider text-[#292722]">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#292722] px-2 py-0.5 rounded bg-[#F5EBE0] border border-[#E3D5CA]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] flex flex-col gap-1 shadow-2xs"
                    >
                      <span className="text-sm sm:text-[15px] font-bold text-[#292722] tracking-tight">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-xs sm:text-[13px] text-[#292722] font-semibold leading-relaxed tracking-normal">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#E3D5CA] text-xs text-[#292722] uppercase tracking-wider font-bold">
                {isEn ? "Verified in Production Environments" : "Teruji di Lingkungan Produksi"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
