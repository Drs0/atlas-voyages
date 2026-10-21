'use client';

import { useState } from 'react';
import { MessageSquare, Copy, Check, Info, Sparkles, Send } from 'lucide-react';
import { TravelPackage } from '@/types/package';

interface WhatsAppInquiryProps {
  lang: 'fr' | 'ar';
  packagesList: TravelPackage[];
  initialPackageSlug?: string;
  dict: {
    title: string;
    subtitle: string;
    selectedPackage: string;
    selectPlaceholder: string;
    dateLabel: string;
    travelersLabel: string;
    childrenLabel: string;
    styleLabel: string;
    styleRiad: string;
    styleLuxury: string;
    styleStandard: string;
    notesLabel: string;
    notesPlaceholder: string;
    previewTitle: string;
    copyButton: string;
    copiedFeedback: string;
    agencyCalloutTitle: string;
    agencyCalloutText: string;
  };
}

export default function WhatsAppInquiry({
  lang,
  packagesList,
  initialPackageSlug,
  dict,
}: WhatsAppInquiryProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialPackageSlug || packagesList[0]?.slug || ''
  );
  const [date, setDate] = useState<string>('2026-11-15');
  const [adults, setAdults] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [style, setStyle] = useState<string>(dict.styleRiad);
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const currentPkg = packagesList.find((p) => p.slug === selectedSlug) || packagesList[0];
  const pkgTitle = currentPkg ? currentPkg.title[lang] : '';
  const pkgDuration = currentPkg ? `${currentPkg.durationDays}J / ${currentPkg.durationNights}N` : '';

  // Generate formatted WhatsApp message text
  const generatedMessage =
    lang === 'fr'
      ? `👋 Bonjour Atlas Voyages !\n\n` +
        `Je souhaite obtenir un devis pour le circuit suivant :\n` +
        `📍 Circuit : ${pkgTitle} (${pkgDuration})\n` +
        `🗓️ Date envisagée : ${date || 'À définir'}\n` +
        `👥 Voyageurs : ${adults} adulte(s)${childrenCount > 0 ? `, ${childrenCount} enfant(s)` : ''}\n` +
        `✨ Style souhaité : ${style}\n` +
        (notes ? `💬 Remarques : ${notes}\n\n` : `\n`) +
        `(Message généré via la démo Atlas Voyages)`
      : `👋 مرحباً أطلس للأسفار !\n\n` +
        `أود الحصول على عرض سعر وتفاصيل حول البرنامج التالي :\n` +
        `📍 الرحلة : ${pkgTitle} (${pkgDuration})\n` +
        `🗓️ التاريخ المقترح : ${date || 'قيد التحديد'}\n` +
        `👥 المسافرون : ${adults} بالغ(ين)${childrenCount > 0 ? `، ${childrenCount} طفل` : ''}\n` +
        `✨ الإقامة المفضلة : ${style}\n` +
        (notes ? `💬 ملاحظات : ${notes}\n\n` : `\n`) +
        `(رسالة نموذجية عبر موقع العرض التوضيحي أطلس للأسفار)`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage.replace(/\\n/g, '\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#EBE5D8] shadow-md overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="border-b border-[#EBE5D8] pb-6 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#128C7E] mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Conversion Demo</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#142B3B]">
          {dict.title}
        </h3>
        <p className="text-sm text-[#26343B]/80 mt-1">
          {dict.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form Controls */}
        <div className="space-y-4">
          {/* Package Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B3B] mb-1.5">
              {dict.selectedPackage}
            </label>
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBE5D8] bg-[#FAF8F3] text-sm text-[#142B3B] focus:outline-hidden focus:ring-2 focus:ring-[#C8A46A]"
            >
              {packagesList.map((pkg) => (
                <option key={pkg.slug} value={pkg.slug}>
                  {pkg.title[lang]} ({pkg.durationDays}J / {pkg.durationNights}N)
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B3B] mb-1.5">
              {dict.dateLabel}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBE5D8] bg-[#FAF8F3] text-sm text-[#142B3B] focus:outline-hidden focus:ring-2 focus:ring-[#C8A46A]"
            />
          </div>

          {/* Travelers Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B3B] mb-1.5">
                {dict.travelersLabel}
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={adults}
                onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBE5D8] bg-[#FAF8F3] text-sm text-[#142B3B]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B3B] mb-1.5">
                {dict.childrenLabel}
              </label>
              <input
                type="number"
                min={0}
                max={10}
                value={childrenCount}
                onChange={(e) => setChildrenCount(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBE5D8] bg-[#FAF8F3] text-sm text-[#142B3B]"
              />
            </div>
          </div>

          {/* Accommodation Style */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B3B] mb-1.5">
              {dict.styleLabel}
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBE5D8] bg-[#FAF8F3] text-sm text-[#142B3B]"
            >
              <option value={dict.styleRiad}>{dict.styleRiad}</option>
              <option value={dict.styleLuxury}>{dict.styleLuxury}</option>
              <option value={dict.styleStandard}>{dict.styleStandard}</option>
            </select>
          </div>

          {/* Custom Notes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B3B] mb-1.5">
              {dict.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={dict.notesPlaceholder}
              className="w-full px-3.5 py-2 rounded-lg border border-[#EBE5D8] bg-[#FAF8F3] text-sm text-[#142B3B] resize-none"
            />
          </div>
        </div>

        {/* Live Preview & Copy Output */}
        <div className="flex flex-col h-full justify-between space-y-4">
          <div className="bg-[#FAF8F3] border border-[#EBE5D8] rounded-xl p-5 shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EBE5D8]">
              <span className="text-xs font-bold text-[#142B3B] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A46A]" />
                {dict.previewTitle}
              </span>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                WhatsApp Format
              </span>
            </div>

            {/* Bubble message preview */}
            <div className="bg-[#E7F8E8] text-[#111B21] p-4 rounded-xl text-xs sm:text-sm font-mono whitespace-pre-wrap leading-relaxed border border-[#25D366]/30 shadow-2xs">
              {generatedMessage.replace(/\\n/g, '\n')}
            </div>

            {/* Copy CTA */}
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#142B3B] hover:bg-[#1e3f57] text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{dict.copiedFeedback}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{dict.copyButton}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Demonstration Notice Card (Explaining WhatsApp Integration to prospective agency) */}
          <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C8A46A]/30 text-xs text-[#26343B] space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#142B3B] font-bold">
              <Info className="w-4 h-4 text-[#C8A46A] shrink-0" />
              <span>{dict.agencyCalloutTitle}</span>
            </div>
            <p className="leading-relaxed text-gray-600">
              {dict.agencyCalloutText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
