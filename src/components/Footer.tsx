import Link from 'next/link';
import { Compass, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: 'fr' | 'ar';
  brand: string;
  dict: {
    tagline: string;
    quickLinks: string;
    legalNote: string;
    developerNote: string;
  };
  navDict: {
    home: string;
    destinations: string;
    about: string;
    contact: string;
  };
}

export default function Footer({ lang, brand, dict, navDict }: FooterProps) {
  return (
    <footer className="bg-[#142B3B] text-[#FAF8F3] border-t border-[#C8A46A]/20 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C8A46A] flex items-center justify-center text-[#142B3B] shadow-md">
                <Compass className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {brand}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {dict.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#C8A46A]" />
              <span>{lang === 'fr' ? 'Démonstration Technique Indépendante' : 'عرض تقني مستقل بدون معاملات'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C8A46A] mb-4">
              {dict.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href={`/${lang}`} className="hover:text-white transition-colors">
                  {navDict.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/destinations`} className="hover:text-white transition-colors">
                  {navDict.destinations}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/a-propos`} className="hover:text-white transition-colors">
                  {navDict.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
                  {navDict.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Demonstration Notice Card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              {lang === 'fr' ? 'Note de Démonstration' : 'إشعار العرض التوضيحي'}
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {dict.legalNote}
            </p>
            <p className="text-xs text-[#C8A46A] font-medium pt-2 border-t border-white/10">
              {dict.developerNote}
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {brand} — {lang === 'fr' ? 'Conception & Démonstration Freelance' : 'تصميم وبرمجة مستقلة'}</p>
          <p className="text-gray-400">
            {lang === 'fr' ? 'Next.js App Router • TypeScript • Tailwind CSS' : 'برمجة بأحدث تقنيات الويب'}
          </p>
        </div>
      </div>
    </footer>
  );
}
