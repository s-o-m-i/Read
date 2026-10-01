"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORY_LABELS, DHIKR_CATALOG } from "@/lib/dhikr/catalog";
import type { DhikrCategory } from "@/lib/dhikr/types";

const FILTERS: Array<DhikrCategory | "all"> = [
  "all",
  "general",
  "morning",
  "evening",
  "after-salah",
  "before-sleep",
  "after-waking",
  "istighfar",
  "salawat",
  "quranic",
];

export default function DhikrLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DhikrCategory | "all">("all");
  const items = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return DHIKR_CATALOG.filter((item) => {
      const inCategory = category === "all" || item.categories.includes(category);
      if (!inCategory) return false;
      if (!needle) return true;
      return [item.transliteration, item.translation, item.arabic, item.source].join(" ").toLowerCase().includes(needle);
    });
  }, [query, category]);

  return (
    <div>
      <label className="block">
        <span className="sr-only">Search dhikr</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Arabic, meaning, or transliteration"
          className="w-full rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3"
        />
      </label>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Dhikr categories">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={category === filter}
            className={`shrink-0 rounded-full px-3 py-1 text-sm ${category === filter ? "bg-[var(--green)] text-[#f7f3ea] dark:text-[#14241c]" : "border border-[var(--line)]"}`}
            onClick={() => setCategory(filter)}
          >
            {filter === "all" ? "All" : CATEGORY_LABELS[filter]}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-4">
        {items.map((item) => (
          <li key={item.id} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
            <p className="font-arabic text-3xl leading-relaxed text-[var(--green)] dark:text-[var(--gold)]" dir="rtl" lang="ar">{item.arabic}</p>
            <h2 className="mt-3 text-xl font-semibold">{item.slug ? <Link href={`/dhikr/${item.slug}`}>{item.transliteration}</Link> : item.transliteration}</h2>
            <p className="mt-1 text-[var(--muted)]">{item.translation}</p>
            <p className="mt-3 text-sm">Recommended count: {item.recommendedCount ?? "Once, or as you are able"}</p>
            <p className="text-sm text-[var(--muted)]">{item.categories.map((entry) => CATEGORY_LABELS[entry]).join(" · ")}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.source}</p>
            <Link href={`/dhikr-counter?dhikr=${item.id}`} className="mt-4 inline-flex rounded-full bg-[var(--green)] px-4 py-2 text-sm text-[#f7f3ea] dark:text-[#14241c]">
              Count this dhikr
            </Link>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p className="mt-6 text-[var(--muted)]">No dhikr matches that search.</p>}
    </div>
  );
}
