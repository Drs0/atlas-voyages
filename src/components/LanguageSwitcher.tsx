'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'fr' | 'ar';
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const targetLang = currentLang === 'fr' ? 'ar' : 'fr';
    // Replace the first path segment (e.g. /fr/destinations -> /ar/destinations)
    const segments = pathname.split('/');
    if (segments[1] === 'fr' || segments[1] === 'ar') {
      segments[1] = targetLang;
      router.push(segments.join('/'));
    } else {
      router.push(`/${targetLang}`);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C8A46A]/50 bg-white/80 hover:bg-[#FAF8F3] text-[#142B3B] text-xs font-semibold shadow-xs transition-colors"
      title={currentLang === 'fr' ? 'Passer en Arabe (RTL)' : 'Changer en Français (LTR)'}
    >
      <Globe className="w-3.5 h-3.5 text-[#C8A46A]" />
      <span>{currentLang === 'fr' ? 'العربية' : 'Français'}</span>
    </button>
  );
}
