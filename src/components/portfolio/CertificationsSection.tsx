import { CERTIFICATIONS_LIST } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-20 sm:py-28 px-6 sm:px-8 bg-[#EDEDE9] border-b border-[#E3D5CA]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#68635C] block mb-2 font-semibold">
              05 / Kredensial & Pelatihan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              05. Sertifikasi & Pelatihan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#68635C] max-w-md font-medium leading-relaxed">
            Sertifikasi kompetensi kerja berstandar nasional (BNSP) serta program pelatihan intensif data warehousing bersertifikat (Kemendikbudristek & Dibimbing).
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {CERTIFICATIONS_LIST.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="rounded-xl border border-[#E3D5CA] bg-[#F5EBE0] p-6 sm:p-8 flex flex-col justify-between hover:border-[#292722] transition-all duration-300 shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E3D5CA]">
                  <span className="text-xs uppercase tracking-wider text-[#68635C] font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]">
                    {cert.type || "Terverifikasi"}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#68635C] block">
                    {cert.issueDate}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#292722] leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#68635C] leading-relaxed">
                  {cert.description}
                </p>

                {cert.competencies && cert.competencies.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#292722] uppercase tracking-wider block mb-2.5">
                      Kompetensi & Teknologi:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cert.competencies.map((comp, compIdx) => (
                        <span
                          key={compIdx}
                          className="px-2.5 py-1 text-xs rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2] font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {cert.documentPath && (
                <div className="pt-6 mt-6 border-t border-[#E3D5CA]">
                  <a
                    href={cert.documentPath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded border border-[#292722] bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] hover:border-[#D5BDAF] transition-all shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Lihat Dokumen Sertifikat</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
