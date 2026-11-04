"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className={`sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md ${pastHero || open ? "nav-solid" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Tasbih Hub home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg-elevated)] shadow-sm ring-1 ring-[var(--line)]">
            <Image src="/images/tasbih.png" alt="" width={28} height={28} priority />
          </span>
          <span className="font-display text-xl text-[var(--brand)]">Tasbih Hub</span>
        </Link>
        <ul className="hidden items-center gap-0.5 text-sm font-medium lg:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 transition-colors ${isActive(href) ? "bg-[var(--brand)]/10 text-[var(--ink)]" : "text-[var(--muted)] hover:bg-[var(--brand)]/[0.06] hover:text-[var(--ink)]"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elevated)]/70 text-[var(--ink)] transition-colors hover:border-[var(--gold-soft)]"
          >
            <ThemeIcon size={17} />
          </button>
          <Link
            href="/tasbih-counter"
            className="hidden min-h-10 items-center gap-1.5 rounded-full bg-[var(--brand)] px-4 text-sm font-semibold text-[var(--brand-contrast)] shadow-[0_8px_20px_-10px_rgba(11,37,69,0.6)] sm:inline-flex"
          >
            Open counter
            <ArrowRight size={15} aria-hidden />
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elevated)]/70 text-[var(--ink)] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4.5rem)] overflow-auto border-t border-[var(--line)] bg-[var(--bg)] px-4 pb-6 pt-3 shadow-[0_24px_48px_-20px_rgba(7,24,50,0.35)] lg:hidden">
          <ul className="grid gap-1 sm:grid-cols-2">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium ${isActive(href) ? "bg-[var(--brand)]/10 text-[var(--ink)]" : "text-[var(--ink)] hover:bg-[var(--bg-elevated)]"}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    router.push(href);
                  }}
                >
                  {label}
                  <ArrowRight size={16} aria-hidden className="text-[var(--muted)]" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/tasbih-counter"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-sm font-semibold text-[var(--brand-contrast)] sm:hidden"
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              router.push("/tasbih-counter");
            }}
          >
            Open counter
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      )}
    </header>
  );
}
