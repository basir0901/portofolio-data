import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import {
  Linkedin,
  Github,
  Download,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from "lucide-react";

export const ContactSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-[#E3D5CA]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              {isEn ? "07. Let's Connect & Collaborate" : "07. Mari Terhubung & Berkolaborasi"}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#292722] max-w-md font-medium leading-relaxed">
            {isEn
              ? "Open to diverse career opportunities, engineering challenges, and technical discussions in software and data."
              : "Terbuka untuk berbagai tawaran posisi kerja, eksplorasi peluang profesional, maupun diskusi rekayasa perangkat lunak dan data."}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Email Dual Card (7 cols) */}
          <div className="md:col-span-7 rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#292722] block font-bold mb-1">
                {isEn ? "Email Inquiries" : "Kontak Email"}
              </span>
              <p className="text-sm sm:text-[15px] text-[#292722] leading-relaxed font-medium">
                {isEn
                  ? "Feel free to reach out directly regarding career opportunities, technical challenges, or project collaborations."
                  : "Silakan hubungi saya secara langsung terkait peluang karir, tantangan rekayasa sistem, maupun kolaborasi proyek."}
              </p>
            </div>

            <div className="space-y-4">
              {/* Primary Email */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#292722] font-bold">
                    {isEn ? "Primary Email Contact" : "Kontak Email Utama"}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]">
                    {isEn ? "Priority" : "Prioritas"}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#292722] tracking-tight break-all">
                  {PERSONAL_INFO.email}
                </h3>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs uppercase font-bold bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isEn ? "Send Email" : "Kirim Email"}</span>
                  </a>

                  <button
                    onClick={() => handleCopyEmail(PERSONAL_INFO.email)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-bold border border-[#D6CCC2] bg-[#EDEDE9] hover:bg-[#D5BDAF]/30 text-[#292722] transition-colors"
                  >
                    {copiedEmail === PERSONAL_INFO.email ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{isEn ? "Email Copied!" : "Alamat Email Tersalin!"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isEn ? "Copy Email Address" : "Salin Alamat Email"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Alternative Email */}
              {PERSONAL_INFO.altEmail && (
                <div className="p-4 sm:p-5 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#292722] font-bold">
                      {isEn ? "Alternative Email" : "Email Alternatif"}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]">
                      {isEn ? "Secondary" : "Cadangan"}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#292722] tracking-tight break-all">
                    {PERSONAL_INFO.altEmail}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <a
                      href={`mailto:${PERSONAL_INFO.altEmail}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs uppercase font-bold bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isEn ? "Send Email" : "Kirim Email"}</span>
                    </a>

                    <button
                      onClick={() => handleCopyEmail(PERSONAL_INFO.altEmail!)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-bold border border-[#D6CCC2] bg-[#EDEDE9] hover:bg-[#D5BDAF]/30 text-[#292722] transition-colors"
                    >
                      {copiedEmail === PERSONAL_INFO.altEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{isEn ? "Email Copied!" : "Alamat Email Tersalin!"}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{isEn ? "Copy Email Address" : "Salin Alamat Email"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Channels & Resume (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg border border-[#E3D5CA] bg-[#EDEDE9] hover:border-[#292722] transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded bg-[#F5EBE0] border border-[#D6CCC2] text-[#292722]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#292722] block">
                    {isEn ? "LinkedIn Profile" : "Profil LinkedIn"}
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#292722] font-medium">
                    {isEn ? "Professional network & career updates" : "Jaringan profesional & informasi karir"}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#292722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg border border-[#E3D5CA] bg-[#EDEDE9] hover:border-[#292722] transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded bg-[#F5EBE0] border border-[#D6CCC2] text-[#292722]">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#292722] block">
                    {isEn ? "GitHub Profile" : "Repositori GitHub"}
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#292722] font-medium">
                    {isEn ? "Source code repositories & projects" : "Kode sumber & eksperimen proyek"}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#292722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Resume / CV Card */}
            <a
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg border border-[#D5BDAF] bg-[#EDEDE9] hover:bg-[#D5BDAF]/20 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded bg-[#292722] text-[#EDEDE9]">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#292722] block">
                    {isEn ? "Download Curriculum Vitae (PDF)" : "Unduh Curriculum Vitae (PDF)"}
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#292722] font-medium">
                    {isEn ? "Complete work history and credentials" : "Dokumen riwayat hidup & pengalaman lengkap"}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#292722] transition-all" />
            </a>
          </div>
        </div>

        {/* Bottom Colophon / Copyright */}
        <div className="mt-20 pt-8 border-t border-[#E3D5CA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#292722] font-semibold">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. {isEn ? "All rights reserved." : "Seluruh hak cipta dilindungi."}
          </p>
          <div className="flex items-center gap-4">
            <span>Jakarta • Bogor, Indonesia</span>
            <span>•</span>
            <a href="#" className="hover:text-[#292722] underline underline-offset-2">
              {isEn ? "Back to top" : "Kembali ke atas"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
