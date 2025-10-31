import { Language } from '../models/language.model';

export const LANGUAGE_CONFIG = {
  defaultLanguage: 'ar',
  availableLanguages: [
    { 
      code: 'en', 
      name: 'English', 
      flagUrl: 'https://flagcdn.com/w40/gb.png', 
      isRTL: false 
    },
    { 
      code: 'ar', 
      name: 'العربية', 
      flagUrl: 'https://flagcdn.com/w40/eg.png', 
      isRTL: true 
    }
  ] as Language[],
  
  storageKey: 'preferred-language',
  
  // Language-specific configurations
  rtlLanguages: ['ar', 'he', 'fa'],
  
  // Text direction mapping
  getTextDirection(langCode: string): 'ltr' | 'rtl' {
    return this.rtlLanguages.includes(langCode) ? 'rtl' : 'ltr';
  },
  
  // Get language by code
  getLanguageByCode(code: string): Language | undefined {
    return this.availableLanguages.find(lang => lang.code === code);
  },
  
  // Check if language is supported
  isLanguageSupported(code: string): boolean {
    return this.availableLanguages.some(lang => lang.code === code);
  }
};