import { PERSONAL_INFO } from "@/data/portfolioData";
import { Download, ArrowDown, Linkedin, Github, GraduationCap, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-8 bg-[#EDEDE9] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Top Status Bar */}

        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E3D5CA] text-xs text-[#68635C]">
          <div className="flex flex-wrap items-center gap-5">
            {[PERSONAL_INFO.availabilityText1, PERSONAL_INFO.availabilityText2].map((text) => (
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
                {PERSONAL_INFO.name} 😊
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#292722] leading-relaxed max-w-3xl font-normal pt-1">
              {PERSONAL_INFO.bio}
            </p>

            {/* Academic Credential Card */}
            <div className="p-4 rounded border border-[#E3D5CA] bg-[#F5EBE0] max-w-2xl flex items-start gap-3.5">
              <div className="p-2 rounded bg-[#EDEDE9] border border-[#D6CCC2] text-[#292722] mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#292722] block">
                  Latar Belakang Pendidikan
                </span>
                <p className="text-xs sm:text-sm text-[#68635C] leading-normal">
                  Sarjana Terapan (D-IV) Teknologi Rekayasa Perangkat Lunak —{" "}
                  <strong className="text-[#292722] font-semibold">IPB University</strong> (Lulus 2025)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs uppercase font-semibold bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-all shadow-sm"
              >
                <span>Jelajahi Pengalaman</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded text-xs uppercase font-semibold border border-[#292722] text-[#292722] hover:bg-[#F5EBE0] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh CV</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-3 rounded border border-[#D6CCC2] bg-[#F5EBE0] hover:bg-[#D5BDAF]/40 text-[#292722] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil GitHub"
                  className="p-3 rounded border border-[#D6CCC2] bg-[#F5EBE0] hover:bg-[#D5BDAF]/40 text-[#292722] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div> */}
          </div>

          {/* Right Column: Key Metrics & Portrait (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Portrait Frame */}
            <div className="relative group mx-auto max-w-xs lg:max-w-none">
              <div className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-[#D5BDAF] rounded-lg -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="rounded-lg overflow-hidden border border-[#D6CCC2] bg-[#F5EBE0] aspect-[4/3] sm:aspect-square flex items-center justify-center p-2">
                <img
                  src={PERSONAL_INFO.avatarPath}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
