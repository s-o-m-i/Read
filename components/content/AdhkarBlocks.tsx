import Link from "next/link";
import type { AdhkarBlock } from "@/lib/dhikr/types";

export default function AdhkarBlocks({ blocks }: { blocks: AdhkarBlock[] }) {
  return (
    <ol className="space-y-5">
      {blocks.map((block) => (
        <li key={block.heading} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
          <h3 className="font-display text-2xl">{block.heading}</h3>
          <p className="font-arabic mt-3 text-3xl leading-relaxed text-[var(--green)] dark:text-[var(--gold)]" dir="rtl" lang="ar">{block.arabic}</p>
          <p className="mt-3">{block.transliteration}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{block.meaning}</p>
          <p className="mt-3 text-sm">Count: {block.countLabel}</p>
          <p className="text-sm text-[var(--muted)]">{block.source}</p>
          {block.note && <p className="mt-2 text-sm">{block.note}</p>}
          <Link href={`/dhikr-counter?dhikr=${block.dhikrId}`} className="mt-4 inline-flex rounded-full bg-[var(--green)] px-4 py-2 text-sm text-[#f7f3ea] dark:text-[#14241c]">
            Count this dhikr
          </Link>
        </li>
      ))}
    </ol>
  );
}
