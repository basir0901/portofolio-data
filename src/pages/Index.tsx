import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#EDEDE9] text-[#292722] selection:bg-[#D5BDAF] selection:text-[#292722]">
      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main>
        {/* Section 01: Hero / Introduction */}
        <HeroSection />

        {/* Section 02: About Me */}
        <AboutSection />

        {/* Section 03: Professional Experience (Centerpiece with 3-Screenshot Mixed Layout) */}
        <ExperienceSection />

        {/* Section 04: Selected Projects & Architectural Showcases */}
        <ProjectsSection />

        {/* Section 05: Technical Skills */}
        <SkillsSection />

        {/* Section 06: Education & Certifications */}
        <EducationSection />
      </main>

      {/* Section 07: Contact & Minimalist Colophon */}
      <ContactSection />
    </div>
  );
};

export default Index;
