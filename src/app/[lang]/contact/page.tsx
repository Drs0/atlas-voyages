import { getDictionary } from '@/lib/i18n';
import { packages } from '@/data/packages';
import WhatsAppInquiry from '@/components/WhatsAppInquiry';
import { MapPin, Clock, Mail, Info } from 'lucide-react';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'ar' ? 'ar' : 'fr';
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B3B]">
          {dict.contact.title}
        </h1>
        <p className="text-sm sm:text-base text-[#26343B]/80 mt-2">
          {dict.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Demo Agency Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-7 rounded-2xl border border-[#EBE5D8] shadow-xs space-y-6">
            <h2 className="font-serif text-xl font-bold text-[#142B3B] border-b border-[#EBE5D8] pb-3">
              {dict.contact.agencyCardTitle}
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">
                  {dict.contact.addressTitle}
                </div>
                <div className="text-sm font-medium text-[#142B3B] mt-0.5">
                  {dict.contact.addressValue}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">
                  {dict.contact.hoursTitle}
                </div>
                <div className="text-sm font-medium text-[#142B3B] mt-0.5">
                  {dict.contact.hoursValue}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] text-[#C8A46A] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">
                  {dict.contact.emailTitle}
                </div>
                <div className="text-sm font-medium text-[#142B3B] mt-0.5">
                  {dict.contact.emailValue}
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration Notice */}
          <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C8A46A]/30 flex items-start gap-3 text-xs text-gray-600">
            <Info className="w-4 h-4 text-[#C8A46A] shrink-0 mt-0.5" />
            <p>
              {lang === 'fr'
                ? "Il s'agit d'un exemple de coordonnées d'agence. Aucun formulaire n'envoie de données à un serveur distant."
                : "هذه بيانات نموذجية لأغراض العرض التوضيحي. لا تقوم الصفحة بإرسال أي بيانات أو تخزينها على خوادم خارجية."}
            </p>
          </div>
        </div>

        {/* Right Column: Interactive WhatsApp Generator */}
        <div className="lg:col-span-7">
          <WhatsAppInquiry
            lang={lang}
            packagesList={packages}
            dict={dict.inquiry}
          />
        </div>
      </div>
    </div>
  );
}
