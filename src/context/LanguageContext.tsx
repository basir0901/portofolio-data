import React, { createContext, useContext, useState, useEffect } from "react";

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
  const [language, setLanguageState] = useState<Language>("id");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_language") as Language | null;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguageState(saved);
      setIsModalOpen(false);
    } else {
      // First time visiting: open the language selection modal
      setIsModalOpen(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_language", lang);
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
