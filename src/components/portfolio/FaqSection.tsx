import { useState } from "react";
import { FAQ_LIST } from "@/data/portfolioData";
import { FAQ_LIST_EN } from "@/data/portfolioDataEn";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, Sparkles, MessageSquare } from "lucide-react";

export const FaqSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const faqs = isEn ? FAQ_LIST_EN : FAQ_LIST;

  // First two items open by default
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0] border-b border-[#E3D5CA]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-14 border-b border-[#E3D5CA]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#292722] block mb-2 font-bold">
              {isEn ? "06 / Recruiter FAQ & Clarifications" : "06 / Tanya Jawab Rekruter"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              {isEn ? "06. Frequently Asked Questions & Clarifications" : "06. Pertanyaan Umum & Klarifikasi"}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#292722] max-w-md font-medium leading-relaxed">
            {isEn
              ? "Direct clarifications regarding role flexibility, work readiness, and professional adaptability."
              : "Klarifikasi langsung mengenai fleksibilitas posisi, kesiapan kerja, dan adaptabilitas profesional."}
          </p>
        </div>

        {/* Highlights Banner */}
        <div className="rounded-xl border border-[#D5BDAF] bg-[#EDEDE9] p-5 sm:p-6 mb-10 flex items-start gap-3.5 shadow-xs">
          <Sparkles className="w-5 h-5 text-[#292722] mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#292722] uppercase tracking-wide">
              {isEn ? "Open & Flexible Mindset" : "Komitmen Terbuka & Fleksibel"}
            </h4>
            <p className="text-sm sm:text-[15px] text-[#292722] font-medium leading-[1.75]">
              {isEn
                ? "I am highly flexible and not limited to software or data roles. With ~1.5 years of multi-industry experience, I possess high adaptability and fast-learning capability across diverse technical and operational roles."
                : "Saya sangat fleksibel dan tidak kaku hanya di posisi data maupun software. Dengan pengalaman ~1.5 tahun di berbagai industri, saya memiliki kemampuan adaptasi yang tinggi dan daya belajar yang cepat untuk berbagai peran teknis maupun operasional."}
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#292722] bg-[#EDEDE9] shadow-sm"
                    : "border-[#E3D5CA] bg-[#EDEDE9]/70 hover:border-[#D5BDAF]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="text-xs font-bold text-[#292722] bg-[#F5EBE0] px-2.5 py-1 rounded border border-[#E3D5CA] flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      {item.category && (
                        <span className="text-xs font-bold uppercase tracking-wider text-[#292722] block mb-1">
                          {item.category}
                        </span>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-[#292722] leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-full border border-[#D6CCC2] bg-[#F5EBE0] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#292722]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#E3D5CA]/80">
                    <div className="pl-0 sm:pl-10 text-sm sm:text-[15px] text-[#292722] leading-[1.75] font-medium whitespace-pre-line space-y-2">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 p-6 rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#292722] flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#292722]">
                {isEn
                  ? "Have other questions or wish to discuss an opportunity?"
                  : "Punya pertanyaan lain atau ingin mendiskusikan peluang?"}
              </h4>
              <p className="text-xs sm:text-sm text-[#292722] font-medium">
                {isEn
                  ? "I warmly welcome further discussions regarding your team's needs and challenges."
                  : "Saya dengan senang hati menyambut diskusi lebih lanjut mengenai kebutuhan tim Anda."}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 shadow-xs"
          >
            {isEn ? "Contact Me" : "Hubungi Saya"}
          </a>
        </div>
      </div>
    </section>
  );
};

