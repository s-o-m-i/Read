import Link from "next/link";
import PageShell from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { morningBlocks } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/id/dzikir-pagi", {
  alternates: {
    canonical: `${SITE_URL}/id/dzikir-pagi`,
    languages: {
      id: `${SITE_URL}/id/dzikir-pagi`,
      en: `${SITE_URL}/morning-adhkar`,
    },
  },
});

const notes: Record<string, string> = {
  "ayat-al-kursi": "Dibaca sekali. Ayat ini juga dibaca setelah salat dan sebelum tidur.",
  "al-ikhlas": "Tiga surah pendek: Al-Ikhlas, Al-Falaq, dan An-Nas, masing-masing tiga kali.",
  "sayyid-al-istighfar": "Sayyidul istighfar dibaca sekali di pagi hari, dengan tenang, bukan dihitung seratus.",
  "allahumma-bika-asbahna": "Lafal pagi memakai asbahna. Lafal petang berbeda.",
  "subhanallahi-wa-bihamdihi": "Ringan di lisan dan berat di timbangan, sebagaimana dalam Sahih Muslim.",
  hasbiyallah: "Tujuh kali. Maknanya: Allah cukup bagiku.",
};

export default function DzikirPagiPage() {
  return (
    <PageShell crumbs={[{ name: "Beranda", href: "/" }, { name: "Dzikir Pagi" }]}>
      <header>
        <p className="text-sm"><Link href="/morning-adhkar">English</Link></p>
        <h1 className="font-display mt-3 text-4xl sm:text-5xl">Dzikir Pagi</h1>
        <p className="mt-4 text-[var(--muted)]">
          Bacaan dzikir pagi dengan teks Arab, latin, arti, dan jumlah yang dilaporkan. Halaman ini untuk dibaca dan diamalkan, bukan sekadar daftar kata kunci.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Kapan dzikir pagi dibaca?</h2>
        <p>Setelah Subuh, selama pagi belum berlalu. Jika Anda terlambat, baca yang mampu Anda jaga dengan penuh perhatian. Dzikir setelah bangun tidur ada di halaman terpisah dalam bahasa Inggris, dan wirid khusus setelah salam Subuh ada di <Link href="/id/zikir-subuh">zikir Subuh</Link>.</p>
        <p>Waktu dan riwayatnya dibahas lebih rinci di <Link href="/id/dzikir-pagi-sesuai-sunnah">dzikir pagi sesuai sunnah</Link>. Halaman ini menuliskan bacaannya.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Bacaan dzikir pagi</h2>
        <AdhkarBlocks blocks={morningBlocks.map((block) => ({ ...block, note: notes[block.dhikrId] }))} />
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Mulai rutinitas pagi</h2>
        <RoutinePlayer routineId="morning-adhkar" locale="id" />
      </section>
      <section className="space-y-2">
        <h2 className="font-display text-3xl">Tautan</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><Link href="/id/tasbih-counter">Tasbih digital</Link></li>
          <li><Link href="/id/dzikir-petang">Dzikir petang</Link></li>
          <li><Link href="/id/zikir-subuh">Zikir Subuh</Link></li>
          <li><Link href="/dhikr-counter">Dhikr counter</Link></li>
        </ul>
      </section>
      <FaqList
        items={[
          { question: "Apakah dzikir pagi wajib?", answer: "Dzikir pagi adalah amalan yang dianjurkan, bukan rukun salat. Mulailah dari bacaan yang Anda mampu." },
          { question: "Apakah harus urut seperti di halaman ini?", answer: "Urutan di rutin ini disusun agar mudah diikuti. Bacaan yang diriwayatkan tetap sah jika Anda membaca yang Anda hafal, tanpa menambah jumlah yang tidak ada sumbernya." },
        ]}
      />
    </PageShell>
  );
}
