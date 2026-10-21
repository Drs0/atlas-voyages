import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_Arabic } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '@/lib/i18n';
import DemoBanner from '@/components/DemoBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atlas Voyages | Démonstration Web Agence de Voyages Maroc',
  description: 'Site de démonstration technologique haut de gamme pour agences de voyages au Maroc. Bilingue français/arabe avec intégration WhatsApp.',
  robots: {
    index: false,
    follow: false,
  },
};

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'ar' ? 'ar' : 'fr';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const dict = await getDictionary(lang);

  const fontClasses =
    lang === 'ar'
      ? `${notoArabic.variable} font-sans`
      : `${playfair.variable} ${jakarta.variable} font-sans`;

  return (
    <html lang={lang} dir={dir} className={fontClasses}>
      <body className="min-h-screen bg-[#FAF8F3] text-[#26343B] flex flex-col antialiased selection:bg-[#C8A46A]/20 selection:text-[#142B3B]">
        <DemoBanner dict={dict.demo} />
        <Navbar lang={lang} dict={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} brand={dict.nav.brand} dict={dict.footer} navDict={dict.nav} />
      </body>
    </html>
  );
}
