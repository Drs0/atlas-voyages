import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import WhatsAppInquiry from '@/components/WhatsAppInquiry';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'ar' ? 'ar' : 'fr';
  const dict = await getDictionary(lang);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Paysage marocain d'exception"
            fill
            priority
            className="object-cover object-center scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142B3B]/90 via-[#142B3B]/70 to-[#142B3B]/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C8A46A] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.hero.tagline}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto mb-6">
            {dict.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
            {dict.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${lang}/destinations`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C8A46A] hover:bg-[#b89359] text-white font-semibold text-sm shadow-lg transition-all hover:scale-105"
            >
              <span>{dict.hero.ctaExplore}</span>
              <ArrowRight className="w-4 h-4 rtl-flip" />
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              <span>{dict.hero.ctaInquire}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Value Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B3B]">
            {dict.pillars.title}
          </h2>
          <p className="text-sm text-[#26343B]/80 mt-2">
            {dict.pillars.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-7 rounded-2xl border border-[#EBE5D8] shadow-xs hover:border-[#C8A46A]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#EBE5D8] flex items-center justify-center text-[#C8A46A] mb-5 shadow-2xs">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#142B3B] mb-2">
              {dict.pillars.item1Title}
            </h3>
            <p className="text-sm text-[#26343B]/80 leading-relaxed">
              {dict.pillars.item1Desc}
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#EBE5D8] shadow-xs hover:border-[#C8A46A]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#EBE5D8] flex items-center justify-center text-[#C8A46A] mb-5 shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#142B3B] mb-2">
              {dict.pillars.item2Title}
            </h3>
            <p className="text-sm text-[#26343B]/80 leading-relaxed">
              {dict.pillars.item2Desc}
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#EBE5D8] shadow-xs hover:border-[#C8A46A]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#EBE5D8] flex items-center justify-center text-[#25D366] mb-5 shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#142B3B] mb-2">
              {dict.pillars.item3Title}
            </h3>
            <p className="text-sm text-[#26343B]/80 leading-relaxed">
              {dict.pillars.item3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B3B]">
              {dict.featured.title}
            </h2>
            <p className="text-sm text-[#26343B]/80 mt-1">
              {dict.featured.subtitle}
            </p>
          </div>
          <Link
            href={`/${lang}/destinations`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C8A46A] hover:text-[#b89359] transition-colors"
          >
            <span>{dict.featured.viewAll}</span>
            <ArrowRight className="w-4 h-4 rtl-flip" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              lang={lang}
              dict={dict.destinations}
            />
          ))}
        </div>
      </section>

      {/* 4. Interactive Inquiry Generator Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatsAppInquiry
          lang={lang}
          packagesList={packages}
          dict={dict.inquiry}
        />
      </section>
    </div>
  );
}
