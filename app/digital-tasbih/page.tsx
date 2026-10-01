import { Suspense } from "react";
import PageShell, { TextLink } from "@/components/content/PageShell";
import CounterSlot from "@/components/dhikr/CounterSlot";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/digital-tasbih");

export default function DigitalTasbihPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Digital Tasbih" }]}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Digital Tasbih",
          url: `${SITE_URL}/digital-tasbih`,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "A digital tasbih that runs in the browser.",
        }}
      />
      <header>
        <h1 className="font-display text-4xl sm:text-5xl">Digital Tasbih for Daily Dhikr</h1>
        <p className="mt-4 text-[var(--muted)]">
          A digital tasbih is a counter in place of beads. It does not change the words. It keeps the number while you say SubhanAllah, Alhamdulillah, Allahu Akbar, or any other phrase you have chosen.
        </p>
      </header>
      <Suspense fallback={<div className="h-[560px] rounded-[28px] bg-[var(--bg-elevated)]" />}>
        <CounterSlot storageKey="digital" initialDhikrId="subhanallah" title="Digital Tasbih" />
      </Suspense>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">How it differs from a bead tasbih</h2>
        <p>Beads give you a physical stop every 33. A digital tasbih gives you a target, a progress mark, and a count that is still there if you lock the phone. People who travel, or who miscount when they are tired, often use both: fingers or beads when they can, and a counter when they cannot.</p>
        <p>The <TextLink href="/tasbih-counter">online tasbih counter</TextLink> is the dedicated tool page. This page is for the question behind it: what a digital tasbih is for, and when it helps.</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">When people open it</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>After salah, for the 33 and 34. Start from <TextLink href="/dhikr-after-salah">dhikr after salah</TextLink>.</li>
          <li>A hundred istighfar during the day, on the <TextLink href="/istighfar-counter">istighfar counter</TextLink>.</li>
          <li>Salawat, on the <TextLink href="/durood-counter">durood counter</TextLink>.</li>
        </ul>
      </section>
      <FaqList
        items={[
          {
            question: "Does a digital tasbih need an app?",
            answer: "No. This one runs in the browser. Add the site to your home screen if you want an icon.",
          },
          {
            question: "Is the count uploaded?",
            answer: "No. It is stored locally on this device. It does not sync to another phone or computer.",
          },
        ]}
      />
    </PageShell>
  );
}
