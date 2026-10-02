import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import DhikrCounter from "@/components/dhikr/DhikrCounter";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Istighfar Counter Online (Astaghfirullah Dhikr Tool + Benefits Guide)",
  description:
    "Use this free istighfar counter to count Astaghfirullah easily. Digital tasbih that saves progress automatically. No login required.",
  openGraph: {
    title: "Istighfar Counter – Tasbih Hub",
    description:
      "Track your daily Istighfar and zikr with this free online digital counter. Mobile-friendly, fast, and saves your progress automatically.",
    url: "https://tasbihhub.com/istighfar-counter",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Online Istighfar Counter – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Istighfar Counter – Tasbih Hub",
    description:
      "Track your daily Istighfar and zikr with this free online digital counter. Mobile-friendly, fast, and saves your progress automatically.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tasbihhub.com/istighfar-counter",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is an online Istighfar counter?",
    answer:
      "An online Istighfar counter is a digital tool that helps you count Istighfar recitations directly on your phone or computer without a physical tasbih.",
  },
  {
    question: "Does this Istighfar counter save my progress?",
    answer:
      "Yes, your Istighfar count is saved automatically in your browser so you can continue later without losing progress.",
  },
  {
    question: "Can I use this digital Istighfar counter on mobile?",
    answer:
      "Yes, the online Istighfar counter is fully mobile-friendly and works on all devices.",
  },
  {
    question: "Is this Istighfar counter free to use?",
    answer:
      "Yes, this digital Istighfar counter is completely free with no registration required.",
  },
];

export default function IstighfarPage() {
  return (
    <>
   

      <main className="bg-white dark:bg-gray-900">
        <h1 className="sr-only">Free Online Istighfar Counter – Digital Zikr Tool</h1>

        <section aria-label="Istighfar Counter Tool" className="py-6">
          <div className="max-w-lg mx-auto px-4">
            <DhikrCounter storageKey="istighfar" initialDhikrId="astaghfirullah" title="Istighfar Counter" />
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-8" aria-label="Istighfar routine">
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">Istighfar routine</h2>
          <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-300">One hundred short istighfar, then Sayyid al-Istighfar once. Read the wording on <a className="text-emerald-700 underline" href="/dhikr/astaghfirullah">Astaghfirullah</a> and <a className="text-emerald-700 underline" href="/dhikr/sayyid-al-istighfar">Sayyid al-Istighfar</a>.</p>
          <RoutinePlayer routineId="istighfar" />
        </section>
           {/* HADITH SECTION */}
        <section aria-label="Hadith Inspiration" className="py-8  border-y border-amber-200 dark:border-amber-800/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-green-500">
              <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide font-semibold mb-3">
                📖 Hadith
              </p>
              
              <blockquote className="mb-4">
                <p className="text-xl text-gray-900 dark:text-white font-semibold leading-relaxed">
                  "Glad tidings to the one who finds a lot of Istighfar in his record."
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  — Sunan Ibn Majah
                </p>
              </blockquote>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  👉 That's why many people, after hearing this hadith, just start repeating:
                </p>
                <p className="text-center mt-3 text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                  Astaghfirullah… Astaghfirullah… Astaghfirullah
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THIS IMPROVES SECTION */}
        <section aria-label="Benefits of Istighfar" className="py-8  bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
               This improves:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inner Peace */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">☮️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Inner Peace
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Astaghfirullah calms the mind and brings tranquility to the soul through constant remembrance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spiritual Connection */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🕌</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Spiritual Connection
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Strengthen your bond with Allah through seeking His forgiveness and mercy daily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emotional Healing */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💚</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Emotional Healing
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Release guilt and anxiety by acknowledging mistakes and seeking Allah's unlimited forgiveness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Habit Building */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Habit Building
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Track your daily Astaghfirullah and build consistency in your spiritual practice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mindfulness */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🧠</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Mindfulness
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Increase awareness of your actions and intentions through constant self-reflection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divine Mercy */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✨</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Divine Mercy
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Open yourself to Allah's infinite mercy and the blessings that come with sincere repentance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
         

          {/* WHAT IS ISTIGHFAR SECTION */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              What is Istighfar in Islam?
            </h2>

            <p>
              Istighfar, derived from the Arabic word "Ghafara" (to forgive), is
              the act of seeking forgiveness from Allah. The most common form is
              reciting <span className="font-semibold text-gray-900 dark:text-gray-100">"Astaghfirullah"</span> (أَسْتَغْفِرُ اللَّهَ), which means "I seek forgiveness from Allah."
              It is one of the most powerful and essential invocations in Islam,
              reflecting the Muslim's constant need for divine mercy and cleansing of sins.
            </p>

            <p>
              <span className="font-semibold text-gray-900 dark:text-gray-100">The Importance of Istighfar:</span> Seeking forgiveness is not just about
              cleansing past mistakes—it's about acknowledging Allah's supremacy,
              seeking His guidance for the future, and maintaining a pure heart.
              The Prophet Muhammad ﷺ encouraged Muslims to seek forgiveness
              regularly, emphasizing that even without obvious sins, Istighfar
              keeps the soul connected to Allah's mercy.
            </p>

            <p>
              Istighfar is mentioned throughout the Quran and Hadith as a means
              of gaining blessings, protection, and spiritual purification. It's
              a practice that transcends age, status, and circumstance—something
              every Muslim can do anytime, anywhere.
            </p>
          </div>

          {/* BENEFITS OF ISTIGHFAR SECTION */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Benefits of Istighfar
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  🔄 Forgiveness and Redemption
                </h3>
                <p>
                  The primary benefit of Istighfar is seeking Allah's forgiveness
                  for sins and mistakes. Through sincere repentance and Istighfar,
                  Muslims believe that Allah erases their transgressions and grants
                  them a fresh spiritual slate.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  💚 Peace of Heart
                </h3>
                <p>
                  Istighfar brings profound inner peace by alleviating guilt,
                  anxiety, and spiritual heaviness. When you seek Allah's forgiveness,
                  the heart finds relief from the burden of wrongdoing and reconnects
                  with divine compassion. This emotional and spiritual lightness
                  improves mental well-being and life satisfaction.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  🌟 Increased Blessings and Rizq
                </h3>
                <p>
                  In Islamic teachings, seeking forgiveness is linked to Allah's
                  blessings (rizq). The Quran mentions that Istighfar opens doors
                  to provision, sustenance, and good fortune. Many Islamic scholars
                  emphasize that sincere repentance and regular Istighfar invite
                  Allah's mercy, which manifests in various blessings in life.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  🛡️ Spiritual Protection
                </h3>
                <p>
                  Regular Istighfar acts as a spiritual shield, protecting the
                  soul from the darkness of sin and negative consequences. It
                  strengthens the connection with Allah and helps maintain a
                  state of Taqwa (God-consciousness) throughout daily life.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  🌱 Personal Growth and Self-Awareness
                </h3>
                <p>
                  Through Istighfar, Muslims develop greater self-awareness about
                  their actions, intentions, and impact on others. This leads to
                  continuous self-improvement and spiritual maturity, fostering
                  positive personal growth.
                </p>
              </div>
            </div>
          </div>

          {/* HOW MANY TIMES SECTION */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How Many Times Should You Recite Istighfar?
            </h2>

            <p>
              There is no fixed minimum number for Istighfar—you can seek
              forgiveness as many times as you wish throughout the day. However,
              many Muslims follow specific practices based on Islamic traditions.
            </p>

            <p>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Daily Practice:</span> Many
              Muslims recite Istighfar 100 times daily, based on authentic
              narrations of the Prophet ﷺ seeking forgiveness regularly. This
              practice, known as "Maa'iytah" in Islamic literature, has been
              embraced across Muslim cultures for centuries.
            </p>

            <p>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Flexibility:</span> Some Muslims
              incorporate Istighfar into specific times—after prayers, during
              difficult moments, when seeking clarity, or as part of their daily
              remembrance. The key is consistency and sincerity rather than a
              specific number.
            </p>

            <p>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Quality Over Quantity:</span> While
              counting Istighfar helps maintain focus and consistency, Islamic
              scholars emphasize that sincere and heartfelt Istighfar—even if
              recited fewer times—holds greater spiritual value than rushing
              through numerous recitations mindlessly.
            </p>

            <p>
              This counter helps you track your daily Istighfar and build a
              sustainable habit of seeking Allah's forgiveness, making it easier
              to maintain consistency in your spiritual practice.
            </p>
          </div>

          {/* RELATED ISLAMIC PRACTICES SECTION */}
          <div className="border-y border-gray-200 dark:border-gray-700 py-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              🔹 Related Islamic Practices
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Istighfar works best as part of a comprehensive dhikr and spiritual
              practice. Explore these related Islamic remembrances to deepen your
              connection with Allah:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/dhikr-in-islam"
                className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📿</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      Dhikr in Islam
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                      Learn comprehensive dhikr practices and remembrance techniques.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/asmaul-husna"
                className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      Asmaul Husna
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                      Explore Allah's 99 beautiful names and their spiritual meanings.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/tasbih-counter"
                className="group p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✋</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      Tasbih Counter
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                      Use our tasbih counter for general zikr and remembrance.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-6 text-sm">
              These interconnected practices work together to strengthen your
              spiritual foundation, increase mindfulness, and deepen your
              relationship with Allah. Combining Istighfar with other forms of
              dhikr creates a holistic approach to daily remembrance.
            </p>
          </div>
 {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This free online Istighfar counter helps you track your daily
              Istighfar recitations with ease. It works like a digital counter
              for Dhikr and allows you to stay consistent in your zikr practice.
            </p>

            <p>
              Our online Istighfar counter is fast, lightweight, and
              mobile-friendly. Your progress is saved automatically, so you can
              continue anytime without losing your count.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Why Use an Online Istighfar Counter?
            </h2>

            <p>
              A digital Istighfar counter is useful for Muslims who want an easy
              and reliable way to track their Istighfar without using a physical
              tasbih. This counter works directly in your browser and requires
              no app installation. <Link href="/blog/benefits-of-istighfar" className="text-emerald-600 hover:underline">Learn more about how istighfar transforms your spiritual practice</Link> and why consistency is key.
            </p>

            <p>
              Whether you are doing daily Istighfar after salah or completing
              longer zikr sessions, this tool helps you stay focused and
              consistent. It is especially helpful for Dhikr, Tasbih, and Durood
              Sharif routines.
            </p>

            <h2 className="text-2xl font-semibold">
              Features of This Digital Istighfar Counter
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Free and easy-to-use online Istighfar counter</li>
              <li>Automatically saves your Istighfar count</li>
              <li>Mobile-friendly and works on all devices</li>
              <li>No login or registration required</li>
              <li>Works offline once loaded</li>
            </ul>
          </div>
          {/* RELATED TOOLS */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
              Other Digital Zikr Counters
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Combine istighfar with other forms of remembrance. Try our <Link href="/tasbih-counter" className="text-emerald-600 hover:underline font-semibold">tasbih counter</Link> for general zikr or the <Link href="/durood-counter" className="text-emerald-600 hover:underline font-semibold">Durood Counter</Link> for sending blessings upon the Prophet (ﷺ).
            </p>
          </div>

          {/* FAQ */}
          <FAQ faqs={faqs} />

          {/* INTERNAL LINKS */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
              Related Zikr Counters
            </h2>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/online-tasbih-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Tasbih Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/dhikr-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Dhikr Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/durood-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Durood Counter
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
