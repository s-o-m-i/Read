import Link from "next/link";
import PageShell from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { eveningBlocks } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/id/dzikir-petang", {
  alternates: {
    canonical: `${SITE_URL}/id/dzikir-petang`,
    languages: {
      id: `${SITE_URL}/id/dzikir-petang`,
      en: `${SITE_URL}/evening-adhkar`,
    },
  },
});

export default function DzikirPetangPage() {
  return (
    <PageShell crumbs={[{ name: "Beranda", href: "/" }, { name: "Dzikir Petang" }]}>
      <header>
        <p className="text-sm"><Link href="/evening-adhkar">English</Link></p>
        <h1 className="font-display mt-3 text-4xl sm:text-5xl">Dzikir Petang</h1>
        <p className="mt-4 text-[var(--muted)]">
          Dzikir petang dimulai setelah Ashar dan masih sesuai setelah Maghrib. Lafalnya tidak sama dengan dzikir pagi: doa masuk waktu memakai amsayna, dan perlindungan malam memakai ta'awudz yang diriwayatkan di Sahih Muslim.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Kapan dibaca?</h2>
        <p>Setelah Ashar hingga masuknya malam. Bacaan sebelum tidur — Ayat Kursi saat berbaring, akhir Al-Baqarah, dan doa tidur — adalah amalan lain. Jangan mencampurnya menjadi satu daftar lalu menyebut semuanya dzikir petang.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Bacaan dzikir petang</h2>
        <AdhkarBlocks blocks={eveningBlocks} />
      </section>
      <RoutinePlayer routineId="evening-adhkar" locale="id" />
      <ul className="list-disc space-y-2 pl-5">
        <li><Link href="/id/dzikir-pagi">Dzikir pagi</Link></li>
        <li><Link href="/id/tasbih-counter">Tasbih digital</Link></li>
        <li><Link href="/dhikr-before-sleep">Dzikir sebelum tidur</Link></li>
      </ul>
      <FaqList
        items={[
          { question: "Mengapa ada bacaan perlindungan yang tidak ada di pagi hari?", answer: "A'udzu bikalimatillahit-tammat diriwayatkan untuk petang, tiga kali, sebagai perlindungan dari kejahatan makhluk." },
          { question: "Apakah tiga surah pendek juga dibaca petang?", answer: "Ya. Al-Ikhlas, Al-Falaq, dan An-Nas juga dilaporkan untuk petang, masing-masing tiga kali." },
        ]}
      />
    </PageShell>
  );
}
