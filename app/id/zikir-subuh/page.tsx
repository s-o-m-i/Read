import Link from "next/link";
import PageShell from "@/components/content/PageShell";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/id/zikir-subuh", {
  alternates: { canonical: `${SITE_URL}/id/zikir-subuh` },
});

export default function ZikirSubuhPage() {
  return (
    <PageShell crumbs={[{ name: "Beranda", href: "/" }, { name: "Zikir Subuh" }]}>
      <h1 className="font-display text-4xl sm:text-5xl">Zikir Subuh</h1>
      <p className="text-[var(--muted)]">
        Zikir Subuh di sini berarti wirid setelah salam salat Subuh, lalu sambungannya ke dzikir pagi. Ia bukan pengganti daftar dzikir pagi yang lebih panjang.
      </p>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Setelah salam Subuh</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Astaghfirullah tiga kali.</li>
          <li>Allahumma antas-salam, sekali.</li>
          <li>Subhanallah 33, Alhamdulillah 33, Allahu Akbar 34.</li>
          <li>Kalimat tauhid sekali, lalu Ayat Kursi sekali.</li>
        </ol>
        <p>Hitungan 33-33-34 adalah salah satu bentuk yang sahih. Ada juga riwayat 33 untuk ketiganya. Rutin di bawah memakai bentuk yang genap seratus.</p>
      </section>
      <RoutinePlayer routineId="after-salah" locale="id" />
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Lanjut ke dzikir pagi</h2>
        <p>Setelah wirid salat, lanjutkan <Link href="/id/dzikir-pagi">dzikir pagi</Link>. Penjelasan waktunya ada di <Link href="/id/dzikir-pagi-sesuai-sunnah">dzikir pagi sesuai sunnah</Link>. Jika Anda hanya perlu penghitung, buka <Link href="/id/tasbih-counter">tasbih digital</Link>.</p>
      </section>
      <FaqList
        items={[
          { question: "Apakah zikir Subuh sama dengan dzikir pagi?", answer: "Tidak. Zikir Subuh pada halaman ini adalah wirid setelah salat Subuh. Dzikir pagi adalah himpunan bacaan untuk waktu pagi, yang lebih luas." },
          { question: "Apakah harus 34 kali takbir?", answer: "Itu salah satu bentuk yang diriwayatkan agar jumlahnya seratus. Bentuk 33-33-33 juga dilaporkan." },
        ]}
      />
    </PageShell>
  );
}
