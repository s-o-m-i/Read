import Link from "next/link";
import PageShell from "@/components/content/PageShell";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { ROUTINES } from "@/lib/dhikr/routines";

export const metadata = pageMetadata("/adhkar");

const cards = [
  ["/morning-adhkar", "Morning adhkar", "After Fajr, with the morning wording."],
  ["/evening-adhkar", "Evening adhkar", "After Asr and Maghrib, including the night refuge."],
  ["/dhikr-after-salah", "After salah", "Istighfar, then the post-prayer tasbih."],
  ["/dhikr-before-sleep", "Before sleep", "Ayat al-Kursi, the end of Al-Baqarah, and the sleep dua."],
  ["/dhikr-after-waking", "After waking", "The praise said as you wake."],
];

export default function AdhkarPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Adhkar" }]}>
      <header>
        <h1 className="font-display text-4xl sm:text-5xl">Daily Adhkar</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">Collections of remembrance arranged by the time you actually need them.</p>
      </header>
      <ul className="grid gap-3">
        {cards.map(([href, title, copy]) => (
          <li key={href}>
            <Link href={href} className="block rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{copy}</p>
            </Link>
          </li>
        ))}
      </ul>
      <section>
        <h2 className="font-display text-3xl">Routines</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {ROUTINES.map((routine) => (
            <li key={routine.id}><Link href={routine.href}>{routine.name}</Link></li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
