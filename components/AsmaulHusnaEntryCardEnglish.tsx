import Link from "next/link";

export default function AsmaulHusnaEntryCardEnglish() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Asmaul Husna – 99 Names of Allah SWT
          </h2>

          {/* Arabic Sample */}
          <div className="flex gap-4 justify-center md:justify-start text-3xl font-bold text-emerald-700 dark:text-emerald-400" dir="rtl">
            <span>الرَّحْمَنُ</span>
            <span>الرَّحِيمُ</span>
            <span>الْمَلِكُ</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Learn and reflect on the 99 beautiful names of Allah SWT complete
            with Arabic text, transliteration, and English meanings. Enhance your
            understanding and spiritual connection by exploring the perfect
            attributes of Allah.
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">✓</span>
              <span>Complete 99 names of Allah</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">✓</span>
              <span>Arabic text & transliteration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">✓</span>
              <span>English meanings</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">✓</span>
              <span>Explanation for each name</span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/asmaul-husna"
              className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              View Complete Asmaul Husna
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
