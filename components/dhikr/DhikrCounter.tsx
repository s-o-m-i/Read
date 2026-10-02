"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  Crosshair,
  Focus,
  Infinity,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Minus,
  Moon,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  Sun,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { DHIKR_CATALOG, getDhikr } from "@/lib/dhikr/catalog";
import { inspirationForToday } from "@/lib/dhikr/inspiration";
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
import { playComplete, playTap, speakArabic, vibrateTap } from "./feedback";

const PRESETS = [33, 99, 100, 300, 500, 1000] as const;
const MANUAL_TARGETS = [33, 66, 99] as const;

const SUNNAH = [
  { id: "subhanallah", target: 33, label: "SubhanAllah" },
  { id: "alhamdulillah", target: 33, label: "Alhamdulillah" },
  { id: "allahu-akbar", target: 34, label: "Allahu Akbar" },
] as const;

type Sheet = "target" | "routine" | "insights" | null;

function lookupDhikr(id: string, custom: DhikrItem[] | undefined) {
  return getDhikr(id) ?? custom?.find((item) => item.id === id);
}

type Props = {
  storageKey?: string;
  initialDhikrId?: string;
  title?: string;
  enableKeyboard?: boolean;
  showLibraryLink?: boolean;
  hero?: boolean;
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
  hero = false,
}: Props) {
  const store = useSyncExternalStore(subscribeStore, getStore, getServerStore);
  const bucket = store.counters[storageKey];
  const mode = resolveMode(bucket, initialDhikrId);
  const cycleIndex = bucket?.cycleIndex ?? Math.max(0, SUNNAH.findIndex((step) => step.id === (bucket?.dhikrId ?? initialDhikrId)));
  const routine = getRoutine(bucket?.routineId ?? "after-salah") ?? ROUTINES[0];
  const routineStepIndex = Math.min(bucket?.cycleIndex ?? 0, Math.max(0, routine.steps.length - 1));
  const sunnahStep = SUNNAH[cycleIndex] ?? SUNNAH[0];
  const guidedId = mode === "sunnah" ? sunnahStep.id : mode === "routine" ? routine.steps[routineStepIndex]?.dhikrId : null;
  const dhikr = (guidedId ? lookupDhikr(guidedId, store.customDhikr) : lookupDhikr(bucket?.dhikrId ?? initialDhikrId, store.customDhikr)) ?? getDhikr(initialDhikrId)!;
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
  const [pickerOpen, setPickerOpen] = useState(false);
  const [inspirationOpen, setInspirationOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [dhikrQuery, setDhikrQuery] = useState("");
  const [customName, setCustomName] = useState("");
  const [customArabic, setCustomArabic] = useState("");
  const [speakingId, setSpeakingId] = useState("");
  const [focusMode, setFocusMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [customTarget, setCustomTarget] = useState("");
  const [targetEditor, setTargetEditor] = useState(false);
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
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => document.removeEventListener("fullscreenchange", onFullscreen);
  }, []);

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
      if (pickerOpen || customOpen || inspirationOpen) {
        if (event.key === "Escape") {
          setCustomOpen(false);
          if (!customOpen) setPickerOpen(false);
          setInspirationOpen(false);
        }
        return;
      }
      if (dialogRef.current?.open) return;
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
  }, [enableKeyboard, focusMode, pickerOpen, customOpen, inspirationOpen]);

  function toggleFocus() {
    setFocusMode((open) => !open);
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
      return;
    }
    const root = document.documentElement;
    if (!root.requestFullscreen) return;
    void root.requestFullscreen({ navigationUI: "hide" }).catch(() => root.requestFullscreen().catch(() => {}));
  }

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
    setPickerOpen(false);
    setCustomOpen(false);
  }

  function saveCustomDhikr() {
    const name = customName.trim();
    const arabic = customArabic.trim();
    if (!name) return;
    const item: DhikrItem = {
      id: `custom-${crypto.randomUUID()}`,
      arabic: arabic || name,
      transliteration: name,
      translation: name,
      recommendedCount: 33,
      categories: ["general"],
      source: "Saved on this device",
    };
    updateStore((draft) => {
      draft.customDhikr = [item, ...(draft.customDhikr ?? [])].slice(0, 40);
    });
    setCustomName("");
    setCustomArabic("");
    chooseDhikr(item);
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

  const phraseQuery = dhikrQuery.trim().toLowerCase();
  const phraseLibrary = [...(store.customDhikr ?? []), ...DHIKR_CATALOG].filter((item) => {
    if (!phraseQuery) return true;
    return `${item.transliteration} ${item.translation} ${item.arabic}`.toLowerCase().includes(phraseQuery);
  });

  function playPhrase(item: DhikrItem) {
    const spoken = /[\u0600-\u06FF]/.test(item.arabic) ? item.arabic : item.transliteration;
    const started = speakArabic(spoken);
    setSpeakingId(item.id);
    window.setTimeout(() => setSpeakingId((current) => (current === item.id ? "" : current)), 2400);
    if (!started) setNotice("Speech is not available in this browser.");
  }

  const daily = inspirationForToday();
  const face = (
    <div className={`counter-scene relative overflow-hidden ${hero ? "flex min-h-[100dvh] w-full items-center" : "rounded-[32px] shadow-[0_24px_60px_rgba(90,62,20,0.12)]"}`}>
      <MosqueBackdrop />
      <button
        type="button"
        className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1 rounded-r-2xl bg-[var(--scene-card)] py-3 pl-1.5 pr-2 text-[var(--scene-gold-deep)] shadow-[0_8px_20px_rgba(80,60,20,0.12)]"
        onClick={() => setInspirationOpen(true)}
        aria-expanded={inspirationOpen}
      >
        <BookOpen size={14} />
        <span className="text-[10px] font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">Inspiration</span>
      </button>
      <div className={`relative z-10 mx-auto flex w-full max-w-[420px] flex-col ${hero ? "min-h-[100dvh] justify-center px-4 pb-8 pt-24" : "px-3 pb-4 pt-3"}`}>
        <div className="flex items-center justify-center gap-2">
          <IconButton label="Choose dhikr" pressed={pickerOpen} onClick={() => setPickerOpen(true)}>
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
          <IconButton label={focusMode ? "Exit focus mode" : "Focus mode"} pressed={focusMode} onClick={toggleFocus}>
            <Focus size={18} />
          </IconButton>
          <IconButton label={fullscreen ? "Exit full screen" : "Full screen"} pressed={fullscreen} onClick={toggleFullscreen}>
            {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </IconButton>
        </div>

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
          {mode === "free" && (
            <button type="button" className="scene-muted mx-auto mt-2 inline-flex items-center gap-1 text-sm" onClick={() => setPickerOpen(true)}>
              Tap to change
              <ChevronDown size={16} />
            </button>
          )}
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
          <ModeButton active={mode === "free"} label="Manual" onClick={() => setMode("free")} />
          <ModeButton active={mode === "sunnah"} label="Sunnah" onClick={() => setMode("sunnah")} />
          <ModeButton active={mode === "routine"} label="Routines" onClick={() => setMode("routine")} />
        </div>

        {mode === "free" && (
          <div className="mt-3">
            <div className="flex items-center justify-center gap-2">
              {MANUAL_TARGETS.map((preset) => (
                <button key={preset} type="button" aria-pressed={target === preset} className={targetChipClass(target === preset)} onClick={() => { setTargetEditor(false); setTarget(preset); }}>
                  {preset}
                </button>
              ))}
              <button type="button" aria-label="Unlimited" aria-pressed={target === null} className={targetChipClass(target === null)} onClick={() => { setTargetEditor(false); setTarget(null); }}>
                <Infinity size={16} />
              </button>
              <button type="button" aria-label="Custom target" aria-pressed={targetEditor || (target !== null && !MANUAL_TARGETS.includes(target as 33 | 66 | 99))} className={targetChipClass(targetEditor || (target !== null && !MANUAL_TARGETS.includes(target as 33 | 66 | 99)))} onClick={() => setTargetEditor((open) => !open)}>
                <MoreHorizontal size={16} />
              </button>
            </div>
            {targetEditor && (
              <form
                className="mx-auto mt-2 flex w-fit items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const parsed = Number.parseInt(customTarget, 10);
                  if (!parsed || parsed < 1) return;
                  setTarget(parsed);
                  setCustomTarget("");
                  setTargetEditor(false);
                }}
              >
                <input aria-label="Custom target" inputMode="numeric" value={customTarget} onChange={(event) => setCustomTarget(event.target.value)} className="w-24 rounded-full border border-[var(--scene-ring)] bg-[var(--scene-soft)] px-3 py-1.5 text-center text-sm text-[var(--scene-ink)] outline-none" placeholder="Custom" />
                <button type="submit" className="text-sm font-semibold text-[var(--scene-gold-deep)]">Set</button>
              </form>
            )}
          </div>
        )}

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
          <div
            role={sheet === "target" ? "dialog" : undefined}
            aria-label={sheet === "target" ? "Count target" : undefined}
            className={sheet === "target"
              ? "fixed left-1/2 top-1/2 z-[80] max-h-[80dvh] w-[min(22rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-3xl bg-[var(--scene-card)] p-4 text-[var(--scene-ink)] shadow-[0_16px_40px_rgba(40,28,10,0.18)]"
              : "absolute inset-x-3 bottom-3 z-30 max-h-[70%] overflow-auto rounded-3xl bg-[var(--scene-card)] p-4 text-[var(--scene-ink)] shadow-[0_16px_40px_rgba(40,28,10,0.18)]"}
          >
            {sheet === "target" && (
              <div>
                <SheetTitle title="Count target" onClose={() => setSheet(null)} />
                <p className="mt-1 text-xs text-[var(--scene-muted)]">A custom target uses Manual. Sunnah keeps 33, 33, then 34.</p>
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
                <div className="mt-4">
                  <Toggle label="Vibration" checked={store.settings.vibration} onClick={() => updateStore((draft) => { draft.settings.vibration = !draft.settings.vibration; })} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={hero && !focusMode ? "dhikr-counter hero-bleed -mt-[4.3125rem] w-full" : "dhikr-counter mx-auto w-full max-w-[440px]"} aria-label={title}>
      {focusMode && typeof document !== "undefined"
        ? createPortal(
            <div className="focus-scene fixed inset-0 z-[80] flex min-h-[100dvh] flex-col bg-[#070b14] text-[var(--scene-ink)]" role="dialog" aria-label="Focus mode">
              <div className="flex justify-end px-4 pt-[max(1rem,env(safe-area-inset-top))]">
                <button type="button" onClick={toggleFocus} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  <X size={16} />
                  Exit Focus
                </button>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center px-6">
                <div className="relative">
                  <CountRing progress={target ? progress : 0} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="sr-only" aria-live="polite">
                      {dhikr.transliteration}, count {count}
                      {target ? ` of ${target}` : ""}
                    </p>
                    <p className="font-display text-7xl font-semibold leading-none tabular-nums text-white">{count}</p>
                    {target !== null && <p className="mt-1 text-lg text-[var(--scene-muted)]">/ {target}</p>}
                  </div>
                </div>
                <p className="mt-8 text-3xl font-semibold text-[var(--scene-gold)]">{dhikr.transliteration}</p>
                <p className={`font-arabic mt-2 text-white/75 ${longArabic ? "text-lg leading-loose" : "text-2xl"}`} dir="rtl" lang="ar">{dhikr.arabic}</p>
                <div className="mt-10 flex items-center justify-center gap-6">
                  <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white active:scale-95" onClick={decrement} aria-label="Decrease count">
                    <Minus size={20} />
                  </button>
                  <button type="button" className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[var(--scene-gold)] text-[#1c2333] shadow-[0_0_36px_rgba(226,179,64,0.45)] active:scale-95" onClick={increment} aria-label={`Increase ${dhikr.transliteration}`}>
                    <Plus size={36} strokeWidth={2.4} />
                  </button>
                  <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white active:scale-95" onClick={() => dialogRef.current?.showModal()} aria-label="Reset count">
                    <RotateCcw size={18} />
                  </button>
                </div>
              </div>
              <p className="pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-sm tracking-wide text-white/40">Stay with the words.</p>
            </div>,
            document.body,
          )
        : face}
      <p className="sr-only">Your count stays on this device.</p>
      {inspirationOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[100]" onClick={() => setInspirationOpen(false)}>
              <aside
                role="dialog"
                aria-label="Inspiration"
                className="inspiration-drawer flex h-full w-[min(100%,380px)] flex-col overflow-auto bg-white text-[#1c2333] shadow-[8px_0_32px_rgba(40,28,10,0.08)]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between px-5 pt-5">
                  <p className="text-lg font-semibold">Inspiration</p>
                  <button type="button" aria-label="Close inspiration" className="flex h-9 w-9 items-center justify-center rounded-full text-[#8b93a3]" onClick={() => setInspirationOpen(false)}>
                    <X size={18} />
                  </button>
                </div>
                <p className="font-arabic px-5 pt-1 text-center text-[1.65rem] leading-relaxed text-[#c6a04a]" dir="rtl" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                <div className="space-y-5 px-5 py-6">
                  <InspirationBlock label="This remembrance" arabic={dhikr.arabic} english={dhikr.translation} source={dhikr.source} note="The phrase on your counter. Say it slowly, and keep the meaning with the words." />
                  <InspirationBlock label="Hadith of the day" arabic={daily.hadith.arabic} english={daily.hadith.english} source={daily.hadith.source} note={daily.hadith.note} />
                  <InspirationBlock label="Quranic reminder" arabic={daily.quran.arabic} english={daily.quran.english} source={daily.quran.source} note={daily.quran.note} />
                </div>
              </aside>
            </div>,
            document.body,
          )
        : null}
      {pickerOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/45 p-3 sm:items-center" onClick={() => setPickerOpen(false)}>
              <div role="dialog" aria-label="Select Dhikr" className="flex max-h-[min(680px,90dvh)] w-full max-w-md flex-col overflow-hidden rounded-[28px] bg-white text-[#1c2333] shadow-2xl" onClick={(event) => event.stopPropagation()}>
                <div className="flex items-start justify-between gap-3 px-5 pt-5">
                  <div>
                    <p className="text-2xl font-semibold">Select Dhikr</p>
                    <p className="mt-1 text-sm text-[#8b93a3]">Choose a dhikr to start your count</p>
                  </div>
                  <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full text-[#8b93a3]" aria-label="Close" onClick={() => setPickerOpen(false)}>
                    <X size={18} />
                  </button>
                </div>
                <div className="px-5 pt-4">
                  <label className="flex items-center gap-2 rounded-2xl bg-[#f4f6fa] px-3 py-2.5">
                    <Search size={16} className="text-[#8b93a3]" />
                    <input value={dhikrQuery} onChange={(event) => setDhikrQuery(event.target.value)} placeholder="Search dhikr..." aria-label="Search dhikr" className="w-full bg-transparent text-sm outline-none" />
                  </label>
                </div>
                <ul className="mt-2 flex-1 space-y-1 overflow-auto px-3 py-2">
                  {phraseLibrary.map((item) => (
                    <li key={item.id}>
                      <div className={`flex items-center gap-2 rounded-2xl px-2 py-2 ${item.id === dhikr.id ? "bg-[#fbf6ea]" : ""}`}>
                        <button type="button" className="min-w-0 flex-1 px-2 py-1 text-left" onClick={() => chooseDhikr(item)}>
                          <span className="block font-semibold">{item.transliteration}</span>
                          <span className="mt-0.5 block text-sm text-[#c6a04a]">{item.translation}</span>
                        </button>
                        <button
                          type="button"
                          aria-label={`Play ${item.transliteration} in Arabic`}
                          aria-pressed={speakingId === item.id}
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${speakingId === item.id ? "bg-[#c6a04a] text-white" : "text-[#c6a04a]"}`}
                          onClick={() => playPhrase(item)}
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                  {phraseLibrary.length === 0 && <li className="px-3 py-6 text-center text-sm text-[#8b93a3]">No matching dhikr.</li>}
                </ul>
                <div className="border-t border-[#f0e6d4] p-4">
                  <button type="button" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#c6a04a] px-4 py-3 font-semibold text-[#c6a04a]" onClick={() => setCustomOpen(true)}>
                    <Plus size={16} />
                    Add Custom Dhikr
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
      {customOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[110] flex items-end justify-center bg-black/50 p-4 sm:items-center" onClick={() => setCustomOpen(false)}>
              <form
                role="dialog"
                aria-label="Add Custom Dhikr"
                className="w-full max-w-md rounded-[28px] bg-white p-5 text-[#1c2333] shadow-2xl"
                onClick={(event) => event.stopPropagation()}
                onSubmit={(event) => {
                  event.preventDefault();
                  saveCustomDhikr();
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xl font-semibold">Add Custom Dhikr</p>
                  <button type="button" aria-label="Close" className="flex h-9 w-9 items-center justify-center rounded-full text-[#8b93a3]" onClick={() => setCustomOpen(false)}>
                    <X size={18} />
                  </button>
                </div>
                <label className="mt-5 block text-sm font-medium">
                  Name of Dhikr
                  <input required value={customName} onChange={(event) => setCustomName(event.target.value)} placeholder="eg, Ya Rahman" className="mt-2 w-full rounded-2xl border border-[#e6ebf2] bg-[#f7f9fc] px-4 py-3 outline-none" />
                </label>
                <label className="mt-4 block text-sm font-medium">
                  Arabic Text (Optional)
                  <input value={customArabic} onChange={(event) => setCustomArabic(event.target.value)} placeholder="يَا رَحْمَٰنُ" dir="rtl" lang="ar" className="font-arabic mt-2 w-full rounded-2xl border border-[#e6ebf2] bg-[#f7f9fc] px-4 py-3 text-right outline-none" />
                </label>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button type="button" className="rounded-2xl bg-[#eef2f6] px-4 py-3 font-semibold text-[#5c6778]" onClick={() => setCustomOpen(false)}>Cancel</button>
                  <button type="submit" className="rounded-2xl bg-[#c6a04a] px-4 py-3 font-semibold text-white">Save</button>
                </div>
              </form>
            </div>,
            document.body,
          )
        : null}
      <dialog ref={dialogRef} className="w-[min(28rem,calc(100%-2rem))] rounded-2xl bg-[var(--bg-elevated)] p-6 text-[var(--ink)] shadow-2xl backdrop:bg-black/50">
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

function InspirationBlock({ label, arabic, english, source, note }: { label: string; arabic: string; english: string; source: string; note?: string }) {
  return (
    <section>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c6a04a]">{label}</p>
      <div className="mt-2 rounded-xl border border-[#efe6d6] px-4 py-4">
        <p className="font-arabic text-center text-xl leading-loose text-[#1c2333]" dir="rtl" lang="ar">{arabic}</p>
        <p className="mt-3 text-center text-sm leading-relaxed text-[#5c6675]">&ldquo;{english}&rdquo;</p>
        {note ? <p className="mt-2 text-center text-xs leading-relaxed text-[#8b93a3]">{note}</p> : null}
        <p className="mt-3 text-center text-xs text-[#c6a04a]">— {source}</p>
      </div>
    </section>
  );
}

function MosqueBackdrop() {
  const skylineId = `skyline${useId().replace(/:/g, "")}`;
  return (
    <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] w-full text-[#c4a574]" viewBox="0 0 1080 180" preserveAspectRatio="xMidYMax slice" aria-hidden>
      <g id={skylineId} fill="currentColor" opacity="0.2">
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
      <use href={`#${skylineId}`} x="360" />
      <use href={`#${skylineId}`} x="720" />
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

function targetChipClass(active: boolean) {
  return `flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold shadow-[0_4px_12px_rgba(80,60,20,0.08)] ${active ? "bg-[var(--scene-gold)] text-[#1c2333]" : "bg-[var(--scene-soft)] text-[var(--scene-gold-deep)]"}`;
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
