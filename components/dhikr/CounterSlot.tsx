"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import DhikrCounter from "./DhikrCounter";
import { getDhikr } from "@/lib/dhikr/catalog";
import { ensureCounter, updateStore } from "@/lib/storage/dhikrStore";

type Props = {
  storageKey: string;
  initialDhikrId: string;
  title: string;
  enableKeyboard?: boolean;
};

export default function CounterSlot({ storageKey, initialDhikrId, title, enableKeyboard = true }: Props) {
  const params = useSearchParams();
  const query = params.get("dhikr");
  const selected = query && getDhikr(query) ? query : initialDhikrId;

  useEffect(() => {
    if (!query || !getDhikr(query)) return;
    updateStore((draft) => {
      ensureCounter(draft, storageKey, query, 33);
      draft.counters[storageKey].dhikrId = query;
      draft.counters[storageKey].mode = "free";
      draft.counters[storageKey].target = getDhikr(query)?.recommendedCount ?? 33;
    });
  }, [query, storageKey]);

  return <DhikrCounter storageKey={storageKey} initialDhikrId={selected} title={title} enableKeyboard={enableKeyboard} />;
}
