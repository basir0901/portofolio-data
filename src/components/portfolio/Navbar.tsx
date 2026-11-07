import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { Download, Menu, X, ArrowUpRight, Globe } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isEn = language === "en";

  const navLinks = isEn
    ? [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Certifications & Training", href: "#certifications" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ]
    : [
        { label: "Tentang", href: "#about" },
        { label: "Pengalaman", href: "#experience" },
        { label: "Keahlian", href: "#skills" },
        { label: "Sertifikasi & Pelatihan", href: "#certifications" },
        { label: "Tanya Jawab", href: "#faq" },
        { label: "Kontak", href: "#contact" },
      ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#EDEDE9]/95 backdrop-blur-md border-b border-[#E3D5CA] shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-bold tracking-wider text-[#292722]/85 hover:text-[#292722] transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#292722] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Compact Language Switcher & Document Buttons */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3 ml-auto pl-4">
          {/* Efficient Compact Language Switcher */}
          <div className="flex items-center rounded-lg border border-[#D6CCC2] bg-[#F5EBE0] p-1 text-xs font-bold text-[#292722] shadow-xs whitespace-nowrap flex-shrink-0">
            <div className="px-1.5 text-[#292722] flex items-center" aria-hidden="true">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <button
              onClick={() => setLanguage("id")}
              className={`px-2.5 py-1 rounded transition-all text-xs font-bold ${
                !isEn
                  ? "bg-[#292722] text-[#EDEDE9] shadow-xs"
                  : "text-[#292722]/70 hover:text-[#292722]"
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded transition-all text-xs font-bold ${
                isEn
                  ? "bg-[#292722] text-[#EDEDE9] shadow-xs"
                  : "text-[#292722]/70 hover:text-[#292722]"
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Action Buttons: Download CV & Download Diploma (Same Style & Background) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded border border-[#292722] bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] hover:border-[#D5BDAF] transition-all shadow-sm whitespace-nowrap"
              title={isEn ? "Download Curriculum Vitae (PDF)" : "Unduh Curriculum Vitae (PDF)"}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isEn ? "Download CV" : "Unduh CV"}</span>
            </a>

            <a
              href={PERSONAL_INFO.diplomaPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded border border-[#292722] bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] hover:border-[#D5BDAF] transition-all shadow-sm whitespace-nowrap"
              title={isEn ? "Download Degree Diploma (PDF)" : "Unduh Ijazah Kelulusan (PDF)"}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isEn ? "Download Diploma" : "Unduh Ijazah"}</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger & Language Switcher */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-[#D6CCC2] bg-[#F5EBE0] p-0.5 text-xs font-bold text-[#292722]">
              <div className="px-1.5 text-[#292722] flex items-center" aria-hidden="true">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <button
                onClick={() => setLanguage("id")}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  !isEn
                    ? "bg-[#292722] text-[#EDEDE9]"
                    : "text-[#292722]/70"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  isEn
                    ? "bg-[#292722] text-[#EDEDE9]"
                    : "text-[#292722]/70"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka menu navigasi"
            className="p-2 rounded border border-[#E3D5CA] bg-[#F5EBE0] text-[#292722] hover:bg-[#D6CCC2] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EDEDE9] border-b border-[#E3D5CA] px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[#292722] py-2 border-b border-[#E3D5CA]/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#68635C]" />
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-3">
            <div className="p-3 rounded-lg border border-[#D6CCC2] bg-[#F5EBE0]">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-3.5 h-3.5 text-[#292722]" />
                <span className="text-xs uppercase tracking-wider text-[#292722] font-bold">
                  {isEn ? "Select Language:" : "Pilih Bahasa:"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setLanguage("id");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded text-xs font-bold text-center transition-all ${
                    !isEn
                      ? "bg-[#292722] text-[#EDEDE9] shadow-xs"
                      : "bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]"
                  }`}
                >
                  Bahasa Indonesia (ID)
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded text-xs font-bold text-center transition-all ${
                    isEn
                      ? "bg-[#292722] text-[#EDEDE9] shadow-xs"
                      : "bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]"
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isEn ? "Download CV" : "Unduh CV"}</span>
              </a>
              <a
                href={PERSONAL_INFO.diplomaPath}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isEn ? "Download Diploma" : "Unduh Ijazah"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
