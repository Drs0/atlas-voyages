import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Check, X, Sparkles, MapPin } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { packages } from '@/data/packages';
import ItineraryTimeline from '@/components/ItineraryTimeline';
import WhatsAppInquiry from '@/components/WhatsAppInquiry';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ['fr', 'ar']) {
    for (const pkg of packages) {
      params.push({ lang, slug: pkg.slug });
    }
  }
  return params;
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang === 'ar' ? 'ar' : 'fr';
  const dict = await getDictionary(lang);

  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) {
    notFound();
  }

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* 1. Header & Navigation Backlink */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}/destinations`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#142B3B] hover:text-[#C8A46A] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 rtl-flip" />
          <span>{dict.packageDetail.backToDestinations}</span>
        </Link>

        {/* Hero Visual Banner */}
        <div className="relative aspect-21/9 min-h-[320px] rounded-3xl overflow-hidden border border-[#EBE5D8] shadow-lg">
          <Image
            src={pkg.coverImage}
            alt={pkg.title[lang]}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142B3B]/90 via-[#142B3B]/40 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 start-6 sm:start-10 max-w-3xl text-white space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C8A46A] text-white shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'fr' ? 'Exemple de Circuit' : 'نموذج برنامج سياحي'}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {pkg.title[lang]}
            </h1>
            <p className="text-sm sm:text-base text-gray-200">
              {pkg.subtitle[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-[#EBE5D8] shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-gray-500 uppercase font-semibold">
                {dict.packageDetail.duration}
              </div>
              <div className="text-sm font-bold text-[#142B3B]">
                {pkg.durationDays} {dict.destinations.durationDays} / {pkg.durationNights} {dict.destinations.durationNights}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-gray-500 uppercase font-semibold">
                {dict.packageDetail.bestSeason}
              </div>
              <div className="text-sm font-bold text-[#142B3B]">
                {pkg.bestSeason[lang]}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-gray-500 uppercase font-semibold">
                {dict.packageDetail.indicativePrice}
              </div>
              <div className="text-sm font-bold text-[#142B3B]">
                ~ {pkg.startingPriceMAD.toLocaleString()} MAD {dict.destinations.perPerson}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content: Itinerary & Inclusions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Overview, Itinerary, Inclusions */}
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            <section className="bg-white p-7 rounded-2xl border border-[#EBE5D8] shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#142B3B]">
                {dict.packageDetail.overviewTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#26343B]/80 leading-relaxed">
                {pkg.overview[lang]}
              </p>
            </section>

            {/* Itinerary Timeline */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#142B3B]">
                {dict.packageDetail.itineraryTitle}
              </h2>
              <ItineraryTimeline
                itinerary={pkg.itinerary}
                lang={lang}
                dayLabel={dict.packageDetail.day}
              />
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white p-6 rounded-2xl border border-[#EBE5D8] shadow-xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#142B3B] flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>{dict.packageDetail.inclusionsTitle}</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#26343B]/85">
                  {pkg.inclusions[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white p-6 rounded-2xl border border-[#EBE5D8] shadow-xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#142B3B] flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-500" />
                  <span>{dict.packageDetail.exclusionsTitle}</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#26343B]/85">
                  {pkg.exclusions[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Embedded WhatsApp Inquiry Component */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <WhatsAppInquiry
                lang={lang}
                packagesList={packages}
                initialPackageSlug={pkg.slug}
                dict={dict.inquiry}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
