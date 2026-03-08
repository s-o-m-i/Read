import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import TasbihCounterCompact from "@/components/TasbihCounterCompact";
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
    languages: {
      "en": "https://tasbihhub.com/tasbih-counter",
      "id": "https://tasbihhub.com/id/tasbih-counter",
          "x-default": "https://tasbihhub.com/tasbih-counter",

    }
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
        {/* Language Switcher */}
        <div className="max-w-5xl mx-auto px-4 pt-4 text-right">
          <div className="lang-switcher text-sm">
            <a href="/tasbih-counter" className="text-emerald-600 hover:underline font-semibold">EN</a> |{" "}
            <a href="/id/tasbih-counter" className="text-emerald-600 hover:underline">ID</a>
          </div>
        </div>

        {/* H1 — VERY IMPORTANT FOR SEO */}
        <section className="max-w-5xl mx-auto px-4 pt-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
            Free Online Tasbih Counter – Digital Tasbih Tool
          </h1>
        </section>

        {/* TOOL — CENTERED & ELEGANT */}
        <section aria-label="Tasbih Counter Tool" className="py-8">
          <div className="max-w-md mx-auto px-4">
            <TasbihCounterCompact
              counterName="tasbih"
              title="Tasbih Counter"
            />
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The online tasbih counter on Tasbih Hub is a free digital tasbih designed to help you track your daily zikr and dhikr easily. Whether you are reciting SubhanAllah, Alhamdulillah, Allahu Akbar, or any other zikr, this tool allows you to count accurately without using a physical tasbih.
            </p>

            <p>
              This tasbih digital online free tool works directly in your browser. There is no app to install, no account required, and no distractions. Simply open the page and start your zikr.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              What Is a Digital Tasbih Counter?
            </h2>

            <p>
              A digital tasbih counter is an online version of a traditional tasbih (misbaha). Instead of beads, you tap the screen to increase your count. This makes it ideal for people who prefer a simple, lightweight, and modern tasbih counter online.
            </p>

            <p>
              Many Muslims use an online tasbih counter for:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Daily zikr after salah</li>
              <li>Completing 33, 99, or 100 tasbih counts</li>
              <li>Tracking long dhikr sessions</li>
              <li>Zikr while traveling or at work</li>
            </ul>

            <h2 className="text-2xl font-semibold">
              Why Use an Online Tasbih Counter?
            </h2>

            <p>
              Using an online tasbih counter has several advantages over a physical tasbih:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>You don't need to carry beads everywhere</li>
              <li>Your tasbih count is saved automatically</li>
              <li>You can continue later without losing progress</li>
              <li>Works on mobile, tablet, and desktop</li>
              <li>No cost — completely free</li>
            </ul>

            <p>
              This makes a tasbih counter online free especially helpful for people who want consistency in their zikr without extra effort.
            </p>

            <h2 className="text-2xl font-semibold">
              Key Features of Tasbih Hub's Digital Tasbih
            </h2>

            <p>
              Our online tasbih counter is built to be simple and reliable:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Free digital tasbih with unlimited use</li>
              <li>Automatically saves your zikr count</li>
              <li>Mobile-friendly and fast</li>
              <li>No login or registration required</li>
              <li>Works offline once the page is loaded</li>
            </ul>

            <p>
              Unlike many apps, this tasbih digital online free tool focuses only on zikr — no ads, no distractions, and no unnecessary features.
            </p>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-700 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Expand Your Practice:</strong> Our tasbih counter works perfectly with other forms of remembrance. Try our <Link href="/istighfar-counter" className="text-emerald-600 hover:underline font-semibold">istighfar counter</Link> for seeking forgiveness, or the <Link href="/durood-counter" className="text-emerald-600 hover:underline font-semibold">Durood Counter</Link> for sending blessings upon the Prophet (ﷺ).</p>
            </div>

            <h2 className="text-2xl font-semibold">
              How to Use the Online Tasbih Counter
            </h2>

            <p>
              Using the digital tasbih counter is very simple:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Open the tasbih counter page</li>
              <li>Choose your zikr (optional)</li>
              <li>Tap the counter each time you recite</li>
              <li>Your count increases automatically</li>
              <li>Close and return anytime — your progress is saved</li>
            </ol>

            <p>
              This makes it ideal for both short and long dhikr sessions.
            </p>

            <h2 className="text-2xl font-semibold">
              Who Is This Tasbih Counter For?
            </h2>

            <p>
              This online tasbih counter is useful for:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Muslims doing daily zikr</li>
              <li>Students learning tasbih habits</li>
              <li>Elderly users who want a large, simple counter</li>
              <li>Anyone looking for a tasbih digital online free alternative</li>
            </ul>

            <p>
              Whether you are new to zikr or already consistent, this tool helps you stay focused. To learn more about the spiritual benefits of zikr and how it transforms your life, <Link href="/blog/benefits-of-istighfar" className="text-emerald-600 hover:underline">explore our articles on Islamic remembrance</Link>.
            </p>

            <h2 className="text-2xl font-semibold">
              Online Tasbih vs Physical Tasbih
            </h2>

            <p>
              Both are valid and beneficial. A physical tasbih offers a traditional feel, while a digital tasbih counter online offers convenience.
            </p>

            <p>
              Many people use:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Physical tasbih at home or masjid</li>
              <li>Online tasbih counter when traveling or working</li>
            </ul>

            <p>
              This tool is meant to support your ibadah, not replace intention or sincerity.
            </p>
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
                  href="/durood-counter"
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  Durood Counter
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
              <li>
                <Link
                  href="/zikr-counter"
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  Zikr Counter
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
