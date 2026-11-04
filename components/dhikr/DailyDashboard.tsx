"use client";

import { useSyncExternalStore } from "react";
import { CalendarCheck, CalendarDays, InfinityIcon, ListChecks } from "lucide-react";
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
    { label: "Today", value: String(todayTotal(store)), Icon: CalendarDays },
    { label: "Lifetime", value: String(store.stats.lifetime), Icon: InfinityIcon },
    { label: "Streak", value: `${store.stats.streak} day${store.stats.streak === 1 ? "" : "s"}`, Icon: CalendarCheck },
    { label: "Routines today", value: String(routinesCompletedToday(store)), Icon: ListChecks },
  ];

  return (
    <section aria-labelledby="dhikr-today-title">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
        <h3 id="dhikr-today-title" className="font-display text-2xl">Your Dhikr Today</h3>
        <p className="text-xs leading-5">Private to this browser. Nothing here is synced to an account or another device.</p>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map(({ label, value, Icon }) => (
          <div key={label} className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-4">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--brand)]/10 text-[var(--sage)]">
                <Icon size={15} />
              </span>
              {label}
            </dt>
            <dd className="ink mt-3 font-display text-3xl leading-none tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
