import { create } from "zustand";

type Language = 'en' | 'ua';

interface LanguageSwitcherStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageSwitcherStore = create<LanguageSwitcherStore>((set) => ({
  language: 'ua',
  setLanguage: (lang) => set({ language: lang }),
}));