export const ProjectsSection = () => {
  const technicalShowcases = [
    {
      title: "Otomasi Datamart ETL & Engine Deteksi Anomali SLA",
      category: "Rekayasa Data / Pipeline ETL",
      problem:
        "Datamart perusahaan kerap menerima rekaman data dalam volume besar di mana keterlambatan SLA tidak terdeteksi secara otomatis, berisiko mengaburkan metrik bisnis dan memicu koreksi database manual yang tidak terverifikasi.",
      solution:
        "Membangun orkestrasi DAG Apache Airflow menggunakan Python dan PostgreSQL untuk mengisolasi data mentah, mendeteksi deviasi ambang batas SLA, dan meneruskannya ke operator modul melalui antarmuka validasi staging khusus.",
      stack: ["Python", "Apache Airflow", "PostgreSQL", "Laravel", "React.js"],
      metrics: "Pemisahan audit penuh • Zero alterasi data sumber • Penjadwalan DAG pagi otomatis",
    },
    {
      title: "Arsitektur Migrasi SPA Enterprise Multi-Modul",
      category: "Arsitektur Frontend / Sistem Web",
      problem:
        "Aplikasi warisan berbasis multi-page HTML lama menimbulkan waktu loading yang lambat, reload halaman berulang saat alur persetujuan multi-tahap, serta inkonsistensi sinkronisasi data master antar departemen.",
      solution:
        "Memigrasikan 30 modul bisnis dan 49 tahapan workflow ke Single Page Application berbasis React.js dengan abstraksi form modular, gerbang otorisasi berbasis peran, dan pembaruan state instan.",
      stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST API", "Single Page Application"],
      metrics: "49 tahapan alur kerja • 4 domain inti ERP • Selesai dalam tenggat 4–5 minggu",
    },
    {
      title: "Rangkaian Integrasi REST API Berkeandalan Tinggi",
      category: "Sistem Backend / Telemetri",
      problem:
        "Pengujian dan kalibrasi perangkat satelit workshop menghasilkan data inspeksi yang terfragmentasi dengan pencatatan berbasis kertas dan ketiadaan sinkronisasi inventaris secara langsung.",
      solution:
        "Merancang dan mengimplementasikan 16 endpoint RESTful API di Laravel dengan standar respon JSON ketat, penanganan error terstruktur, dan persistensi transaksi basis data yang aman.",
      stack: ["Laravel", "PHP 8+", "REST API", "MySQL", "Postman", "Git"],
      metrics: "16 REST API dirilis • Tingkat kelulusan tes 100% • Zero downtime selama rilis",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            {/* <span className="text-xs uppercase tracking-widest text-[#68635C] block mb-2 font-semibold">
              04 / Sorotan Teknis
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              04. Sorotan Arsitektur & Rekayasa Sistem
            </h2>
          </div>
          {/* <p className="text-xs text-[#68635C] max-w-sm font-medium leading-relaxed">
            Tantangan rekayasa inti, solusi teknis terstruktur, dan implementasi arsitektur sistem pada backend dan pipeline data.
          </p> */}
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {technicalShowcases.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-6 sm:p-7 flex flex-col justify-between hover:border-[#292722] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#68635C] bg-[#F5EBE0] px-2.5 py-1 rounded border border-[#E3D5CA] font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-[#68635C]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#292722] leading-snug">
                  {project.title}
                </h3>

                <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#68635C]">
                  <div>
                    <strong className="text-[#292722] font-semibold block mb-1 text-xs uppercase tracking-wider">
                      Tantangan yang Dihadapi:
                    </strong>
                    <p className="leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <strong className="text-[#292722] font-semibold block mb-1 text-xs uppercase tracking-wider">
                      Solusi Teknis yang Diterapkan:
                    </strong>
                    <p className="leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3D5CA]">
                <div className="mb-4">
                  <span className="text-[11px] font-semibold text-[#292722] block mb-2 uppercase tracking-wide">
                    Metrik & Dampak Utama:
                  </span>
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-100/60 px-2.5 py-1.5 rounded border border-emerald-300 block leading-relaxed">
                    {project.metrics}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] rounded bg-[#F5EBE0] text-[#292722] border border-[#D6CCC2] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
