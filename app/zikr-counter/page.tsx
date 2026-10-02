import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import DhikrCounter from "@/components/dhikr/DhikrCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Zikr Counter – Online Islamic Remembrance Tool",
  description:
    "Free online zikr counter for Islamic remembrance. Track your dhikr easily with this simple, mobile-friendly zikr counter app. Save progress automatically.",
  openGraph: {
    title: "Free Zikr Counter – Tasbih Hub",
    description:
      "Count your daily zikr with this free online Islamic counter. Mobile-friendly, instant access, and your progress is always saved.",
    url: "https://tasbihhub.com/zikr-counter",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Free Zikr Counter – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Zikr Counter – Tasbih Hub",
    description:
      "Count your daily zikr with this free online Islamic counter. Mobile-friendly and always available.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tasbihhub.com/zikr-counter",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What exactly is zikr in Islam?",
    answer:
      "Zikr (ذِكْر) means remembrance of Allah through reciting Islamic phrases like Subhanallah, Alhamdulillah, and Allahu Akbar. It is a fundamental Islamic practice that brings Muslims closer to Allah and provides spiritual peace.",
  },
  {
    question: "How often should I do zikr?",
    answer:
      "You can do zikr anytime throughout the day. Many Muslims practice zikr after each of the five daily prayers, during morning and evening adhkar, and whenever they feel the need for spiritual connection.",
  },
  {
    question: "Does this zikr counter work without internet?",
    answer:
      "Yes! Once the page loads, this zikr counter works completely offline. You can use it anywhere without needing an active internet connection.",
  },
  {
    question: "Can I use this zikr counter for any type of Islamic remembrance?",
    answer:
      "Absolutely! This zikr counter can be used for any Islamic remembrance including SubhanAllah, Alhamdulillah, Allahu Akbar, La ilaha illallah, and any other form of dhikr you prefer.",
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900">
        <h1 className="sr-only">Free Online Zikr Counter – Simple Islamic Remembrance Tool</h1>

        <section aria-label="Zikr Counter Tool" className="py-6">
          <div className="max-w-lg mx-auto px-4">
            <DhikrCounter storageKey="zikr" initialDhikrId="subhanallah" title="Zikr Counter" />
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This free online zikr counter is designed specifically for Muslims
              who want to deepen their Islamic practice through regular remembrance of Allah.
              Zikr is one of the most rewarding acts in Islam, and this simple tool helps you
              maintain consistency and track your spiritual progress effortlessly. For more specific practices like tasbeeh or istighfar, explore our <Link href="/tasbih-counter" className="text-emerald-600 hover:underline">tasbih counter</Link> or <Link href="/istighfar-counter" className="text-emerald-600 hover:underline">istighfar counter</Link>.
            </p>

            <p>
              Whether you're reciting Subhanallah (سُبْحَانَ ٱللَّٰهِ), Alhamdulillah (ٱلْحَمْدُ لِلَّٰهِ),
              or any other Islamic remembrance, this zikr counter keeps your count safe and
              automatically saves your progress so you never lose track of your goals.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Why Zikr is Important in Islam
            </h2>

            <p>
              Zikr is the foundation of a strong Islamic practice. The Quran repeatedly
              emphasizes the importance of remembering Allah, and the Prophet Muhammad (peace be upon him)
              encouraged his followers to engage in zikr throughout the day. Regular zikr brings
              numerous benefits including inner peace, spiritual strength, and increased mindfulness of Allah.
            </p>

            <p>
              Many Islamic scholars have highlighted that zikr is one of the easiest yet most
              powerful acts of worship. With this free online zikr counter, you can make it a
              daily habit and gradually increase your commitment to Islamic remembrance.
            </p>

            <h2 className="text-2xl font-semibold">
              Benefits of Using This Zikr Counter
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Track your daily zikr with precision and consistency</li>
              <li>Completely free – no hidden charges or subscriptions</li>
              <li>Works instantly on all devices without downloading an app</li>
              <li>Automatically saves your count to continue anytime</li>
              <li>Simple, distraction-free interface for focused remembrance</li>
              <li>No data collection or privacy concerns – your zikr is private</li>
            </ul>

            <h2 className="text-2xl font-semibold">
              How to Use This Online Zikr Counter Effectively
            </h2>

            <p>
              Using this zikr counter is straightforward. Enter your zikr target (for example, 33, 99, or 100),
              and click to increment the counter with each recitation. You can use it during morning adhkar,
              evening adhkar, after salah, or whenever you have time for remembrance of Allah.
              The progress saves automatically, making it easy to continue your zikr journey.
            </p>
          </div>

          {/* FAQ */}
          <FAQ faqs={faqs} />

          {/* INTERNAL LINKS */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
              Explore Other Islamic Counters
            </h2>

            <p className="mb-4 text-gray-700 dark:text-gray-300">
              In addition to this zikr counter, we offer other specialized counters for different Islamic practices:
            </p>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/online-tasbih-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Tasbih Counter
                </Link>
                {" – "}
                <span className="text-gray-600 dark:text-gray-400">For traditional 33, 33, 34 counting</span>
              </li>
              <li>
                <Link
                  href="/tasbeeh-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Tasbeeh Counter
                </Link>
                {" – "}
                <span className="text-gray-600 dark:text-gray-400">Alternative spelling and regional preferences</span>
              </li>
              <li>
                <Link
                  href="/dhikr-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Dhikr Counter
                </Link>
                {" – "}
                <span className="text-gray-600 dark:text-gray-400">For daily morning and evening remembrance</span>
              </li>
              <li>
                <Link
                  href="/durood-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Durood Counter
                </Link>
                {" – "}
                <span className="text-gray-600 dark:text-gray-400">For sending blessings on the Prophet</span>
              </li>
              <li>
                <Link
                  href="/istighfar-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Istighfar Counter
                </Link>
                {" – "}
                <span className="text-gray-600 dark:text-gray-400">For seeking forgiveness from Allah</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}