import { getDictionary } from '@/lib/i18n';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import { Sparkles, Info } from 'lucide-react';

export default async function DestinationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'ar' ? 'ar' : 'fr';
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A46A]/20 text-[#142B3B] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A46A]" />
          <span>{lang === 'fr' ? 'Sélection de Démonstration' : 'باقات استعراضية'}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B3B]">
          {dict.destinations.title}
        </h1>
        <p className="text-sm sm:text-base text-[#26343B]/80 mt-2 leading-relaxed">
          {dict.destinations.subtitle}
        </p>
      </div>

      {/* Sample Content Disclaimer Callout */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-[#142B3B]">
        <Info className="w-5 h-5 text-[#C8A46A] shrink-0" />
        <p>
          {lang === 'fr'
            ? 'Tous les forfaits, prix et étapes ci-dessous sont présentés à titre indicatif pour illustrer les capacités de mise en page.'
            : 'جميع البرامج والأسعار والمحطات المعروضة أدناه هي نماذج استرشادية لتوضيح أسلوب العرض والتنظيم.'}
        </p>
      </div>

      {/* Packages Grid */}
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
    </div>
  );
}
