import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import TasbihCounter from "@/components/TasbihCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Durood Counter – Free Digital Durood Sharif Tool",
  description:
    "Free online Durood counter to track your daily Durood Sharif recitations. Simple, mobile-friendly digital zikr counter with saved progress.",
  openGraph: {
    title: "Online Durood Counter – Tasbih Hub",
    description:
      "Track your daily Durood Sharif recitations with this free online digital counter. Mobile-friendly, fast, and saves your progress automatically.",
    url: "https://tasbihhub.com/durood-counter",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Online Durood Counter – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Durood Counter – Tasbih Hub",
    description:
      "Track your daily Durood Sharif recitations with this free online digital counter. Mobile-friendly and easy to use.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tasbihhub.com/durood-counter",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is an online Durood counter?",
    answer:
      "An online Durood counter is a digital tool that helps you count Durood Sharif recitations easily without using a physical tasbih.",
  },
  {
    question: "Does this Durood counter save my progress?",
    answer:
      "Yes, your Durood Sharif count is saved automatically in your browser so you can continue later without losing progress.",
  },
  {
    question: "Can I use this digital Durood counter on mobile?",
    answer:
      "Yes, the online Durood counter is fully mobile-friendly and works smoothly on all devices.",
  },
  {
    question: "Is this Durood Sharif counter free to use?",
    answer:
      "Yes, this digital Durood counter is completely free and does not require any registration.",
  },
];

export default function DuroodPage() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900">
        {/* H1 — VERY IMPORTANT FOR SEO */}
        <section className="max-w-5xl mx-auto px-4 pt-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
            Free Online Durood Counter – Digital Durood Sharif Tool
          </h1>
        </section>

        {/* TOOL — FULL WIDTH */}
        <section aria-label="Durood Counter Tool" className="mt-6">
          <TasbihCounter
            counterName="durood"
            title="Durood Counter"
            arabicText="اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ"
          />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This free online Durood counter helps you track your daily
              Durood Sharif recitations with ease. It works like a digital
              tasbih and allows you to stay consistent in sending blessings
              upon Prophet Muhammad ﷺ.
            </p>

            <p>
              Our online Durood Sharif counter is fast, lightweight, and
              mobile-friendly. Your progress is saved automatically, so you
              can continue your Durood anytime without losing your count.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Why Use an Online Durood Counter?
            </h2>

            <p>
              A digital Durood Sharif counter is useful for Muslims who want an
              easy and reliable way to keep track of Durood without carrying
              a physical tasbih. This tool works directly in your browser and
              does not require any app installation. <Link href="/blog/benefits-of-durood-sharif" className="text-emerald-600 hover:underline">Discover the profound spiritual benefits of Durood Sharif</Link> and how this beautiful practice transforms your Islamic journey.
            </p>

            <p>
              Whether you are completing a daily Durood target of 100, 313,
              or 1000 recitations, this counter helps you stay focused and
              consistent in your zikr routine.
            </p>

            <h2 className="text-2xl font-semibold">
              Features of This Digital Durood Counter
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Free and easy-to-use online Durood counter</li>
              <li>Automatically saves your Durood Sharif count</li>
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
              <li>
                <Link
                  href="/tasbih-counter"
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  Tasbih Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/istighfar-counter"
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  Istighfar Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/dhikr-counter"
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  Dhikr Counter
                </Link>
              </li>
            </ul>

            <p className="pt-4 text-emerald-700 dark:text-emerald-300 text-sm italic">
              Many Muslims combine Durood with other remembrance practices. Try our tasbih counter for daily tasbeeh or the istighfar counter for seeking forgiveness.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
