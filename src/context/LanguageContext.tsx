import React, { createContext, useContext, useState } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  openLanguageModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_language") as Language | null;
      if (saved === "id" || saved === "en") return saved;
    }
    return "id";
  });

  // Always show language selection modal on initial visit / page open
  const [isModalOpen, setIsModalOpen] = useState(true);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_language", lang);
    }
    setIsModalOpen(false);
  };

  const openLanguageModal = () => {
    setIsModalOpen(true);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isModalOpen,
        setIsModalOpen,
        openLanguageModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
