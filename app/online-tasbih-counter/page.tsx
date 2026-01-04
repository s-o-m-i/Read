import TasbihCounter from "@/components/TasbihCounter";
import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import Head from "next/head"; // <-- import Head

export const metadata = {
  title: "Online Tasbih Counter – Free Digital Zikr Counter",
  description:
    "Free online tasbih counter to track your daily zikr, dhikr, and tasbeeh. Simple, fast, mobile-friendly digital tasbih with saved progress.",
};

const faqs: FAQItem[] = [
  {
    question: "What is an online tasbih counter?",
    answer:
      "An online tasbih counter is a digital tool that helps you count zikr and tasbeeh directly on your phone or computer without a physical tasbih.",
  },
  {
    question: "Does this tasbih counter save my progress?",
    answer:
      "Yes, your zikr count is saved automatically in your browser so you can continue later without losing progress.",
  },
  {
    question: "Can I use this digital tasbih counter on mobile?",
    answer:
      "Yes, the online tasbih counter is fully mobile-friendly and works on all devices.",
  },
  {
    question: "Is this tasbih counter free to use?",
    answer:
      "Yes, this digital tasbih counter is completely free with no registration required.",
  },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="canonical"
          href="https://tasbihhub.com/online-tasbih-counter"
        />
      </Head>

      <main className="bg-white dark:bg-gray-900">
        {/* H1 FIRST — VERY IMPORTANT FOR SEO */}
        <section className="max-w-3xl mx-auto px-4 pt-8 text-center">
          <h1 className="text-3xl font-bold">
            Free Online Tasbih Counter – Digital Zikr Tool
          </h1>
        </section>

        {/* TOOL — FULL WIDTH, NOT CONSTRAINED */}
        <section aria-label="Tasbih Counter Tool" className="mt-6">
          <TasbihCounter counterName="tasbih" title="Tasbih Counter" />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This free online tasbih counter helps you track your daily zikr,
              dhikr, and tasbeeh with ease. It works like a digital tasbih and
              allows you to count recitations such as SubhanAllah,
              Alhamdulillah, Allahu Akbar, Durood, and Istighfar.
            </p>

            <p>
              Our online zikr counter is fast, lightweight, and mobile-friendly.
              Your progress is saved automatically, so you can continue your
              zikr anytime without losing your count.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Why Use an Online Tasbih Counter?
            </h2>

            <p>
              A digital tasbih counter is useful for Muslims who want an easy
              and reliable way to keep track of zikr without carrying a physical
              tasbeeh. This online tasbih counter works directly in your browser
              and does not require any app installation.
            </p>

            <p>
              Whether you are doing daily tasbeeh after salah or completing a
              zikr target of 33, 99, or 100 counts, this tool helps you stay
              focused and consistent. It is especially helpful for long zikr
              sessions such as Istighfar, Durood Sharif, and daily dhikr
              routines.
            </p>

            <h2 className="text-2xl font-semibold">
              Features of This Digital Tasbih Counter
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Free and easy-to-use online tasbih counter</li>
              <li>Automatically saves your zikr count</li>
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
