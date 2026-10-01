"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getRoutine } from "@/lib/dhikr/routines";
import {
  getServerStore,
  getStore,
  subscribeStore,
  touchStats,
  updateStore,
  type CompletedSession,
} from "@/lib/storage/dhikrStore";
import { playTap, vibrateTap } from "./feedback";

const copy = {
  en: {
    step: (current: number, total: number) => `Step ${current} of ${total}`,
    previous: "Previous",
    skip: "Skip",
    restart: "Restart",
    count: "Count this recitation",
    done: "Alhamdulillah — Routine Complete",
    total: "Total dhikr",
    steps: "Completed steps",
    session: "Session",
    date: "Completed",
    share: "Share",
    again: "Practice again",
    privacy: "Your progress is stored locally on this device. The next count starts only when you tap.",
  },
  id: {
    step: (current: number, total: number) => `Langkah ${current} dari ${total}`,
    previous: "Sebelumnya",
    skip: "Lewati",
    restart: "Ulangi",
    count: "Hitung bacaan ini",
    done: "Alhamdulillah — Rutinitas selesai",
    total: "Jumlah dzikir",
    steps: "Langkah selesai",
    session: "Durasi",
    date: "Tanggal",
    share: "Bagikan",
    again: "Ulangi lagi",
    privacy: "Progres tersimpan di perangkat ini. Hitungan berikutnya baru bertambah saat Anda mengetuk.",
  },
} as const;

export default function RoutinePlayer({ routineId, locale = "en" }: { routineId: string; locale?: "en" | "id" }) {
  const text = copy[locale];
  const routine = getRoutine(routineId);
  const store = useSyncExternalStore(subscribeStore, getStore, getServerStore);
  const saved = store.activeRoutines[routineId];
  const [stepIndex, setStepIndex] = useState(saved?.stepIndex ?? 0);
  const [counts, setCounts] = useState<number[]>(saved?.stepCounts ?? []);
  const [startedAt, setStartedAt] = useState(0);
  const [summary, setSummary] = useState<CompletedSession | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const lock = useRef(false);

  useEffect(() => {
    const active = getStore().activeRoutines[routineId];
    if (active) {
      setStepIndex(active.stepIndex);
      setCounts(active.stepCounts);
      setStartedAt(active.startedAt);
    } else {
      setStartedAt(Date.now());
    }
    setHydrated(true);
  }, [routineId]);

  useEffect(() => {
    if (!hydrated || summary) return;
    updateStore((draft) => {
      draft.activeRoutines[routineId] = { routineId, stepIndex, stepCounts: counts, startedAt };
    });
  }, [hydrated, routineId, stepIndex, counts, startedAt, summary]);

  if (!routine) return null;

  const step = routine.steps[stepIndex];
  const count = counts[stepIndex] ?? 0;
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function persistCounts(nextCounts: number[], nextIndex = stepIndex) {
    setCounts(nextCounts);
    setStepIndex(nextIndex);
  }

  function finish(nextCounts: number[], completedSteps: number) {
    const totalCount = nextCounts.reduce((sum, value) => sum + value, 0);
    const session: CompletedSession = {
      id: `${routineId}-${Date.now()}`,
      routineId,
      routineName: routine!.name,
      totalCount,
      stepsCompleted: completedSteps,
      stepsTotal: routine!.steps.length,
      durationMs: Date.now() - startedAt,
      completedAt: new Date().toISOString(),
    };
    updateStore((draft) => {
      draft.sessions.unshift(session);
      draft.sessions = draft.sessions.slice(0, 40);
      delete draft.activeRoutines[routineId];
    });
    setSummary(session);
  }

  function increment() {
    if (!step || lock.current || summary) return;
    const nextCount = count + 1;
    const nextCounts = [...counts];
    nextCounts[stepIndex] = nextCount;
    updateStore((draft) => touchStats(draft, 1));
    playTap(store.settings.sound);
    vibrateTap(store.settings.vibration);
    if (nextCount >= step.target) {
      const completedSteps = routine!.steps.filter((item, index) => (nextCounts[index] ?? 0) >= item.target).length;
      if (stepIndex >= routine!.steps.length - 1) {
        persistCounts(nextCounts);
        finish(nextCounts, completedSteps);
        return;
      }
      lock.current = true;
      persistCounts(nextCounts);
      window.setTimeout(() => {
        lock.current = false;
        setStepIndex((current) => Math.min(routine!.steps.length - 1, current + 1));
      }, reduceMotion ? 0 : 650);
      return;
    }
    persistCounts(nextCounts);
  }

  function restart() {
    lock.current = false;
    setSummary(null);
    setCounts([]);
    setStepIndex(0);
    setStartedAt(Date.now());
    updateStore((draft) => {
      delete draft.activeRoutines[routineId];
    });
  }

  async function share() {
    if (!summary) return;
    const text = `${summary.routineName} complete on Tasbih Hub. ${summary.totalCount} dhikr across ${summary.stepsCompleted} steps.`;
    try {
      if (navigator.share) await navigator.share({ title: "Tasbih Hub", text });
      else await navigator.clipboard.writeText(text);
    } catch {
      /* dismissed */
    }
  }

  if (summary) {
    const minutes = Math.max(1, Math.round(summary.durationMs / 60000));
    return (
      <section className="mx-auto max-w-xl rounded-[28px] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 text-center" aria-live="polite">
        <p className="font-arabic text-3xl text-[var(--green)] dark:text-[var(--gold)]" dir="rtl">الْحَمْدُ لِلَّهِ</p>
        <h2 className="font-display mt-3 text-3xl">{text.done}</h2>
        <p className="mt-2 text-[var(--muted)]">{summary.routineName}</p>
        <dl className="mt-6 grid grid-cols-2 gap-3 text-left text-sm">
          <Stat label={text.total} value={String(summary.totalCount)} />
          <Stat label={text.steps} value={`${summary.stepsCompleted} / ${summary.stepsTotal}`} />
          <Stat label={text.session} value={`${minutes} min`} />
          <Stat label={text.date} value={new Date(summary.completedAt).toLocaleDateString()} />
        </dl>
        <div className="mt-6 flex justify-center gap-3">
          <button type="button" className="rounded-full bg-[var(--green)] px-4 py-2 text-[#f7f3ea] dark:text-[#14241c]" onClick={share}>{text.share}</button>
          <button type="button" className="rounded-full border border-[var(--line)] px-4 py-2" onClick={restart}>{text.again}</button>
        </div>
        <p className="mt-4 text-xs text-[var(--muted)]">{text.privacy}</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl rounded-[28px] border border-[var(--line)] bg-[var(--bg-elevated)] p-5 sm:p-7" aria-label={`${routine.name} routine`}>
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-display text-2xl">{routine.name}</h2>
        <p className="text-sm text-[var(--muted)]">{text.step(stepIndex + 1, routine.steps.length)}</p>
      </div>
      <p className={`font-arabic mt-6 text-center text-[var(--green)] dark:text-[var(--gold)] ${step.arabic.length > 80 ? "text-2xl leading-loose" : "text-4xl leading-relaxed"}`} dir="rtl" lang="ar">
        {step.arabic}
      </p>
      <p className="mt-3 text-center text-lg">{step.transliteration}</p>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-[var(--muted)]">{step.translation}</p>
      <p className="mt-6 text-center font-display text-6xl tabular-nums" aria-live="polite">
        {count} <span className="text-2xl text-[var(--muted)]">/ {step.target}</span>
      </p>
      <div className="mx-auto mt-3 h-1.5 max-w-xs overflow-hidden rounded-full bg-[var(--line)]">
        <div className="h-full bg-[var(--green-2)]" style={{ width: `${Math.min(100, (count / step.target) * 100)}%` }} />
      </div>
      <button type="button" className="mt-6 h-24 w-full rounded-2xl bg-[var(--green)] text-5xl text-[#f7f3ea] dark:text-[#14241c]" onClick={increment} aria-label={text.count}>
        +
      </button>
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
        <button type="button" onClick={() => setStepIndex((current) => Math.max(0, current - 1))} disabled={stepIndex === 0}>{text.previous}</button>
        <button
          type="button"
          onClick={() => {
            if (stepIndex >= routine.steps.length - 1) finish(counts, routine.steps.filter((item, index) => (counts[index] ?? 0) >= item.target).length);
            else setStepIndex((current) => current + 1);
          }}
        >
          {text.skip}
        </button>
        <button type="button" onClick={restart}>{text.restart}</button>
      </div>
      {step.source && <p className="mt-4 text-center text-xs text-[var(--muted)]">{step.source}</p>}
      <p className="mt-2 text-center text-xs text-[var(--muted)]">{text.privacy}</p>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[var(--bg)] p-3">
      <dt className="text-[var(--muted)]">{label}</dt>
      <dd className="font-display text-2xl">{value}</dd>
    </div>
  );
}
