import PageShell, { TextLink } from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { sleepBlocks, sleepFaqs } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";

export const metadata = pageMetadata("/dhikr-before-sleep");

export default function BeforeSleepPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Adhkar", href: "/adhkar" }, { name: "Before Sleep" }]}>
      <header>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Dhikr Before Sleep</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Bedtime remembrance from Sahih al-Bukhari: a verse to recite in full, the close of Al-Baqarah, a counted tasbih, and one short dua as you lie down.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">What belongs to the night</h2>
        <p>Evening adhkar close the afternoon and the early night. Bedtime adhkar are said when you are actually going to sleep. They are shorter in number of phrases and heavier in recitation, because Ayat al-Kursi and the end of Al-Baqarah are read, not tapped through as single words.</p>
        <p>On the counter, a target of one means: finish the recitation, then tap once so the routine can move. It is not an invitation to repeat the verse a hundred times.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Recommended bedtime remembrance</h2>
        <AdhkarBlocks blocks={sleepBlocks} />
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Bedtime routine</h2>
        <RoutinePlayer routineId="before-sleep" />
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Related</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><TextLink href="/evening-adhkar">Evening adhkar</TextLink></li>
          <li><TextLink href="/dhikr-after-waking">What to say when you wake</TextLink></li>
          <li><TextLink href="/dhikr/ayat-al-kursi">Ayat al-Kursi</TextLink></li>
          <li><TextLink href="/tasbih-counter">Tasbih counter</TextLink></li>
        </ul>
      </section>
      <FaqList items={sleepFaqs} />
    </PageShell>
  );
}
