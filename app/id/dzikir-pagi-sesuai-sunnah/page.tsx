import Link from "next/link";
import PageShell from "@/components/content/PageShell";
import FaqList from "@/components/content/FaqList";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/id/dzikir-pagi-sesuai-sunnah", {
  alternates: { canonical: `${SITE_URL}/id/dzikir-pagi-sesuai-sunnah` },
});

export default function DzikirPagiSunnahPage() {
  return (
    <PageShell crumbs={[{ name: "Beranda", href: "/" }, { name: "Dzikir Pagi", href: "/id/dzikir-pagi" }, { name: "Sesuai Sunnah" }]}>
      <h1 className="font-display text-4xl sm:text-5xl">Dzikir Pagi Sesuai Sunnah</h1>
      <p className="text-[var(--muted)]">
        Halaman ini membahas waktu dan bentuk bacaan, bukan mengulang seluruh daftar. Teks lengkapnya ada di <Link href="/id/dzikir-pagi">dzikir pagi</Link>.
      </p>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Waktu yang dilaporkan</h2>
        <p>Dzikir pagi dibaca setelah fajar, biasanya setelah salat Subuh, sebelum waktu pagi berakhir. Ia berbeda dari doa saat baru terbangun, dan berbeda dari wirid yang diucapkan tepat setelah salam.</p>
        <p>Jika matahari sudah tinggi, jangan mengarang ganti bacaan. Baca yang masih Anda mampu dari daftar yang ada sumbernya, lalu lanjutkan aktivitas.</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Bacaan yang diriwayatkan</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Ayat Kursi sekali. Sumbernya Al-Baqarah 255, dan ia juga disebut dalam amalan pagi.</li>
          <li>Al-Ikhlas, Al-Falaq, dan An-Nas, masing-masing tiga kali. Diriwayatkan untuk pagi dan petang.</li>
          <li>Sayyidul istighfar sekali. Haditsnya dalam Sahih al-Bukhari, dari Syaddad bin Aus.</li>
          <li>Allahumma bika asbahna untuk pagi. Petang memakai amsayna, lalu ditutup dengan al-mashir, bukan an-nusyur.</li>
          <li>Subhanallahi wa bihamdihi seratus kali. Sahih Muslim menyebutnya ringan di lisan dan berat di timbangan.</li>
        </ul>
        <p>Jangan menambahkan janji duniawi yang tidak ada di riwayat. Pahala yang disebut dalam hadits cukup disampaikan sebagaimana lafalnya, tanpa diperluas menjadi jaminan rezeki atau sembuh.</p>
      </section>
      <p>
        Setelah Subuh, mulai dari <Link href="/id/zikir-subuh">zikir Subuh</Link>, lalu lanjutkan daftar di <Link href="/id/dzikir-pagi">halaman bacaan</Link>. Counter ada di <Link href="/id/tasbih-counter">tasbih digital</Link>.
      </p>
      <FaqList
        items={[
          { question: "Apakah dzikir pagi harus setelah Subuh?", answer: "Waktu yang biasa diamalkan adalah setelah Subuh. Jika Anda baru bisa setelah itu, tetap di pagi hari, baca yang mampu." },
          { question: "Apakah lafal pagi dan petang sama?", answer: "Tidak semuanya. Lafal masuk waktu dan perlindungan petang berbeda. Jangan menyalin halaman pagi lalu hanya mengganti kata pagi." },
        ]}
      />
    </PageShell>
  );
}
