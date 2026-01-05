import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import TasbihCounter from "@/components/TasbihCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Tasbih Counter – Free Digital Tasbih Tool",
  description:
    "Free online tasbih counter to track your daily zikr and dhikr. Simple, mobile-friendly digital tasbih counter with saved progress.",
  openGraph: {
    title: "Online Tasbih Counter – Tasbih Hub",
    description:
      "Track your daily zikr and tasbih with this free online digital counter. Mobile-friendly, fast, and saves your progress automatically.",
    url: "https://tasbihhub.com/tasbih-counter",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Online Tasbih Counter – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Tasbih Counter – Tasbih Hub",
    description:
      "Track your daily zikr and tasbih with this free online digital counter. Mobile-friendly and easy to use.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tasbihhub.com/tasbih-counter",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is an online tasbih counter?",
    answer:
      "An online tasbih counter is a digital tool that helps you count zikr and dhikr recitations easily without using a physical tasbih.",
  },
  {
    question: "Does this tasbih counter save my progress?",
    answer:
      "Yes, your tasbih count is saved automatically in your browser so you can continue later without losing progress.",
  },
  {
    question: "Can I use this digital tasbih counter on mobile?",
    answer:
      "Yes, the online tasbih counter is fully mobile-friendly and works smoothly on all devices.",
  },
  {
    question: "Is this tasbih counter free to use?",
    answer:
      "Yes, this digital tasbih counter is completely free and does not require any registration.",
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900">
        {/* H1 — VERY IMPORTANT FOR SEO */}
        <section className="max-w-5xl mx-auto px-4 pt-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
            Free Online Tasbih Counter – Digital Tasbih Tool
          </h1>
        </section>

        {/* TOOL — FULL WIDTH */}
        <section aria-label="Tasbih Counter Tool" className="mt-6">
          <TasbihCounter
            counterName="tasbih"
            title="Tasbih Counter"
          />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This free online tasbih counter helps you track your daily
              zikr and dhikr with ease. It works like a digital tasbih and
              allows you to count recitations such as SubhanAllah (سُبْحَانَ ٱللَّٰهِ),
              Alhamdulillah (ٱلْحَمْدُ لِلَّٰهِ), and Allahu Akbar (ٱللَّٰهُ أَكْبَرُ).
            </p>

            <p>
              Our online tasbih counter is fast, lightweight, and
              mobile-friendly. Your progress is saved automatically, so you
              can continue your zikr anytime without losing your count.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Why Use an Online Tasbih Counter?
            </h2>

            <p>
              A digital tasbih counter is useful for Muslims who want an
              easy and reliable way to keep track of zikr without carrying
              a physical tasbih. This tool works directly in your browser and
              does not require any app installation.
            </p>

            <p>
              Whether you are doing daily tasbih after salah or completing a
              zikr target of 33, 99, or 100 counts, this counter helps you stay
              focused and consistent in your dhikr routine.
            </p>

            <h2 className="text-2xl font-semibold">
              Features of This Digital Tasbih Counter
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Free and easy-to-use online tasbih counter</li>
              <li>Automatically saves your tasbih count</li>
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
              <li>
                <Link
                  href="/dhikr-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Dhikr Counter
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
