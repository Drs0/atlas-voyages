import { MapPin } from 'lucide-react';
import { ItineraryDay } from '@/types/package';

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
  lang: 'fr' | 'ar';
  dayLabel: string;
}

export default function ItineraryTimeline({ itinerary, lang, dayLabel }: ItineraryTimelineProps) {
  return (
    <div className="relative border-s border-[#C8A46A]/40 ms-4 my-6 space-y-8">
      {itinerary.map((item) => (
        <div key={item.day} className="relative ps-6 group">
          {/* Timeline Node Badge */}
          <div className="absolute -start-3.5 top-0 w-7 h-7 rounded-full bg-[#142B3B] border-2 border-[#C8A46A] flex items-center justify-center text-white text-xs font-bold shadow-xs">
            {item.day}
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#EBE5D8] shadow-xs hover:border-[#C8A46A]/40 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A46A] uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{dayLabel} {item.day}</span>
            </div>
            <h4 className="text-base font-bold text-[#142B3B] mb-2 font-serif">
              {item.title[lang]}
            </h4>
            <p className="text-sm text-[#26343B]/80 leading-relaxed">
              {item.description[lang]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
