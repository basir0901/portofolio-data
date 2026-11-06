import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Terminal } from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#68635C] block mb-2 font-semibold">
              05 / Kapabilitas Teknis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              Keahlian & Penguasaan Teknologi
            </h2>
          </div>
          <p className="text-xs text-[#68635C] max-w-sm font-medium leading-relaxed">
            Matriks kompetensi teknis yang berakar pada implementasi sistem di lingkungan produksi nyata tanpa penilaian persentase arbitrer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#E3D5CA] bg-[#EDEDE9] p-6 flex flex-col justify-between hover:border-[#D5BDAF] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E3D5CA]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#292722]" />
                    <h3 className="font-bold text-sm uppercase tracking-wider text-[#292722]">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-[#68635C]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded bg-[#F5EBE0] border border-[#E3D5CA]/70 flex flex-col gap-0.5"
                    >
                      <span className="text-xs font-bold text-[#292722]">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-[11px] text-[#68635C] leading-normal font-normal">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E3D5CA]/60 text-[10px] text-[#68635C] uppercase tracking-wider font-semibold">
                Teruji di Lingkungan Produksi
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
