import Link from "next/link";
import PageShell from "@/components/content/PageShell";
import { GUIDES } from "@/lib/content/guides";

export const metadata = {
  title: "Dhikr Guides | Tasbih Hub",
  description: "Guides on daily dhikr, Ramadan remembrance, and Laylatul Qadr, with links into the counters and routines.",
  alternates: { canonical: "https://tasbihhub.com/guides" },
};

const existing = [
  ["/dhikr-in-islam", "Dhikr in Islam", "Meaning, types, and a daily practice outline."],
  ["/ramadan-dhikr-guide", "Ramadan dhikr", "What to recite through the month."],
  ["/laylatul-qadr-dua-dhikr", "Laylatul Qadr", "Duas and dhikr for the last ten nights."],
  ["/morning-adhkar", "Morning adhkar", "A pillar page with a routine."],
  ["/dhikr-after-salah", "After salah", "The post-prayer count, with sources."],
];

export default function GuidesPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Guides" }]}>
      <h1 className="font-display text-4xl sm:text-5xl">Guides</h1>
      <p className="text-[var(--muted)]">Longer reading, kept at the original addresses so existing links still resolve.</p>
      <ul className="space-y-3">
        {GUIDES.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}`} className="block rounded-2xl border border-[var(--line)] p-4">
              <h2 className="text-xl font-semibold">{guide.title}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{guide.description}</p>
            </Link>
          </li>
        ))}
        {existing.map(([href, title, copy]) => (
          <li key={href}>
            <Link href={href} className="block rounded-2xl border border-[var(--line)] p-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{copy}</p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
