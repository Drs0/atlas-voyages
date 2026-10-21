import { AlertCircle } from 'lucide-react';

interface DemoBannerProps {
  dict: {
    badge: string;
    notice: string;
  };
}

export default function DemoBanner({ dict }: DemoBannerProps) {
  return (
    <div className="bg-[#142B3B] text-[#FAF8F3] border-b border-[#C8A46A]/30 px-4 py-2.5 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C8A46A]/20 text-[#C8A46A] border border-[#C8A46A]/40 font-medium text-[11px] shrink-0">
            <AlertCircle className="w-3.5 h-3.5" />
            {dict.badge}
          </span>
          <p className="text-gray-300 leading-tight line-clamp-1 sm:line-clamp-none">
            {dict.notice}
          </p>
        </div>
      </div>
    </div>
  );
}
