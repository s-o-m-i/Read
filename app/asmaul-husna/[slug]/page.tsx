import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asmaulHusnaData } from "../data/asmaulHusna";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  getRelatedNames,
  getEnrichedMetadata,
  isPremiumContent,
  getH1Variant,
  getMetadataTitle,
  getContrastParagraph,
  getDhikrMethodVariation,
} from "../lib/seoHelpers";
import TasbihCounterModal from "@/components/TasbihCounterModal";
import { getExtendedAsmaulHusna } from "../data/asmaulHusnaExtended";

// Generate static params for all 99 names
export async function generateStaticParams() {
  return asmaulHusnaData.map((item) => ({
    slug: item.slug,
  }));
}

// Generate metadata for SEO with enhanced metadata and canonical URLs
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = asmaulHusnaData.find((item) => item.slug === slug);

  if (!name) {
    return {
      title: "Name Not Found | Asmaul Husna",
    };
  }

  const enrichedMeta = getEnrichedMetadata(slug, name.nameLatin, name.nameArabic, name.meaningEn);
  const metadataTitle = getMetadataTitle(name.nameLatin, name.meaningEn);

  return {
    title: metadataTitle,
    description: enrichedMeta.description,
    keywords: enrichedMeta.keywords,
    alternates: {
      canonical: enrichedMeta.canonicalUrl,
    },
    openGraph: {
      title: enrichedMeta.ogTitle,
      description: enrichedMeta.ogDescription,
      type: "article",
      locale: "en_US",
      url: enrichedMeta.canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: enrichedMeta.ogTitle,
      description: enrichedMeta.ogDescription,
    },
  };
}

export default async function AsmaulHusnaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentName = asmaulHusnaData.find((item) => item.slug === slug);

  if (!currentName) {
    notFound();
  }

  // Get extended content (if available)
  const extended = getExtendedAsmaulHusna(slug);
  const hasPremium = isPremiumContent(slug);

  // Find previous and next names for navigation
  const currentIndex = asmaulHusnaData.findIndex((item) => item.slug === slug);
  const previousName = currentIndex > 0 ? asmaulHusnaData[currentIndex - 1] : null;
  const nextName = currentIndex < asmaulHusnaData.length - 1 ? asmaulHusnaData[currentIndex + 1] : null;

  // Extract the short form for dhikr (e.g., "Rahman" from "Ar-Rahman")
  const dhikrName = currentName.nameLatin.replace(/^(Al|Ar|As|An)-/, "");

  // Generate schemas
  const articleSchema = generateArticleSchema(
    slug,
    currentName.nameLatin,
    currentName.meaningEn,
    currentName.shortDescription,
    `https://tasbihhub.com/asmaul-husna/${slug}`
  );

  const breadcrumbSchema = generateBreadcrumbSchema(currentName.nameLatin);
  const faqSchema = extended ? generateFAQSchema(slug) : null;

  // Get related names for internal linking
  const relatedNames = extended ? getRelatedNames(slug) : [];

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* BREADCRUMB */}
      <nav className="max-w-4xl mx-auto px-4 pt-6 pb-3">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link>
          <span>/</span>
          <Link href="/asmaul-husna" className="hover:text-emerald-600 dark:hover:text-emerald-400">Asmaul Husna</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100 font-medium">{currentName.nameLatin}</span>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* HEADER - ARABIC & TRANSLITERATION */}
        <header className="text-center space-y-4 pb-6 border-b-2 border-emerald-200 dark:border-emerald-800">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xl mb-3">
            {currentName.id}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            {getH1Variant(currentName.id, currentName.nameLatin, currentName.meaningEn)}
          </h1>
          
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-bold text-emerald-700 dark:text-emerald-400" dir="rtl">
              {currentName.nameArabic}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-500">
              {currentName.nameLatin}
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              {currentName.meaningEn}
            </p>
          </div>
        </header>

        {/* MEANING SECTION - UNIQUE PER NAME */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">📖</span>
            Meaning of {currentName.nameLatin}
          </h2>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-600 rounded-r-lg p-6">
            {extended && extended.extendedMeaning ? (
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                {extended.extendedMeaning}
              </p>
            ) : (
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                {currentName.shortDescription}
              </p>
            )}
          </div>
        </section>

        {/* QURAN REFERENCE SECTION - SPECIFIC VERSE */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">📜</span>
            {currentName.nameLatin} in the Quran
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-4">
            {extended && extended.quranicReference ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Surah {extended.quranicReference.surah} ({extended.quranicReference.verse})
                    </p>
                    <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-emerald-600 pl-4">
                      "{extended.quranicReference.text}"
                    </blockquote>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This verse specifically references {currentName.nameLatin} and demonstrates how this divine attribute appears in the Quran with practical context.
                </p>
              </div>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The name <strong>{currentName.nameLatin}</strong> appears throughout the Quran, 
                highlighting Allah's attribute as <strong>{currentName.meaningEn}</strong>. 
                This name reminds us of Allah's perfection and invites us to reflect on His divine qualities.
              </p>
            )}
          </div>
        </section>

        {/* BENEFITS SECTION - UNIQUE TO NAME */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">✨</span>
            Benefits of Reciting {currentName.nameLatin}
          </h2>
          <div className="bg-white dark:bg-gray-800 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {extended && extended.nameSpecificBenefits && extended.nameSpecificBenefits.length > 0 ? (
                extended.nameSpecificBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">•</span>
                    <span>Softens the heart and increases spiritual awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">•</span>
                    <span>Strengthens connection with Allah's attributes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">•</span>
                    <span>Brings peace and tranquility during stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">•</span>
                    <span>Helps maintain hope and trust in Allah</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">•</span>
                    <span>Increases gratitude and mindfulness of blessings</span>
                  </li>
                </>
              )}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Note: Benefits are spiritual and grounded in Islamic teachings. Consistent recitation with sincere intention brings the greatest reward.
              </p>
            </div>
          </div>
        </section>

        {/* DHIKR METHOD SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">📿</span>
            How to Recite (Dhikr Method)
          </h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl p-6 space-y-4">
            <div className="text-center space-y-3">
              <p className="text-gray-700 dark:text-gray-300 font-medium">Recite:</p>
              <p className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                يَا {currentName.nameArabic.replace(/^(ال|الـ)/, "")}
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-500">
                Ya {dhikrName}
              </p>
              {(() => {
                const dhikrVar = getDhikrMethodVariation(slug);
                if (!dhikrVar) return null;
                return (
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-400">
                      🟢 <strong>Recommended: {dhikrVar.count} times</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>When:</strong> {dhikrVar.time}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Intent:</strong> {dhikrVar.intent}
                    </p>
                  </div>
                );
              })()}
            </div>

            <div className="flex justify-center pt-4">
              {(() => {
                const dhikrVar = getDhikrMethodVariation(slug);
                const targetCount = dhikrVar?.count || 100;
                return (
                  <Link
                    href={`/tasbih-counter?name=Ya ${dhikrName}&target=${targetCount}`}
                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                  >
                    <span className="text-2xl">📿</span>
                    <span>Start Tasbih for {currentName.nameLatin}</span>
                  </Link>
                );
              })()}
            </div>
          </div>
        </section>

        {/* PRACTICE TIP - UNIQUE TO NAME */}
        <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2">
            <span>💡</span>
            Practice Tip
          </h3>
          {extended && extended.reflectionTip ? (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {extended.reflectionTip}
            </p>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Focus on Allah's attribute as <strong>{currentName.meaningEn}</strong> while reciting. 
              Reflect on the blessings you often overlook — health, time, safety, and guidance. 
              Let this remembrance strengthen your connection with Allah and deepen your gratitude.
            </p>
          )}
        </section>

        {/* CONTRAST PARAGRAPH - DISTINGUISH FROM OTHER DIVINE NAMES */}
        {(() => {
          const contrastPara = getContrastParagraph(slug);
          return contrastPara ? (
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border-l-4 border-purple-600 dark:border-purple-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3 flex items-center gap-2">
                <span>🔍</span>
                How {currentName.nameLatin} Stands Apart
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed italic">
                {contrastPara}
              </p>
            </section>
          ) : null;
        })()}

        {/* FAQ SECTION - NAME SPECIFIC */}
        {extended && extended.faqs && extended.faqs.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">❓</span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {extended.faqs.map((faq, idx) => (
                <details key={idx} className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <summary className="font-semibold text-gray-900 dark:text-gray-100 flex items-start justify-between group-open:text-emerald-600 dark:group-open:text-emerald-400">
                    <span className="flex-1 text-left">{faq.question}</span>
                    <span className="ml-2 text-xl group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* RELATED NAMES - INTERNAL LINKING */}
        {relatedNames && relatedNames.length > 0 && (
          <section className="space-y-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-900 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span>🔗</span>
              Explore Related Divine Attributes
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Understanding how {currentName.nameLatin} relates to other divine names deepens your spiritual insight.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedNames.map((relName) => (
                <Link
                  key={relName.slug}
                  href={`/asmaul-husna/${relName.slug}`}
                  className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-600 dark:hover:border-emerald-500 hover:shadow-md transition-all"
                >
                  <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {relName.nameLatin}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {relName.meaningEn}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* NAVIGATION */}
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
          {previousName ? (
            <Link
              href={`/asmaul-husna/${previousName.slug}`}
              className="w-full sm:w-auto px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-all flex items-center gap-2 justify-center"
            >
              <span>←</span>
              <div className="text-left">
                <div className="text-xs text-gray-600 dark:text-gray-400">Previous</div>
                <div className="font-semibold">{previousName.nameLatin}</div>
              </div>
            </Link>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}

          <Link
            href="/asmaul-husna"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all flex items-center gap-2"
          >
            <span>📋</span>
            <span>All 99 Names</span>
          </Link>

          {nextName ? (
            <Link
              href={`/asmaul-husna/${nextName.slug}`}
              className="w-full sm:w-auto px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-all flex items-center gap-2 justify-center"
            >
              <div className="text-right">
                <div className="text-xs text-gray-600 dark:text-gray-400">Next</div>
                <div className="font-semibold">{nextName.nameLatin}</div>
              </div>
              <span>→</span>
            </Link>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}
        </nav>

        {/* ADDITIONAL TOOLS */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Continue Your Spiritual Journey
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Enhance your daily dhikr practice with our other Islamic tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tasbih-counter"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all"
            >
              Tasbih Counter
            </Link>
            <Link
              href="/istighfar-counter"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
            >
              Istighfar Counter
            </Link>
            <Link
              href="/dhikr-counter"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all"
            >
              Dhikr Counter
            </Link>
          </div>
        </section>
      </article>

      {/* SCHEMA MARKUP - ARTICLE, BREADCRUMB, AND FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </main>
  );
}
