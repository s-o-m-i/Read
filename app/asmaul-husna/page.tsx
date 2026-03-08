import { Metadata } from "next";
import Link from "next/link";
import { asmaulHusnaData } from "./data/asmaulHusna";
import AsmaulHusnaGrid from "./components/AsmaulHusnaGrid";

export const metadata: Metadata = {
  title: "Asmaul Husna: Complete Guide to 99 Names of Allah with Meanings | TasbihHub",
  description:
    "Discover the complete list of 99 Names of Allah (Asmaul Husna). Learn the meaning, benefits, and how to recite each divine name using our interactive tasbih counter. Islamic guide to knowing Allah's beautiful attributes.",
  keywords: [
    "99 names of allah",
    "asmaul husna",
    "asmaul husna with meaning",
    "names of allah",
    "allah names",
    "99 names of allah with meanings",
    "beautiful names of allah",
    "how to memorize asmaul husna",
    "asmaul husna benefits",
  ],
  alternates: {
    canonical: "https://tasbihhub.com/asmaul-husna",
  },
  openGraph: {
    title: "Asmaul Husna: 99 Names of Allah - Complete Interactive Guide",
    description:
      "Learn all 99 beautiful names of Allah (Asmaul Husna) with detailed meanings, benefits, and a digital tasbih counter to enhance your Islamic practice.",
    type: "website",
    locale: "en_US",
    url: "https://tasbihhub.com/asmaul-husna",
  },
};

export default function AsmaulHusnaPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* HEADER SECTION */}
      <header className="max-w-6xl mx-auto px-4 py-12 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Asmaul Husna – The 99 Beautiful Names of Allah
        </h1>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Complete guide to understanding, memorizing, and practicing the divine attributes of Allah through His most beautiful names
        </p>
      </header>

      {/* COMPREHENSIVE INTRODUCTION (800+ words) */}
      <article className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* WHAT IS ASMAUL HUSNA SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            What is Asmaul Husna?
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              <strong>Asmaul Husna</strong> (الأسماء الحسنى) is derived from Arabic, literally meaning "the most beautiful names." In Islamic theology, it refers to the 99 divine attributes of Allah SWT, each one representing a facet of His infinite and perfect nature. These are not merely names or labels—they are windows into understanding the essence of the Divine, and by extension, our relationship with our Creator.
            </p>
            <p>
              The significance of Asmaul Husna extends far beyond memorization. Each name encapsulates a divine quality that has been revealed to humanity through the Quran and the teachings of Prophet Muhammad ﷺ. When we contemplate Ar-Rahman (The Most Gracious), we understand Allah's boundless mercy. When we reflect on Al-Adl (The Just), we recognize the perfection of divine justice. Each name is like a jewel in a divine crown, and together, the 99 names create a comprehensive understanding of Allah's nature—transcendent yet relational, powerful yet merciful, just yet compassionate.
            </p>
            <p>
              In a world of confusion, despair, and spiritual emptiness, Asmaul Husna serves as an anchor. They remind us that someone All-Knowing watches our struggles, that someone All-Powerful can change our circumstances, and that someone All-Merciful never closes the door to those seeking forgiveness. This is why Prophet Muhammad ﷺ emphasized the importance of these 99 names and promised that whoever truly encompasses them—not merely memorizes them, but understands and applies them—will enter Paradise.
            </p>
          </div>
        </section>

        {/* HISTORICAL AND RELIGIOUS BASIS */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Islamic Foundation: Quranic Authority
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              The Quran itself provides the authority for Asmaul Husna. Allah SWT says:
            </p>
            <blockquote className="border-l-4 border-emerald-600 pl-6 py-2 italic bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/30 dark:to-transparent rounded">
              "And to Allah belong all the beautiful names, so call upon Him by them..." (Quran 7:180)
            </blockquote>
            <blockquote className="border-l-4 border-emerald-600 pl-6 py-2 italic bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/30 dark:to-transparent rounded">
              "Allah – there is no deity except Him. To Him belong the most beautiful names." (Quran 20:8)
            </blockquote>
            <blockquote className="border-l-4 border-emerald-600 pl-6 py-2 italic bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/30 dark:to-transparent rounded">
              "He is Allah, the Creator, the Inventor, the Shaper. To Him belong the most beautiful names. Whatever is in the heavens and on the earth glorifies Him. And He is the Almighty, the All-Wise." (Quran 59:24)
            </blockquote>
            <p>
              Prophet Muhammad ﷺ further emphasized this teaching, stating: "Indeed, Allah has ninety-nine names, one hundred less one. Whoever preserves them will enter Paradise." (Sahih Al-Bukhari and Sahih Muslim). This prophetic tradition has been interpreted by Islamic scholars to mean that understanding, internalizing, and applying these divine attributes in our spiritual practice leads to closeness to Allah and ultimately to Paradise.
            </p>
          </div>
        </section>

        {/* THE TRANSFORMATIVE POWER */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            The Transformative Power of Divine Names
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              Learning Asmaul Husna is not an academic exercise—it is a spiritual practice designed to transform hearts, clarify minds, and guide behavior. When you know Allah as Ar-Rahman (The Most Gracious), you become hopeful instead of despairing. When you know Him as Al-Adl (The Just), you release grievances and trust in divine judgment. When you know Him as An-Nur (The Light), you dispel confusion and uncertainty.
            </p>
            <p>
              Each of the 99 names addresses a different human need and spiritual state. The one suffering oppression draws strength from Al-Aziz (The Almighty). The one drowning in guilt finds solace in Al-Ghafur (The Forgiving). The one facing impossible circumstances places trust in Al-Muqtadir (The Omnipotent). This is why the practice is transformative—it matches divine attributes to human struggles, creating a pathway from despair to serenity, from confusion to clarity, from isolation to connection.
            </p>
            <p>
              Scholars of tasawwuf (Islamic mysticism) have long taught that Asmaul Husna are keys to unlocking spiritual states. By meditating on a specific divine name in alignment with one's current state, a believer can invoke the relevant divine quality and experience its transformative effect. This practice predates modernity by centuries and remains one of the most powerful spiritual tools in the Islamic tradition.
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Spiritual and Practical Benefits of Asmaul Husna
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-3">
            <p className="leading-relaxed">
              The benefits of regularly engaging with Asmaul Husna extend across spiritual, emotional, and behavioral dimensions:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong>Deepened Faith and Tawhid (Monotheism):</strong> Understanding the divine attributes strengthens your belief in Allah's perfect nature and His oneness, moving faith from intellectual assent to lived experience.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong>Answered Prayers and Dua:</strong> Prophet Muhammad ﷺ taught that calling upon Allah using His appropriate names increases the efficacy of supplication. Asking Ar-Rahman when pleading for mercy is more potent than generic prayer.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong>Emotional Resilience and Peace:</strong> In crises, knowing that Al-Wakil (The Trustee) handles all affairs, or As-Salam (The Source of Peace) guards your inner world, provides unshakeable peace even amid external chaos.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong>Ethical Behavior and Moral Excellence:</strong> Knowing Allah as Al-Adl (The Just) prevents you from oppressing others; knowing Him as An-Nur (The Light) prevents you from embracing darkness and deception.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong>Protection from Despair and Hopelessness:</strong> No matter your circumstance, one of the 99 names is relevant and applicable, preventing the spiritual death that comes from hopelessness.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong>Promised Reward in the Hereafter:</strong> As per the hadith, whoever preserves these names will enter Paradise—a promise of eternal reward for consistent spiritual engagement.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* HOW TO PRACTICE */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Practical Ways to Learn and Practice Asmaul Husna
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg min-w-fit">1.</span>
                <div>
                  <strong>Daily Recitation:</strong> Dedicate time each day to recite one or more names of Allah. Many scholars recommend reciting each name 33, 99, or 100 times daily. Our 
                  <Link href="/tasbih-counter" className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 underline ml-1">digital tasbih counter</Link>
                  {" "}helps you track your recitations accurately.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg min-w-fit">2.</span>
                <div>
                  <strong>Contemplation and Reflection:</strong> After reciting a name, spend time meditating on its meaning and how it applies to your current life circumstances. This transitions practice from mechanical repetition to spiritual transformation.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg min-w-fit">3.</span>
                <div>
                  <strong>Application in Supplication:</strong> Use the relevant divine name when making dua. For example, invoke Ar-Razzaq (The Provider) when seeking sustenance, or Al-Ghafur (The Forgiving) when asking for forgiveness.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg min-w-fit">4.</span>
                <div>
                  <strong>One Name Per Day Method:</strong> Choose one divine name each day and focus on it exclusively. This deeper, focused approach is more transformative than surface-level memorization of all 99 names.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg min-w-fit">5.</span>
                <div>
                  <strong>Teaching and Transmission:</strong> Share your understanding of Asmaul Husna with family and community. Teaching reinforces your own learning and spreads this blessed knowledge.
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-600 rounded-r-lg p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Begin Your Journey Today
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The path to intimacy with Allah begins with one step—choosing one single divine name and reflecting on it deeply. The 99 names are not a task to complete but a lifelong practice of deepening your relationship with your Creator. Whether you are facing trials, seeking spiritual elevation, or wanting to understand Allah more profoundly, Asmaul Husna provides the pathway.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Start today. Choose one name from the list below. Recite it. Reflect on it. Apply it to your life. Then experience the transformation that countless believers before you have attained through this blessed practice.
          </p>
        </section>
      </article>

      {/* LIST OF ASMAUL HUSNA */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center">
          Complete List of the 99 Names of Allah
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Click on any name to explore its detailed meaning, Quranic references, spiritual benefits, and recommended dhikr practices
        </p>

        <AsmaulHusnaGrid data={asmaulHusnaData} />
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center space-y-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Enhance Your Practice with Digital Tools
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Use our collection of Islamic practice tools to support and track your spiritual journey
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/tasbih-counter"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition shadow-md"
          >
            📿 Tasbih Counter
          </Link>
          <Link
            href="/dhikr-counter"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition shadow-md"
          >
            📿 Dhikr Counter
          </Link>
          <Link
            href="/istighfar-counter"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition shadow-md"
          >
            📿 Istighfar Counter
          </Link>
        </div>
      </section>

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://tasbihhub.com/asmaul-husna",
            name: "Asmaul Husna: 99 Beautiful Names of Allah",
            description: "Complete guide to understanding and practicing the 99 divine names of Allah with meanings, benefits, and digital tools",
            inLanguage: "en",
            isPartOf: {
              "@type": "WebSite",
              name: "TasbihHub",
              url: "https://tasbihhub.com",
            },
            mainEntity: {
              "@type": "Thing",
              name: "99 Names of Allah (Asmaul Husna)",
              description: "The beautiful divine attributes of Allah that describe His perfect nature and infinite qualities",
              url: "https://tasbihhub.com/asmaul-husna",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tasbihhub.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Asmaul Husna",
                item: "https://tasbihhub.com/asmaul-husna",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
