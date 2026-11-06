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
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-medium tracking-wider text-[#68635C] hover:text-[#292722] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#292722] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & CV Button */}
        <div className="hidden md:flex items-center gap-3.5 ml-auto">
          {/* Language Switcher Pill */}
          <div className="flex items-center rounded-lg border border-[#D6CCC2] bg-[#F5EBE0] p-1 text-xs font-bold text-[#292722] shadow-xs">
            <button
              onClick={() => setLanguage("id")}
              className={`px-2.5 py-1 rounded transition-all text-xs font-bold flex items-center gap-1 ${
                !isEn
                  ? "bg-[#292722] text-[#EDEDE9] shadow-xs"
                  : "text-[#68635C] hover:text-[#292722]"
              }`}
              title="Bahasa Indonesia"
            >
              <span>ID</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded transition-all text-xs font-bold flex items-center gap-1 ${
                isEn
                  ? "bg-[#292722] text-[#EDEDE9] shadow-xs"
                  : "text-[#68635C] hover:text-[#292722]"
              }`}
              title="English"
            >
              <span>EN</span>
            </button>
          </div>

          {/* Download CV */}
          <a
            href={PERSONAL_INFO.cvPath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded border border-[#292722] bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] hover:border-[#D5BDAF] transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isEn ? "Download CV" : "Unduh CV"}</span>
          </a>
        </div>

        {/* Mobile Hamburger & Language Switcher */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-[#D6CCC2] bg-[#F5EBE0] p-0.5 text-xs font-bold text-[#292722]">
              <button
                onClick={() => setLanguage("id")}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  !isEn
                    ? "bg-[#292722] text-[#EDEDE9]"
                    : "text-[#68635C]"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  isEn
                    ? "bg-[#292722] text-[#EDEDE9]"
                    : "text-[#68635C]"
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

          <div className="pt-2">
            <a
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded bg-[#292722] text-[#EDEDE9]"
            >
              <Download className="w-4 h-4" />
              <span>{isEn ? "Download CV (PDF)" : "Unduh CV (PDF)"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
