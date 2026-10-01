import PageShell, { TextLink } from "@/components/content/PageShell";
import AdhkarBlocks from "@/components/content/AdhkarBlocks";
import FaqList from "@/components/content/FaqList";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import { wakingBlocks, wakingFaqs } from "@/lib/content/adhkar";
import { pageMetadata } from "@/lib/seo/keywordMap";

export const metadata = pageMetadata("/dhikr-after-waking");

export default function AfterWakingPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Adhkar", href: "/adhkar" }, { name: "After Waking" }]}>
      <header>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Dhikr After Waking</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          The first praise is the one reported for the moment you wake. The morning adhkar come after that, once you are up and the Fajr prayer is in view.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">What to say when you wake</h2>
        <p>Sahih al-Bukhari records Alhamdulillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur. Sleep is described, in that wording, as a state from which Allah returns you. The sentence is praise, not a request for a specific outcome.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">The waking remembrance</h2>
        <AdhkarBlocks blocks={wakingBlocks} />
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">A two-step start</h2>
        <RoutinePlayer routineId="after-waking" />
        <p>When you finish, continue with the <TextLink href="/morning-adhkar">morning adhkar</TextLink>. If you only need a counter, open the <TextLink href="/tasbih-counter">tasbih counter</TextLink> or the <TextLink href="/dhikr-counter">dhikr counter</TextLink>.</p>
      </section>
      <FaqList items={wakingFaqs} />
    </PageShell>
  );
}
