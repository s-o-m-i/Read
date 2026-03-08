import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dhikr in Ramadan 2026 | Daily Zikr Guide & Asmaul Husna",
  description:
    "Discover the best dhikr in Ramadan 2026. Learn what to recite during Ramadan, powerful zikr for spiritual growth, and daily Islamic remembrance practices.",
  keywords: [
    "best dhikr in ramadan",
    "what to recite in ramadan",
    "powerful zikr for ramadan",
    "ramadan dhikr guide",
    "daily dhikr in ramadan",
    "asmaul husna in ramadan",
    "zikr for ramadan",
  ],
  openGraph: {
    title: "Best Dhikr in Ramadan 2026 | Complete Guide to Islamic Remembrance",
    description:
      "Master the best dhikr and zikr practices for Ramadan 2026. Learn what to recite daily, powerful Islamic remembrance techniques, and Asmaul Husna meditation.",
    type: "article",
    url: "https://tasbih.vercel.app/ramadan-dhikr-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dhikr in Ramadan 2026 | Daily Zikr Guide",
    description:
      "Discover powerful dhikr and zikr for Ramadan. Complete guide to Islamic remembrance.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  canonical: "https://tasbih.vercel.app/ramadan-dhikr-guide",
};

export default function RamadanDhikrGuide() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Best Dhikr in Ramadan 2026
          </h1>
          <p className="text-lg text-emerald-100">
            Complete Guide to Daily Zikr & Asmaul Husna for Spiritual Growth
          </p>
          <div className="pt-4">
            <Link
              href="/tasbih-counter"
              className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Dhikr Practice Now
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-gray-700 dark:text-gray-300">
        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Navigation
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#importance" className="text-emerald-600 hover:underline">
                Why Dhikr is Essential in Ramadan
              </a>
            </li>
            <li>
              <a href="#best-dhikr" className="text-emerald-600 hover:underline">
                Best Dhikr to Recite in Ramadan
              </a>
            </li>
            <li>
              <a
                href="#powerful-zikr"
                className="text-emerald-600 hover:underline"
              >
                Powerful Zikr for Ramadan
              </a>
            </li>
            <li>
              <a href="#asmaul-husna" className="text-emerald-600 hover:underline">
                Asmaul Husna: The 99 Names of Allah
              </a>
            </li>
            <li>
              <a href="#daily-schedule" className="text-emerald-600 hover:underline">
                Daily Dhikr Schedule for Ramadan
              </a>
            </li>
            <li>
              <a href="#faq" className="text-emerald-600 hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </nav>

        {/* SECTION 1 */}
        <section id="importance" className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why Dhikr is Essential in Ramadan
          </h2>
          <p>
            Ramadan is the month of reflection, spiritual growth, and drawing
            closer to Allah through various acts of worship. Dhikr (Islamic
            remembrance or zikr) is one of the most powerful practices to deepen
            your spiritual connection during this blessed month.
          </p>
          <p>
            <strong>What is Dhikr?</strong> Dhikr, also spelled zikr, refers to
            the remembrance of Allah through repetition of specific Islamic
            phrases, verses from the Quran, and the recitation of the Asmaul
            Husna (the 99 Names of Allah).
          </p>
          <p>
            During Ramadan, when the veil between the material and spiritual
            worlds is thin, practicing dhikr allows you to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Strengthen your connection with Allah</li>
            <li>Achieve spiritual clarity and peace of mind</li>
            <li>Increase mindfulness throughout the day</li>
            <li>Develop consistency in Islamic practice</li>
            <li>Gain forgiveness and blessings (barakah)</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="best-dhikr" className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Best Dhikr to Recite in Ramadan
          </h2>
          <p>
            Here are the most recommended dhikr and zikr practices for Ramadan
            2026. These have been recommended by Islamic scholars and are proven
            to increase spiritual focus and closeness to Allah.
          </p>

          {/* SUBSECTION 1 */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
              1. Subhanallah, Alhamdulillah, Allahu Akbar
            </h3>
            <p className="mb-3">
              <strong>Recitation:</strong> "Subhanallah wa bihamdihi, Subhanallah
              al-adheem"
            </p>
            <p className="mb-3">
              <strong>Translation:</strong> "Glory be to Allah and praise be to
              Him, Glory be to Allah the Great"
            </p>
            <p>
              This is one of the most beloved forms of dhikr. Recite this 100
              times daily for maximum benefit. It purifies the heart, increases
              your connection to Allah, and brings countless blessings.
            </p>
            <p className="mt-3 text-sm italic">
              💡 <strong>Pro Tip:</strong> Use our{" "}
              <Link href="/tasbih-counter" className="text-emerald-600 hover:underline">
                digital tasbih counter
              </Link>{" "}
              to track your recitations easily.
            </p>
          </div>

          {/* SUBSECTION 2 */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
              2. Istighfar (Seeking Forgiveness)
            </h3>
            <p className="mb-3">
              <strong>Recitation:</strong> "Astaghfirullah al-adheem wa atubu
              ilayh"
            </p>
            <p className="mb-3">
              <strong>Translation:</strong> "I seek forgiveness from Allah the
              Great and I repent to Him"
            </p>
            <p>
              Istighfar is particularly powerful in Ramadan. Recite this 100
              times after sunrise or before sunset. Istighfar cleanses the soul,
              erases sins, and prepares you for the blessings of the Hereafter.
            </p>
            <p className="mt-3 text-sm italic">
              💡 <strong>Track Your Practice:</strong> Use our{" "}
              <Link href="/istighfar-counter" className="text-emerald-600 hover:underline">
                istighfar counter
              </Link>{" "}
              to maintain consistency.
            </p>
          </div>

          {/* SUBSECTION 3 */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
              3. Durood Sharif (Salutations Upon the Prophet)
            </h3>
            <p className="mb-3">
              <strong>Recitation:</strong> "Allahumma salli ala Muhammad wa ala
              ali Muhammad"
            </p>
            <p className="mb-3">
              <strong>Translation:</strong> "O Allah, send peace and blessings
              upon Muhammad and upon the family of Muhammad"
            </p>
            <p>
              Reciting Durood Sharif during Ramadan brings immense reward and
              connects you to the Prophet Muhammad (PBUH). Islamic scholars
              recommend reciting this at least 100 times daily during Ramadan.
            </p>
            <p className="mt-3 text-sm italic">
              💡 <strong>Tool Available:</strong> Track your durood with our{" "}
              <Link href="/durood-counter" className="text-emerald-600 hover:underline">
                durood counter
              </Link>
              .
            </p>
          </div>

          {/* SUBSECTION 4 */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
              4. La Ilaha Illallah (There is No God But Allah)
            </h3>
            <p className="mb-3">
              <strong>Recitation:</strong> "La ilaha illallah"
            </p>
            <p className="mb-3">
              <strong>Translation:</strong> "There is no god but Allah"
            </p>
            <p>
              This is the most fundamental Islamic declaration. Reciting Lā ilāha
              illā allāh with sincerity and presence of heart (khushu) is one of
              the most powerful forms of zikr. In Ramadan, this dhikr can bring
              profound spiritual transformation.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="powerful-zikr" className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Powerful Zikr for Ramadan: Advanced Practices
          </h2>
          <p>
            For those seeking deeper spiritual connection, these powerful zikr
            practices have been recommended by Islamic scholars for centuries:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-emerald-600 pl-4 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Morning Dhikr (After Fajr)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  • "Subhanallah wa bihamdihi" – 33 times
                </li>
                <li>
                  • "Alhamdulillah" – 33 times
                </li>
                <li>
                  • "Allahu Akbar" – 34 times
                </li>
                <li>
                  • "La ilaha illallah wahdahu la sharika lahu" – 10 times
                </li>
              </ul>
              <p className="text-xs italic mt-2 text-gray-600 dark:text-gray-400">
                Total: ~110 repetitions. Use our{" "}
                <Link href="/zikr-counter" className="text-emerald-600 hover:underline">
                  dhikr counter
                </Link>{" "}
                to track easily.
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Evening Dhikr (Before Maghrib)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  • "Astaghfirullah" – 50 times
                </li>
                <li>
                  • "Allahumma inni asaluka al-afiya" – 10 times (asking for
                  well-being)
                </li>
                <li>
                  • "Subhanallah wa bihamdihi, Subhanallah al-adheem" – 33 times
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-600 pl-4 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Post-Iftar Dhikr (After Breaking Fast)
              </h4>
              <p className="text-sm mb-2">
                After iftar is a spiritually potent time. Spend 10-15 minutes in
                sincere dhikr:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  • "Dhahaba al-thama'u wa abtallat al-urooqu wa thabata al-ajru
                  inshaa' Allah" (The thirst has gone and the veins are
                  moistened, and the reward is confirmed, if Allah wills)
                </li>
                <li>
                  • Quranic remembrance – Recite Surah Al-Fatiha 10 times
                </li>
                <li>
                  • Personal duas (supplications) for your needs and intentions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="asmaul-husna" className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Asmaul Husna: The 99 Names of Allah in Ramadan
          </h2>
          <p>
            The Asmaul Husna (the 99 Names of Allah) is perhaps the most
            powerful form of zikr during Ramadan. Each divine name carries
            specific benefits and spiritual meanings that can transform your
            practice.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
              Why Learn Asmaul Husna in Ramadan?
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                <span>
                  <strong>Enhanced Spiritual Connection:</strong> Each name
                  reflects an attribute of Allah, deepening your understanding
                  of His greatness.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                <span>
                  <strong>Answered Duas:</strong> The Prophet (PBUH) said
                  "Whoever supplicates to Allah using the Asmaul Husna will have
                  their prayer answered."
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                <span>
                  <strong>Healing and Peace:</strong> Different names heal
                  different spiritual ailments and bring peace to the heart.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                <span>
                  <strong>Divine Presence:</strong> Meditating on the names
                  increases your awareness of Allah's presence in your daily
                  life.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-6">
            <strong>Getting Started with Asmaul Husna:</strong> Begin by learning
            3-5 names per week. For each name, contemplate its meaning, recite it
            100 times, and ask Allah specific duas related to that attribute.
          </p>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700 text-center">
            <p className="font-semibold text-emerald-900 dark:text-emerald-300 mb-3">
              Start Your Asmaul Husna Journey Today
            </p>
            <Link
              href="/asmaul-husna"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Explore All 99 Names of Allah
            </Link>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="daily-schedule" className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Complete Daily Dhikr Schedule for Ramadan 2026
          </h2>
          <p>
            Follow this comprehensive daily schedule to maximize your spiritual
            growth during Ramadan:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-600 dark:bg-emerald-700 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                    Time
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                    Dhikr Practice
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    After Fajr
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    Morning Dhikr + Asmaul Husna (2-3 names)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    15 mins
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    Mid-Morning
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    Istighfar + Durood Sharif
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    10 mins
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    Noon / Zuhr
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    Quranic Remembrance + Tasbih
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    15 mins
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    Afternoon
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    "La ilaha illallah" + Personal Dua
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    10 mins
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    Before Iftar
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    "Dua al-Iftitah" + Asmaul Husna
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    15 mins
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    After Iftar
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    Evening Dhikr + Durood
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    15 mins
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    Taraweeh / Isha
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    Quran Recitation + Mindful Listening
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    30 mins
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
                    Before Sleep
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    Night Dhikr + Reflection
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">
                    10 mins
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
            Total Daily Time Commitment: ~120 minutes (2 hours). You can split
            this across the day.
          </p>
        </section>

        {/* SECTION 6 */}
        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions About Ramadan Dhikr
          </h2>

          <FAQItem
            question="How many times should I recite each dhikr daily?"
            answer="The Prophet (PBUH) recommended reciting subhanallah 33 times, alhamdulillah 33 times, and allahu akbar 34 times. However, the most important aspect is consistency and sincerity. Even if you recite fewer times with presence of heart (khushu), it is better than rushing through many repetitions."
          />

          <FAQItem
            question="Is it better to recite dhikr in Arabic or my own language?"
            answer="While the exact phrases in Arabic carry specific blessings, if you don't speak Arabic, it's acceptable to make personal duas in your own language. However, it's highly recommended to learn the correct Arabic pronunciation of these powerful phrases. Many online resources and our guides can help you with this."
          />

          <FAQItem
            question="Can I use digital tools to count my dhikr?"
            answer="Yes! In fact, using digital dhikr counters helps maintain focus on the meaning rather than counting manually. Our suite of counters (tasbih counter, istighfar counter, dhikr counter) are specifically designed to help you track your practice efficiently while maintaining spiritual focus."
          />

          <FAQItem
            question="What's the best time to recite Asmaul Husna?"
            answer="The best times are after the obligatory prayers, especially after Fajr and Maghrib. However, any time with sincerity and proper wudu (ablution) is blessed. Many scholars recommend evening time, particularly between Maghrib and Isha when the barrier between the material and spiritual worlds is thin."
          />

          <FAQItem
            question="How do I know if my dhikr is being accepted?"
            answer="Acceptance in dhikr is measured by the transformation within your heart. Look for signs like increased peace of mind, better character, reduced anger, increased patience, and a stronger connection to Allah. These are indicators that your dhikr is being accepted."
          />

          <FAQItem
            question="Should I focus more on quantity or quality of dhikr?"
            answer="Quality is paramount. The Prophet said, 'The best dhikr is that which is recited with the presence of the heart (khushu).' Even 10 minutes of sincere dhikr is better than hours of thoughtless repetition. Focus on understanding the meaning and feeling connected to Allah."
          />
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 p-8 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Make This Ramadan Your Most Spiritual Year
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Use our free digital tools to track your daily dhikr, istighfar,
            durood, and zikr practice. Stay consistent, stay focused, and
            transform your Ramadan experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/tasbih-counter"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Tasbih Counter
            </Link>
            <Link
              href="/istighfar-counter"
              className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Istighfar Counter
            </Link>
            <Link
              href="/asmaul-husna"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Asmaul Husna Guide
            </Link>
          </div>
        </section>

        {/* SCHEMA MARKUP FOR SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Best Dhikr in Ramadan 2026 | Daily Zikr Guide & Asmaul Husna",
            description:
              "Discover the best dhikr in Ramadan 2026. Learn what to recite during Ramadan, powerful zikr for spiritual growth, and daily Islamic remembrance practices.",
            author: {
              "@type": "Organization",
              name: "TasbihHub",
            },
            datePublished: "2026-03-09",
            dateModified: "2026-03-09",
            image: {
              "@type": "ImageObject",
              url: "https://tasbih.vercel.app/og-image.jpg",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://tasbih.vercel.app/ramadan-dhikr-guide",
            },
            keywords: [
              "best dhikr in ramadan",
              "what to recite in ramadan",
              "powerful zikr for ramadan",
              "ramadan dhikr guide",
              "asmaul husna",
            ],
          })}
        </script>
      </article>
    </main>
  );
}

/* FAQ Item Component */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {question}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{answer}</p>
    </div>
  );
}
