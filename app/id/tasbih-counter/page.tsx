import Link from "next/link";
import FAQ, { FAQItem } from "@/components/FAQ";
import DhikrCounter from "@/components/dhikr/DhikrCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasbih Digital Online Gratis – Counter Dzikir Tanpa Aplikasi",
  description:
    "Tasbih digital online gratis untuk dzikir harian. Tanpa aplikasi, tanpa login, tanpa gangguan. Gunakan langsung dan fokus pada dzikir.",
  openGraph: {
    title: "Tasbih Digital Online Gratis – Counter Dzikir Sederhana",
    description:
      "Gunakan tasbih digital online gratis untuk menghitung dzikir dengan tenang dan fokus. Tidak perlu aplikasi, tidak perlu daftar.",
    url: "https://tasbihhub.com/id/tasbih-counter",
    type: "website",
    siteName: "TasbihHub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        alt: "Tasbih Digital Online Gratis untuk Dzikir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasbih Digital Online Gratis – Dzikir Tanpa Aplikasi",
    description:
      "Counter tasbih digital online gratis. Sederhana, cepat, dan membantu Anda konsisten dalam dzikir.",
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
  question: "Apa itu tasbih digital online?",
  answer:
    "Tasbih digital online adalah alat berbasis web yang membantu menghitung dzikir tanpa menggunakan tasbih fisik atau aplikasi tambahan.",
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
  {
  question: "Apakah aman menggunakan tasbih digital ini?",
  answer:
    "Ya. Tasbih digital ini berjalan langsung di browser Anda dan tidak mengumpulkan data pribadi atau akun pengguna."
}

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
            Counter dzikir sederhana untuk membantu Anda berdzikir dengan fokus.
  Tanpa aplikasi. Tanpa login. Langsung digunakan.

          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/id/dzikir-pagi" className="underline">Dzikir pagi</Link>
            {" · "}
            <Link href="/id/dzikir-pagi-sesuai-sunnah" className="underline">Dzikir pagi sesuai sunnah</Link>
            {" · "}
            <Link href="/id/dzikir-petang" className="underline">Dzikir petang</Link>
            {" · "}
            <Link href="/id/zikir-subuh" className="underline">Zikir Subuh</Link>
          </p>
        </section>

        {/* TOOL — FULL WIDTH */}
        <section aria-label="Alat Tasbih Counter" className="mt-6">
          <DhikrCounter storageKey="tasbih" initialDhikrId="subhanallah" title="Tasbih Digital" />
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-semibold">
  Apakah Tasbih Digital Diperbolehkan?
</h2>

<p>
  Banyak ulama membolehkan penggunaan alat bantu untuk menghitung dzikir
  selama niatnya ikhlas dan bukan untuk pamer. Menggunakan jari memang
  lebih utama, namun tasbih fisik maupun digital dibolehkan sebagai sarana
  membantu fokus dan konsistensi.
</p>

<p>
  Allah menilai niat dan kehadiran hati, bukan alat yang digunakan.
</p>

          {/* INTRO */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
         <p>
  Tasbih digital online gratis ini dapat digunakan sebagai counter dzikir online tanpa aplikasi, langsung melalui browser Anda.
</p>

<p>
  Tasbih digital online gratis ini membantu Anda menghitung dzikir harian
  seperti Subḥānallāh, Alḥamdulillāh, dan Allāhu Akbar tanpa harus membawa
  tasbih fisik atau menginstal aplikasi tambahan.
  
</p>

<p>
  Alat ini dibuat untuk kesederhanaan dan ketenangan. Tidak ada akun,
  tidak ada iklan mengganggu, dan tidak ada unsur pamer. Hitungan Anda
  tersimpan otomatis di perangkat Anda, sehingga Anda bisa melanjutkan
  dzikir kapan saja.
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

<ul className="list-disc pl-6 space-y-2">
  <li>Gratis dan langsung digunakan di browser</li>
  <li>Tidak perlu aplikasi atau pendaftaran</li>
  <li>Menyimpan hitungan dzikir secara otomatis</li>
  <li>Ramah mobile dan ringan</li>
  <li>Membantu fokus tanpa distraksi</li>
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
