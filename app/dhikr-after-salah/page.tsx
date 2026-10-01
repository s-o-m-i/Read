import PageShell, { TextLink } from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { afterSalahBlocks, salahFaqs } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";

export const metadata = pageMetadata("/dhikr-after-salah");

export default function AfterSalahPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Dhikr", href: "/dhikr" }, { name: "Dhikr After Salah" }]}>
      <header>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Dhikr After Salah</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          What to recite when the prayer ends: forgiveness three times, the peace supplication, then SubhanAllah, Alhamdulillah, and Allahu Akbar.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">What to recite after the prayer</h2>
        <p>Sahih Muslim records that the Prophet, peace be upon him, asked Allah for forgiveness three times when he made the taslim. He then said Allahumma antas-salam. The tasbih comes after that opening, not instead of it.</p>
        <p>The guided routine below keeps the four counted steps people most often need a counter for. The other phrases are written out so you can say them once, without pretending every line is a hundred-count.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Arabic, meaning, and counts</h2>
        <AdhkarBlocks blocks={afterSalahBlocks} />
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Start after salah dhikr</h2>
        <p>Step 1 is Astaghfirullah three times. The routine will not begin the next phrase until you have finished the taps yourself.</p>
        <RoutinePlayer routineId="after-salah" />
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Keep counting</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><TextLink href="/tasbih-counter">Online tasbih counter</TextLink> for a free session.</li>
          <li><TextLink href="/dhikr-counter">Dhikr counter</TextLink> if you want to choose another phrase.</li>
          <li><TextLink href="/istighfar-counter">Istighfar counter</TextLink> for a longer forgiveness count later in the day.</li>
          <li><TextLink href="/dhikr/subhanallah">SubhanAllah</TextLink>, <TextLink href="/dhikr/alhamdulillah">Alhamdulillah</TextLink>, and <TextLink href="/dhikr/allahu-akbar">Allahu Akbar</TextLink>.</li>
          <li><TextLink href="/morning-adhkar">Morning adhkar</TextLink> after Fajr, once the post-prayer dhikr is done.</li>
        </ul>
      </section>
      <FaqList items={salahFaqs} />
    </PageShell>
  );
}
