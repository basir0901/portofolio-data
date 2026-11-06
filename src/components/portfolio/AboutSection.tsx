import {
  ArrowRight,
  ArrowDown,
  Briefcase,
  Clock,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export const AboutSection = () => {
  const careerFlow = [
    {
      step: "01",
      company: "PT Telkom Satelit Indonesia",
      shortCompany: "Telkomsat",
      period: "Jul — Nov 2024",
      duration: "5 Bulan",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Back-End Web Developer",
      highlight:
        "Merancang dan membangun 16 REST API berkeandalan tinggi untuk sistem inventaris workshop dan pencatatan hasil uji perangkat satelit.",
      tags: ["Laravel", "REST API", "MySQL"],
    },
    {
      step: "02",
      company: "PT Cipta Krida Bahari",
      shortCompany: "CKB Group",
      period: "Jun — Okt 2025",
      duration: "5 Bulan",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Full-Stack Web Developer",
      highlight:
        "Mengembangkan modul pencatatan konsumsi P3K dan monitoring K3 fasilitas logistik nasional secara real-time.",
      tags: ["Laravel", "Vue.js", "MySQL"],
    },
    {
      step: "03",
      company: "PT Sinergi Informatika Semen Indonesia",
      shortCompany: "PT SISI",
      period: "Nov 2025 — Mei 2026",
      duration: "6 Bulan",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Software Engineer & Data Engineer",
      highlight:
        "Mengembangkan Data Validation System (Solo Dev) dan pipeline otomatis Apache Airflow pada datamart korporat.",
      tags: ["Laravel", "React.js", "Python", "Airflow"],
    },
    {
      step: "04",
      company: "PT IDS Teknologi Indonesia",
      shortCompany: "IDS Teknologi (Kansai Paint)",
      period: "2026",
      duration: "1.5 Bulan",
      type: "Project-Based",
      typeBadge: "bg-[#D5BDAF]/50 text-[#292722] border-[#D5BDAF]",
      role: "Software Engineer",
      highlight:
        "Melakukan migrasi frontend enterprise 4 domain utama yang terbagi menjadi 30 modul bisnis dan 49 alur workflow ke Single Page Application React.js.",
      tags: ["React.js", "SPA", "Tailwind CSS"],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#E3D5CA]">
          <div>
            {/* <span className="text-xs uppercase tracking-widest text-[#68635C] block mb-2 font-semibold">
              02 / Alur & Ringkasan Pengalaman
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              02. Ringkasan Perjalanan Karir (~1.5 Tahun)
            </h2>
          </div>

        </div>

        {/* Top Summary Banner: Breakdown Breakdown 1.5 Tahun */}
        <div className="rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Left: Highlight Total */}
            <div className="md:col-span-5 space-y-2 border-b md:border-b-0 md:border-r border-[#E3D5CA] pb-6 md:pb-0 md:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D5BDAF]/30 border border-[#D5BDAF] text-xs font-semibold text-[#292722] uppercase tracking-wide">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Akumulasi Pengalaman</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#292722] tracking-tight">
                Total ~1.5 Tahun Pengalaman
              </h3>
              <p className="text-xs sm:text-sm text-[#68635C] leading-relaxed">
                Rekapitulasi pengalaman profesional selama ~1.5 tahun yang terbagi di 4 perusahaan lintas industri (IT consulting industry, Telecommunication & Satelite Industry, Transportation & Logistics Industry).
              </p>
            </div>

            {/* Right: Flow ke Bawah (4 Perusahaan -> 3 Internship & 1 Project-Based) */}
            <div className="md:col-span-7 flex flex-col items-center w-full">
              {/* Node Atas: 4 Perusahaan */}
              <div className="w-full max-w-sm p-3.5 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] text-center shadow-xs">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#292722]">4</span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#292722]">
                    Perusahaan
                  </span>
                </div>
                <p className="text-[11px] text-[#68635C] mt-0.5">
                  Total ~1.5 Tahun Pengalaman Kerja Profesional
                </p>
              </div>

              {/* Connector Garis & Panah Cabang ke Bawah */}
              <div className="relative w-full max-w-sm my-2 flex flex-col items-center">
                {/* Garis vertikal atas */}
                <div className="w-0.5 h-3 bg-[#D5BDAF]" />

                {/* Garis horizontal pembagi */}
                <div className="relative w-3/4 flex items-center justify-between border-t-2 border-[#D5BDAF]">
                  {/* Panah cabang kiri (Internship) */}
                  <div className="absolute -top-[1px] left-0 w-0.5 h-2.5 bg-[#D5BDAF]" />
                  <div className="absolute top-1.5 -left-1.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#292722]" />
                  </div>

                  {/* Panah cabang kanan (Project-Based) */}
                  <div className="absolute -top-[1px] right-0 w-0.5 h-2.5 bg-[#D5BDAF]" />
                  <div className="absolute top-1.5 -right-1.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#292722]" />
                  </div>
                </div>
              </div>

              {/* Node Bawah: 3 Internship & 1 Project Based */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {/* Cabang Kiri: 3 Internship */}
                <div className="p-4 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E3D5CA] pb-2.5 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#292722]">3</span>
                        <span className="text-sm font-bold uppercase tracking-wider text-[#292722]">
                          Internship
                        </span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#EDEDE9] text-[#68635C] border border-[#D6CCC2]">
                        16 Bulan
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#68635C]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722]">PT Telkom Satelit Indonesia</strong> (5 Bulan)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722]">PT Cipta Krida Bahari</strong> (5 Bulan)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722]">PT Sinergi Informatika Semen Indonesia</strong> (6 Bulan)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cabang Kanan: 1 Project Based */}
                <div className="p-4 rounded-lg bg-[#F5EBE0] border border-[#D5BDAF] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E3D5CA] pb-2.5 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#292722]">1</span>
                        <span className="text-sm font-bold uppercase tracking-wider text-[#292722]">
                          Project-Based
                        </span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#D5BDAF]/40 text-[#292722] border border-[#D5BDAF]">
                        1.5 Bulan
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#68635C]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722]">PT IDS Teknologi Indonesia</strong> (1.5 Bulan)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Progression Flow: 4 Steps */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#292722]" />
              <span>Perjalanan Karir</span>
            </h4>
            <span className="text-xs text-[#68635C] font-medium hidden sm:inline">
              Urutan perjalanan dari 2024 hingga 2026
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {careerFlow.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-5 sm:p-6 flex flex-col justify-between hover:border-[#292722] transition-all duration-300 relative group shadow-sm"
              >
                {/* Step & Duration Header */}
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E3D5CA]">
                    <span className="text-xs sm:text-sm font-bold px-2.5 py-1 rounded bg-[#F5EBE0] text-[#292722] border border-[#D6CCC2]">
                      Pengalaman {item.step}
                    </span>

                    <span
                      className={`text-xs sm:text-sm px-2.5 py-1 rounded border font-semibold ${item.typeBadge}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-1.5 mb-3.5">
                    <span className="text-xs sm:text-sm text-[#68635C] font-semibold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#68635C]" />
                      {item.duration} ({item.period})
                    </span>

                    <h5 className="text-lg sm:text-xl font-bold text-[#292722] leading-snug">
                      {item.company}
                    </h5>

                    <p className="text-sm sm:text-base font-semibold text-[#68635C]">
                      {item.role}
                    </p>
                  </div>

                  {/* Highlight */}
                  <p className="text-sm text-[#292722] leading-relaxed mb-5">
                    {item.highlight}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-3.5 border-t border-[#E3D5CA]/70 flex flex-wrap gap-2">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs rounded bg-[#F5EBE0] text-[#292722] border border-[#D6CCC2] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Section 3 for Details */}
        <div className="mt-12 text-center">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs uppercase font-semibold bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-all shadow-sm"
          >
            <span>Lihat Detail Implementasi & Tangkapan Layar Proyek</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
