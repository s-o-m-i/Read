"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { DHIKR_CATALOG, getDhikr } from "@/lib/dhikr/catalog";
import {
  ensureCounter,
  getServerStore,
  getStore,
  subscribeStore,
  touchStats,
  updateStore,
} from "@/lib/storage/dhikrStore";
import { playTap, vibrateTap } from "./feedback";

const PRESETS = [33, 66, 99, 100, 300, 500, 1000] as const;

type Props = {
  storageKey?: string;
  initialDhikrId?: string;
  title?: string;
  enableKeyboard?: boolean;
  showLibraryLink?: boolean;
};

export default function DhikrCounter({
  storageKey = "home",
  initialDhikrId = "subhanallah",
  title = "Tasbih Counter",
  enableKeyboard = true,
}: Props) {
  const store = useSyncExternalStore(subscribeStore, getStore, getServerStore);
  const bucket = store.counters[storageKey] ?? {
    count: 0,
    target: 33 as number | null,
    dhikrId: initialDhikrId,
  };
  const dhikr = getDhikr(bucket.dhikrId) ?? getDhikr(initialDhikrId)!;
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [targetOpen, setTargetOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [customTarget, setCustomTarget] = useState("");
  const [addValue, setAddValue] = useState("");
  const [notice, setNotice] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const statusId = useId();
  const reached = bucket.target !== null && bucket.count >= bucket.target && bucket.target > 0;
  const progress = bucket.target ? Math.min(100, Math.round((bucket.count / bucket.target) * 100)) : 0;
  const longArabic = dhikr.arabic.length > 80;

  useEffect(() => {
    updateStore((draft) => {
      ensureCounter(draft, storageKey, initialDhikrId, 33);
    });
  }, [storageKey, initialDhikrId]);

  useEffect(() => {
    document.body.dataset.focus = focusMode ? "true" : "false";
    return () => {
      document.body.dataset.focus = "false";
    };
  }, [focusMode]);

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

  function increment() {
    commit((draft) => {
      draft.counters[storageKey].count += 1;
    }, 1);
  }

  function decrement() {
    if (bucket.count <= 0) return;
    commit((draft) => {
      draft.counters[storageKey].count = Math.max(0, draft.counters[storageKey].count - 1);
    }, -1);
  }

  useEffect(() => {
    if (!enableKeyboard) return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        increment();
      } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        decrement();
      } else if (event.key === "Escape" && focusMode) {
        setFocusMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function saveEdit() {
    const parsed = Number.parseInt(editValue, 10);
    if (Number.isNaN(parsed) || parsed < 0) return;
    const delta = parsed - bucket.count;
    commit((draft) => {
      draft.counters[storageKey].count = parsed;
    }, delta);
    setEditing(false);
  }

  async function copyCount() {
    try {
      await navigator.clipboard.writeText(String(bucket.count));
      setNotice("Count copied.");
    } catch {
      setNotice("Could not copy the count.");
    }
  }

  async function shareSession() {
    const text = `I have counted ${bucket.count} ${dhikr.transliteration} on Tasbih Hub.`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Tasbih Hub", text, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(`${text} ${window.location.href}`);
        setNotice("Share text copied.");
      }
    } catch {
      /* user dismissed share */
    }
  }

  const counterBody = (focused: boolean) => (
    <div className={focused ? "flex min-h-[100dvh] flex-col justify-between px-5 py-6" : ""}>
      <div className={focused ? "mx-auto flex w-full max-w-lg flex-1 flex-col justify-center text-center" : "text-center"}>
        {focused ? (
          <button type="button" className="mb-8 self-start text-sm text-[var(--gold)]" onClick={() => setFocusMode(false)}>
            Exit Focus Mode
          </button>
        ) : (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{title}</p>
        )}
        <p className={`font-arabic mt-4 text-[var(--green)] dark:text-[var(--gold)] ${longArabic ? "text-2xl leading-loose" : "text-4xl leading-relaxed"} ${focused ? "text-5xl" : ""}`} dir="rtl" lang="ar">
          {dhikr.arabic}
        </p>
        {store.settings.showTransliteration && (
          <p className={`mt-3 text-lg ${focused ? "text-[#f7f3ea]" : "text-[var(--ink)]"}`}>{dhikr.transliteration}</p>
        )}
        {store.settings.showTranslation && <p className={`mx-auto mt-2 max-w-md text-sm ${focused ? "text-[#c9d5ce]" : "text-[var(--muted)]"}`}>{dhikr.translation}</p>}
        <p id={statusId} className="sr-only" aria-live="polite">
          {dhikr.transliteration}, count {bucket.count}
          {bucket.target ? ` of ${bucket.target}` : ", unlimited"}
        </p>
        {editing ? (
          <input
            aria-label="Edit count"
            inputMode="numeric"
            className="mx-auto mt-4 w-full max-w-xs border-b-2 border-[var(--gold)] bg-transparent text-center text-7xl font-semibold tabular-nums text-[var(--ink)] outline-none"
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
            className={`mt-2 min-h-[96px] font-display tabular-nums ${focused ? "text-8xl text-[#f7f3ea]" : "text-7xl text-[var(--ink)]"}`}
            onClick={() => {
              setEditValue(String(bucket.count));
              setEditing(true);
            }}
            aria-describedby={statusId}
          >
            {bucket.count}
          </button>
        )}
        {bucket.target !== null && (
          <div className="mx-auto mt-3 w-full max-w-xs">
              <div className={`mb-1 flex justify-between text-xs ${focused ? "text-[#c9d5ce]" : "text-[var(--muted)]"}`}>
              <span>
                {bucket.count} / {bucket.target}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[var(--line)]" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full bg-[var(--green-2)]" style={{ width: `${progress}%` }} />
            </div>
            {reached && <p className="mt-2 text-sm text-[var(--green-2)]">Target complete</p>}
          </div>
        )}
      </div>

      <div className={`mx-auto w-full max-w-lg ${focused ? "pb-2" : "mt-6"}`}>
        <div className="grid grid-cols-[76px_1fr] gap-3">
          <button type="button" className="h-24 rounded-2xl bg-[var(--line)] text-4xl text-[var(--ink)]" onClick={decrement} aria-label="Decrease count">
            −
          </button>
          <button type="button" className="h-24 rounded-2xl bg-[var(--green)] text-5xl text-[#f7f3ea] dark:text-[#14241c]" onClick={increment} aria-label="Increase count">
            +
          </button>
        </div>
        {focused ? (
          <div className="mt-4 flex justify-center gap-4 text-sm text-[#c9d5ce]">
            <button type="button" onClick={() => dialogRef.current?.showModal()}>
              Reset
            </button>
            <button type="button" onClick={() => updateStore((draft) => { draft.settings.showTransliteration = !draft.settings.showTransliteration; })}>
              {store.settings.showTransliteration ? "Hide wording" : "Show wording"}
            </button>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <button type="button" className="rounded-full border border-[var(--line)] px-3 py-2" onClick={() => { setTargetOpen((open) => !open); setSelectorOpen(false); setMoreOpen(false); }}>
              {bucket.target === null ? "Unlimited" : `Target ${bucket.target}`}
            </button>
            <button type="button" className="rounded-full border border-[var(--line)] px-3 py-2" onClick={() => setFocusMode(true)}>
              Focus
            </button>
            <button type="button" className="rounded-full border border-[var(--line)] px-3 py-2" onClick={() => { setMoreOpen((open) => !open); setTargetOpen(false); }}>
              Options
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="dhikr-counter mx-auto w-full max-w-xl" aria-label={title}>
      <div className="rounded-[28px] border border-[var(--line)] bg-[var(--bg-elevated)] p-5 shadow-[0_20px_50px_rgba(20,36,28,0.06)] sm:p-7">
        <div className="mb-2 flex items-center justify-between gap-3">
          <button
            type="button"
            className="rounded-full bg-[var(--bg)] px-3 py-1 text-left text-sm text-[var(--ink)]"
            onClick={() => { setSelectorOpen((open) => !open); setTargetOpen(false); }}
            aria-expanded={selectorOpen}
          >
            {dhikr.transliteration}
            <span className="ml-2 text-[var(--gold)]">Change</span>
          </button>
          <button type="button" className="text-sm text-[var(--muted)]" onClick={() => dialogRef.current?.showModal()} aria-label="Reset count">
            Reset
          </button>
        </div>
        {selectorOpen && (
          <ul className="mb-4 max-h-64 space-y-1 overflow-auto rounded-2xl border border-[var(--line)] p-2" role="listbox" aria-label="Choose dhikr">
            {DHIKR_CATALOG.filter((item) => ["subhanallah", "alhamdulillah", "allahu-akbar", "la-ilaha-illallah", "astaghfirullah", "salawat"].includes(item.id)).map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`w-full rounded-xl px-3 py-2 text-left ${item.id === dhikr.id ? "bg-[var(--green)] text-[#f7f3ea] dark:text-[#14241c]" : ""}`}
                  onClick={() => {
                    updateStore((draft) => {
                      ensureCounter(draft, storageKey, item.id, bucket.target);
                      draft.counters[storageKey].dhikrId = item.id;
                    });
                    setSelectorOpen(false);
                  }}
                >
                  <span className="font-arabic float-right text-xl" dir="rtl" lang="ar">{item.arabic.length > 40 ? item.transliteration : item.arabic}</span>
                  <span className="block font-medium">{item.transliteration}</span>
                  <span className="block text-xs opacity-80">{item.translation}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {counterBody(false)}
        {targetOpen && (
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button key={preset} type="button" className="rounded-full border border-[var(--line)] px-3 py-1 text-sm" onClick={() => { updateStore((draft) => { ensureCounter(draft, storageKey, dhikr.id); draft.counters[storageKey].target = preset; }); setTargetOpen(false); }}>
                {preset}
              </button>
            ))}
            <button type="button" className="rounded-full border border-[var(--line)] px-3 py-1 text-sm" onClick={() => updateStore((draft) => { ensureCounter(draft, storageKey, dhikr.id); draft.counters[storageKey].target = null; })}>
              Unlimited
            </button>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                const parsed = Number.parseInt(customTarget, 10);
                if (!parsed || parsed < 1) return;
                updateStore((draft) => {
                  ensureCounter(draft, storageKey, dhikr.id);
                  draft.counters[storageKey].target = parsed;
                });
                setCustomTarget("");
                setTargetOpen(false);
              }}
            >
              <input aria-label="Custom target" inputMode="numeric" value={customTarget} onChange={(event) => setCustomTarget(event.target.value)} className="w-24 rounded-full border border-[var(--line)] bg-transparent px-3 py-1 text-sm" placeholder="Custom" />
              <button type="submit" className="text-sm text-[var(--green-2)]">Set</button>
            </form>
          </div>
        )}
        {moreOpen && (
          <div className="mt-4 grid gap-3 text-sm">
            <div className="flex flex-wrap gap-2">
              <Toggle label="Sound" checked={store.settings.sound} onClick={() => updateStore((draft) => { draft.settings.sound = !draft.settings.sound; })} />
              <Toggle label="Vibration" checked={store.settings.vibration} onClick={() => updateStore((draft) => { draft.settings.vibration = !draft.settings.vibration; })} />
              <Toggle label="Transliteration" checked={store.settings.showTransliteration} onClick={() => updateStore((draft) => { draft.settings.showTransliteration = !draft.settings.showTransliteration; })} />
              <Toggle label="Translation" checked={store.settings.showTranslation} onClick={() => updateStore((draft) => { draft.settings.showTranslation = !draft.settings.showTranslation; })} />
            </div>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                const parsed = Number.parseInt(addValue, 10);
                if (Number.isNaN(parsed)) return;
                commit((draft) => {
                  draft.counters[storageKey].count = Math.max(0, draft.counters[storageKey].count + parsed);
                }, parsed);
                setAddValue("");
              }}
            >
              <input aria-label="Add to count" inputMode="numeric" value={addValue} onChange={(event) => setAddValue(event.target.value)} className="w-28 rounded-full border border-[var(--line)] bg-transparent px-3 py-1" placeholder="Add amount" />
              <button type="submit">Add</button>
            </form>
            <div className="flex gap-4">
              <button type="button" onClick={copyCount}>Copy count</button>
              <button type="button" onClick={shareSession}>Share session</button>
            </div>
            {notice && <p role="status">{notice}</p>}
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-xs text-[var(--muted)]">Your progress is stored locally on this device.</p>
      <dialog ref={dialogRef} className="rounded-2xl bg-[var(--bg-elevated)] p-6 text-[var(--ink)] backdrop:bg-black/50">
        <p className="font-display text-2xl">Reset this count?</p>
        <p className="mt-2 text-sm text-[var(--muted)]">The number returns to zero on this device. Your lifetime total stays.</p>
        <div className="mt-5 flex justify-end gap-3">
          <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
          <button
            type="button"
            className="rounded-full bg-[var(--green)] px-4 py-2 text-[#f7f3ea] dark:text-[#14241c]"
            onClick={() => {
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
      {focusMode && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[80] overflow-auto bg-[#101816] text-[#f7f3ea]" role="dialog" aria-label="Focus mode">
              <div className="mx-auto max-w-xl text-[#f7f3ea]">
                {counterBody(true)}
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}

function Toggle({ label, checked, onClick }: { label: string; checked: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-pressed={checked} onClick={onClick} className={`rounded-full px-3 py-1 ${checked ? "bg-[var(--green)] text-[#f7f3ea] dark:text-[#14241c]" : "border border-[var(--line)]"}`}>
      {label}
    </button>
  );
}
