import { getDictionary } from '@/lib/i18n';
import { Compass, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'ar' ? 'ar' : 'fr';
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A46A]/20 text-[#142B3B] text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-[#C8A46A]" />
          <span>{lang === 'fr' ? 'Concept & Vision' : 'الرؤية والمنهج'}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B3B]">
          {dict.about.title}
        </h1>
        <p className="text-base text-[#26343B]/80 leading-relaxed">
          {dict.about.subtitle}
        </p>
      </div>

      {/* Editorial Content */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EBE5D8] shadow-sm space-y-8">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#142B3B]">
            {dict.about.storyTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#26343B]/80 leading-relaxed">
            {dict.about.storyP1}
          </p>
          <p className="text-sm sm:text-base text-[#26343B]/80 leading-relaxed">
            {dict.about.storyP2}
          </p>
        </div>

        {/* Pillars of presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#EBE5D8]">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#142B3B]">
                {lang === 'fr' ? 'Valorisation Culturelle' : 'إبراز التراث الثقافي'}
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {lang === 'fr'
                  ? 'Mettre en lumière l’histoire des médinas et la beauté des paysages désertiques.'
                  : 'تسليط الضوء على عراقة المدن التاريخية وجمال الطبيعة الصحراوية والجبلية.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#142B3B]">
                {lang === 'fr' ? 'Expérience Voyageur Soignée' : 'عناية كاملة بتجربة المسافر'}
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {lang === 'fr'
                  ? 'Une lisibilité sans faille des programmes et une prise de contact simple.'
                  : 'وضوح تام في تفاصيل الرحلات وتسهيل التواصل السريع عبر القنوات الحديثة.'}
              </p>
            </div>
          </div>
        </div>

        {/* Explicit Demo Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-[#142B3B]">
            <ShieldCheck className="w-4 h-4 text-[#C8A46A]" />
            <span>{dict.about.demoDisclaimerTitle}</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            {dict.about.demoDisclaimerP}
          </p>
        </div>
      </div>
    </div>
  );
}
