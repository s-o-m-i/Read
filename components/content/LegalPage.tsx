import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const legalLinks = [
  ["/privacy-policy", "Privacy Policy"],
  ["/terms-of-service", "Terms of Service"],
  ["/cookie-policy", "Cookie Policy"],
  ["/disclaimer", "Disclaimer"],
];

export default function LegalPage({
  title,
  lede,
  updated,
  children,
}: {
  title: string;
  lede: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title }]} />
      <header className="mt-6">
        <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">{lede}</p>
        <p className="mt-3 text-sm text-[var(--muted)]">Last updated {updated}</p>
      </header>
      <nav aria-label="Legal documents" className="mt-6 flex flex-wrap gap-2">
        {legalLinks.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-full border border-[var(--line)] px-3 py-1 text-sm hover:border-[var(--gold)]">
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-8 space-y-8 text-[var(--muted)] [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-[var(--ink)] [&_a]:text-[var(--green-2)] [&_a]:underline">
        {children}
      </div>
    </article>
  );
}
