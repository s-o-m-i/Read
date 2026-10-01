import PageShell, { TextLink } from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { eveningBlocks, eveningFaqs } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/evening-adhkar", {
  alternates: {
    canonical: `${SITE_URL}/evening-adhkar`,
    languages: {
      en: `${SITE_URL}/evening-adhkar`,
      id: `${SITE_URL}/id/dzikir-petang`,
    },
  },
});

export default function EveningAdhkarPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Adhkar", href: "/adhkar" }, { name: "Evening Adhkar" }]}>
      <header>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Evening Adhkar: Evening Dhikr and Protection</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          The evening set is not the morning page with one word replaced. It uses the evening entrance dua, and it adds the refuge reported for the night.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">What changes in the evening?</h2>
        <p>After Asr, and again after Maghrib, the day is closing. The entrance supplication begins with amsayna, “we have entered the evening,” and it ends with the return to Allah rather than the resurrection wording of the morning.</p>
        <p>Ayat al-Kursi and the three short surahs are shared with the morning. The phrase A'udhu bikalimatillahit-tammat is the one Sahih Muslim places in the evening, three times, as protection from harm in what Allah has created.</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">When to recite evening adhkar</h2>
        <p>Begin after Asr. If you missed that window, the adhkar still belong to the evening after Maghrib, before you move to the separate <TextLink href="/dhikr-before-sleep">bedtime remembrances</TextLink>.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Evening adhkar to recite</h2>
        <AdhkarBlocks blocks={eveningBlocks} />
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Start the evening routine</h2>
        <RoutinePlayer routineId="evening-adhkar" />
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Related reading</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><TextLink href="/morning-adhkar">Morning adhkar</TextLink></li>
          <li><TextLink href="/dhikr-before-sleep">Dhikr before sleep</TextLink></li>
          <li><TextLink href="/dhikr-after-salah">Dhikr after salah</TextLink></li>
          <li><TextLink href="/dhikr-counter">Dhikr counter</TextLink></li>
          <li><TextLink href="/id/dzikir-petang">Dzikir petang</TextLink></li>
        </ul>
      </section>
      <FaqList items={eveningFaqs} />
    </PageShell>
  );
}
