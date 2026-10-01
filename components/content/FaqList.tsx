import JsonLd from "@/components/seo/JsonLd";
import type { FaqItem } from "@/lib/dhikr/types";

export default function FaqList({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  if (!items.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="space-y-3">
      <JsonLd data={schema} />
      <h2 className="font-display text-3xl">{title}</h2>
      {items.map((item) => (
        <details key={item.question} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3">
          <summary className="cursor-pointer font-medium">{item.question}</summary>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
