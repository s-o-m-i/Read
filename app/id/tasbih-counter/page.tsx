import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import TasbihCounter from "@/components/TasbihCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasbih Digital Online Gratis | TasbihHub",
  description:
    "Gunakan tasbih digital online gratis untuk menghitung dzikir harian dengan mudah. Tasbih counter ramah mobile dengan penyimpanan otomatis.",
  openGraph: {
    title: "Tasbih Digital Online Gratis – Tasbih Hub",
    description:
      "Hitung dzikir dan tasbih harian Anda dengan mudah menggunakan counter digital gratis ini. Ramah mobile, cepat, dan menyimpan progres secara otomatis.",
    url: "https://tasbihhub.com/id/tasbih-counter",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Tasbih Digital Online Gratis – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasbih Digital Online Gratis – Tasbih Hub",
    description:
      "Hitung dzikir dan tasbih harian Anda dengan mudah menggunakan counter digital gratis ini. Ramah mobile dan mudah digunakan.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tasbihhub.com/id/tasbih-counter",
    languages: {
      id: "https://tasbihhub.com/id/tasbih-counter",
      en: "https://tasbihhub.com/tasbih-counter",
      "x-default": "https://tasbihhub.com/tasbih-counter",
    },
  },
};

const faqs: FAQItem[] = [
  {
    question: "Apa itu tasbih counter online?",
    answer:
      "Tasbih counter online adalah alat digital yang membantu Anda menghitung dzikir dan zikir dengan mudah tanpa menggunakan tasbih fisik.",
  },
  {
    question: "Apakah tasbih counter ini menyimpan progres saya?",
    answer:
      "Ya, hitungan tasbih Anda disimpan secara otomatis di browser Anda sehingga Anda dapat melanjutkan nanti tanpa kehilangan progres.",
  },
  {
    question: "Bisakah saya menggunakan tasbih digital ini di ponsel?",
    answer:
      "Ya, tasbih counter online ini sepenuhnya ramah mobile dan berfungsi lancar di semua perangkat.",
  },
  {
    question: "Apakah tasbih counter ini gratis digunakan?",
    answer:
      "Ya, tasbih counter digital ini sepenuhnya gratis dan tidak memerlukan pendaftaran apapun.",
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900">
        {/* Language Switcher */}
        <div className="max-w-5xl mx-auto px-4 pt-4 text-right">
          <div className="lang-switcher text-sm">
            <Link
              href="/tasbih-counter"
              className="text-emerald-600 hover:underline"
            >
              EN
            </Link>{" "}
            |{" "}
            <Link
              href="/id/tasbih-counter"
              className="text-emerald-600 hover:underline font-semibold"
            >
              ID
            </Link>
          </div>
        </div>

        {/* H1 — VERY IMPORTANT FOR SEO */}
        <section className="max-w-5xl mx-auto px-4 pt-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
            Tasbih Digital Online Gratis
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Gunakan tasbih digital untuk menghitung dzikir harian dengan mudah.
          </p>
        </section>

        {/* TOOL — FULL WIDTH */}
        <section aria-label="Alat Tasbih Counter" className="mt-6">
          <TasbihCounter counterName="tasbih" title="Tasbih Counter" />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Tasbih counter online gratis ini membantu Anda menghitung dzikir
              dan zikir harian dengan mudah. Alat ini bekerja seperti tasbih
              digital dan memungkinkan Anda menghitung bacaan seperti
              SubhanAllah (سُبْحَانَ ٱللَّٰهِ), Alhamdulillah (ٱلْحَمْدُ
              لِلَّٰهِ), dan Allahu Akbar (ٱللَّٰهُ أَكْبَرُ).
            </p>

            <p>
              Tasbih counter online kami cepat, ringan, dan ramah mobile.
              Progres Anda disimpan secara otomatis, sehingga Anda dapat
              melanjutkan dzikir kapan saja tanpa kehilangan hitungan.
            </p>
          </div>

          {/* SEO BLOCK */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">
              Mengapa Menggunakan Tasbih Counter Online?
            </h2>

            <p>
              Tasbih counter digital berguna bagi umat Muslim yang menginginkan
              cara mudah dan terpercaya untuk melacak dzikir tanpa membawa
              tasbih fisik. Alat ini bekerja langsung di browser Anda dan tidak
              memerlukan instalasi aplikasi apapun.
            </p>

            <p>
              Baik Anda melakukan tasbih harian setelah shalat atau
              menyelesaikan target dzikir 33, 99, atau 100 hitungan, counter ini
              membantu Anda tetap fokus dan konsisten dalam rutinitas dzikir
              Anda.
            </p>

            <h2 className="text-2xl font-semibold">
              Fitur Tasbih Counter Digital Ini
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Tasbih counter online gratis dan mudah digunakan</li>
              <li>Menyimpan hitungan tasbih Anda secara otomatis</li>
              <li>Ramah mobile dan berfungsi di semua perangkat</li>
              <li>Tidak perlu login atau pendaftaran</li>
              <li>Berfungsi offline setelah dimuat</li>
            </ul>
          </div>

          {/* FAQ */}
          <FAQ faqs={faqs} />

          {/* INTERNAL LINKS */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">
              Counter Dzikir Terkait
            </h2>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/id/durood-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Durood Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/id/istighfar-counter"
                  className="text-emerald-600 font-semibold"
                >
                  Istighfar Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/id/dhikr-counter"
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
