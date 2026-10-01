"use client";

import { useSyncExternalStore } from "react";
import {
  getServerStore,
  getStore,
  routinesCompletedToday,
  subscribeStore,
  todayTotal,
} from "@/lib/storage/dhikrStore";

export default function DailyDashboard() {
  const store = useSyncExternalStore(subscribeStore, getStore, getServerStore);
  const items = [
    ["Today", String(todayTotal(store))],
    ["Lifetime", String(store.stats.lifetime)],
    ["Streak", `${store.stats.streak} day${store.stats.streak === 1 ? "" : "s"}`],
    ["Routines today", String(routinesCompletedToday(store))],
  ];

  return (
    <section aria-label="Your dhikr today" className="mx-auto max-w-5xl">
      <h2 className="font-display text-3xl">Your Dhikr Today</h2>
      <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">Private to this browser. Nothing here is synced to an account or another device.</p>
      <dl className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-4">
            <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">{label}</dt>
            <dd className="font-display mt-1 text-3xl tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
