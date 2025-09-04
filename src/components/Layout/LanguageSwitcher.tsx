import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { Language } from '../../types';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:block">{currentLanguage.nativeName}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                currentLanguage.code === language.code 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700'
              }`}
            >
              <div>
                <div className="font-medium">{language.nativeName}</div>
                <div className="text-xs text-gray-500">{language.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}