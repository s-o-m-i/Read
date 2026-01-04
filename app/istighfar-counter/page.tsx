import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import TasbihCounter from "@/components/TasbihCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Istighfar Counter – Free Digital Zikr Tool",
  description:
    "Free online Istighfar counter to track your daily zikr, dhikr, and Istighfar. Simple, mobile-friendly digital counter with saved progress.",
  openGraph: {
    title: "Online Istighfar Counter – Tasbih Hub",
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
        {/* H1 — VERY IMPORTANT FOR SEO */}
        <section className="max-w-3xl mx-auto px-4 pt-8 text-center">
          <h1 className="text-3xl font-bold">
            Free Online Istighfar Counter – Digital Zikr Tool
          </h1>
        </section>

        {/* TOOL — FULL WIDTH */}
        <section aria-label="Istighfar Counter Tool" className="mt-6">
          <TasbihCounter 
            counterName="istighfar" 
            title="Istighfar Counter"
            arabicText="أَسْتَغْفِرُ اللَّهَ"
          />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
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
              no app installation.
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

          {/* FAQ */}
          <FAQ faqs={faqs} />

          {/* INTERNAL LINKS */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">
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
