"use client";

import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2 } from "lucide-react";
import DhikrCounter from "@/components/dhikr/DhikrCounter";

export default function HomeCounter() {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const isCounterLink = (href: string | null) => {
      if (!href) return false;
      const normalized = href.trim();
      if (normalized === "#counter" || normalized === "/#counter") return true;
      try {
        const url = new URL(normalized, window.location.href);
        return url.hash === "#counter" && (url.pathname === "/" || url.pathname === "");
      } catch {
        return false;
      }
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!link || !isCounterLink(link.getAttribute("href"))) return;
      event.preventDefault();
      event.stopPropagation();
      setExpanded(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded]);

  return (
    <>
      <div
        id="counter"
        className={`scroll-mt-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center ${expanded ? "invisible" : ""}`}
      >
        <div className="relative mx-auto w-full max-w-[464px] rounded-[2.4rem] bg-[var(--navy)] p-2.5 shadow-[0_40px_80px_-30px_rgba(7,24,50,0.55)] sm:p-3">
          <div aria-hidden className="geo-pattern pointer-events-none absolute inset-0 rounded-[2.4rem] opacity-[0.22]" />
          <div className="relative">
            {!expanded ? (
              <Suspense fallback={<div className="mx-auto h-[640px] max-w-[440px] rounded-[32px] bg-[var(--bg-elevated)]" />}>
                <DhikrCounter
                  storageKey="home"
                  initialDhikrId="subhanallah"
                  title="Tasbih Counter"
                  expanded={false}
                  onExpandedChange={setExpanded}
                />
              </Suspense>
            ) : (
              <div className="mx-auto h-[640px] max-w-[440px] rounded-[32px] bg-[var(--bg-elevated)]" />
            )}
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-4 text-sm font-semibold text-[var(--ink)] shadow-sm transition-colors hover:border-[var(--gold-soft)]"
            onClick={() => setExpanded(true)}
          >
            <Maximize2 size={16} aria-hidden />
            Expand counter
          </button>
        </div>
      </div>
      {mounted && expanded
        ? createPortal(
            <div className="fixed inset-0 z-[35] overflow-hidden bg-[var(--bg)]">
              <DhikrCounter
                storageKey="home"
                initialDhikrId="subhanallah"
                title="Tasbih Counter"
                hero
                expanded
                onExpandedChange={setExpanded}
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
