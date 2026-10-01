"use client";

import { useMemo, useState } from "react";
import AsmaulHusnaCard from "./AsmaulHusnaCard";
import TasbihCounterModal from "@/components/TasbihCounterModal";
import { AsmaulHusnaItem } from "../data/asmaulHusna";

interface AsmaulHusnaGridProps {
  data: AsmaulHusnaItem[];
}

function indexLetter(name: string) {
  return name.replace(/^(Al|Ar|As|An|Ash|Az|Adh|Ad|At)-/i, "").charAt(0).toUpperCase();
}

export default function AsmaulHusnaGrid({ data }: AsmaulHusnaGridProps) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");
  const letters = useMemo(
    () => ["All", ...Array.from(new Set(data.map((item) => indexLetter(item.nameLatin)))).sort()],
    [data],
  );
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return data.filter((item) => {
      const matchesLetter = letter === "All" || indexLetter(item.nameLatin) === letter;
      if (!matchesLetter) return false;
      if (!needle) return true;
      return [item.nameLatin, item.nameArabic, item.meaningEn, String(item.id)].join(" ").toLowerCase().includes(needle);
    });
  }, [data, query, letter]);
  const [selectedName, setSelectedName] = useState<AsmaulHusnaItem | null>(null);

  return (
    <>
      <div className="mt-8 space-y-4">
        <label className="block">
          <span className="sr-only">Search the 99 Names</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Arabic, transliteration, or meaning"
            className="w-full rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Alphabetical filter">
          {letters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={letter === item}
              onClick={() => setLetter(item)}
              className={`shrink-0 rounded-full px-3 py-1 text-sm ${letter === item ? "bg-[var(--green)] text-[#f7f3ea] dark:text-[#14241c]" : "border border-[var(--line)]"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">{visible.length} names</p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <AsmaulHusnaCard key={item.id} item={item} onClick={() => setSelectedName(item)} />
        ))}
      </div>
      {visible.length === 0 && <p className="mt-6 text-[var(--muted)]">No name matches that search.</p>}
      {selectedName && (
        <TasbihCounterModal
          isOpen={true}
          onClose={() => setSelectedName(null)}
          nameArabic={selectedName.nameArabic}
          nameLatin={selectedName.nameLatin}
          meaning={selectedName.meaningEn}
        />
      )}
    </>
  );
}
