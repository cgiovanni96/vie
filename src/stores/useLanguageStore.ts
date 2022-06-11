import create from "zustand";

type LanguageStore = {
  language: "it" | "eng";
  setLanguage: (language: "it" | "eng") => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "it",
  setLanguage: (language: "it" | "eng") => set({ language }),
}));
