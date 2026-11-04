"use client";

import { Children, useId, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollRail({
  children,
  label,
  listClassName = "",
}: {
  children: ReactNode;
  label: string;
  listClassName?: string;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const listId = useId();
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  function stepWidth() {
    const list = listRef.current;
    const first = list?.firstElementChild as HTMLElement | null;
    if (!list || !first) return 0;
    return first.offsetWidth + (Number.parseFloat(getComputedStyle(list).columnGap) || 0);
  }

  function handleScroll() {
    const width = stepWidth();
    if (!width || !listRef.current) return;
    setActive(Math.min(count - 1, Math.round(listRef.current.scrollLeft / width)));
  }

  function goTo(index: number) {
    const next = Math.max(0, Math.min(count - 1, index));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    listRef.current?.scrollTo({ left: next * stepWidth(), behavior: reduce ? "auto" : "smooth" });
    setActive(next);
  }

  const control =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--ink)] transition disabled:opacity-35";

  return (
    <div>
      <ol
        id={listId}
        ref={listRef}
        onScroll={handleScroll}
        aria-label={label}
        className={`no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-3 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 ${listClassName}`}
      >
        {children}
      </ol>
      <div className="mt-4 flex items-center justify-between gap-4 md:hidden">
        <button type="button" className={control} aria-controls={listId} aria-label="Previous card" disabled={active === 0} onClick={() => goTo(active - 1)}>
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-controls={listId}
              aria-label={`Show card ${index + 1} of ${count}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
              className="flex h-8 w-6 items-center justify-center"
            >
              <span className={`block h-1.5 rounded-full transition-all ${index === active ? "w-5 bg-[var(--brand)]" : "w-1.5 bg-[var(--line)]"}`} />
            </button>
          ))}
        </div>
        <button type="button" className={control} aria-controls={listId} aria-label="Next card" disabled={active === count - 1} onClick={() => goTo(active + 1)}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
