import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import TasbihCounter from "@/components/TasbihCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhikr Counter Online – Track Daily Dhikr & Zikr (Free Tool)",
  description:
    "Free online dhikr counter to track your daily zikr and remembrance of Allah. Simple, mobile-friendly digital dhikr tool with saved progress.",
  openGraph: {
    title: "Online Dhikr Counter – Tasbih Hub",
    description:
      "Track your daily dhikr and zikr with this free online digital counter. Mobile-friendly, fast, and saves your progress automatically.",
    url: "https://tasbihhub.com/dhikr-counter",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Online Dhikr Counter – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dhikr Counter – Tasbih Hub",
    description:
      "Track your daily dhikr and zikr with this free online digital counter. Mobile-friendly and easy to use.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tasbihhub.com/dhikr-counter",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is an online dhikr counter?",
    answer:
      "An online dhikr counter is a digital tool that helps you count your zikr and remembrance of Allah easily without using a physical tasbih.",
  },
  {
    question: "Does this dhikr counter save my progress?",
    answer:
      "Yes, your dhikr count is saved automatically in your browser so you can continue later without losing progress.",
  },
  {
    question: "Can I use this digital dhikr counter on mobile?",
    answer:
      "Yes, the online dhikr counter is fully mobile-friendly and works smoothly on all devices.",
  },
  {
    question: "Is this dhikr counter free to use?",
    answer:
      "Yes, this digital dhikr counter is completely free and does not require any registration.",
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900">
        {/* H1 — VERY IMPORTANT FOR SEO */}
        <section className="max-w-5xl mx-auto px-4 pt-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
            Dhikr Zähler Online
          </h1>
          <p className="space-y-4 text-gray-700 dark:text-gray-300">Dieser Dhikr Zähler hilft Ihnen, Dhikr online zu zählen – kostenlos und ohne Anmeldung.
</p>
        </section>

        {/* TOOL — FULL WIDTH */}
        <section aria-label="Dhikr Counter Tool" className="mt-6">
          <TasbihCounter
            counterName="dhikr"
            title="Dhikr Counter"
            // arabicText="ٱلْحَمْدُ لِلَّٰهِ"
          />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This free online dhikr counter helps you track your daily
              remembrance of Allah with ease. It works like a digital tasbih and
              allows you to count recitations such as Alhamdulillah (ٱلْحَمْدُ لِلَّٰهِ),
              SubhanAllah (سُبْحَانَ ٱللَّٰهِ), Allahu Akbar (ٱللَّٰهُ أَكْبَرُ), and other dhikr.
            </p>

            <p>
              Our online dhikr counter is fast, lightweight, and
              mobile-friendly. Your progress is saved automatically, so you
              can continue your dhikr anytime without losing your count.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Why Use an Online Dhikr Counter?
            </h2>

            <p>
              A digital dhikr counter is useful for Muslims who want an
              easy and reliable way to keep track of their daily remembrance of Allah
              without carrying a physical tasbih. This tool works directly in your browser and
              does not require any app installation.
            </p>

            <p>
              Whether you are doing dhikr after salah, morning and evening adhkar,
              or completing a zikr target of 33, 99, or 100 counts, this counter helps you stay
              focused and consistent in your dhikr routine.
            </p>

            <h2 className="text-2xl font-semibold">
              Features of This Digital Dhikr Counter
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Free and easy-to-use online dhikr counter</li>
              <li>Automatically saves your dhikr count</li>
              <li>Mobile-friendly and works on all devices</li>
              <li>No login or registration required</li>
              <li>Works offline once loaded</li>
            </ul>
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
                  href="/tasbeeh-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Tasbeeh Counter
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
              <li>
                <Link
                  href="/istighfar-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Istighfar Counter
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
