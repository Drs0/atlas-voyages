import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { TravelPackage } from '@/types/package';

interface PackageCardProps {
  pkg: TravelPackage;
  lang: 'fr' | 'ar';
  dict: {
    startingFrom: string;
    perPerson: string;
    durationDays: string;
    durationNights: string;
    viewDetails: string;
    sampleTag?: string;
  };
}

export default function PackageCard({ pkg, lang, dict }: PackageCardProps) {
  const categoryLabels = {
    desert: lang === 'fr' ? 'Désert' : 'صحراء',
    imperial: lang === 'fr' ? 'Cités Impériales' : 'مدن إمبراطورية',
    atlas: lang === 'fr' ? 'Haut Atlas' : 'الأطلس الكبير',
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EBE5D8] shadow-xs hover:shadow-xl transition-all duration-300">
      {/* Cover Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
        <Image
          src={pkg.coverImage}
          alt={pkg.title[lang]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute top-3.5 start-3.5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#142B3B]/90 text-white backdrop-blur-xs border border-white/20">
            <Sparkles className="w-3 h-3 text-[#C8A46A]" />
            {categoryLabels[pkg.category]}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3.5 start-3.5 flex items-center gap-1.5 text-xs text-white font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
          <Clock className="w-3.5 h-3.5 text-[#C8A46A]" />
          <span>
            {pkg.durationDays} {dict.durationDays} / {pkg.durationNights} {dict.durationNights}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-[#142B3B] group-hover:text-[#C8A46A] transition-colors leading-snug">
            {pkg.title[lang]}
          </h3>
          <p className="text-xs sm:text-sm text-[#26343B]/80 line-clamp-2 leading-relaxed">
            {pkg.subtitle[lang]}
          </p>
        </div>

        {/* Pricing & CTA Row */}
        <div className="pt-4 border-t border-[#EBE5D8] flex items-center justify-between gap-2">
          <div>
            <div className="text-[11px] text-gray-500 uppercase tracking-wider">
              {dict.startingFrom}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-[#142B3B]">
                {pkg.startingPriceMAD.toLocaleString()} MAD
              </span>
              <span className="text-xs text-gray-500">{dict.perPerson}</span>
            </div>
            <div className="text-[10px] text-[#B66A4B] font-medium">
              {dict.sampleTag || (lang === 'fr' ? 'Exemple indicatif' : 'نموذج استرشادي')}
            </div>
          </div>

          <Link
            href={`/${lang}/destinations/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FAF8F3] group-hover:bg-[#C8A46A] border border-[#C8A46A]/30 text-[#142B3B] group-hover:text-white text-xs font-semibold transition-all shadow-2xs"
          >
            <span>{dict.viewDetails}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl-flip" />
          </Link>
        </div>
      </div>
    </div>
  );
}
