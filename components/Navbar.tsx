"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  ["/about", "About"],
  ["/tasbih-counter", "Tasbih"],
  ["/dhikr", "Dhikr"],
  ["/adhkar", "Adhkar"],
  ["/asmaul-husna", "99 Names"],
  ["/guides", "Guides"],
  ["/blog", "Blog"],
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg-elevated)] shadow-sm">
            <img src="/images/tasbih.png" alt="" width={28} height={28} />
          </span>
          <span className="font-display text-xl text-[var(--green)] dark:text-[var(--gold)]">Tasbih Hub</span>
        </Link>
        <ul className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {links.map(([href, label]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
          <li>
            <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="rounded-full border border-[var(--line)] px-3 py-1">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" onClick={toggleTheme} aria-label="Toggle color theme" className="rounded-full border border-[var(--line)] px-3 py-1 text-sm">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button type="button" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--line)] px-3 py-1 text-sm">
            Menu
          </button>
        </div>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-[var(--line)] px-4 py-3 lg:hidden">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="block rounded-xl px-2 py-3" onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
