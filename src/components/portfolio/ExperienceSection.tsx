import { useState } from "react";
import { EXPERIENCES, ExperienceBlock, ProjectScreenshot } from "@/data/portfolioData";
import { ImageLightboxModal } from "./ImageLightboxModal";
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Maximize2,
  AlertCircle,
  Layers,
} from "lucide-react";

export const ExperienceSection = () => {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    screenshots: ProjectScreenshot[];
    currentIndex: number;
    companyName: string;
  }>({
    isOpen: false,
    screenshots: [],
    currentIndex: 0,
    companyName: "",
  });

  const handleOpenLightbox = (
    screenshots: ProjectScreenshot[],
    index: number,
    companyName: string
  ) => {
    setLightboxState({
      isOpen: true,
      screenshots,
      currentIndex: index,
      companyName,
    });
  };

  return (
    <section id="experience" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#EDEDE9] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              03. Pengalaman Profesional
            </h2>
          </div>
        </div>

        {/* Company Experience Blocks */}
        <div className="space-y-24">
          {EXPERIENCES.map((exp, expIdx) => {
            const primaryScreenshot = exp.screenshots.find((s) => s.isPrimary) || exp.screenshots[0];
            const secondaryScreenshots = exp.screenshots.filter((s) => s !== primaryScreenshot);

            return (
              <article
                key={exp.id}
                className="rounded-xl border border-[#E3D5CA] bg-[#F5EBE0] p-6 sm:p-10 shadow-sm relative"
              >
                {/* Block Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#E3D5CA]">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-bold text-[#68635C] bg-[#EDEDE9] px-2.5 py-1 rounded border border-[#D6CCC2]">
                        0{expIdx + 1}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-[#292722] font-semibold bg-[#D5BDAF]/40 px-3 py-1 rounded border border-[#D5BDAF]">
                        {exp.employmentType}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#292722] tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-[#68635C] pt-1">
                      <span className="flex items-center gap-1.5 text-[#292722] font-semibold">
                        <Building2 className="w-4 h-4 text-[#68635C]" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#68635C] font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 lg:max-w-md justify-start lg:justify-end">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Concept 1: Masalah yang Ingin Diselesaikan */}
                <div className="py-8 border-b border-[#E3D5CA]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-[#292722]" />
                    <h4 className="text-xl font-bold uppercase tracking-wider text-[#292722]">
                      1. Masalah yang Ingin Diselesaikan
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-[#292722] leading-relaxed max-w-4xl font-normal whitespace-pre-line">
                    {exp.problemToSolve}
                  </p>
                </div>

                {/* Concept 2 & 3: Responsibilities vs Business Impact */}
                <div className="py-8 border-b border-[#E3D5CA] grid md:grid-cols-2 gap-8 items-start">
                  {/* Responsibilities & Contributions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#292722]" />
                      <h4 className="text-xl font-bold uppercase tracking-wider text-[#292722]">
                        2. Tanggung Jawab & Kontribusi
                      </h4>
                    </div>

                    {exp.responsibilityGroups ? (
                      <div className="space-y-5">
                        {exp.responsibilityGroups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-2.5">
                            <h5 className="text-xs sm:text-sm font-bold text-[#292722] bg-[#EDEDE9] px-3 py-1 rounded border border-[#D6CCC2] inline-block tracking-wide">
                              {group.title}
                            </h5>
                            <ul className="space-y-2.5">
                              {group.items.map((item, iIdx) => (
                                <li
                                  key={iIdx}
                                  className="flex items-start gap-3 text-xs sm:text-sm text-[#292722] leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#292722] mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#292722] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#292722] mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Business Impact */}
                  <div className="space-y-4 p-5 rounded-lg border border-[#D5BDAF] bg-[#EDEDE9]/80">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-800" />
                      <h4 className="text-xl font-bold uppercase tracking-wider text-[#292722]">
                        3. Dampak Bisnis yang Terverifikasi
                      </h4>
                    </div>

                    {exp.businessImpactGroups ? (
                      <div className="space-y-5">
                        {exp.businessImpactGroups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-2.5">
                            <h5 className="text-xs sm:text-sm font-bold text-emerald-950 bg-emerald-100/70 px-3 py-1 rounded border border-emerald-300 inline-block tracking-wide">
                              {group.title}
                            </h5>
                            <ul className="space-y-2.5">
                              {group.items.map((item, iIdx) => (
                                <li
                                  key={iIdx}
                                  className="flex items-start gap-3 text-xs sm:text-sm text-[#292722] leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-700 mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {exp.businessImpact.map((impact, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#292722] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-sm bg-emerald-700 mt-2 flex-shrink-0" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Screenshots Gallery (Displayed AFTER Points 1, 2, and 3) */}
                <div className="pt-8">
                  <div className="flex flex-col gap-1.5 mb-6">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#292722]" />
                      <h4 className="text-xl font-bold uppercase tracking-wider text-[#292722]">
                        Dokumentasi Proyek & Antarmuka Sistem
                      </h4>
                    </div>
                    <span className="text-xs text-[#68635C] font-medium">
                      Tangkapan layar berikut merupakan cuplikan antarmuka sistem nyata. Klik gambar untuk memperbesar tampilan dan melihat detailnya.
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Primary Featured Screenshot */}
                    <div
                      onClick={() =>
                        handleOpenLightbox(
                          exp.screenshots,
                          exp.screenshots.indexOf(primaryScreenshot),
                          exp.company
                        )
                      }
                      className="group cursor-pointer rounded-xl border border-[#D6CCC2] bg-[#EDEDE9] p-4 sm:p-5 hover:border-[#292722] transition-all duration-300 shadow-xs"
                    >
                      <div className="grid lg:grid-cols-12 gap-5 items-center">
                        <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-lg bg-white flex items-center justify-center border border-[#E3D5CA]">
                          <img
                            src={primaryScreenshot.url}
                            alt={primaryScreenshot.title}
                            className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-[#292722]/0 group-hover:bg-[#292722]/15 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-2 rounded bg-[#EDEDE9]/95 text-[#292722] text-xs font-semibold flex items-center gap-2 shadow-md">
                              <Maximize2 className="w-4 h-4" />
                              Perbesar Tampilan Utama
                            </span>
                          </div>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-center space-y-2.5">
                          <div className="inline-flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#292722] bg-[#D5BDAF]/40 px-2.5 py-1 rounded border border-[#D5BDAF]">
                              Tampilan Utama
                            </span>
                          </div>
                          <h5 className="text-base sm:text-lg font-bold text-[#292722] leading-snug">
                            {primaryScreenshot.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-[#68635C] leading-relaxed">
                            {primaryScreenshot.caption}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Supporting Screenshots Grid */}
                    {secondaryScreenshots.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {secondaryScreenshots.map((sec, secIdx) => (
                          <div
                            key={secIdx}
                            onClick={() =>
                              handleOpenLightbox(
                                exp.screenshots,
                                exp.screenshots.indexOf(sec),
                                exp.company
                              )
                            }
                            className="group cursor-pointer rounded-lg border border-[#D6CCC2] bg-[#EDEDE9] p-3 flex flex-col justify-between hover:border-[#292722] transition-all duration-300 shadow-xs"
                          >
                            <div className="relative aspect-[16/10] overflow-hidden rounded bg-white flex items-center justify-center border border-[#E3D5CA]">
                              <img
                                src={sec.url}
                                alt={sec.title}
                                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-[#292722]/0 group-hover:bg-[#292722]/15 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded bg-[#EDEDE9]/95 text-[#292722] text-[11px] font-semibold flex items-center gap-1 shadow-md">
                                  <Maximize2 className="w-3.5 h-3.5" />
                                  Perbesar
                                </span>
                              </div>
                            </div>
                            <div className="pt-3">
                              <h5 className="text-xs font-bold text-[#292722] line-clamp-1">
                                {sec.title}
                              </h5>
                              <p className="text-[11px] text-[#68635C] mt-1 leading-snug line-clamp-2">
                                {sec.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        screenshots={lightboxState.screenshots}
        currentIndex={lightboxState.currentIndex}
        onNavigate={(newIndex) =>
          setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }))
        }
        companyName={lightboxState.companyName}
      />
    </section>
  );
};
