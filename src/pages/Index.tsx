import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { FaqSection } from "@/components/portfolio/FaqSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { LanguageModal } from "@/components/portfolio/LanguageModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#EDEDE9] text-[#292722] selection:bg-[#D5BDAF] selection:text-[#292722]">
      {/* Welcome Language Selector Modal */}
      <LanguageModal />

      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main>
        {/* Section 01: Hero / Introduction */}
        <HeroSection />

        {/* Section 02: Ringkasan Perjalanan Karir */}
        <AboutSection />

        {/* Section 03: Pengalaman Profesional & Dokumentasi Antarmuka */}
        <ExperienceSection />

        {/* Section 04: Keahlian Teknis */}
        <SkillsSection />

        {/* Section 05: Sertifikasi & Pelatihan */}
        <CertificationsSection />

        {/* Section 06: Pertanyaan Umum & Klarifikasi (FAQ) */}
        <FaqSection />
      </main>

      {/* Section 07: Kontak & Komunikasi Langsung */}
      <ContactSection />
    </div>
  );
};

export default Index;
