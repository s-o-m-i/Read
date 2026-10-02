"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  ["/about", "About"],
  ["/tasbih-counter", "Tasbih"],
  ["/dhikr", "Dhikr"],
  ["/adhkar", "Adhkar"],
  ["/asmaul-husna", "99 Names"],
  ["/guides", "Guides"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector(".hero-bleed");
      if (!hero) {
        setPastHero(false);
        return;
      }
      setPastHero(hero.getBoundingClientRect().bottom <= 72);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur ${pastHero || open ? "nav-solid" : ""}`}>
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
        <ul className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4.5rem)] space-y-1 overflow-auto border-t border-[var(--line)] bg-[var(--bg)] px-4 py-3 shadow-[0_16px_40px_rgba(20,36,28,0.12)] lg:hidden">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-xl px-2 py-3"
                onClick={(event) => {
                  event.preventDefault();
                  setOpen(false);
                  router.push(href);
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
