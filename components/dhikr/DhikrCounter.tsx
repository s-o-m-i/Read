"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  BarChart3,
  BookOpen,
  Check,
  Crosshair,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Minus,
  Moon,
  Plus,
  RotateCcw,
  Sun,
  Volume2,
  VolumeX,
} from "lucide-react";
import { DHIKR_CATALOG, getDhikr } from "@/lib/dhikr/catalog";
import { getRoutine, ROUTINES } from "@/lib/dhikr/routines";
import type { DhikrItem } from "@/lib/dhikr/types";
import {
  dateKey,
  ensureCounter,
  getServerStore,
  getStore,
  subscribeStore,
  todayTotal,
  touchStats,
  updateStore,
  type CounterBucket,
  type CounterMode,
} from "@/lib/storage/dhikrStore";
import { useTheme } from "@/components/ThemeProvider";
import { playComplete, playTap, vibrateTap } from "./feedback";

const PRESETS = [33, 99, 100, 300, 500, 1000] as const;
const QUICK_IDS = ["subhanallah", "alhamdulillah", "allahu-akbar", "la-ilaha-illallah", "astaghfirullah", "salawat", "subhanallahi-wa-bihamdihi", "hasbiyallah"];

const SUNNAH = [
  { id: "subhanallah", target: 33, label: "SubhanAllah" },
  { id: "alhamdulillah", target: 33, label: "Alhamdulillah" },
  { id: "allahu-akbar", target: 34, label: "Allahu Akbar" },
] as const;

type Sheet = "dhikr" | "target" | "routine" | "insights" | "inspiration" | null;

type Props = {
  storageKey?: string;
  initialDhikrId?: string;
  title?: string;
  enableKeyboard?: boolean;
  showLibraryLink?: boolean;
};

function resolveMode(bucket: CounterBucket | undefined, initialDhikrId: string): CounterMode {
  if (bucket?.mode) return bucket.mode;
  const id = bucket?.dhikrId ?? initialDhikrId;
  const stepIndex = SUNNAH.findIndex((step) => step.id === id);
  if (stepIndex >= 0 && (bucket?.count ?? 0) <= SUNNAH[stepIndex].target) return "sunnah";
  if (!bucket && (initialDhikrId === "subhanallah" || initialDhikrId === "alhamdulillah" || initialDhikrId === "allahu-akbar")) return "sunnah";
  return "free";
}

export default function DhikrCounter({
  storageKey = "home",
  initialDhikrId = "subhanallah",
  title = "Tasbih Counter",
  enableKeyboard = true,
}: Props) {
  const store = useSyncExternalStore(subscribeStore, getStore, getServerStore);
  const bucket = store.counters[storageKey];
  const mode = resolveMode(bucket, initialDhikrId);
  const cycleIndex = bucket?.cycleIndex ?? Math.max(0, SUNNAH.findIndex((step) => step.id === (bucket?.dhikrId ?? initialDhikrId)));
  const routine = getRoutine(bucket?.routineId ?? "after-salah") ?? ROUTINES[0];
  const routineStepIndex = Math.min(bucket?.cycleIndex ?? 0, Math.max(0, routine.steps.length - 1));
  const sunnahStep = SUNNAH[cycleIndex] ?? SUNNAH[0];
  const guidedId = mode === "sunnah" ? sunnahStep.id : mode === "routine" ? routine.steps[routineStepIndex]?.dhikrId : null;
  const dhikr = (guidedId ? getDhikr(guidedId) : getDhikr(bucket?.dhikrId ?? initialDhikrId)) ?? getDhikr(initialDhikrId)!;
  const target: number | null = mode === "sunnah"
    ? sunnahStep.target
    : mode === "routine"
      ? routine.steps[routineStepIndex]?.target ?? 33
      : bucket
        ? bucket.target
        : (getDhikr(initialDhikrId)?.recommendedCount ?? 33);
  const count = bucket?.count ?? 0;
  const { theme, toggleTheme } = useTheme();

  const [sheet, setSheet] = useState<Sheet>(null);
  const [focusMode, setFocusMode] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [customTarget, setCustomTarget] = useState("");
  const [notice, setNotice] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const advanceTimer = useRef<number | null>(null);
  const advancing = useRef(false);
  const actions = useRef({ increment: () => {}, decrement: () => {} });
  const statusId = useId();
  const reached = target !== null && target > 0 && count >= target;
  const progress = target ? Math.min(1, count / target) : 0;
  const longArabic = dhikr.arabic.length > 48;

  useEffect(() => {
    const recommended = getDhikr(initialDhikrId)?.recommendedCount ?? 33;
    updateStore((draft) => {
      ensureCounter(draft, storageKey, initialDhikrId, recommended);
    });
  }, [storageKey, initialDhikrId]);

  useEffect(() => {
    document.body.dataset.focus = focusMode ? "true" : "false";
    return () => {
      document.body.dataset.focus = "false";
    };
  }, [focusMode]);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  function commit(mutator: Parameters<typeof updateStore>[0], delta = 0) {
    updateStore((draft) => {
      ensureCounter(draft, storageKey, initialDhikrId, 33);
      mutator(draft);
      if (delta) touchStats(draft, delta);
    });
    if (delta > 0) {
      playTap(store.settings.sound);
      vibrateTap(store.settings.vibration);
    }
  }

  function clearAdvance() {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = null;
    advancing.current = false;
  }

  function advanceCycle() {
    updateStore((draft) => {
      const current = ensureCounter(draft, storageKey, initialDhikrId, 33);
      if (mode === "routine") {
        const active = getRoutine(current.routineId ?? routine.id) ?? routine;
        const next = (current.cycleIndex ?? routineStepIndex) + 1;
        current.mode = "routine";
        current.routineId = active.id;
        if (next >= active.steps.length) {
          draft.sessions.unshift({
            id: crypto.randomUUID(),
            routineId: active.id,
            routineName: active.name,
            totalCount: active.steps.reduce((sum, step) => sum + step.target, 0),
            stepsCompleted: active.steps.length,
            stepsTotal: active.steps.length,
            durationMs: 0,
            completedAt: new Date().toISOString(),
          });
          draft.sessions = draft.sessions.slice(0, 40);
          current.cycleIndex = 0;
          current.count = 0;
          current.dhikrId = active.steps[0].dhikrId;
          current.target = active.steps[0].target;
        } else {
          current.cycleIndex = next;
          current.count = 0;
          current.dhikrId = active.steps[next].dhikrId;
          current.target = active.steps[next].target;
        }
        return;
      }
      const next = ((current.cycleIndex ?? cycleIndex) + 1) % SUNNAH.length;
      current.mode = "sunnah";
      current.cycleIndex = next;
      current.count = 0;
      current.dhikrId = SUNNAH[next].id;
      current.target = SUNNAH[next].target;
    });
    playComplete(store.settings.sound);
    vibrateTap(store.settings.vibration, 24);
  }

  function increment() {
    if (advancing.current) return;
    if (mode !== "free" && target !== null && count >= target) {
      setNotice(mode === "routine" && routineStepIndex + 1 >= routine.steps.length ? `${routine.name} complete` : `Next: ${mode === "routine" ? routine.steps[routineStepIndex + 1]?.transliteration ?? routine.name : SUNNAH[(cycleIndex + 1) % SUNNAH.length].label}`);
      advanceCycle();
      return;
    }
    const nextCount = count + 1;
    const completes = mode !== "free" && target !== null && nextCount >= target;
    commit((draft) => {
      const current = draft.counters[storageKey];
      current.mode = mode;
      current.count = completes ? target! : nextCount;
      if (mode === "sunnah") {
        current.cycleIndex = cycleIndex;
        current.dhikrId = sunnahStep.id;
        current.target = sunnahStep.target;
      } else if (mode === "routine") {
        current.routineId = routine.id;
        current.cycleIndex = routineStepIndex;
        current.dhikrId = routine.steps[routineStepIndex].dhikrId;
        current.target = routine.steps[routineStepIndex].target;
      }
    }, 1);
    if (!completes) return;
    advancing.current = true;
    const upcoming = mode === "routine"
      ? routine.steps[routineStepIndex + 1]?.transliteration ?? routine.name
      : SUNNAH[(cycleIndex + 1) % SUNNAH.length].label;
    setNotice(mode === "routine" && routineStepIndex + 1 >= routine.steps.length ? `${routine.name} complete` : `Next: ${upcoming}`);
    advanceTimer.current = window.setTimeout(() => {
      advancing.current = false;
      advanceTimer.current = null;
      advanceCycle();
    }, 420);
  }

  function decrement() {
    clearAdvance();
    if (count <= 0) return;
    commit((draft) => {
      draft.counters[storageKey].count = Math.max(0, draft.counters[storageKey].count - 1);
      draft.counters[storageKey].mode = mode;
    }, -1);
  }

  actions.current = { increment, decrement };

  useEffect(() => {
    if (!enableKeyboard) return;
    const onKey = (event: KeyboardEvent) => {
      const eventTarget = event.target as HTMLElement | null;
      if (eventTarget && (eventTarget.tagName === "INPUT" || eventTarget.tagName === "TEXTAREA" || eventTarget.isContentEditable)) return;
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        actions.current.increment();
      } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        actions.current.decrement();
      } else if (event.key === "Escape" && focusMode) {
        setFocusMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enableKeyboard, focusMode]);

  function setMode(next: CounterMode) {
    clearAdvance();
    setEditing(false);
    commit((draft) => {
      const current = draft.counters[storageKey];
      current.mode = next;
      if (next === "sunnah") {
        const index = Math.min(current.cycleIndex ?? 0, SUNNAH.length - 1);
        current.cycleIndex = index;
        current.dhikrId = SUNNAH[index].id;
        current.target = SUNNAH[index].target;
        if (current.count > SUNNAH[index].target) current.count = 0;
      }
      if (next === "routine") {
        const active = getRoutine(current.routineId ?? "after-salah") ?? ROUTINES[0];
        const index = Math.min(current.cycleIndex ?? 0, active.steps.length - 1);
        current.routineId = active.id;
        current.cycleIndex = index;
        current.dhikrId = active.steps[index].dhikrId;
        current.target = active.steps[index].target;
        if (current.count > active.steps[index].target) current.count = 0;
      }
    });
    if (next === "routine") setSheet("routine");
    else setSheet(null);
  }

  function chooseDhikr(item: DhikrItem) {
    clearAdvance();
    commit((draft) => {
      const current = draft.counters[storageKey];
      current.mode = "free";
      current.dhikrId = item.id;
      current.count = 0;
      current.target = item.recommendedCount ?? 33;
    });
    setSheet(null);
  }

  function chooseRoutine(routineId: string) {
    const active = getRoutine(routineId) ?? ROUTINES[0];
    clearAdvance();
    commit((draft) => {
      const current = draft.counters[storageKey];
      current.mode = "routine";
      current.routineId = active.id;
      current.cycleIndex = 0;
      current.count = 0;
      current.dhikrId = active.steps[0].dhikrId;
      current.target = active.steps[0].target;
    });
    setSheet(null);
  }

  function setTarget(value: number | null) {
    clearAdvance();
    commit((draft) => {
      const current = draft.counters[storageKey];
      current.mode = "free";
      current.target = value;
    });
    setSheet(null);
  }

  function saveEdit() {
    const parsed = Number.parseInt(editValue, 10);
    if (Number.isNaN(parsed) || parsed < 0) return;
    const delta = parsed - count;
    commit((draft) => {
      draft.counters[storageKey].count = parsed;
      draft.counters[storageKey].mode = mode;
    }, delta);
    setEditing(false);
  }

  function toggleSheet(next: Sheet) {
    setSheet((current) => (current === next ? null : next));
  }

  const steps = mode === "sunnah"
    ? SUNNAH.map((step, index) => ({ id: step.id, label: step.label, done: index < cycleIndex, active: index === cycleIndex }))
    : mode === "routine"
      ? routine.steps.map((step, index) => ({
          id: `${step.dhikrId}-${index}`,
          label: step.transliteration ?? "Dhikr",
          done: index < routineStepIndex,
          active: index === routineStepIndex,
        }))
      : [];

  const week = Array.from({ length: 7 }, (_, offset) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - offset));
    const key = dateKey(date);
    return {
      key,
      label: date.toLocaleDateString(undefined, { weekday: "narrow" }),
      value: store.stats.byDay[key] ?? 0,
    };
  });
  const weekMax = Math.max(1, ...week.map((day) => day.value));

  const face = (
    <div className={`counter-scene relative overflow-hidden ${focusMode ? "flex min-h-[100dvh] flex-col" : "rounded-[32px] shadow-[0_24px_60px_rgba(90,62,20,0.12)]"}`}>
      <MosqueBackdrop />
      <div className={`relative z-10 mx-auto flex w-full max-w-[420px] flex-col ${focusMode ? "min-h-[100dvh] px-4 py-5" : "px-3 pb-4 pt-3"}`}>
        <div className="flex items-center justify-center gap-2">
          <IconButton label="Choose dhikr" pressed={sheet === "dhikr"} onClick={() => toggleSheet("dhikr")}>
            <LayoutGrid size={18} />
          </IconButton>
          <IconButton label="Set target" pressed={sheet === "target"} onClick={() => toggleSheet("target")}>
            <Crosshair size={18} />
          </IconButton>
          <IconButton label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </IconButton>
          <IconButton label={store.settings.sound ? "Turn sound off" : "Turn sound on"} onClick={() => updateStore((draft) => { draft.settings.sound = !draft.settings.sound; })}>
            {store.settings.sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </IconButton>
          <IconButton label={focusMode ? "Exit focus mode" : "Focus mode"} pressed={focusMode} onClick={() => setFocusMode((open) => !open)}>
            {focusMode ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </IconButton>
        </div>

        <button
          type="button"
          className="absolute left-0 top-[38%] z-20 flex items-center gap-1 rounded-r-2xl bg-[var(--scene-card)] py-3 pl-1.5 pr-2 text-[var(--scene-gold-deep)] shadow-[0_8px_20px_rgba(80,60,20,0.12)]"
          onClick={() => toggleSheet("inspiration")}
          aria-expanded={sheet === "inspiration"}
        >
          <BookOpen size={14} />
          <span className="text-[10px] font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">Inspiration</span>
        </button>

        <div className="relative mx-auto mt-6">
          <CountRing progress={target ? progress : 0} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p id={statusId} className="sr-only" aria-live="polite">
              {dhikr.transliteration}, count {count}
              {target ? ` of ${target}` : ""}
            </p>
            {editing ? (
              <input
                aria-label="Edit count"
                inputMode="numeric"
                className="w-28 border-b-2 border-[var(--scene-gold)] bg-transparent text-center text-6xl font-semibold tabular-nums text-[var(--scene-ink)] outline-none"
                value={editValue}
                autoFocus
                onChange={(event) => setEditValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") saveEdit();
                  if (event.key === "Escape") setEditing(false);
                }}
              />
            ) : (
              <button
                type="button"
                className="font-display text-7xl font-semibold leading-none tabular-nums text-[var(--scene-ink)]"
                onClick={() => {
                  setEditValue(String(count));
                  setEditing(true);
                }}
                aria-describedby={statusId}
              >
                {count}
              </button>
            )}
            {target !== null && <p className="scene-muted mt-1 text-lg">/ {target}</p>}
          </div>
        </div>

        <div className="mt-4 px-6 text-center">
          <p className="scene-gold text-2xl font-semibold">{dhikr.transliteration}</p>
          <p className={`font-arabic mt-1 text-[var(--scene-ink)] ${longArabic ? "text-lg leading-loose" : "text-2xl leading-relaxed"}`} dir="rtl" lang="ar">
            {dhikr.arabic}
          </p>
          {mode === "free" && reached && <p className="scene-gold mt-1 text-sm font-medium">Target complete</p>}
          {notice && <p className="scene-gold mt-1 text-sm font-medium" role="status">{notice}</p>}
        </div>

        <div className="mt-5 flex items-center justify-center gap-5">
          <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--scene-soft)] text-2xl text-[var(--scene-ink)] shadow-[0_6px_16px_rgba(80,60,20,0.12)] active:scale-95" onClick={decrement} aria-label="Decrease count">
            <Minus size={20} />
          </button>
          <button type="button" className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[var(--scene-gold)] text-[var(--scene-ink)] shadow-[0_12px_28px_rgba(198,160,74,0.45)] transition active:scale-95" onClick={increment} aria-label={`Increase ${dhikr.transliteration}`}>
            <Plus size={36} strokeWidth={2.4} />
          </button>
          <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--scene-soft)] text-[var(--scene-ink)] shadow-[0_6px_16px_rgba(80,60,20,0.12)] active:scale-95" onClick={() => dialogRef.current?.showModal()} aria-label="Reset count">
            <RotateCcw size={18} />
          </button>
        </div>

        <div className="mx-auto mt-5 flex items-center gap-2">
          <ModeButton active={mode === "free"} label="Free" onClick={() => setMode("free")} />
          <ModeButton active={mode === "sunnah"} label="Sunnah" onClick={() => setMode("sunnah")} />
          <ModeButton active={mode === "routine"} label="Routine" onClick={() => setMode("routine")} />
        </div>

        {steps.length > 0 && (
          <div className={`mt-4 flex items-start px-2 ${mode === "routine" ? "justify-start overflow-x-auto" : "justify-center"}`}>
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start">
                {index > 0 && <span className={`mt-[11px] h-px w-5 shrink-0 ${step.done || steps[index - 1]?.done ? "bg-[var(--scene-gold)]" : "bg-[var(--scene-ring)]"}`} />}
                <div className="flex w-[4.8rem] shrink-0 flex-col items-center">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${step.done ? "border-[var(--scene-gold)] bg-[var(--scene-gold)] text-white" : step.active ? "border-[var(--scene-gold)] bg-transparent" : "border-[var(--scene-ring)] bg-transparent"}`}>
                    {step.done ? <Check size={12} /> : step.active ? <span className="h-2.5 w-2.5 rounded-full bg-[var(--scene-gold)]" /> : null}
                  </span>
                  <span className={`mt-1 text-center text-[10px] leading-tight ${step.active ? "scene-gold font-semibold" : "scene-muted"}`}>
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-stretch justify-between rounded-2xl bg-[var(--scene-card)] px-2 py-3 shadow-[0_8px_24px_rgba(80,60,20,0.08)]">
          <Stat value={todayTotal(store)} label="Today" />
          <Stat value={store.stats.lifetime} label="Total" />
          <Stat value={store.stats.streak} label="In a row" />
          <button type="button" className="flex min-w-16 flex-col items-center justify-center gap-1 text-[var(--scene-gold-deep)]" onClick={() => toggleSheet("insights")} aria-expanded={sheet === "insights"}>
            <BarChart3 size={18} />
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">Week</span>
          </button>
        </div>

        {sheet && (
          <div className="absolute inset-x-3 bottom-3 z-30 max-h-[70%] overflow-auto rounded-3xl bg-[var(--scene-card)] p-4 text-[var(--scene-ink)] shadow-[0_16px_40px_rgba(40,28,10,0.18)]">
            {sheet === "dhikr" && (
              <div>
                <SheetTitle title="Choose a dhikr" onClose={() => setSheet(null)} />
                <ul className="mt-3 max-h-64 space-y-1 overflow-auto">
                  {DHIKR_CATALOG.filter((item) => QUICK_IDS.includes(item.id) || item.slug).map((item) => (
                    <li key={item.id}>
                      <button type="button" className={`flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left ${item.id === dhikr.id && mode === "free" ? "ring-2 ring-[var(--scene-gold)]" : ""}`} onClick={() => chooseDhikr(item)}>
                        <span>
                          <span className="block text-sm font-semibold">{item.transliteration}</span>
                          <span className="block text-xs text-[var(--scene-muted)]">{item.translation}</span>
                        </span>
                        <span className="font-arabic text-xl" dir="rtl" lang="ar">{item.arabic.length > 28 ? "" : item.arabic}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex gap-2 text-sm">
                  <Toggle label="Vibration" checked={store.settings.vibration} onClick={() => updateStore((draft) => { draft.settings.vibration = !draft.settings.vibration; })} />
                </div>
              </div>
            )}
            {sheet === "target" && (
              <div>
                <SheetTitle title="Count target" onClose={() => setSheet(null)} />
                <p className="mt-1 text-xs text-[var(--scene-muted)]">A custom target uses Free mode. Sunnah keeps 33, 33, then 34.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PRESETS.map((preset) => (
                    <button key={preset} type="button" className="rounded-full bg-[var(--scene-soft)] px-3 py-1.5 text-sm" onClick={() => setTarget(preset)}>
                      {preset}
                    </button>
                  ))}
                  <button type="button" className="rounded-full bg-[var(--scene-soft)] px-3 py-1.5 text-sm" onClick={() => setTarget(null)}>
                    Unlimited
                  </button>
                </div>
                <form
                  className="mt-3 flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const parsed = Number.parseInt(customTarget, 10);
                    if (!parsed || parsed < 1) return;
                    setTarget(parsed);
                    setCustomTarget("");
                  }}
                >
                  <input aria-label="Custom target" inputMode="numeric" value={customTarget} onChange={(event) => setCustomTarget(event.target.value)} className="w-28 rounded-full border border-[var(--scene-ring)] bg-transparent px-3 py-1.5 text-sm" placeholder="Custom" />
                  <button type="submit" className="text-sm font-semibold text-[var(--scene-gold-deep)]">Set</button>
                </form>
              </div>
            )}
            {sheet === "routine" && (
              <div>
                <SheetTitle title="Routines" onClose={() => setSheet(null)} />
                <ul className="mt-3 space-y-2">
                  {ROUTINES.map((item) => (
                    <li key={item.id}>
                      <button type="button" className={`w-full rounded-2xl px-3 py-2 text-left ${item.id === routine.id && mode === "routine" ? "bg-[var(--scene-soft)] ring-2 ring-[var(--scene-gold)]" : "bg-[var(--scene-soft)]"}`} onClick={() => chooseRoutine(item.id)}>
                        <span className="block text-sm font-semibold">{item.name}</span>
                        <span className="block text-xs text-[var(--scene-muted)]">{item.steps.length} steps · {item.category}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {sheet === "insights" && (
              <div>
                <SheetTitle title="This week" onClose={() => setSheet(null)} />
                <div className="mt-4 flex h-28 items-end gap-2">
                  {week.map((day) => (
                    <div key={day.key} className="flex flex-1 flex-col items-center gap-1">
                      <span className="text-[10px] tabular-nums text-[var(--scene-muted)]">{day.value}</span>
                      <span className="w-full rounded-full bg-[var(--scene-gold)]" style={{ height: `${Math.max(6, (day.value / weekMax) * 72)}px` }} />
                      <span className="text-[10px] uppercase text-[var(--scene-muted)]">{day.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {sheet === "inspiration" && (
              <div>
                <SheetTitle title={dhikr.transliteration} onClose={() => setSheet(null)} />
                <p className="font-arabic mt-3 text-center text-3xl leading-relaxed" dir="rtl" lang="ar">{dhikr.arabic}</p>
                <p className="mt-3 text-sm">{dhikr.translation}</p>
                <p className="mt-2 text-xs text-[var(--scene-muted)]">{dhikr.source}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="dhikr-counter mx-auto w-full max-w-[440px]" aria-label={title}>
      {focusMode && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[80] overflow-auto" role="dialog" aria-label="Focus mode">
              {face}
            </div>,
            document.body,
          )
        : face}
      <p className="mt-3 text-center text-xs text-[var(--muted)]">Your count stays on this device.</p>
      <dialog ref={dialogRef} className="rounded-2xl bg-[var(--bg-elevated)] p-6 text-[var(--ink)] backdrop:bg-black/50">
        <p className="font-display text-2xl">Reset this count?</p>
        <p className="mt-2 text-sm text-[var(--muted)]">This round returns to zero on this device. Your lifetime total stays.</p>
        <div className="mt-5 flex justify-end gap-3">
          <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
          <button
            type="button"
            className="rounded-full bg-[var(--scene-gold)] px-4 py-2 text-[#1c2333]"
            onClick={() => {
              clearAdvance();
              updateStore((draft) => {
                ensureCounter(draft, storageKey, dhikr.id);
                draft.counters[storageKey].count = 0;
              });
              dialogRef.current?.close();
            }}
          >
            Reset count
          </button>
        </div>
      </dialog>
    </section>
  );
}

function CountRing({ progress }: { progress: number }) {
  const size = 232;
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const angle = -Math.PI / 2 + progress * Math.PI * 2;
  const beadX = center + radius * Math.cos(angle);
  const beadY = center + radius * Math.sin(angle);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden className="mx-auto">
      <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--scene-ring)" strokeWidth="5" />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="var(--scene-gold)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`${progress * circumference} ${circumference}`}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <circle cx={beadX} cy={beadY} r="9" fill="var(--scene-gold)" />
      <circle cx={beadX} cy={beadY} r="4" fill="#fff8e8" />
    </svg>
  );
}

function MosqueBackdrop() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 bottom-[8%] h-[46%] w-full text-[#c4a574]" viewBox="0 0 360 180" preserveAspectRatio="xMidYMax meet" aria-hidden>
      <g fill="currentColor" opacity="0.22">
        <path d="M0 128c48-22 86-8 128 2s62 10 104-6 78-4 128 12v44H0z" />
        <rect x="22" y="78" width="8" height="58" rx="1" />
        <path d="M18 78h16l-8-18z" />
        <rect x="18" y="70" width="16" height="4" rx="1" />
        <rect x="40" y="96" width="70" height="40" />
        <path d="M40 96a35 22 0 0 1 70 0z" />
        <rect x="71" y="74" width="6" height="18" />
        <circle cx="74" cy="72" r="3" />
        <rect x="154" y="62" width="8" height="74" rx="1" />
        <path d="M150 62h16l-8-16z" />
        <rect x="176" y="92" width="86" height="44" />
        <path d="M176 92a43 24 0 0 1 86 0z" />
        <rect x="214" y="68" width="7" height="20" />
        <circle cx="217.5" cy="66" r="3" />
        <rect x="292" y="84" width="8" height="52" rx="1" />
        <path d="M288 84h16l-8-16z" />
        <rect x="288" y="76" width="16" height="4" rx="1" />
      </g>
    </svg>
  );
}

function IconButton({ label, pressed, onClick, children }: { label: string; pressed?: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-[0_4px_14px_rgba(80,60,20,0.1)] ${pressed ? "bg-[var(--scene-gold)] text-[#1c2333]" : "bg-[var(--scene-soft)] text-[var(--scene-ink)]"}`}
    >
      {children}
    </button>
  );
}

function ModeButton({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold shadow-[0_4px_12px_rgba(80,60,20,0.08)] ${active ? "bg-[var(--scene-gold)] text-[#1c2333]" : "bg-[var(--scene-soft)] text-[var(--scene-gold-deep)]"}`}
    >
      {label}
    </button>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="min-w-16 flex-1 text-center">
      <p className="font-display text-xl font-semibold tabular-nums leading-none">{value}</p>
      <p className="scene-muted mt-1 text-[9px] font-semibold uppercase tracking-[0.14em]">{label}</p>
    </div>
  );
}

function SheetTitle({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-sm font-semibold">{title}</p>
      <button type="button" className="text-xs text-[var(--scene-muted)]" onClick={onClose}>Close</button>
    </div>
  );
}

function Toggle({ label, checked, onClick }: { label: string; checked: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-pressed={checked} onClick={onClick} className={`rounded-full px-3 py-1 ${checked ? "bg-[var(--scene-gold)] text-[#1c2333]" : "bg-[var(--scene-soft)]"}`}>
      {label}
    </button>
  );
}
