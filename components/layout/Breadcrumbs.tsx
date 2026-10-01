import Link from "next/link";
import { SITE_URL } from "@/lib/i18n/locales";
import JsonLd from "@/components/seo/JsonLd";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">→</span>}
            {item.href ? <Link href={item.href} className="hover:text-[var(--ink)]">{item.name}</Link> : <span className="text-[var(--ink)]">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
