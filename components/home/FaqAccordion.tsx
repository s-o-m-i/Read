"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--line)] overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elevated)]">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-question-${index}`;
        const panelId = `${baseId}-answer-${index}`;
        return (
          <div key={item.question} className="px-5 sm:px-7">
            <h3 className="text-lg leading-snug sm:text-xl">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] transition-[transform,background-color] duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180 bg-[var(--brand)] text-[var(--brand-contrast)]" : "text-[var(--ink)]"}`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-7">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
