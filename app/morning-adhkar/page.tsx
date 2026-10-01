import Link from "next/link";
import PageShell, { TextLink } from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { morningBlocks, morningFaqs } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/morning-adhkar", {
  alternates: {
    canonical: `${SITE_URL}/morning-adhkar`,
    languages: {
      en: `${SITE_URL}/morning-adhkar`,
      id: `${SITE_URL}/id/dzikir-pagi`,
    },
  },
});

export default function MorningAdhkarPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Adhkar", href: "/adhkar" }, { name: "Morning Adhkar" }]}>
      <header>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Morning Adhkar: Complete Morning Dhikr & Duas</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          A morning reading drawn from the adhkar in Bukhari, Muslim, Abu Dawud, and Tirmidhi. Each phrase is given in Arabic, transliteration, and English, with the count that belongs to it.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">What are morning adhkar?</h2>
        <p>Morning adhkar are the remembrances and short supplications taught for the start of the day. They are not one long prayer. They are a set: a verse, three short surahs, a plea for forgiveness, and a few repeated phrases.</p>
        <p>Tasbih Hub keeps the morning wording separate from the evening. Where the Arabic changes — asbahna in the morning, amsayna in the evening — the page says so.</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">When should they be recited?</h2>
        <p>The usual time is after Fajr, while the morning is still morning. If the day has already moved on, recite what you can with attention rather than treating the set as lost. The <TextLink href="/dhikr-after-waking">waking dua</TextLink> is said as you wake. This page is the wider set that follows.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Complete morning adhkar</h2>
        <AdhkarBlocks blocks={morningBlocks} />
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Start the morning routine</h2>
        <p>The routine waits for your tap. Reaching a target moves you to the next phrase. It does not count that next phrase for you.</p>
        <RoutinePlayer routineId="morning-adhkar" />
        <p>
          <Link href="/morning-adhkar#routine" className="sr-only">Morning routine</Link>
          Prefer a free count instead? Use the <TextLink href="/dhikr-counter">dhikr counter</TextLink> or the <TextLink href="/tasbih-counter">tasbih counter</TextLink>.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Related dhikr</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><TextLink href="/evening-adhkar">Evening adhkar</TextLink> for the night wording.</li>
          <li><TextLink href="/dhikr-after-salah">Dhikr after salah</TextLink>, including the tasbih after Fajr.</li>
          <li><TextLink href="/dhikr/sayyid-al-istighfar">Sayyid al-Istighfar</TextLink></li>
          <li><TextLink href="/dhikr/ayat-al-kursi">Ayat al-Kursi</TextLink></li>
          <li><TextLink href="/dhikr">The dhikr library</TextLink></li>
          <li><TextLink href="/id/dzikir-pagi">Dzikir pagi in Indonesian</TextLink></li>
        </ul>
      </section>
      <FaqList items={morningFaqs} />
    </PageShell>
  );
}
