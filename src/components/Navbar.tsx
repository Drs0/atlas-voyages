'use client';

import { useState } from 'react';
import Link from 'next/navigation';
import NextLink from 'next/link';
import { Menu, X, Compass, MessageSquareQuote } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  lang: 'fr' | 'ar';
  dict: {
    brand: string;
    home: string;
    destinations: string;
    about: string;
    contact: string;
    inquireCta: string;
  };
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}/destinations`, label: dict.destinations },
    { href: `/${lang}/a-propos`, label: dict.about },
    { href: `/${lang}/contact`, label: dict.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#EBE5D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <NextLink href={`/${lang}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#142B3B] flex items-center justify-center text-[#C8A46A] shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#142B3B]">
                {dict.brand}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C8A46A] font-medium -mt-1">
                {lang === 'fr' ? 'Maroc Sur-Mesure' : 'سياحة مغربية أصيلة'}
              </span>
            </div>
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#26343B] hover:text-[#C8A46A] transition-colors"
              >
                {link.label}
              </NextLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />
            <NextLink
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C8A46A] hover:bg-[#b89359] text-white text-xs font-semibold shadow-sm transition-all hover:shadow"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>{dict.inquireCta}</span>
            </NextLink>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher currentLang={lang} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-[#142B3B] hover:bg-black/5"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#EBE5D8] bg-[#FAF8F3] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#142B3B] hover:bg-black/5"
              >
                {link.label}
              </NextLink>
            ))}
          </div>
          <div className="pt-2 border-t border-[#EBE5D8]">
            <NextLink
              href={`/${lang}/contact`}
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#C8A46A] text-white text-sm font-semibold shadow-sm"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>{dict.inquireCta}</span>
            </NextLink>
          </div>
        </div>
      )}
    </header>
  );
}
