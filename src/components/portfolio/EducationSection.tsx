import { EDUCATION_LIST, CERTIFICATIONS_LIST } from "@/data/portfolioData";
import { GraduationCap, Award, Download } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#EDEDE9] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              Pendidikan & Sertifikasi
            </h2>
          </div>
          <p className="text-xs text-[#68635C] max-w-sm font-medium leading-relaxed">
            Pendidikan formal bidang rekayasa perangkat lunak di IPB University disertai sertifikasi kompetensi kerja nasional.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Education Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E3D5CA]">
              <GraduationCap className="w-5 h-5 text-[#292722]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292722]">
                Pendidikan Akademik
              </h3>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#E3D5CA] bg-[#F5EBE0] p-6 sm:p-8 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#E3D5CA]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#68635C] block mb-1 font-semibold">
                      {edu.graduationYear} • {edu.location}
                    </span>
                    <h4 className="text-xl font-bold text-[#292722]">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-medium text-[#292722] mt-0.5">
                      {edu.degree} — {edu.field}
                    </p>
                  </div>

                  <div className="sm:text-right flex-shrink-0">
                    <span className="inline-block px-3 py-1 rounded bg-[#EDEDE9] border border-[#D6CCC2] text-xs font-bold text-[#292722]">
                      IPK: {edu.gpa}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#68635C] leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#292722] block">
                    Poin Utama Pembelajaran:
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs sm:text-sm text-[#292722] flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#292722] mt-2 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E3D5CA]">
              <Award className="w-5 h-5 text-[#292722]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292722]">
                Sertifikasi Profesi
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_LIST.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-lg border border-[#E3D5CA] bg-[#F5EBE0] p-6 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#68635C] block font-semibold">
                        {cert.issuer} • {cert.issueDate}
                      </span>
                      <h4 className="text-base font-bold text-[#292722] mt-0.5">
                        {cert.title}
                      </h4>
                    </div>

                    {cert.documentPath && (
                      <a
                        href={cert.documentPath}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded border border-[#D6CCC2] bg-[#EDEDE9] hover:bg-[#D5BDAF]/30 text-[#292722] transition-colors flex-shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Lihat Dokumen</span>
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#68635C] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
