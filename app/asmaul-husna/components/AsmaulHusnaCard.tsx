import { AsmaulHusnaItem } from "../data/asmaulHusna";
import Link from "next/link";

interface AsmaulHusnaCardProps {
  item: AsmaulHusnaItem;
  onClick?: () => void;
}

export default function AsmaulHusnaCard({ item, onClick }: AsmaulHusnaCardProps) {
  return (
    <article 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 p-5 space-y-3"
    >
      {/* Number Badge */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
          {item.id}
        </span>
      </div>

      {/* Arabic Name */}
      <div className="text-center py-3">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-relaxed" dir="rtl">
          {item.nameArabic}
        </h3>
      </div>

      {/* Latin Name */}
      <div className="text-center">
        <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
          {item.nameLatin}
        </p>
      </div>

      {/* English Meaning */}
      <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-base font-medium text-gray-900 dark:text-gray-100">
          {item.meaningEn}
        </p>
      </div>

      {/* Short Description */}
      {item.shortDescription && (
        <div className="pt-2">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.shortDescription}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-2">
        {/* Learn More Button - Primary Action */}
        <Link
          href={`/asmaul-husna/${item.slug}`}
          className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <span>📖</span>
          <span>Learn Meaning & Dhikr</span>
        </Link>
        
        {/* Quick Tasbih Button - Secondary Action */}
        <button
          onClick={onClick}
          className="w-full py-2 px-3 bg-gray-100 dark:bg-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <span>📿</span>
          <span>Quick Tasbih Counter</span>
        </button>
      </div>
    </article>
  );
}
