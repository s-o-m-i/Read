"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BLOG_CATEGORIES } from "@/lib/blog/meta";

export type BlogCard = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  category: string;
  readingTime: number;
};

export default function BlogIndex({ cards }: { cards: BlogCard[] }) {
  const [category, setCategory] = useState<string>("All");
  const visible = useMemo(
    () => cards.filter((card) => category === "All" || card.category === category),
    [cards, category],
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-display text-4xl">Blog</h1>
        <p className="mt-3 text-[var(--muted)]">Articles on dhikr, adhkar, tasbih, istighfar, durood, and Ramadan. Each one links back to a tool you can use the same day.</p>
      </header>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Article categories">
        {["All", ...BLOG_CATEGORIES].map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={category === item}
            className={`shrink-0 rounded-full px-3 py-1 text-sm ${category === item ? "bg-[var(--green)] text-[#f7f3ea] dark:text-[#14241c]" : "border border-[var(--line)]"}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="space-y-4">
        {visible.map((card) => (
          <li key={card.slug} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
            <Link href={`/blog/${card.slug}`} className="block p-5">
              <p className="text-xs uppercase tracking-wide text-[var(--gold)]">{card.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{card.description}</p>
              <p className="mt-3 text-xs text-[var(--muted)]">{card.datePublished} · {card.readingTime} min read</p>
            </Link>
          </li>
        ))}
      </ul>
      {visible.length === 0 && <p className="text-[var(--muted)]">No articles in this category yet.</p>}
    </div>
  );
}
